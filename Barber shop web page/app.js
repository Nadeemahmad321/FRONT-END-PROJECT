// side navBar
let menuBtn=document.querySelector(".menuBtn");
let menu=document.querySelector(".menu");
let close1=document.querySelector("#close");
let sideBar=document.querySelector(".sideBar");

menuBtn.addEventListener("click",()=>{
    if(sideBar.style.right=="-250px"){
        sideBar.style.right="0";
        menu.src="/barberShop/Barber_Shop_img/close.png";
    }
    else{
        sideBar.style.right="-250px";
        menu.src="/barberShop/Barber_Shop_img/menu.png";
    }
})
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 500,
	speedAsDuration: true
});
