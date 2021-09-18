const inner = document.getElementById("carouselInner");

for (let i = 1; i <= 10; i++) {
  const div = document.createElement("div");
  const img = document.createElement("img");

  if (i == 1) {
    div.className = "carousel-item active";
  } else {
    div.className = "carousel-item";
  }

  img.src = `/images/index/${i}.jpg`;
  img.id = "index";
  img.className = "img-fluid";

  div.appendChild(img);
  inner.appendChild(div);
}
