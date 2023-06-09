const btn = document.getElementById("btn");
const round = document.getElementById("round");
btn.addEventListener(
    "pointerdown",
    (e) => {
        round.style.setProperty("--l", e.pageX + "px");
        round.style.setProperty("--t", e.pageY + "px");
    }
);
btn.addEventListener(
    "pointerup",
    () => {
       round.style.transition = "clip-path 2s ease 0s";
       btn.classList.add("active");
    },
    { once: true }
);
