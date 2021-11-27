const featuredItems = [
  {
    title: "",
    description: "",
    price: "",
    rating: "",
    posInSet: 1,
    url: "",
  },
  {
    title: "",
    description: "",
    price: "",
    rating: "",
    posInSet: 2,
    url: "",
  },
  {
    title: "",
    description: "",
    price: "",
    rating: "",
    posInSet: 3,
    url: "",
  },
  {
    title: "",
    description: "",
    price: "",
    rating: "",
    posInSet: 4,
    url: "",
  },
  {
    title: "",
    description: "",
    price: "",
    rating: "",
    posInSet: 5,
    url: "",
  },
  {
    title: "",
    description: "",
    price: "",
    rating: "",
    posInSet: 6,
    url: "",
  },
  {
    title: "",
    description: "",
    price: "",
    rating: "",
    posInSet: 7,
    url: "",
  },
  {
    title: "",
    description: "",
    price: "",
    rating: "",
    posInSet: 8,
    url: "",
  },
  {
    title: "",
    description: "",
    price: "",
    rating: "",
    posInSet: 9,
    url: "",
  },
  {
    title: "",
    description: "",
    price: "",
    rating: "",
    posInSet: 10,
    url: "",
  },
];

const caruItems = document.querySelectorAll(".caru-item");

const rightBtn = document.querySelector(".btn-right");
const leftBtn = document.querySelector(".btn-left");

// function changeInner(item, newItem) {
//   item.setAttribute("aria-posinset", `${newItem.posInSet}`);
// }

rightBtn.addEventListener("click", () => {
  let count = 0;
  for (i = 4; i >= 0; i--) {
    let oldItem = caruItems[i];
    let lastPos = parseInt(caruItems[i].getAttribute("aria-posinset"));
    let newItem = featuredItems[lastPos * 2 + (count - 1)];

    oldItem.setAttribute("aria-posinset", `${newItem.posInSet}`);
    oldItem.innerHTML = `${newItem.posInSet}`;
    count++;
    console.log(i, oldItem, lastPos, newItem);
  }
});
leftBtn.addEventListener("click", () => {
  if (caruItems[0].getAttribute("aria-posinset") > 1) {
    for (i = 4; i >= 0; i--) {
      let oldItem = caruItems[i];
      let lastPos = parseInt(caruItems[i].getAttribute("aria-posinset"));
      let newItem = featuredItems[lastPos - 5 - 1];
      console.log(oldItem, lastPos, newItem);

      oldItem.setAttribute("aria-posinset", `${newItem.posInSet}`);
      oldItem.innerHTML = `${newItem.posInSet}`;
    }
  }
});

console.log(9 / 2 - (-1 - 1));
