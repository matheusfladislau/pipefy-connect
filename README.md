# App Pipefy – Amazon Connect CCP

Mesma estrutura do genesysplugin, trocando o embeddable framework da Genesys
pelo `connect.core.initCCP` do Amazon Connect Streams.

## Rodar local
    npm install
    npm start        # http://localhost:8000

## Publicar
1. GitHub Pages: Settings > Pages > branch `main`, pasta `/docs` (https://matheusfladislau.github.io/pipefy-connect/).
2. Amazon Connect > instância > Approved origins: adicionar `https://matheusfladislau.github.io`.
3. Ajustar `instanceURL` e `region` em `docs/js/sidebar.js`.
4. Registrar o app no Pipefy apontando para `https://matheusfladislau.github.io/pipefy-connect/manifest.json`.
