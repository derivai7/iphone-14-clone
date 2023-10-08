const price = [
    'Rp 19.999.000', 'Rp 22.999.000', 'Rp 26.999.000', 'Rp 30.999.000'
];

$("#product .warning .container .fas.fa-times").click(function() {
    const warning = $("#product .warning");
    warning.css("opacity", "0");

    setTimeout(function() {
        warning.remove();
    }, 1000)

    // warning.remove();

    $("#product").css("padding-top", "90px");
})

$("#product .container .content .color .choose div").each(function(i) {
    $(this).click(function() {
        $("#product .container .content .color p").text(`Warna: ${$(this).text()}`);
        $("#product .container .content .color .choose div.active").removeClass('active');
        $(this).toggleClass('active');

        $("#product .container .img img").attr('src', `img/${i + 1}.png`);
    })
})

$("#product .container .content .capacity .choose div").each(function(i) {
    $(this).click(function() {
        $("#product .container .content .price").text(price[i]);
        $("#product .container .content .capacity p").text(`Kapasitas: ${$(this).text()}`);
        $("#product .container .content .capacity .choose div.active").removeClass('active');
        $(this).toggleClass('active');
    })
})

$("#product .container .content .details p").click(function() {
    $("#product .container .content .details p i").toggleClass('reverse');
    $("#product .container .content .details .text").toggleClass('visible');
})
