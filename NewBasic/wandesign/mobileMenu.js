window.onload = () => {
  var mobileSidebar = document.getElementById("mobile-sidebar");

  var menuBtn = document.getElementById("sm-menu-btn");
  console.log(menuBtn);
  var handleClick = () => {
    mobileSidebar.classList.add("is-active");
    console.log("handleClick");
  };

  menuBtn.addEventListener("click", handleClick);
};
