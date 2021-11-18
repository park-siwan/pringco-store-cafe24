window.onload = () => {
  const storeMenuList = document.getElementsByClassName("storeMenuLink");
  const smStore = document.getElementsByClassName("sm-store");
  const { href } = window.location;
  const { pathname } = window.location;
  const mobileSidebar = document.getElementById("mobile-sidebar");
  const menuBtn = document.getElementById("sm-menu-btn");
  const overlay = document.getElementById("overlay");
  console.log(smStore);
  console.log(smStore[0].children[0]);
  const handleClickOpen = () => {
    console.log("active");
    mobileSidebar.classList.add("is-active");
    overlay.classList.add("is-active");
  };
  const handleClickClose = () => {
    mobileSidebar.classList.remove("is-active");
    overlay.classList.remove("is-active");
  };
  menuBtn.addEventListener("click", handleClickOpen);
  overlay.addEventListener("click", handleClickClose);

  if (pathname === "/category/all/24" || pathname === "/category/all/24/") {
    storeMenuList[0].classList.add("is-active");
    smStore[0].children[0].classList.add("is-select");
    return;
  } else {
    for (let item of storeMenuList) {
      if (item.href === href) {
        item.classList.add("is-active");
        return;
      }
    }
  }
};
