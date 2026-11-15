#!/usr/bin/env bash
# Sincroniza el CV desde ../resume (fuente y diseño del PDF) a este sitio.
# El PDF se genera en ../resume/build-pdf.sh con su plantilla; aquí solo se copian.
set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
src="${CV_SOURCE:-$root/../resume}"

"$src/build-pdf.sh"
cp "$src/resume.md" "$root/src/content/cv/en.md"
cp "$src/resume.es.md" "$root/src/content/cv/es.md"
cp "$src/pdf/rodrigo-villalba-en.pdf" "$src/pdf/rodrigo-villalba-es.pdf" "$root/public/cv/"
echo "CV sincronizado en src/content/cv y public/cv"
