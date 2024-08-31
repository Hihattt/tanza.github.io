const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function (e) {

    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.style.left = `${posX}px`;
    cursorOutline.style.top = `${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 300, fill: "forwards" });
});

const blocks = document.querySelectorAll(".block");
const resetDuration = 300;

blocks.forEach((block) => {
    let timeoutId;

    block.addEventListener("mouseover", () => {
        clearTimeout(timeoutId);
        block.classList.add("active");
        timeoutId = setTimeout(() => {
            block.classList.remove("active");
        }, resetDuration);
    });
});

// --------------------------------------
