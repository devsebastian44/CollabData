# =============================================================================
# scripts/publish_public.ps1 - VERSIÓN DEFINITIVA (SENIOR)
# Sincronización Segura: GitLab (Completo) -> GitHub (Sanitizado)
# =============================================================================

Write-Host "[*] Iniciando sincronización profesional de CollabData (Next.js)..." -ForegroundColor Cyan

# 1. Validaciones Iniciales (Pre-vuelo)
$currentBranch = git rev-parse --abbrev-ref HEAD
if ($currentBranch -ne "main") {
    Write-Host "[!] Error: Debes estar en 'main' para publicar." -ForegroundColor Red
    exit
}

if (git status --porcelain) {
    Write-Host "[!] Tienes cambios sin guardar. Haz commit antes de publicar." -ForegroundColor Yellow
    exit
}

# 2. Limpieza Local Previa (Evitar basura en el commit)
Write-Host "[*] Limpiando archivos temporales y logs..." -ForegroundColor Yellow
Remove-Item -Path "*.log", "*.tmp" -Force -ErrorAction SilentlyContinue
Remove-Item -Path ".next", "out", "coverage" -Recurse -Force -ErrorAction SilentlyContinue

# 3. Sincronización con Laboratorio Privado
Write-Host "[*] Asegurando estado en GitLab (Source of Truth)..."
git pull gitlab main --rebase
git push gitlab main

# 4. Estrategia de Rama Pública (Aislamiento de Seguridad)
Write-Host "[*] Creando release sanitizado en rama 'public'..."
git checkout -B public main

# 5. Filtrado de Archivos (Lo que NO va a GitHub)
Write-Host "[*] Aplicando filtros de seguridad DevSecOps..." -ForegroundColor Cyan
# Eliminamos lo que es exclusivo del laboratorio privado
git rm -r --cached tests/ -f 2>$null
git rm -r --cached configs/ -f 2>$null
git rm -r --cached scripts/ -f 2>$null
git rm --cached .gitlab-ci.yml -f 2>$null
git rm --cached apphosting.yaml -f 2>$null
# git rm -r --cached src/ai/flows/ -f 2>$null # Necesario para que el build de GitHub compile

# 6. Commit de Lanzamiento y Push a GitHub
Write-Host "[*] Preparando commit de release..."
git commit -m "docs(release): publish sanitized version to public portfolio" --allow-empty
Write-Host "[*] Subiendo a GitHub (origin)..." -ForegroundColor Green
git push origin public:main --force

# 7. Retorno Seguro al Entorno de Trabajo
Write-Host "[*] Volviendo al Laboratorio (main)..."
git checkout main -f

Write-Host "[*] Portafolio en GitHub actualizado y Lab en GitLab protegido" -ForegroundColor Green
