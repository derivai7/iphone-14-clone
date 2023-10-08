const toTop = document.querySelector(".to-top");
const nav = document.querySelector(".nav .bg");
const colors = document.querySelectorAll("#design .container .details .color a");
const designs = document.querySelectorAll('#design .container .img img');

toTop.addEventListener('click', () => {
    window.scroll({
       top: 0
    });
});

window.addEventListener('scroll', () => {
    toTop.classList.toggle('show', window.scrollY > 500);

    nav.classList.toggle('show', window.scrollY > 50);
});

colors.forEach((color, i) => {
    color.addEventListener('click', () => {
        const img = document.querySelector("#design .container .img");
        const currentActive = document.querySelector("#design .container .details .color a.active");

        designs.forEach((design) => {
            design.style.transform = `translateY(-${i * 100}%)`;
        })

        currentActive.classList.remove('active');
        color.classList.add('active');

        img.style.background = `url("img/${i + 1}.png") no-repeat center`;
    })
});