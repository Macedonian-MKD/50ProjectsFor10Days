const container = document.querySelector(".container");

for (let i = 0; i < 15; i++) {
  const image = document.createElement("img");
  image.src = `https://source.unsplash.com/random/30${i}x30${i}`;
  container.append(image);
}
