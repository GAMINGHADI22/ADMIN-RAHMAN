console.log("ADMIN RAHMAN WEBSITE LOADED");

window.addEventListener("scroll",()=>{
    document.querySelector("header").classList.toggle(
        "sticky",
        window.scrollY > 0
    );
});
