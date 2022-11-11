function openUrl(url) {
    window.location.href = url;
}

function openSpecificLink(purpose) {
    switch(purpose) {
        case "yt": openUrl("https://www.youtube.com/channel/UCRSiCRc3Pe4Y5H7z-AVgzZQ/videos"); break;
        case "da": openUrl("https://my.qiwi.com/Maksym-Kn3TxOvaHS"); break;
    };
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

$(document).ready(() => {
    var pictures = ['bg2.png', 'bg4.png'];

    $('.parallax-bg').hide();
    $('.parallax-bg').css('background-image', `url(assets/img/${pictures[Math.floor(Math.random() * pictures.length)]})`);
    $('.parallax-bg').fadeIn(500);
});
