@echo off
echo ===================================================
echo 🚀 NEXOPRO - Deploy Automatizado
echo ===================================================
echo.
echo [1/3] Verificando status do Git...
git status

echo.
echo [2/3] Adicionando alteracoes...
set /p msg="Digite a mensagem do commit: "
git add .
git commit -m "%msg%"

echo.
echo [3/3] Enviando para o GitHub (Dispara Deploy no Railway & Vercel)...
git push origin main

echo.
echo ===================================================
echo ✅ Codigo enviado!
echo ☁️  Acompanhe o deploy em:
echo    - Frontend: https://vercel.com/dashboard
echo    - Backend:  https://railway.app/dashboard
echo ===================================================
pause
