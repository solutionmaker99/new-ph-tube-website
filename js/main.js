allCatagoriesData = async () => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/categories`
  );
  const data = await res.json();
  const buttons = data.data;
  console.log(buttons);
  allButtonData(buttons);
  musicButtonData(buttons);
  comedyButtonData(buttons);
  drawingButtonData(buttons);
};

const btnContainer = document.getElementById("button-container");

// all button
allButtonData = (buttons) => {
  const button = document.createElement("button");
  button.classList = `bg-[red] text-white btn px-[20px] py-[5px] ml-6 hover:bg-red-600`;
  button.textContent = `${buttons[0].category}`;

  button.setAttribute("id", "btn-all");
  btnContainer.appendChild(button);
  button.addEventListener("click", () => {
    const id = buttons[0].category_id;
    loadAllCards(id);
  });
  console.log(button);
};

// music button
musicButtonData = (buttons) => {
  const button = document.createElement("button");
  button.classList = `btn px-[20px] py-[5px] ml-6`;
  button.textContent = `${buttons[1].category}`;
  btnContainer.appendChild(button);
  button.addEventListener("click", () => {
    const id = buttons[1].category_id;
    loadAllCards(id);
  });
  console.log(button);
};

// comedy button
comedyButtonData = (buttons) => {
  const button = document.createElement("button");
  button.classList = `btn px-[20px] py-[5px] ml-6`;
  button.textContent = `${buttons[2].category}`;
  btnContainer.appendChild(button);
  button.addEventListener("click", () => {
    const id = buttons[2].category_id;
    loadAllCards(id);
  });
  console.log(button);
};

// drawing button
drawingButtonData = (buttons) => {
  const button = document.createElement("button");
  button.classList = `btn px-[20px] py-[5px] ml-6`;
  button.textContent = `${buttons[3].category}`;
  btnContainer.appendChild(button);
  button.addEventListener("click", () => {
    const id = buttons[3].category_id;
    loadAllCards(id);
  });
  console.log(button);
};

loadAllCards = async (id) => {
  const res = await fetch(
    ` https://openapi.programming-hero.com/api/videos/category/${id}/`
  );
  const data = await res.json();
  const card = data.data;

  console.log(id, card[1]);
};

allCatagoriesData();
