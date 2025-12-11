document.querySelectorAll('.tarjeta').forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    setTimeout(() => {
        card.style.transition = "1s";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }, 200 * index);
});
