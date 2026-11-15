#!/usr/bin/env bash
# Sincroniza el CV desde ../resume (fuente) a src/content/cv y genera los PDF.
# Requiere pandoc y Google Chrome.
set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
src="${CV_SOURCE:-$root/../resume}"
chrome="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT

cp "$src/resume.md" "$root/src/content/cv/en.md"
cp "$src/resume.es.md" "$root/src/content/cv/es.md"

build() {
  local lang="$1"
  pandoc "$root/src/content/cv/$lang.md" -f gfm -t html5 -s --metadata "lang=$lang" --metadata pagetitle="Rodrigo Villalba" \
    --css "$root/scripts/cv.css" --embed-resources -o "$tmp/$lang.html"
  "$chrome" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="$root/public/cv/rodrigo-villalba-$lang.pdf" "file://$tmp/$lang.html" 2>/dev/null
  echo "public/cv/rodrigo-villalba-$lang.pdf"
}

build en
build es
