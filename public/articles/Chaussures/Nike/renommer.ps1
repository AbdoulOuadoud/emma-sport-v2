$dir = "C:\Users\izichange\Documents\emma-sport-v2\public\articles\Chaussures\Nike"

$renames = @{
    "WhatsApp Image 2026-06-21 at 1.22.36 PM.jpeg" = "nike-mercurial-vapor-tf-blanc-multicolore.jpeg"
    "WhatsApp Image 2026-06-21 at 1.22.38 PM.jpeg" = "nike-mercurial-vapor-fg-bleu-jaune.jpeg"
    "WhatsApp Image 2026-06-21 at 1.22.39 PM.jpeg" = "nike-air-zoom-mercurial-tf-bleu-rose.jpeg"
    "WhatsApp Image 2026-06-21 at 1.23.18 PM (1).jpeg" = "nike-mercurial-vapor-fg-volt-blanc.jpeg"
    "WhatsApp Image 2026-06-21 at 1.23.18 PM.jpeg" = "nike-mercurial-vapor-fg-blanc-cyan-violet.jpeg"
    "WhatsApp Image 2026-06-21 at 1.23.25 PM.jpeg" = "adidas-predator-fg-bleu-volt.jpeg"
    "WhatsApp Image 2026-06-21 at 1.23.26 PM.jpeg" = "adidas-x-speedportal-fg-marine-or-dembele.jpeg"
    "WhatsApp Image 2026-06-21 at 1.23.27 PM.jpeg" = "adidas-f50-fg-rose-violet.jpeg"
    "WhatsApp Image 2026-06-21 at 1.23.28 PM (1).jpeg" = "adidas-f50-fg-bleu-volt-messi.jpeg"
    "WhatsApp Image 2026-06-21 at 1.23.28 PM (2).jpeg" = "adidas-f50-fg-bleu-volt.jpeg"
    "WhatsApp Image 2026-06-21 at 1.23.28 PM.jpeg" = "adidas-f50-fg-blanc-mint.jpeg"
    "WhatsApp Image 2026-06-21 at 1.23.29 PM.jpeg" = "adidas-f50-fg-orange-blanc.jpeg"
    "WhatsApp Image 2026-06-21 at 1.23.32 PM.jpeg" = "adidas-x-speedportal-fg-violet-rose.jpeg"
    "WhatsApp Image 2026-06-21 at 1.23.34 PM.jpeg" = "adidas-f50-fg-noir-bleu.jpeg"
    "WhatsApp Image 2026-06-21 at 1.23.35 PM (1).jpeg" = "nike-mercurial-vapor-fg-rose-atomknit.jpeg"
    "WhatsApp Image 2026-06-21 at 1.23.35 PM (2).jpeg" = "nike-mercurial-vapor-fg-rose-degrade.jpeg"
    "WhatsApp Image 2026-06-21 at 1.23.35 PM.jpeg" = "adidas-f50-fg-vert-noir.jpeg"
    "WhatsApp Image 2026-06-21 at 1.23.36 PM (1).jpeg" = "adidas-f50-fg-volt-rose-noir.jpeg"
    "WhatsApp Image 2026-06-21 at 1.23.36 PM.jpeg" = "nike-phantom-fg-blanc-bleu.jpeg"
    "WhatsApp Image 2026-06-21 at 1.23.37 PM (1).jpeg" = "nike-mercurial-vapor-fg-vert-blanc.jpeg"
    "WhatsApp Image 2026-06-21 at 1.23.37 PM.jpeg" = "adidas-x-speedportal-fg-blanc-rouge-roses.jpeg"
    "WhatsApp Image 2026-06-21 at 1.23.38 PM (1).jpeg" = "nike-mercurial-vapor-fg-orange-multicolore.jpeg"
    "WhatsApp Image 2026-06-21 at 1.23.38 PM.jpeg" = "nike-mercurial-vapor-fg-noir-orange.jpeg"
    "WhatsApp Image 2026-06-21 at 1.23.42 PM.jpeg" = "nike-mercurial-vapor-fg-turquoise-violet.jpeg"
    "WhatsApp Image 2026-06-21 at 1.23.43 PM (1).jpeg" = "nike-mercurial-vapor-fg-blanc-or.jpeg"
    "WhatsApp Image 2026-06-21 at 1.23.43 PM.jpeg" = "nike-air-zoom-mercurial-fg-blanc-bleu.jpeg"
    "WhatsApp Image 2026-06-21 at 1.24.04 PM.jpeg" = "nike-mercurial-vapor-tf-orange-or.jpeg"
    "WhatsApp Image 2026-06-21 at 1.24.05 PM.jpeg" = "adidas-f50-fg-noir-volt.jpeg"
    "WhatsApp Image 2026-06-21 at 1.24.06 PM (1).jpeg" = "nike-mercurial-vapor-tf-orange-or-2.jpeg"
    "WhatsApp Image 2026-06-21 at 1.24.06 PM.jpeg" = "nike-mercurial-vapor-fg-volt-blanc-2.jpeg"
    "WhatsApp Image 2026-06-21 at 1.24.07 PM (1).jpeg" = "nike-air-zoom-mercurial-tf-rose-orange.jpeg"
    "WhatsApp Image 2026-06-21 at 1.24.07 PM.jpeg" = "adidas-copa-fg-blanc-argent.jpeg"
    "WhatsApp Image 2026-06-21 at 1.24.08 PM (1).jpeg" = "puma-future-tf-rouge-bleu-noir.jpeg"
    "WhatsApp Image 2026-06-21 at 1.24.08 PM.jpeg" = "nike-air-zoom-mercurial-tf-peche-bleu.jpeg"
    "WhatsApp Image 2026-06-21 at 1.24.09 PM (1).jpeg" = "adidas-predator-fg-blanc-argent-rouge.jpeg"
    "WhatsApp Image 2026-06-21 at 1.24.09 PM.jpeg" = "nike-mercurial-vapor-tf-vert-citron-rouge.jpeg"
    "WhatsApp Image 2026-06-21 at 1.24.11 PM (1).jpeg" = "nike-air-zoom-mercurial-tf-bleu-rose-2.jpeg"
    "WhatsApp Image 2026-06-21 at 1.24.11 PM (2).jpeg" = "nike-air-zoom-mercurial-tf-vert-citron.jpeg"
    "WhatsApp Image 2026-06-21 at 1.24.11 PM.jpeg" = "nike-air-zoom-mercurial-fg-peche-bleu.jpeg"
    "WhatsApp Image 2026-06-21 at 1.24.12 PM (1).jpeg" = "adidas-predator-fg-noir-turquoise.jpeg"
    "WhatsApp Image 2026-06-21 at 1.24.12 PM (2).jpeg" = "puma-future-tf-blanc-cyan.jpeg"
    "WhatsApp Image 2026-06-21 at 1.24.12 PM.jpeg" = "puma-future-tf-blanc-cyan-2.jpeg"
    "WhatsApp Image 2026-06-21 at 1.24.13 PM.jpeg" = "adidas-predator-fg-noir-turquoise-2.jpeg"
    "WhatsApp Image 2026-06-21 at 1.24.14 PM (1).jpeg" = "adidas-f50-fg-noir-volt-2.jpeg"
    "WhatsApp Image 2026-06-21 at 1.24.14 PM.jpeg" = "nike-mercurial-vapor-tf-orange-or-3.jpeg"
    "WhatsApp Image 2026-06-21 at 1.24.15 PM (1).jpeg" = "nike-mercurial-vapor-tf-orange-or-4.jpeg"
    "WhatsApp Image 2026-06-21 at 1.24.15 PM (2).jpeg" = "adidas-copa-fg-blanc-argent-2.jpeg"
    "WhatsApp Image 2026-06-21 at 1.24.15 PM.jpeg" = "nike-mercurial-vapor-fg-volt-blanc-3.jpeg"
    "WhatsApp Image 2026-06-21 at 1.24.16 PM.jpeg" = "nike-air-zoom-mercurial-tf-rose-orange-2.jpeg"
    "WhatsApp Image 2026-06-21 at 1.24.17 PM (1).jpeg" = "puma-future-tf-rouge-bleu-noir-2.jpeg"
    "WhatsApp Image 2026-06-21 at 1.24.17 PM (2).jpeg" = "nike-mercurial-vapor-tf-vert-citron-rouge-2.jpeg"
    "WhatsApp Image 2026-06-21 at 1.24.17 PM.jpeg" = "nike-air-zoom-mercurial-tf-peche-bleu-2.jpeg"
    "WhatsApp Image 2026-06-21 at 1.24.18 PM (1).jpeg" = "nike-air-zoom-mercurial-fg-peche-bleu-2.jpeg"
    "WhatsApp Image 2026-06-21 at 1.24.18 PM (2).jpeg" = "nike-air-zoom-mercurial-tf-bleu-rose-3.jpeg"
    "WhatsApp Image 2026-06-21 at 1.24.18 PM.jpeg" = "adidas-predator-fg-blanc-argent-rouge-2.jpeg"
    "WhatsApp Image 2026-06-21 at 1.24.19 PM (1).jpeg" = "puma-future-tf-blanc-cyan-3.jpeg"
    "WhatsApp Image 2026-06-21 at 1.24.19 PM.jpeg" = "nike-air-zoom-mercurial-tf-vert-citron-2.jpeg"
    "WhatsApp Image 2026-06-21 at 1.24.20 PM.jpeg" = "adidas-predator-fg-noir-turquoise-3.jpeg"
    "WhatsApp Image 2026-06-21 at 1.24.21 PM (1).jpeg" = "adidas-predator-fg-noir-turquoise-4.jpeg"
    "WhatsApp Image 2026-06-21 at 1.24.21 PM.jpeg" = "puma-future-tf-blanc-cyan-4.jpeg"
}

$count = 0
foreach ($entry in $renames.GetEnumerator()) {
    $src = Join-Path $dir $entry.Key
    $dst = Join-Path $dir $entry.Value
    if (Test-Path $src) {
        Rename-Item -Path $src -NewName $entry.Value
        Write-Host "OK: $($entry.Key) -> $($entry.Value)"
        $count++
    } else {
        Write-Host "MANQUANT: $($entry.Key)"
    }
}

Write-Host ""
Write-Host "=== $count fichiers renommes ==="
Write-Host ""
Write-Host "=== Contenu final du dossier ==="
Get-ChildItem $dir -Filter "*.jpeg" | Sort-Object Name | Select-Object -ExpandProperty Name
