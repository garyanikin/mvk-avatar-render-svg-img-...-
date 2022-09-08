function experiment() {
  const $content = document.getElementById("content");
  if (render) {
    for (let i = 0; i < 1000; i++) {
      $content.append(render());
    }
  }
}

document.addEventListener("DOMContentLoaded", experiment);
