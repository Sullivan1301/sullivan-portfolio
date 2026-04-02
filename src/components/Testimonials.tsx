"use client";

import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import TextReveal from "@/components/ui/TextReveal";

const testimonials = [
	{
		name: "L'homme imparfait",
		role: "Community Manager",
		content: "Le service est efficace et à l’écoute des attentes du client",
	},
	{
		name: "Longin",
		role: "Entrepreneur",
		content: "C'était d'une facilité, et fluidité optimalement parfait",
	},
	{
		name: "RunRobe",
		role: "TPE/PME",
		content:
			"Notre entreprise est en plein essor et grâce à Tech Bloom Agency elle a eu beaucoup de succès",
	},
	{
		name: "Manitra",
		role: "Étudiante",
		content:
			"L'efficacité du travail fourni par Tech Bloom Agency est satisfaisante, mais il y a toujours des points à améliorer.",
	},
];

export default function Testimonials() {
	return (
		<section
			className="section-padding relative bg-muted/30"
			style={{ position: "relative", zIndex: 5 }}
		>
			<div className="container-custom">
				<motion.div
					className="max-w-3xl mx-auto text-center mb-16"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
				>
					<span className="text-sm font-medium text-highlight uppercase tracking-wider">
						Témoignages
					</span>
					<TextReveal className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
						<h2>Ils me font confiance</h2>
					</TextReveal>
					<p className="text-lg text-muted-foreground leading-relaxed">
						Des retours authentiques de clients satisfaits de notre
						collaboration.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{testimonials.map((t, i) => (
						<motion.div
							key={i}
							className="glass-card rounded-2xl p-6 md:p-8 group"
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{
								duration: 0.5,
								delay: i * 0.15,
								ease: [0.22, 1, 0.36, 1],
							}}
							whileHover={{ scale: 1.01, y: -3 }}
						>
							<Quote className="w-8 h-8 text-highlight mb-6" />
							<p className="text-muted-foreground leading-relaxed mb-6 italic">
								"{t.content}"
							</p>
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 rounded-full bg-highlight/10 flex items-center justify-center border-2 border-highlight/20">
									<span className="text-highlight font-bold text-sm">
										{t.name.charAt(0).toUpperCase()}
									</span>
								</div>
								<div>
									<p className="font-semibold text-foreground">
										{t.name}
									</p>
									<p className="text-sm text-muted-foreground">
										{t.role}
									</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
