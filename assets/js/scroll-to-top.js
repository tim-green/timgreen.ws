document.addEventListener('DOMContentLoaded', function () {
    let scrolltotop = document.querySelector('.scroll-to-top');
    let body = document.documentElement;

    window.addEventListener('scroll', check);

    function check() {
        pageYOffset >= 500 && scrolltotop.classList.add('visible');
        pageYOffset < 500 && scrolltotop.classList.remove('visible');
    }


    scrolltotop.onclick = function() {
        animate({
            duration: 700,
            timing: goscrolltotopEaseOut,
            draw: progress =>
                body.scrollTop = (body.scrollTop * (1 - progress / 7))
        });
    }

    let circ = timeFraction =>
        1 - Math.sin(Math.acos(timeFraction > 1 ? timeFraction = 1 : timeFraction));

    let makeEaseOut = timing => timeFraction => 1 - timing(1 - timeFraction);
    let goscrolltotopEaseOut = makeEaseOut(circ);
});

function animate(options) {
    let start = performance.now();

    requestAnimationFrame(function animate(time) {
        let timeFraction = (time - start) / options.duration;
        timeFraction > 1 && (timeFraction = 1);

        let progress = options.timing(timeFraction)

        options.draw(progress);
        timeFraction < 1 && requestAnimationFrame(animate);
    });
}