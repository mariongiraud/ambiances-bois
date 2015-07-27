$(function() {
  var $overlay = $("#overlay");
  var $images = $(".js-gallery img");
  var galerieLength = $images.length - 1;
  var $image_container = $overlay.find('.image-container');
  var $overlay_title = $overlay.find('.js-image-title');

  var setOvervaleyTitleAndImage = function($image) {
    var title = $image.attr('alt');
    $image_container.html($image);
    $overlay_title.text(title);
  }

  $images.click(function(event) {
    var $image = $(this).clone();
    setOvervaleyTitleAndImage($image);

    $overlay.show();
  });

  $("#overlay .next").click(function() {
    var index = $(this).parent().find('img').attr('data-index');
    if (index < galerieLength) {
      var next_index = parseInt(index) + 1;
    } else {
      var next_index = 0;
    }
    var $next_image = $('img[data-index='+ next_index +']').clone();
    setOvervaleyTitleAndImage($next_image);
  });

  $("#overlay .previous").click(function() {
    var index = $(this).parent().find('img').attr('data-index');
    if (index > 0) {
      var prev_index = parseInt(index) - 1;
    } else {
      var prev_index = galerieLength;
    }
    var $prev_image = $('img[data-index='+ prev_index +']').clone();
    setOvervaleyTitleAndImage($prev_image);
  });

  $("#overlay .close").click(function() {
    $overlay.hide();
  });
});
