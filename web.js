let page = 0; // 0:about me, 1:experience, 2:skills, 3:projects, 4:contact
let carouselPage = 1; // 1:顯示前三個 2:顯示後三個
const bar = document.querySelector("#bar");
const leftArr = document.querySelector(".fa-chevron-left");
const rightArr = document.querySelector(".fa-chevron-right");
const carousel = document.querySelector(".carousel");
let menuItem = document.querySelectorAll(".menu_item");

// change page
for (let i = 0; i < menuItem.length; i++) {
  const changePage = () => {
    page = i;
    console.log("cuttrnt page =", page);
  };

  menuItem[i].addEventListener("click", changePage);
  menuItem[i].addEventListener("click", moveMenuBar);
  menuItem[i].addEventListener("click", changeMenuItemStyle);
}

leftArr.addEventListener("click", carouselSlideLeft);
rightArr.addEventListener("click", carouselSlideRight);

function moveMenuBar() {
  bar.style.top = page * 32 + 2 + "px";
}

function changeMenuItemStyle() {
  for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].classList.remove("menu_selected");
  }
  menuItem[page].classList.add("menu_selected");
}

// 按menu控制右邊畫面
$(".menu_item").on("click", function (e) {
  let linkScroll;
  if (page === 0) {
    linkScroll = $(".about_me").offset().top;
  } else if (page === 1) {
    linkScroll = $(".experience").offset().top;
  } else if (page === 2) {
    linkScroll = $(".skills").offset().top;
  } else if (page === 3) {
    linkScroll = $(".projects").offset().top;
  } else {
    linkScroll = $(".contact").offset().top;
  }

  $("html,body").stop().animate(
    // 加入stop() 讓選單滑動時不用等到動畫全程跑完就可以點選其他選單
    {
      scrollTop: linkScroll,
    },
    700
  );
});

function carouselSlideLeft() {
  if (carouselPage === 2) {
    carousel.style.left = "0";
    carouselPage = 1;
    document
      .querySelector(".fa-chevron-left")
      .classList.add("remove_hover_style");
    document
      .querySelector(".fa-chevron-right")
      .classList.remove("remove_hover_style");
  }
}

function carouselSlideRight() {
  if (carouselPage === 1) {
    carousel.style.left = "-330px";
    carouselPage = 2;
    document
      .querySelector(".fa-chevron-left")
      .classList.remove("remove_hover_style");
    document
      .querySelector(".fa-chevron-right")
      .classList.add("remove_hover_style");
  }
}

function doTest() {
  console.log("test");
}
