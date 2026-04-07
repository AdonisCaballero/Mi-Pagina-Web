const brillo = document.createElement("div");
brillo.classList.add("cursor-brillo");
document.body.appendChild(brillo);

document.addEventListener("mousemove", (e) => {
    brillo.style.left = e.clientX + "px";
    brillo.style.top = e.clientY + "px";
});
