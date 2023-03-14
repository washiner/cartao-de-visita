function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  //pega a imagem
  const img = document.querySelector("#profile img");

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver a light adicionar a imagem light
    img.setAttribute("src", "./assets/wass.png");
  } else {
    // se tiver ser o light
    img.setAttribute("src", "./assets/was.png");
    //     html.classList.add("light")
  }
}
