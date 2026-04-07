"use client";

import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-highlight mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Page non trouvée
        </h2>
        <p className="text-muted-foreground mb-8">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-highlight text-white rounded-full font-medium hover:bg-highlight/90 transition-colors"
          >
            <Home size={18} />
            Retour à l'accueil
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground/5 border border-border rounded-full font-medium hover:bg-foreground/10 transition-colors"
          >
            <ArrowLeft size={18} />
            Page précédente
          </button>
        </div>
      </div>
    </main>
  )
}