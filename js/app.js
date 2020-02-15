function submitForm(e) {
  const el = document.getElementById("email");
  alert("hey again");
  e.preventDefault();
  return false;
  //
}

const element = document.querySelector("form");
element.addEventListener("submit", event => {
  event.preventDefault();
  const email = event.target.children[0].value;

  const messenger = document.getElementById("messenger");

  fetch(`/.netlify/functions/sendSong?email=${email}`)
    .then(response => {
      return response.json();
    })
    .then(({ success }) => {
      if (success) {
        messenger.classList.add("bg-green");
        messenger.textContent =
          "Zatheka. Sit back and wait (up to a few minutes) for the song in your email!";
        element.classList.add("hide");
      }

      if (!success) {
        messenger.classList.add("bg-red");
        messenger.textContent =
          "Shaaa!. Something did not add up. Please try again after a few minutes or DM me Twitter/IG/FB if problem continues!";
      }
    })
    .catch(error => {
      console.log(error);
      messenger.classList.add("bg-red");
      messenger.textContent =
        "My Bad! This one is on us, lemme see what went wrong...";
    });

  // alert(el.target);
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-420px";
  }
  prevScrollpos = currentScrollPos;
};
// STICKY
$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  if (scroll >= 50) {
    $(".sticky").addClass("nav-sticky");
  } else {
    $(".sticky").removeClass("nav-sticky");
  }
});

// SmoothLink
$(".navbar-nav a").on("click", function(event) {
  var $anchor = $(this);
  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: $($anchor.attr("href")).offset().top - 0
      },
      1500,
      "easeInOutExpo"
    );
  event.preventDefault();
});

// scrollspy
$("#navbarCollapse").scrollspy({
  offset: 20
});

//owlCarousel
$(document).ready(function() {
  $("#owl-demo").owlCarousel({
    autoPlay: 3000, //Set AutoPlay to 3 seconds

    items: 3,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 1]
  });
});
