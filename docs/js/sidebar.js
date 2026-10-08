/* global PipefyApp, connect */

var instanceURL = "https://demoadjustit.my.connect.aws/ccp-v2/";

// O Pipefy põe allow="microphone *" no iframe da sidebar só depois de começar a carregá-lo,
// então a permissão só vale a partir da próxima navegação. Recarrega uma vez para aplicá-la.
(function ensureMicrophonePolicy() {
    var policy = document.permissionsPolicy || document.featurePolicy;
    if (!policy || policy.allowsFeature("microphone")) return;
    var url = new URL(window.location.href);
    if (url.searchParams.has("micReload")) {
        console.warn("microfone continua bloqueado pelo iframe mesmo após recarregar");
        return;
    }
    url.searchParams.set("micReload", "1");
    window.location.replace(url.toString());
})();

document.addEventListener("DOMContentLoaded", function () {
    // fora do Pipefy o SDK lança erro (faltam os parâmetros da URL); não deixa isso travar o CCP
    try {
        PipefyApp.init();
    } catch (err) {
        console.warn("PipefyApp.init ignorado (fora do Pipefy)", err);
    }

    navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then(() => console.log("mic access ok"))
        .catch((err) => console.error("mic access error", err));

    connect.core.initCCP(document.getElementById("container-div"), {
        ccpUrl: instanceURL,
        loginPopup: true,
        loginPopupAutoClose: true,
        loginOptions: {
            autoClose: true,
            height: 600,
            width: 400,
            top: 0,
            left: 0,
        },
        region: "us-east-1", // ajuste para a região da sua instância
        softphone: {
            allowFramedSoftphone: true,
            disableRingtone: false,
            allowFramedVideoCall: true,
            allowEarlyGum: true,
        },
        task: {
            disableRingtone: false,
        },
        pageOptions: {
            enableAudioDeviceSettings: false,
            enableVideoDeviceSettings: false,
            enablePhoneTypeSettings: true,
        },
        shouldAddNamespaceToLogs: false,
        ccpAckTimeout: 5000,
        ccpSynTimeout: 3000,
        ccpLoadTimeout: 10000,
    });

    connect.contact(function (contact) {
        contact.onConnecting(function () {
            var conn = contact.getInitialConnection();
            var phone = conn && conn.getEndpoint() ? conn.getEndpoint().phoneNumber : null;
            console.log("chamada recebida de", phone);
            // ponto de integração: buscar/abrir card no Pipefy pelo telefone
        });
    });
});
