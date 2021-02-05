$.ajax({
  type: 'GET',
  url: 'https://89b4e45cfe85.ngrok.io/api/v1/iam/waitlist/8ca4401a-fddc-42fa-9f43-f6afbc75e7be/',
  success: function(data)
  {
    var waitlist = data.waitlist_number;
    $(".top-cols .waitlist-heading").text("#"+waitlist);
    $(".top-cols-1 .waitlist-heading").text(data.share_score);
    var eVerification = data.is_email_verified;
    if(eVerification)
      $(".waitlist-table-covering").attr("display","none");
  },
  error: function()
  {
    console.log("error loading API");
  }
});
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
