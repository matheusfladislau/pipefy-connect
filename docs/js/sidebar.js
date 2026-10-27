/* global PipefyApp */

// fora do Pipefy o SDK lança erro (faltam os parâmetros da URL); não deixa isso travar a página
try {
    PipefyApp.init();
} catch (err) {
    console.warn("PipefyApp.init ignorado (fora do Pipefy)", err);
}

navigator.mediaDevices
    .getUserMedia({ audio: true })
    .then(() => console.log("mic access ok"))
    .catch((err) => console.error("mic access error", err)); // só pede acesso ao microfone
