$("document").ready(fetchIndexPageGalleryImages);

function fetchIndexPageGalleryImages() {
  const configurations = {
    url: "http://localhost:3000/api/gallery/get/image/all/1",
    method: "GET",
    timeout: 0,
  };

  $.ajax(configurations).done(function (response) {
    const { data } = response;

    for (let i = 0; i < 6; i++) {
      const image = data[i];

      const image_src = image.path;

      $("#gallerySectionGrid").append(
        `<div class="custom-gallery-item" id='${image.originalname}'>
          <img src="${image_src}" class='custom-gallery-image' id='${image.originalname}image' />
        </div>`
      );
    }
  });
}
