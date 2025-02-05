// busca uma lista de elementos `.container`
const content = document.querySelectorAll(".container");

// percorre os elementos
content.forEach((element) => {
  // verfica se o elemento está aberto
  let open = false;

  // percorre os elementos e remove a classe de todos
  element.addEventListener("click", () => {
    content.forEach((el) => {
      el.classList.remove("content");
    });

    // se o elemento estiver fechado ele adiciona a classe
    if (open === false) {
      element.classList.add("content");
      open = true;
    }
    // se aberto ele fecha
    else {
      element.classList.remove("content");
      open = false;
    }
  });
});
