const sizes = [
  20, 24, 28, 32, 34, 36, 38, 40, 42, 44, 48, 50, 56, 64, 72, 80, 88, 96, 100,
  108, 158,
];

sizes.forEach(render("default"));

sizes.forEach(render("stories"));

function render(id) {
  const root = document.getElementById(id);
  return (size) => {
    const avatar = getAvatar(size, id);
    root.append(avatar);
  };
}

function getAvatar(size, id) {
  const outline = id === "stories" ? "outline stories_new" : "outline";

  let outline_size = "";
  if (size > 72) {
    outline_size = "l";
  } else if (size > 44) {
    outline_size = "m";
  } else if (size > 24) {
    outline_size = "s";
  }

  const layout = `<div class="nft-avatar" style="width: ${size}px; height: ${size}px;">
    <img
      class="source"
      src="./assets/75295e9730af984deb61807cfc7d5c19.png"
      alt=""
    />
    <div class="${outline} outline_${outline_size}"/>
  </div>`;

  return toDom(layout);
}

function toDom(str) {
  return document.createRange().createContextualFragment(str);
}
