const share = document.querySelector(".share");
const profileLinks= document.querySelector(".profile-links");

profileLinks.addEventListener("click",() => share.style.display = "flex");
profileLinks.addEventListener("mouseleave",() => time=(setTimeout(() => share.style.display = "none",500)));

share.addEventListener("mouseenter", () => clearTimeout(time));
share.addEventListener("mouseleave",() => setTimeout(()=>share.style.display="none",500));
