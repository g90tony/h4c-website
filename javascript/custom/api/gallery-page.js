$("document").ready(fetchGalleryPageImages);

function fetchGalleryPageImages() {
  const configurations = {
    url: "https://api.hopeforcommunities.co.ke/api/gallery/get/image/all/1",
    method: "GET",
    timeout: 0,
  };

  $.ajax(configurations).done(function (response) {
    const { data } = response;

    data.forEach((image) => {
      const image_src = image.path;
      $("#galleryPageGrid").append(
        `<div class="custom-gallery-item" id='${image.originalname}'>
          <img src="${image_src}" class='custom-gallery-image' id='${image.originalname}image'
        </div>`
      );
    });
  });
}
