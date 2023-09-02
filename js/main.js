allCatagoriesData = async () => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/categories`
  );
  const data = await res.json();
  const buttons = data.data;
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
  button.textContent = `${buttons[3].category}`;
  btnContainer.appendChild(button);
  button.addEventListener("click", () => {
    const id = buttons[3].category_id;
    loadAllCards(id);
  });
};

loadAllCards = async (id) => {
  const res = await fetch(
    ` https://openapi.programming-hero.com/api/videos/category/${id}`
  );
  const data = await res.json();
  const cards = data.data;
  console.log(cards);

  // separateCard(card);

  allCardDisplay(cards);
};

allCardDisplay = (cards) => {
  const videoContainer = document.getElementById("video-container");
  videoContainer.innerText = "";

  cards.forEach((card) => {
    console.log(card);

    console.log(card.authors[0].verified);

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
      <did class="max-w-[360px]">
        <h2 class="font-bold">${card.title}</h2>
        <div class="flex justify-between">
          <p>${card.authors[0].profile_name}</p><img src='img/varify.svg'/>
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
