import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FCFAEE] text-[#0D2A40]">
      <section className="container mx-auto px-6 py-24 flex flex-col items-center text-center">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-[#B8001F]">
          <img
            src="/sullivan.jpeg"
            alt="Sullivan"
            width={512}
            height={512}
            className="object-cover w-full h-full"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Sullivan Joro
        </h1>

        <p className="text-lg md:text-xl text-[#384B70] max-w-2xl mb-8">
          Développeur web & créateur de solutions digitales.  
          Je construis des sites modernes, des identités fortes et des expériences utiles.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/portfolio"
            className="px-8 py-4 rounded-full bg-[#B8001F] text-white font-semibold hover:opacity-90 transition"
          >
            Voir mes projets
          </Link>

          <Link
            href="/contact"
            className="px-8 py-4 rounded-full border-2 border-[#0D2A40] text-[#0D2A40] font-semibold hover:bg-[#0D2A40] hover:text-white transition"
          >
            Me contacter
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Ce que je fais</h2>
        <p className="max-w-3xl mx-auto text-[#384B70] text-lg leading-relaxed">
          Je travaille sur des projets web modernes avec React, Next.js et Tailwind CSS.
          Je développe aussi des identités digitales, du contenu visuel et j’accompagne
          des marques dans leur croissance en ligne via Tech Bloom Agency.
        </p>
      </section>
    </main>
  );
}
