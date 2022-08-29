$.getScript("/javascripts/data.js", function () {
  $(".gallery-container").append(`
    <button id="galleryPrevBtn"><i class="fa fa-arrow-left"></i></button>`);
  for (let i = 0; i < brand1.length; i++) {
    $(".gallery-container").append(
      `<div id="brand1-${i + 1}" class="galleryBox">
      <a href="/products/${i + 1}"><img src="${brand1[i].img}"/></a>
      </div>`
    );
  }
  $(".gallery-container").append(`
    <button id="galleryNextBtn"><i class="fa fa-arrow-right"></i></button>`);
  var divs = $(".gallery-container>div");
  var now = 0;
  divs.hide().first().show();
  $("button#galleryPrevBtn").click(function () {
    divs.eq(now).hide();
    now = now > 0 ? now - 1 : divs.length - 1;
    divs.eq(now).show();
  });
  $("button#galleryNextBtn").click(function () {
    divs.eq(now).hide();
    now = now + 1 < divs.length ? now + 1 : 0;
    divs.eq(now).show();
  });
});
