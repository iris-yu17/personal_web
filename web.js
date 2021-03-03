let page = 0; // 0:about me, 1:experience, 2:skills, 3:projects, 4:contact
const bar = document.querySelector("#bar");

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

function moveMenuBar() {
  bar.style.top = page * 32 + 2 + "px";
}

function changeMenuItemStyle() {
  for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].classList.remove("menu_selected");
  }
  menuItem[page].classList.add("menu_selected");
}

function doTest() {
  console.log("test");
}
