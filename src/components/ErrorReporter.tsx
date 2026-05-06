"use client";

import { useEffect, useRef } from "react";

type ReporterProps = {
    /*  ⎯⎯ props are only provided on the global-error page ⎯⎯ */
    error?: Error & { digest?: string };
    reset?: () => void;
};

export default function ErrorReporter({ error }: ReporterProps) {
    /* ─ instrumentation shared by every route ─ */
    const lastOverlayMsg = useRef("");
    const pollRef = useRef<NodeJS.Timeout>();

    useEffect(() => {
        const inIframe = window.parent !== window;
        if (!inIframe) return;

        const send = (payload: unknown) => {
            try {
                window.parent.postMessage(payload, "*");
            } catch (err) {
                // Fallback to localStorage if postMessage fails
                const errors = JSON.parse(localStorage.getItem("error-reporter-queue") || "[]");
                errors.push({
                    ...payload,
                    timestamp: Date.now(),
                    fallback: true
                });
                localStorage.setItem("error-reporter-queue", JSON.stringify(errors));
                
                // Try to send queued errors later
                setTimeout(() => {
                    const queuedErrors = JSON.parse(localStorage.getItem("error-reporter-queue") || "[]");
                    if (queuedErrors.length > 0) {
                        // Send first queued error
                        try {
                            window.parent.postMessage(queuedErrors[0], "*");
                            // Remove sent error from queue
                            queuedErrors.shift();
                            localStorage.setItem("error-reporter-queue", JSON.stringify(queuedErrors));
                        } catch (e) {
                            // If still failing, offer email fallback
                            const errorData = JSON.stringify(queuedErrors[0].error, null, 2);
                            const subject = encodeURIComponent(`Erreur Portfolio Sullivan Joro - ${new Date().toISOString()}`);
                            const body = encodeURIComponent(`Erreur détaillée :\n\n${errorData}\n\nURL: ${window.location.href}\nUser Agent: ${navigator.userAgent}`);
                            window.location.href = `mailto:sullivanjoro3@gmail.com?subject=${subject}&body=${body}`;
                        }
                    }
                }, 5000);
            }
        };

        const onError = (e: ErrorEvent) =>
            send({
                type: "ERROR_CAPTURED",
                error: {
                    message: e.message,
                    stack: e.error?.stack,
                    filename: e.filename,
                    lineno: e.lineno,
                    colno: e.colno,
                    source: "window.onerror",
                },
                timestamp: Date.now(),
            });

        const onReject = (e: PromiseRejectionEvent) =>
            send({
                type: "ERROR_CAPTURED",
                error: {
                    message: e.reason?.message ?? String(e.reason),
                    stack: e.reason?.stack,
                    source: "unhandledrejection",
                },
                timestamp: Date.now(),
            });

        const pollOverlay = () => {
            const overlay = document.querySelector("[data-nextjs-dialog-overlay]");
            const node =
                overlay?.querySelector(
                    "h1, h2, .error-message, [data-nextjs-dialog-body]"
                ) ?? null;
            const txt = node?.textContent ?? node?.innerHTML ?? "";
            if (txt && txt !== lastOverlayMsg.current) {
                lastOverlayMsg.current = txt;
                send({
                    type: "ERROR_CAPTURED",
                    error: { message: txt, source: "nextjs-dev-overlay" },
                    timestamp: Date.now(),
                });
            }
        };

        window.addEventListener("error", onError);
        window.addEventListener("unhandledrejection", onReject);
        pollRef.current = setInterval(pollOverlay, 1000);

        return () => {
            window.removeEventListener("error", onError);
            window.removeEventListener("unhandledrejection", onReject);
            pollRef.current && clearInterval(pollRef.current);
        };
    }, []);

    /* ─ extra postMessage when on the global-error route ─ */
    useEffect(() => {
        if (!error) return;
        window.parent.postMessage(
            {
                type: "global-error-reset",
                error: {
                    message: error.message,
                    stack: error.stack,
                    digest: error.digest,
                    name: error.name,
                },
                timestamp: Date.now(),
                userAgent: navigator.userAgent,
            },
            "*"
        );
    }, [error]);

    /* ─ ordinary pages render nothing ─ */
    if (!error) return null;

    /* ─ global-error UI ─ */
    const getLocalizedMessage = () => {
        const lang = navigator.language || 'fr-FR';
        if (lang.startsWith('fr') || lang.startsWith('mg')) {
            return {
                title: "Une erreur s'est produite sur le portfolio de Sullivan Joro !",
                description: "Une erreur inattendue est survenue. Merci de réessayer ou de contacter Sullivan à Antananarivo, Madagascar.",
                details: "Détails de l'erreur",
                reload: "Recharger la page"
            };
        } else if (lang.startsWith('en')) {
            return {
                title: "An error occurred on Sullivan Joro's portfolio!",
                description: "An unexpected error has occurred. Please try again or contact Sullivan in Antananarivo, Madagascar.",
                details: "Error details",
                reload: "Reload page"
            };
        } else {
            return {
                title: "Une erreur s'est produite sur le portfolio de Sullivan Joro !",
                description: "Une erreur inattendue est survenue. Merci de réessayer ou de contacter Sullivan à Antananarivo, Madagascar.",
                details: "Détails de l'erreur",
                reload: "Recharger la page"
            };
        }
    };

    const messages = getLocalizedMessage();

    return (
        <html>
            <body className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
                <div className="max-w-md w-full text-center space-y-6" role="alert" aria-live="polite">
                    <div className="space-y-2">
                        <h1 className="text-2xl font-bold text-destructive" id="error-title">
                            {messages.title}
                        </h1>
                        <p className="text-muted-foreground">
                            {messages.description}
                        </p>
                    </div>
                    <div className="space-y-2">
                        {process.env.NODE_ENV === "development" && (
                            <details className="mt-4 text-left" aria-labelledby="error-title">
                                <summary className="cursor-pointer text-sm text-muted-foreground hover:text-foreground">
                                    {messages.details}
                                </summary>
                                <pre className="mt-2 text-xs bg-muted p-2 rounded overflow-auto">
                                    {error.message}
                                    {error.stack && (
                                        <div className="mt-2 text-muted-foreground">
                                            {error.stack}
                                        </div>
                                    )}
                                    {error.digest && (
                                        <div className="mt-2 text-muted-foreground">
                                            Digest: {error.digest}
                                        </div>
                                    )}
                                </pre>
                            </details>
                        )}
                    </div>
                    <div className="pt-4">
                        <button 
                            onClick={() => window.location.reload()}
                            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                            aria-label={messages.reload}
                        >
                            {messages.reload}
                        </button>
                    </div>
                </div>
            </body>
        </html>
);
}
