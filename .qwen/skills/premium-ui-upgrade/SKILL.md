---
name: premium-ui-upgrade
description: Upgrade an existing Next.js UI to a premium, glass‑morphism and gradient style while preserving the existing design system.
source: auto-skill
extracted_at: '2026-06-05T19:28:00.000Z'
---

# Premium UI Upgrade Skill

Cette compétence décrit la procédure pour transformer un site Next.js existant en une interface **premium** : glass‑morphism, dégradés, animations subtiles et conformité d’accessibilité.

## Étapes

1. **Créer le composant réutilisable `GlassCard`** (déjà présent dans le projet). Si absent, créer `src/components/GlassCard.tsx` avec le code fourni dans le plan précédent.
2. **Remplacer les conteneurs principaux** : dans chaque section clé (`Hero`, `Navbar`, `Footer`), remplacer le `<div className="bg‑background/...">` par `<GlassCard>` afin d’appliquer le style glass‑morphism.
3. **Dégradé du Navbar** : ajouter `hover:bg-gradient-to-r from-purple-600 to-amber-400` (ou autre palette premium) à la classe du `<nav>`.
4. **Boutons CTA** :
   - Utiliser `framer‑motion` avec `whileHover={{ scale: 1.05, y: -2 }}` et `whileTap={{ scale: 0.98 }}`.
   - Ajouter la classe `transition-all` et `duration-200` pour une animation fluide.
5. **Footer** :
   - Appliquer un fond sombre (`bg‑background/90`) et des icônes stylisées (ex. `lucide‑react`).
   - Ajouter un petit effet `hover:text‑highlight` sur chaque lien.
6. **Vérification d’accessibilité** :
   - Exécuter `/contrast-checker` ou `accesslint:reviewer` sur les fichiers modifiés.
   - Corriger les contrastes qui ne respectent pas WCAG AA.
7. **Tests et lint** :
   - Lancer `npm run lint` et les tests unitaires pour s’assurer que les changements ne cassent rien.

## Considérations

- **Pas de modification des polices ou des couleurs** déjà définies dans la charte du projet.
- Respecter les variables CSS déjà présentes (`--background`, `--highlight`, …) ; le composant `GlassCard` utilise ces variables.
- Garder les effets `backdrop‑blur` pour la profondeur visuelle tout en restant performant sur mobile.

## Résultat attendu

Un site avec :
- Un arrière‑plan sombre et doux ; le Hero apparaît dans une carte translucide avec bord brillant.
- Un Navbar qui change de couleur en dégradé au survol.
- Des boutons CTA animés qui invitent à l’interaction.
- Une conformité contrastes ≥ AA verified via AccessLint.

Cette compétence peut être réutilisée pour tout projet Next.js qui veut passer d’un look « générique » à un design premium sans toucher à la palette ou aux typographies existantes.
