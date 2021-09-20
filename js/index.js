const inner = document.getElementById("carouselInner");

for (let i = 1; i <= 4; i++) {
  const div = document.createElement("div");
  const img = document.createElement("img");

  if (i == 1) {
    div.className = "carousel-item active";
  } else {
    div.className = "carousel-item";
  }

  img.src = `https://razvanmudura.github.io/Website-Oculus-Studio/images/main/${i}.jpg`;
  img.id = "imgMain";
  img.className = "img-fluid";

  div.appendChild(img);
  inner.appendChild(div);
}
