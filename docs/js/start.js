/* global PipefyApp */

PipefyApp.initCall({
    "pipe-buttons": function (p, pipe) {
        return [
            {
                icon: "./assets/icons/logo.svg",
                text: "Amazon Connect",
                callback: function (p) {
                    p.sidebar({
                        title: "Discador Amazon Connect",
                        url: "./sidebar.html",
                    });
                },
            },
        ];
    },
});

// pede acesso ao microfone já no carregamento do app
navigator.mediaDevices
    .getUserMedia({ audio: true })
    .then(() => console.log("mic access ok"))
    .catch((err) => console.error("mic access error", err));
