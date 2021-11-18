window.onload = () => {
  const mobileSidebar = document.getElementById("mobile-sidebar");

  const menuBtn = document.getElementById("sm-menu-btn");

  const overlay = document.getElementById("overlay");

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
};
