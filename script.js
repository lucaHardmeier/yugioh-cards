const monsters = [
  {
    name: "30,000-Year White Turtle",
    desc: "A huge turtle that has existed for more than 30,000 years.",
    atk: 1250,
    def: 2100,
    attribute: "WATER",
    image_url_cropped:
      "https://images.ygoprodeck.com/images/cards_cropped/11714098.jpg",
  },
  {
    name: "7 Colored Fish",
    desc: "A rare rainbow fish that has never been caught by mortal man.",
    atk: 1800,
    def: 800,
    attribute: "WATER",
    image_url_cropped:
      "https://images.ygoprodeck.com/images/cards_cropped/23771716.jpg",
  },
  {
    name: "Absolute King - Megaplunder",
    desc: "''The king of dinosaurs that rules over the Earth. Its mighty roar makes its foes tremble in fear!''",
    atk: 2000,
    def: 1500,
    attribute: "EARTH",
    image_url_cropped:
      "https://images.ygoprodeck.com/images/cards_cropped/27553701.jpg",
  },
  {
    name: "Abyss Flower",
    desc: "A rarely seen flower that blossoms quietly on the edge of darkness.",
    atk: 750,
    def: 400,
    attribute: "EARTH",
    image_url_cropped:
      "https://images.ygoprodeck.com/images/cards_cropped/40387124.jpg",
  },
  {
    name: "Acid Crawler",
    desc: "A giant caterpillar that secretes an acid mist that melts anything.",
    atk: 900,
    def: 700,
    attribute: "EARTH",
    image_url_cropped:
      "https://images.ygoprodeck.com/images/cards_cropped/77568553.jpg",
  },
  {
    name: "Acrobat Monkey",
    atk: 400,
    def: 1800,
    level: 3,
    image_url_cropped:
      "https://images.ygoprodeck.com/images/cards_cropped/47372349.jpg",
  },
  {
    name: "Air Eater",
    desc: "A monster that feeds on oxygen, suffocating any who stand near.",
    atk: 2100,
    def: 1600,
    attribute: "WIND",
    image_url_cropped:
      "https://images.ygoprodeck.com/images/cards_cropped/8353769.jpg",
  },
  {
    name: "Aitsu",
    desc: "He seems to be very unreliable, but he might have incredible potential.",
    atk: 100,
    def: 100,
    attribute: "FIRE",
    image_url_cropped:
      "https://images.ygoprodeck.com/images/cards_cropped/48202661.jpg",
  },
  {
    name: "Akakieisu",
    desc: "A sorcerer who utters spells that render monsters unconscious.",
    atk: 1000,
    def: 800,
    attribute: "DARK",
    image_url_cropped:
      "https://images.ygoprodeck.com/images/cards_cropped/38035986.jpg",
  },
  {
    name: "Akihiron",
    desc: "This strange creature hides in the deep, dark corners of the seven seas.",
    atk: 1700,
    def: 1400,
    attribute: "WATER",
    image_url_cropped:
      "https://images.ygoprodeck.com/images/cards_cropped/36904469.jpg",
  },
];

// const renderCards = (filteredMonsters) =>{
//   for (const monster of filteredMonsters) {
//     const template = document.querySelector("#yugioh-card");
//     const clone = template.content.cloneNode(true);

//     clone.querySelector(".card-title").innerText = monster.name;
//     clone.querySelector("img").src = monster.image_url_cropped;
//     clone.querySelector(".atk").innerText = monster.atk;
//     clone.querySelector(".def").innerText = monster.def;

//     cardContainer.appendChild(clone);
//   }
// }

// cardContainer.innerHTML = `<div>
//                             <h1>${monsters[5].name}</h1>
//                             <h4>${monsters[6].name}</h4>
//                           </div>`;

// const customDiv = document.createElement("div");
// const customH1 = document.createElement("h1");
// const customH4 = document.createElement("h4");
// customH1.textContent = monsters[5].name;
// customH4.textContent = monsters[6].name;
// customDiv.appendChild(customH1);
// customDiv.appendChild(customH4);
// cardContainer.appendChild(customDiv);

// const newTemplate = document.querySelector("#new-template");
// const newClone = newTemplate.content.cloneNode(true);
// newClone.querySelector("h1").innerText = monsters[1].name;
// newClone.querySelector("h4").innerText = monsters[6].name;
// cardContainer.appendChild(newClone);

const cardContainer = document.querySelector("#cards-container");

const handleSubmit = () => {
  const minAtkValue = Number(document.querySelector("#minAtk").value);
  const maxAtkValue = +document.querySelector("#maxAtk").value;
  const maxDefValue = 1000;

  if (!minAtkValue || !maxAtkValue || !maxDefValue) {
    alert("Completá todos los datos antes de continuar");
    return;
  }
  console.log(minAtkValue);
  console.log(maxAtkValue);

  let contador = 0;

  for (const monster of monsters) {
    if (
      monster.atk >= minAtkValue &&
      monster.atk <= maxAtkValue &&
      monster.def <= maxDefValue
    ) {
      const template = document.querySelector("#yugioh-card");
      const clone = template.content.cloneNode(true);

      clone.querySelector(".card-title").innerText = monster.name;
      clone.querySelector("img").src = monster.image_url_cropped;
      clone.querySelector(".atk").innerText = monster.atk;
      clone.querySelector(".def").innerText = monster.def;
      contador++; // contador = contador + 1 // contador += 1
      console.log("card nro: ", contador);
      cardContainer.appendChild(clone);
    }
  }
  console.log(contador);
};
// Falsy value
/*
String
  "asasda" "  "  true
  "" false
Number
  15 -15 true
  0 NaN false
Objects
{} [] true

*/

const submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", handleSubmit);
