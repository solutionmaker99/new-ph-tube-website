allCatagoriesData = async () => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/categories`
  );
  const data = await res.json();
  const buttons = data.data;
  defaultLoadAllCards(buttons);
  allButtonData(buttons);
  musicButtonData(buttons);
  comedyButtonData(buttons);
  drawingButtonData(buttons);
};

const btnContainer = document.getElementById("button-container");

// all button
allButtonData = (buttons) => {
  const button = document.createElement("button");
  button.classList = `btn px-[20px] py-[5px] ml-6`;
  button.textContent = `${buttons[0].category}`;

  button.setAttribute("id", "btn-all");
  btnContainer.appendChild(button);
  button.addEventListener("click", () => {
    const id = buttons[0].category_id;
    loadAllCards(id);
  });
};

musicButtonData = (buttons) => {
  const button = document.createElement("button");
  button.classList = `btn px-[20px] py-[5px] ml-6`;
  button.textContent = `${buttons[1].category}`;
  btnContainer.appendChild(button);
  button.addEventListener("click", () => {
    const id = buttons[1].category_id;
    loadAllCards(id);
  });
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
};

// drawing button
drawingButtonData = (buttons) => {
  const button = document.createElement("button");
  button.classList = `btn px-[20px] py-[5px] ml-6`;
  // button.setAttribute("id", "btn-drawing");
  button.textContent = `${buttons[3].category}`;
  btnContainer.appendChild(button);
  button.addEventListener("click", () => {
    // window.location.href = "drawing.html";
    const videoContainer = document.getElementById("video-container");
    drawingContainer = document.getElementById("drawing-container");
    videoContainer.innerHTML = "";
    drawingContainer.innerHTML = `
    <div class="flex justify-center items-center flex-col md:mt-40 md:ml-40">
    <img class="w-36 h-36" src="../img/missing.svg" alt="missing" />
    <h2
      class="text-3xl text-center max-w-[433px] font-bold leading-[44px]"
    >
      Oops!! Sorry, There is no content here
    </h2>
  </div>
    
    `;
  });
};

defaultLoadAllCards = (buttons) => {
  const id = buttons[0].category_id;
  loadAllCards(id);
};
// const id = buttons[0].category_id;
//   loadAllCards(id);
// music button

loadAllCards = async (id) => {
  const res = await fetch(
    ` https://openapi.programming-hero.com/api/videos/category/${id}`
  );
  const data = await res.json();
  const cards = data.data;
  // console.log(cards);
  allCardDisplay(cards);
};

// const viewArr = [];
// sortArray = (allCards) => {
//   allCards.forEach((card) => {
//     const views = card.others.views;
//     console.log(views);
//   });
// };

allCardDisplay = (cards) => {
  drawingContainer = document.getElementById("drawing-container");
  drawingContainer.innerHTML = "";
  const videoContainer = document.getElementById("video-container");
  videoContainer.innerHTML = "";

  // const main = document.getElementById("main");

  // main.innerText = "";

  cards.forEach((card) => {
    // console.log(card);
    const isVerified = card.authors[0].verified;
    const div = document.createElement("div");
    div.classList = `card card-compact shadow-xl`;

    div.innerHTML = `
    <figure>
      <img
      class="w-[384px] h-[225px]"
        src="${card.thumbnail}"
        alt="video"/>
    </figure>
    <div class="flex mt-6">
     <div class="mr-6">
      <did class="ml-4" id="author-div">
        <img 
          class="w-12 h-12 rounded-full relative -top-5"
          src="${card.authors[0].profile_picture}"
          alt="author"
        />
      </div>
      <did class="max-w-[360px] pb-4">
        <h2 class="font-bold">${card.title}</h2>
        <div class="flex justify-between">
          <p>${card.authors[0].profile_name}</p>
          <img class='ml-3 ${
            isVerified ? "inline" : "hidden"
          }' src="img/verify.svg" />
        </div>
        <p>${card.others.views}</p>
      </div>
     </div>
    </div>
    `;

    videoContainer.appendChild(div);
  });
};

allCatagoriesData();
