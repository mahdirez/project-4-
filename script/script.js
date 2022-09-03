let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

/*nav mobile*/

const menuMobile = document.querySelector(".nav-mobile");
const humberger = document.querySelector(".humberger");

const li = document.querySelector("li-mobile");
const nav1 = document.querySelector(".nav1");
const nav2 = document.querySelector(".nav2");
const nav3 = document.querySelector(".nav3");
const nav4 = document.querySelector(".nav4");
const nav5 = document.querySelector(".nav5");
const nav6 = document.querySelector(".nav6");
const nav7 = document.querySelector(".nav7");

const navs = [nav1,nav2,nav3,nav4,nav5,nav6,nav7];

humberger.addEventListener("click", () => {
  menuMobile.classList.toggle("actives");
  if (menuMobile.classList.contains("actives")) {
    menuMobile.style.transform = "translateX(0)";
    slidenav('out','in')
  } else {
    menuMobile.style.transform = "translateX(-100%)";
    slidenav('in','out')
  }
});


function slidenav(dir1,dir2){
      navs.forEach((item,idx)=>{
        item.classList.replace(`slide-${dir1}-${idx+1}`,`slide-${dir2}-${idx+1}`);
      })
}



/*modal*/

const btnLog = document.querySelector('.btn-mains2');
const modal = document.querySelector('.modal');
const btnModal= document.querySelector('.btn-modal');
const bgGray = document.querySelector('.bg-gray');
btnLog.addEventListener('click',()=>{
    modal.style.display = 'block';
    bgGray.style.display = 'block';
})

btnModal.addEventListener('click',()=>{
  modal.style.display = 'none';
  bgGray.style.display = 'none';
})






























