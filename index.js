$(document).ready(function () {
  $("#contact_us").click(function () {
    $("#contact_form_container").fadeIn();
    $("#background_blur").fadeIn();
  });
  $(document).mouseup(function (e) {
    var container = $("#contact_form_container");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      container.fadeOut();
      $("#background_blur").fadeOut();
    }
  });

  $(".overlay").css("display", "none");

  $(".slider_images img").hover(
    function () {
      var offset = $(this).offset();
      var width = $(this).width();
      var height = $(this).height();

      $(".overlay").css({
        top: offset.top,
        left: offset.left,
        width: width,
        height: height,
        display: "flex",
      });
    },
    function () {
      $(".overlay").css("display", "none");
    }
  );
  $(".slider_images img").on("click touchstart", function () {
    var offset = $(this).offset();
    var width = $(this).width();
    var height = $(this).height();

    $(".overlay").css({
      top: offset.top,
      left: offset.left,
      width: width,
      height: height,
      display: "flex",
    });
  });

  var totalImages = $(".slider_images img").length;
  var imagesPerPage = Math.ceil(totalImages / 3);

  $(".scroll-circle").on("click", function () {
    var index = $(this).data("index");
    var scrollLeft = (index * $(".slider_images").width()) / 3;

    $(".slider_images").animate({ scrollLeft: scrollLeft }, 500);

    $(".scroll-circle").removeClass("active");
    $(this).addClass("active");
  });

  var images = [
    "./assets/Untitled design.png",
    "./assets/Untitled design (1).png",
    "./assets/Untitled design (2).png",
  ];
  $(".product_img").html('<img src="' + images[0] + '" alt="Product Image">');

  $(".product_card > div").click(function () {
    $(".product_card > div").removeAttr("id");
    $(this).attr("id", "active");
    var index = $(this).index();
    var imgSrc = images[index % images.length];
    $(".product_img")
      .empty()
      .append('<img src="' + imgSrc + '" alt="Product Image">');
  });
});
