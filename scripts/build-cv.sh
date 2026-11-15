#!/usr/bin/env bash
# Genera los PDF del CV (EN y ES) desde ../resume. Requiere pandoc y Google Chrome.
set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
src="${CV_SOURCE:-$root/../resume}"
chrome="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT

build() {
  local md="$1" out="$2" lang="$3"
  pandoc "$src/$md" -f gfm -t html5 -s --metadata "lang=$lang" --metadata pagetitle="Rodrigo Villalba" \
    --css "$root/scripts/cv.css" --embed-resources -o "$tmp/$out.html"
  "$chrome" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="$root/public/cv/$out.pdf" "file://$tmp/$out.html" 2>/dev/null
  echo "public/cv/$out.pdf"
}

build resume.md rodrigo-villalba-en en
build resume.es.md rodrigo-villalba-es es
