"use strict";function e(e){$(e).each((function(e){$(this).on("click",(function(t){t.preventDefault(),$(".tabs__inner").eq(e).toggleClass("active"),$(".tabs__outer").eq(e).toggleClass("active")}))}))}$(document).ready((function(){function e(e){$(e).validate({rules:{name:{required:!0,minlength:2},tel:"required",email:{required:!0,email:!0}},messages:{name:{required:"Пожалуйста, введите свое имя",minlength:jQuery.validator.format("Введите {0} символа!")},tel:"Пожалуйста, введите свой номер телефона",email:{required:"Пожалуйста, введите свой email",email:"Неправильно введен адрес почты"}}})}e(".modal-order .form"),e("#consultation-form"),e(".modal-consultation .form"),$("input[name=tel]").mask("+7 (999) 999-99-99")})),$(".consult-btn").on("click",(function(){$(".modal-consultation").fadeIn("slow")})),$(".consult-btn-with-modal").on("click",(function(){$(".modal-consultation").fadeIn("slow")})),$(".close-btn").on("click",(function(){$(".modal-consultation, .modal-order, .modal-thankYou").fadeOut("slow")})),$(".price-btn").each((function(e){$(this).on("click",(function(){$(".modal-order .modal__text").text($(".tabs__title").eq(e).text()),$(".modal-order").fadeIn("slow")}))})),$(document).ready((function(){$(".slider__container").slick({speed:500,fade:!0,cssEase:"linear",adaptiveHeight:!0,responsive:[{breakpoint:820,settings:{dots:!0,arrows:!1}}]})})),$(document).ready((function(){$(window).scroll((function(){$(this).scrollTop()>1600?$(".icon-up").fadeIn("slow"):$(".icon-up").fadeOut("slow")})),$((function(){$("a[href^='#']").click((function(){var e=$(this).attr("href");return $("html, body").animate({scrollTop:$(e).offset().top+"px"}),!1}))}))})),$("div.catalogue__tabs").on("click","button:not(.active)",(function(){$(this).addClass("active").siblings().removeClass("active").closest("div.catalogue__container").find("div.tabs__content").removeClass("active").eq($(this).index()).addClass("active")})),e(".tabs__back-link"),e(".tabs__link"),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".icon-up");window.addEventListener("scroll",(function(){window.pageYOffset>=1060?e.classList.add("active"):e.classList.remove("active")}),{passive:!0}),e.addEventListener("click",(function(e){e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})})),window.addEventListener("scroll",(function(){($(window).scrollTop()<=3e3||$(window).scrollTop()>=4730)&&($(".wow").removeClass("animated"),$(".wow").removeAttr("style"),(new WOW).init())}))}));