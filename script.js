const reviews = [
  {
    id: 1,
    name: "Juli Schneider",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "Claudia johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "Wagner jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "David anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];


const img = document.getElementById("image");
const author = document.getElementById("name");
const job = document.getElementById("func");
const info = document.getElementById("descrition");
const btns = document.getElementsByClassName("btns")
const left = document.querySelector(".left");
const rigth = document.querySelector(".rigth");
const random = document.querySelector(".center");

let counter = 0;

window.addEventListener("DOMContentLoaded", () => {
  const item = reviews[counter];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
})

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

left.addEventListener(`click`, () =>{
  counter--;
  if(counter < 0){
    counter = reviews.length -1;
  };
  showPerson(counter);
});

rigth.addEventListener(`click`, () =>{
  counter++
  if (counter > reviews.length - 1) {
    counter = 0;
  };
  showPerson(counter);
});

random.addEventListener(`click`, ()=>{
    counter = numberRandom(0, reviews.length +1);
    showPerson(counter);

})

function numberRandom(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
};