function load_images() {
  coudinary_get_all_images();
}

document.onload(() => {
  load_images();
});
