console.log("ADMIN RAHMAN WEBSITE LOADED");

// Smooth Scroll Animation
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const top = window.scrollY;
        const offset = section.offsetTop - 300;
        const height = section.offsetHeight;

        if(top > offset && top < offset + height){
            section.classList.add("show");
        }
    });
});

// Typing Animation
const text = [
    "Tool Developer",
    "Discord Bot Creator",
    "Gaming Community",
    "Free Fire PC Expert",
    "EXE ELITE"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(count === text.length){
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if(letter.length === currentText.length){
        count++;
        index = 0;
    }

    setTimeout(type,150);

})();

// Mouse Glow Effect
const glow = document.createElement("div");
glow.classList.add("cursor-glow");
document.body.appendChild(glow);

window.addEventListener("mousemove", (e)=>{
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
});

// Loading Screen
window.addEventListener("load",()=>{
    document.querySelector(".loader").style.opacity = "0";

    setTimeout(()=>{
        document.querySelector(".loader").style.display = "none";
    },1000);
});
