var smallBlock = document.querySelectorAll(".small-block"),
  i = 0;

down.addEventListener("click", function () {
  smallBlock[i].style.display = "none";
  i = i < smallBlock.length - 1 ? i + 1 : 0;
  smallBlock[i].style.display = "block";
});

up.addEventListener("click", function () {
  smallBlock[i].style.display = "none";
  i = i > 0 ? i - 1 : smallBlock.length - 1;
});
one.addEventListener("click", function () {
  smallBlock[0].style.display = "none";
});
two.addEventListener("click", function () {
  smallBlock[1].style.display = "none";
});
three.addEventListener("click", function () {
  smallBlock[2].style.display = "none";
});
four.addEventListener("click", function () {
  smallBlock[3].style.display = "none";
});

$(document).ready(function () {
  var d = new Date();
  var day = new Array(
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  );
  var month = new Array(
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  );
  var today =
    day[d.getDay()] +
    "," +
    " " +
    month[d.getMonth()] +
    " " +
    d.getDate() +
    "," +
    " " +
    d.getFullYear();
  document.getElementById("date").innerHTML = today;
  // подключили дату, сайт который помог http://www.seomark.ru/data.html

  (function () {
    var d = this.document,
      o = this.navigator.userAgent.match(/MSIE (6|7|8)/) ? true : false,
      s = d.createElement("script");

    s.src = "https://www.gismeteo.ru/informers/simple/install/";
    s.type = "text/javascript";
    s[o ? "defer" : "async"] = true;
    s[o ? "onreadystatechange" : "onload"] = function () {
      try {
        new GmI({
          slug: "c4695b4cbab0cabea31fce3d01bd070f",
          type: "88x31-1",
          lang: "ru",
        });
      } catch (e) {}
    };

    d.body.appendChild(s);
  })();

  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 4,
    autoplay: {
      delay: 2000,
      disableOnInteraction: true,
    },
    loop: true,
    speed: 1000,

    breakpoints: {
      // when window width is >= 320px
      250: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // when window width is >= 480px
      767: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      // when window width is >= 640px
      991: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1201: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
    },
    // Keyboard
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });

  var swiper = new Swiper(".swiper-columns", {
    // Optional parameters
    slidesPerView: 1,
    autoplay: {
      delay: 2000,
      disableOnInteraction: true,
    },
    loop: true,
    speed: 1000,
  });

  var swiper = new Swiper(".recommended-swiper", {
    // Optional parameters
    slidesPerView: 3,
    autoplay: {
      delay: 2000,
      disableOnInteraction: true,
    },
    loop: true,
    speed: 1000,
    breakpoints: {
      // when window width is >= 320px
      250: {
        slidesPerView: 2,
      },
      // when window width is >= 320px
      576: {
        slidesPerView: 2,
      },
      // when window width is >= 480px
      767: {
        slidesPerView: 3,
      },
      // when window width is >= 640px
      991: {
        slidesPerView: 3,
      },
    },
  });

  $(document).ready(function () {
    var tabsItem = $(".recommended-list__block");
    var contentItem = $(".recommended-main");

    tabsItem.on("click", function (event) {
      var activeContent = $(this).attr("data-target");
      contentItem.removeClass("active");
      tabsItem.removeClass("recommended-list__block_active");
      $(this).addClass("recommended-list__block_active");
      $(activeContent).addClass("active");
    });
  });

  // var hotelSlider = new Swiper(".hotel-slider", {
  //   // Optional parameters
  //   direction: "horizontal",
  //   loop: true,
  //   // Navigation arrows
  //   navigation: {
  //     nextEl: ".hotel-slider__button_next",
  //     prevEl: ".hotel-slider__button_prev",
  //   },
  //   // Keyboard
  //   keyboard: {
  //     enabled: true,
  //     onlyInViewport: true,
  //   },

  //   speed: 800,
  //   // grabCursor: true,
  //   // simulateTouch: false,
  // });
  // var reviewsSlider = new Swiper(".reviews-slider", {
  //   // Optional parameters
  //   direction: "horizontal",
  //   loop: true,
  //   // Navigation arrows
  //   navigation: {
  //     nextEl: ".reviews-slider__button_next",
  //     prevEl: ".reviews-slider__button_prev",
  //   },
  //   // Keyboard
  //   keyboard: {
  //     enabled: true,
  //     onlyInViewport: true,
  //   },

  //   speed: 800,
  //   // grabCursor: true,
  //   // simulateTouch: false,
  // });

  // var menuButton = document.querySelector(".menu-button");
  // menuButton.addEventListener("click", function () {
  //   document
  //     .querySelector(".navbar-bottom")
  //     .classList.toggle("navbar-bottom_visible");
  // });

  // var modalButton = $("[data-toggle=modal]");
  // var closeModalButton = $(".modal__close");
  // modalButton.on("click", openModal);
  // closeModalButton.on("click", closeModal);

  // function openModal() {
  //   var modalOverlay = $(".modal__overlay");
  //   var modalDialog = $(".modal__dialog");
  //   modalOverlay.addClass("modal__overlay_visible");
  //   modalDialog.addClass("modal__dialog_visible");
  // }

  // function closeModal(event) {
  //   event.preventDefault();
  //   var modalOverlay = $(".modal__overlay");
  //   var modalDialog = $(".modal__dialog");
  //   modalOverlay.removeClass("modal__overlay_visible");
  //   modalDialog.removeClass("modal__dialog_visible");
  // }
  // // закрыть окно с промощью Esc
  // document.addEventListener("keydown", function (closeModal) {
  //   if (closeModal.keyCode === 27) {
  //     var modalOverlay = $(".modal__overlay");
  //     var modalDialog = $(".modal__dialog");
  //     modalOverlay.removeClass("modal__overlay_visible");
  //     modalDialog.removeClass("modal__dialog_visible");
  //   }
  // });

  // // Обработка форм

  // $(".phone").mask("+7(999)999-99-99", {
  //   translation: {
  //     9: {
  //       pattern: /[0-9*]/,
  //     },
  //   },
  // });
  // $(".form").each(function () {
  //   $(this).validate({
  //     errorClass: "invalid",
  //     rules: {
  //       name: {
  //         required: true,
  //         minlength: 3,
  //       },
  //       phone: {
  //         required: true,
  //         minlength: 16,
  //       },
  //     },
  //     messages: {
  //       name: {
  //         required: "Please specify your name",
  //         minlength: jQuery.validator.format(
  //           " Minimum length {0} letters!"
  //         ),
  //       },
  //       email: {
  //         required: "We need add your email",
  //         email: "Email format name@domain.com",
  //       },
  //       phone: {
  //         required: " Phone is required",
  //         minlength: jQuery.validator.format(
  //           " Minimum length {0} numbers!"
  //         ),
  //       },
  //     },
  //   });
  // });
  // AOS.init();
  // $(function () {
  //   $('.lazy').Lazy();
  // });

  // $(".map").mousemove(function (event) {
  //   $(".map__google").append('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.54144461325!2d98.29703101470963!3d7.8382577086571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305025650c33dbab%3A0xa67a542329d011e1!2z0J_RhdGD0LrQtdGCLCDQmtCw0YDQvtC9LCDQntGC0LXQu9GMINCl0LjQu9GC0L7QvQ!5e0!3m2!1sru!2sby!4v1596717665190!5m2!1sru!2sby" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0" class="map__google"></iframe>');
  // });
});
