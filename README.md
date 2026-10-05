# App Pipefy – Amazon Connect CCP

Mesma estrutura do genesysplugin, trocando o embeddable framework da Genesys
pelo `connect.core.initCCP` do Amazon Connect Streams.

## Rodar local
    npm install
    npm start        # http://localhost:8000

## Publicar
1. Hospedar em HTTPS (Docker incluso) e trocar `SEU-DOMINIO` no `public/manifest.json`.
2. Amazon Connect > instância > Approved origins: adicionar o domínio do app.
3. Ajustar `instanceURL` e `region` em `public/js/sidebar.js`.
4. Registrar o app no Pipefy apontando para `https://SEU-DOMINIO/manifest.json`.
