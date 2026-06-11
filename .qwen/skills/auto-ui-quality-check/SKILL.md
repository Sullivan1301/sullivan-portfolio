---
name: auto-ui-quality-check
description: Run Web Design Guidelines and Composition Patterns checks automatically on code changes.
source: auto-skill
extracted_at: '2026-06-05T18:53:00.000Z'
---

# Auto UI Quality Check

Cette compétence exécute automatiquement les deux vérifications suivantes chaque fois qu’un développeur apporte des modifications :

1. **Web Design Guidelines** – `/web-design-guidelines src/components/**/*.tsx`
2. **Composition Patterns** – `/vercel-composition-patterns src/components/**/*.tsx`

## Procédure

1. **Déclencheur** : la compétence est invoquée manuellement ou via un hook Git (pre‑commit, CI). Elle parcourt les fichiers `*.tsx` du répertoire `src/components/`.
2. **Exécution** :
   - Lance la commande slash `web-design-guidelines` avec le pattern indiqué.
   - Lance ensuite la commande slash `vercel-composition-patterns` avec le même pattern.
3. **Collecte des résultats** : les deux outils renvoient des sorties au format `fichier:ligne`. Le script agrège ces lignes dans un fichier `ui-quality-report.txt` à la racine du projet.
4. **Feedback** : le script affiche le nombre d’incidents par catégorie et, si des problèmes sont détectés, il empêche le commit (exemple de hook pre‑commit) ou bloque le pipeline CI.

## Exemple d’usage dans un hook pre‑commit

```bash
#!/bin/sh
# Auto UI Quality Check – pre‑commit hook

# Run Web Design Guidelines
/web-design-guidelines src/components/**/*.tsx > ui-quality-report.txt || exit 1
# Run Composition Patterns
/vercel-composition-patterns src/components/**/*.tsx >> ui-quality-report.txt || exit 1

# Count issues
issues=$(grep -c '^' ui-quality-report.txt)
if [ "$issues" -gt 0 ]; then
  echo "⚠️ $issues UI quality issues détectés – consultez ui-quality-report.txt"
  exit 1
fi

exit 0
```

## Integration continue (CI)

Dans un workflow GitHub Actions :

```yaml
name: UI quality check
on: [push, pull_request]
jobs:
  ui-quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run UI checks
        run: |
          /web-design-guidelines src/components/**/*.tsx > ui-quality-report.txt
          /vercel-composition-patterns src/components/**/*.tsx >> ui-quality-report.txt
          cat ui-quality-report.txt
```