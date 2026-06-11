---
name: web-design-guidelines-run
description: Execute the Vercel Web Interface Guidelines audit on a set of files or glob patterns.
source: auto-skill
extracted_at: '2026-06-05T18:27:18.621Z'
---

# Web Design Guidelines – Automated Run

Cette compétence déclenche automatiquement l’audit **Web Interface Guidelines** sur les fichiers ou motifs fournis. Elle combine les étapes décrites dans la compétence `web-design-guidelines` avec un petit script CLI afin de produire un rapport `fichier:ligne` utilisable dans votre pipeline CI.

## Étapes d’exécution

1. **Récupérer les règles**
   ```bash
   curl -sSL https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md \
     -o /tmp/web-guidelines.md
   ```
2. **Analyser les fichiers**
   - Le script lit le(s) fichier(s) correspondant(s) au motif fourni (ex. `src/components/**/*.tsx`).
   - Il parcourt chaque règle du markdown (chaque règle commence par `## `) et recherche les patterns indiqués dans la description de la règle.
   - Lorsqu’une violation est détectée, il imprime :`<filepath>:<line>`.
3. **Sortie**
   - Le résultat est envoyé sur `stdout` – vous pouvez le rediriger vers un fichier ou l’utiliser dans un job CI.

## Utilisation
```
/web-design-guidelines-run src/components/**/*.tsx
```
ou en ligne de commande :
```bash
./run-web-design-guidelines.sh "src/components/**/*.tsx"
```

## Implémentation de base (bash)
```bash
#!/usr/bin/env bash
set -euo pipefail
PATTERN="$1"
RULES_FILE="/tmp/web-guidelines.md"
# download rules if missing
if [[ ! -f "$RULES_FILE" ]]; then
  curl -sSL https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md > "$RULES_FILE"
fi
# simple grep‑based check (placeholder – expand with proper parsing as needed)
shopt -s globstar nullglob
for f in $PATTERN; do
  while IFS= read -r line; do
    # example: look for missing aria‑label on <button>
    if grep -n "<button[^>]*>" "$f" | grep -v "aria‑label"; then
      grep -n "<button" "$f" | cut -d: -f1 | while read -r num; do
        echo "$f:$num"
      done
    fi
  done < "$RULES_FILE"
done
```

> **Note** : le script fourni est intentionnellement minimal ; il sert de point de départ. Vous pouvez enrichir la logique de correspondance en fonction des règles spécifiques du markdown.

## Pourquoi cette compétence ?
- **Automatisation** : évite la phase manuelle de lecture du markdown et de recherche des violations.
- **Intégration CI** : le script peut être exécuté dans les workflows GitHub Actions.
- **Conformité** : assure que chaque composant UI respecte les exigences d’accessibilité et de bonnes pratiques définies par Vercel.

---
*Cette compétence a été générée automatiquement pour faciliter l’exécution de l’audit Web Design Guidelines.*
