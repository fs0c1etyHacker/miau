$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var message = $(".message");

    function openEnvelope() {
        envelope.addClass("open").removeClass("close");
        message.text(""); // Limpa o conteúdo da mensagem antes de exibir
        var text = "Você é o miau do meu coração";
        var index = 0;
        var interval = setInterval(function() {
            message.text(message.text() + text[index]);
            index++;
            if (index === text.length) {
                clearInterval(interval);
            }
        }, 100);
    }

    function closeEnvelope() {
        envelope.addClass("close").removeClass("open");
        message.text(""); // Limpa o conteúdo da mensagem ao fechar o envelope
    }

    envelope.click(function() {
        openEnvelope();
    });

    btn_open.click(function() {
        openEnvelope();
    });

    btn_reset.click(function() {
        closeEnvelope();
    });
});
