"use strict"

const photos=document.querySelectorAll(".allPhoto");
const mainPhoto=document.querySelector(".mainPhoto")

photos.forEach((item) =>{
    item.addEventListener('click',() => {
        mainPhoto.src=item.src
    })
})