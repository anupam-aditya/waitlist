$(document).click(function()
{
  $(".points-text-1").addClass("flicker");
  $(".points-text-2").addClass("flicker");
  setTimeout(function()
  {
    $(".points-text-1").removeClass("flicker");
    $(".points-text-2").removeClass("flicker");
  },400);
});
function classToggle() {
  const navs = document.querySelectorAll('.Navbar__Items')

  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}

$(".Navbar__Button .Navbar-button").click(function()
{
  fetch('D:\DC downloads\Tutorials\[FreeCourseSite.com] Udemy - The Complete 2020 Web Development Bootcamp\Web Development\SaveMoney\waitlist\waitlist-register.html');
});

document.querySelector('.Navbar__Link-toggle')
  .addEventListener('click', classToggle);
