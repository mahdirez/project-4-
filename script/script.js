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

const navs = [nav1, nav2, nav3, nav4, nav5, nav6, nav7];

humberger.addEventListener("click", () => {
  menuMobile.classList.toggle("actives");
  if (menuMobile.classList.contains("actives")) {
    menuMobile.style.transform = "translateX(0)";
    slidenav("out", "in");
  } else {
    menuMobile.style.transform = "translateX(-100%)";
    slidenav("in", "out");
  }
});

function slidenav(dir1, dir2) {
  navs.forEach((item, idx) => {
    item.classList.replace(
      `slide-${dir1}-${idx + 1}`,
      `slide-${dir2}-${idx + 1}`
    );
  });
}

/*modal*/

const btnLog = document.querySelector(".btn-mains2");
const modal = document.querySelector(".modal");
const btnModal = document.querySelector(".btn-modal");
const bgGray = document.querySelector(".bg-gray");
btnLog.addEventListener("click", () => {
  modal.style.display = "block";
  bgGray.style.display = "block";
});

btnModal.addEventListener("click", () => {
  modal.style.display = "none";
  bgGray.style.display = "none";
  usernameModal.value = '';
  emailModal.value = '';
  passModal.value = '';
  passModal2.value = '';
  btnMsg.innerText= '';
});

//valid modal

const usernameModal = document.querySelector(".username-modal");
const emailModal = document.querySelector(".email-modal");
const passModal = document.querySelector(".password-modal");
const passModal2 = document.querySelector(".password2-modal");
const btnSubmit = document.querySelector(".btn-submit");
const userMsg = document.querySelector(".msg-name");
const emailMsg = document.querySelector(".msg-email");
const passMsg = document.querySelector(".msg-pass");
const passMsg2 = document.querySelector(".msg-pass2");
const btnMsg = document.querySelector(".btnSubmit-msg");

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  let dataSend = true;
  userMsg.innerText = "";
  emailMsg.innerText = "";
  passMsg.innerText = "";
  passMsg2.innerText = "";
  const usernameValue = usernameModal.value;
  const emailValue = emailModal.value;
  const passModalValue = passModal.value;
  const passModal2Value = passModal2.value;

  if (usernameValue.length === 0) {
    userMsg.innerText = "نام کاربری خود را وارد کنید";
    dataSend = false;
  }

  if (emailValue.length === 0) {
    emailMsg.innerText = "ایمیل خود را وارد کنید";
  } else if (emailValue.indexOf("@") === -1 || emailValue.indexOf(".") === -1) {
    emailMsg.innerText = "ایمیل خود را صحیح وارد کنید";
    dataSend = false;
  }

  if (passModalValue.length === 0) {
    passMsg.innerText = "رمز عبور خود را وارد کنید";
    dataSend = false;
  } else if (passModalValue.length <= 4) {
    passMsg.innerText = "رمز عبور قوی تری انتخاب کنید ";
    dataSend = false;
  }

  if (passModal2Value !== passModalValue) {
    passMsg2.innerText = "تکرار رمز عبور صحیح نیست";
    dataSend = false;
  } else if (passModal2Value === "") {
    passMsg2.innerText = "این گزینه نباید خالی باشد";
    dataSend = false;
  }

  if (dataSend === true) {
    btnMsg.innerText = "اطلاعات با موفقیت ثبت شد";
  }
});
