import { seoLastModified } from "@/lib/site";

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  datePublished: string;
  dateModified: string;
};

const datePublished = seoLastModified;

export const faqItems: FaqItem[] = [
  {
    id: "aide-croissance-pme",
    question: "Comment Sullivan Joro aide-t-il les PME à grandir ?",
    answer:
      "Sullivan Joro aide les PME à transformer leur présence digitale en opportunités commerciales. L’accompagnement combine stratégie, développement web, réseaux sociaux, contenu et intelligence artificielle selon les objectifs, les ressources et la maturité digitale de chaque entreprise.",
    datePublished,
    dateModified: seoLastModified,
  },
  {
    id: "services-croissance-digitale",
    question: "Quels services de croissance digitale sont proposés ?",
    answer:
      "Les services couvrent les sites vitrines, les landing pages, la stratégie Social Media, le community management, le copywriting, la création de contenu et l’optimisation par l’IA. Chaque combinaison répond à un objectif défini avant le démarrage.",
    datePublished,
    dateModified: seoLastModified,
  },
  {
    id: "demarrer-accompagnement",
    question: "Comment démarre un accompagnement avec Sullivan Joro ?",
    answer:
      "L’accompagnement commence par un échange sur l’activité, les objectifs, le public et les contraintes de l’entreprise. Sullivan Joro recommande ensuite un périmètre priorisé, des livrables, des indicateurs de suivi et un calendrier adaptés au besoin.",
    datePublished,
    dateModified: seoLastModified,
  },
  {
    id: "role-tech-bloom-agency",
    question: "Quel est le rôle de Tech Bloom Agency ?",
    answer:
      "Sullivan Joro reste l’interlocuteur stratégique et pilote la relation avec le client. Tech Bloom Agency est la structure d’exécution qui mobilise les compétences nécessaires, organise la production et assure la livraison des prestations convenues.",
    datePublished,
    dateModified: seoLastModified,
  },
  {
    id: "site-web-pme",
    question: "Quel site web convient à une PME ?",
    answer:
      "Le bon format dépend du parcours commercial de la PME. Un site vitrine construit la crédibilité, tandis qu’une landing page soutient une offre ou une campagne précise. Le choix se fait selon l’objectif de conversion prioritaire.",
    datePublished,
    dateModified: seoLastModified,
  },
  {
    id: "reseaux-sociaux-prospects",
    question: "Comment les réseaux sociaux peuvent-ils générer des prospects ?",
    answer:
      "Les réseaux sociaux génèrent des prospects lorsqu’ils relient contenus utiles, offres claires et appels à l’action cohérents. La stratégie définit les audiences, les formats, le rythme de publication et les indicateurs nécessaires pour améliorer les résultats.",
    datePublished,
    dateModified: seoLastModified,
  },
  {
    id: "usage-intelligence-artificielle",
    question: "Comment l’intelligence artificielle est-elle utilisée ?",
    answer:
      "L’intelligence artificielle accélère la recherche, l’idéation, certaines tâches de production et l’analyse. Sullivan Joro conserve la validation humaine, la cohérence de marque et le contrôle stratégique afin que l’outil serve réellement l’objectif business.",
    datePublished,
    dateModified: seoLastModified,
  },
  {
    id: "mesure-resultats",
    question: "Comment les résultats digitaux sont-ils mesurés ?",
    answer:
      "Les indicateurs sont choisis selon l’objectif du projet : demandes de contact, conversions, portée, engagement ou trafic qualifié. Le suivi sert à comparer les actions, identifier les points de friction et décider des optimisations suivantes.",
    datePublished,
    dateModified: seoLastModified,
  },
  {
    id: "localisation-antananarivo",
    question: "Où est basé Sullivan Joro ?",
    answer:
      "Sullivan Joro est basé à Antananarivo, Madagascar. Il accompagne des entreprises localement ou à distance, selon la nature du projet, les besoins de collaboration et les modalités définies avec chaque client.",
    datePublished,
    dateModified: seoLastModified,
  },
  {
    id: "travail-distance",
    question: "Est-il possible de travailler entièrement à distance ?",
    answer:
      "Oui. Le cadrage, les validations, le suivi et la livraison peuvent être organisés à distance avec des points réguliers et des outils partagés. Les modalités sont adaptées à la disponibilité de l’équipe et au rythme du projet.",
    datePublished,
    dateModified: seoLastModified,
  },
  {
    id: "tarifs-personnalises",
    question: "Comment sont calculés les tarifs des prestations ?",
    answer:
      "Les tarifs dépendent du périmètre, des livrables, du volume de production et du niveau d’accompagnement. Les offres standards donnent un repère, puis un devis précise les responsabilités, les échéances et le coût avant tout engagement.",
    datePublished,
    dateModified: seoLastModified,
  },
  {
    id: "delai-projet",
    question: "Combien de temps dure un projet digital ?",
    answer:
      "La durée varie selon la complexité, les contenus disponibles et le nombre de validations nécessaires. Un calendrier réaliste est proposé après le cadrage, avec des étapes identifiables pour la conception, la production, les retours et la livraison.",
    datePublished,
    dateModified: seoLastModified,
  },
  {
    id: "secteurs-accompagnes",
    question: "Quels types d’entreprises peuvent être accompagnés ?",
    answer:
      "L’accompagnement s’adresse principalement aux PME, TPE, marques et entrepreneurs qui veulent structurer ou développer leur activité grâce au digital. La méthode s’adapte au secteur, mais demande toujours un objectif commercial clair et un interlocuteur disponible.",
    datePublished,
    dateModified: seoLastModified,
  },
  {
    id: "prise-de-contact",
    question: "Comment réserver un premier échange ?",
    answer:
      "Le bouton « Réserver un appel » ouvre une conversation WhatsApp préremplie. L’entreprise peut aussi utiliser le formulaire de contact ou l’adresse email affichée sur le site pour présenter son activité, son objectif et ses contraintes.",
    datePublished,
    dateModified: seoLastModified,
  },
  {
    id: "suivi-apres-livraison",
    question: "Que se passe-t-il après la livraison ?",
    answer:
      "Les modalités de suivi sont définies dans le périmètre du projet. Selon le besoin, elles peuvent inclure une période de correction, une maintenance, un reporting ou un accompagnement continu pour mesurer les résultats et améliorer les actions.",
    datePublished,
    dateModified: seoLastModified,
  },
];
