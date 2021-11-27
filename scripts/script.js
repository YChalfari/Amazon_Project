let featured = document.querySelectorAll(".featured");
let active = document.getElementsByClassName("active");
let thumbnails = document.querySelectorAll(".thumbnail");
console.log(featured, active, thumbnails);
for (const img of thumbnails) {
  console.log(img, this);
  img.addEventListener("mouseover", () => {
    if (active.length > 0) {
      active[0].classList.remove("active");
    }
    img.classList.add("active");
    document.querySelector(".featured").src = img.src;
  });
}
