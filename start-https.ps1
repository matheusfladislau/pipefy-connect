# Sobe o app (porta 8001) e abre um túnel HTTPS com ngrok
$port = 8001
Start-Process powershell -ArgumentList "-NoExit", "-Command", "`$env:PORT='$port'; Set-Location '$PSScriptRoot'; npm start"
ngrok http $port
