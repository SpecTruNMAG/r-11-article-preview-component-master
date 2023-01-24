const share = document.querySelector(".share");
const profileLinks= document.querySelector(".profile-links");


profileLinks.addEventListener("click",() => {
    share.style.display = "flex"
    profileLinks.style.background = "url(./images/icon-share-white.svg)no-repeat center center";
    profileLinks.style.backgroundColor="hsl(214, 17%, 51%)";
});
profileLinks.addEventListener("mouseleave",() => time=(setTimeout(() => {
    share.style.display = "none";
    profileLinks.style.background = "url(./images/icon-share.svg)no-repeat center center";
    profileLinks.style.backgroundColor="hsl(210, 46%, 95%)";
    
},500)));

share.addEventListener("mouseenter", () => clearTimeout(time));

share.addEventListener("mouseleave",() => setTimeout(()=>{
    share.style.display="none";
    profileLinks.style.background = "url(./images/icon-share.svg)no-repeat center center";
    profileLinks.style.backgroundColor="hsl(210, 46%, 95%)";
},500));
