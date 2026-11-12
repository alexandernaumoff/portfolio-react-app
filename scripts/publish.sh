#!/usr/bin/env bash
set -e

MSG="${1:-Update $(date '+%Y-%m-%d %H:%M')}"

npm run deploy

git add -A

if git diff --cached --quiet; then
  echo "Нет изменений для коммита"
else
  git commit -m "$MSG"
  git push source main
fi
