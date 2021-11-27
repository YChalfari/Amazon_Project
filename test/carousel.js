const shippingCardInfo =
  "FREE Shipping on orders over $49 shipped by Amazon In stock soon.";

const featuredItems = [
  {
    title: "Pee-pee Teepee Rubber Ducky Blue - Cello Bag",
    description: "",
    price: "12.95",
    rating: "4",
    numOfRatings: "",
    posInSet: 1,
    url: "",
  },
  {
    title:
      "The Peepee Teepee For the Sprinkling  WeeWee: 5 Airplanes in Cellophane Bag",
    description: "",
    price: "9.95",
    rating: "4",
    numOfRatings: "",
    posInSet: 2,
    url: "",
  },
  {
    title: "Pee-Pee Teepee Elephant Blue - Cello Bag",
    description: "",
    price: "12.95",
    rating: "4",
    numOfRatings: "499",
    posInSet: 3,
    url: "",
  },
  {
    title: "Pee-Pee Teepee Fishing Blue - Cello Bag",
    description: "",
    price: "9.95",
    rating: "4",
    numOfRatings: "374",
    posInSet: 4,
    url: "",
  },
  {
    title: "Beba Bean Pee-Pee Teepee Cellophane Bag - Green",
    description: "",
    price: "11.99",
    rating: "4",
    numOfRatings: "236",
    posInSet: 5,
    url: "",
  },
  {
    title: "Beba Bean Pee-pee Teepee Golf Green - Cello Bag, 5 Golf Teepees",
    description: "",
    price: "12.31",
    rating: "4",
    numOfRatings: "231",
    posInSet: 6,
    url: "",
  },
  {
    title:
      "The Peepee Teepee for the Sprinkling WeeWee: 5 Wild West in Cellophane Bag",
    description: "",
    price: "9.95",
    rating: "4",
    numOfRatings: "62",
    posInSet: 7,
    url: "",
  },
  {
    title: "Pee-Pee Teepee Firedog Blue - Cello Bag",
    description: "",
    price: "12.95",
    rating: "4",
    numOfRatings: "83",
    posInSet: 8,
    url: "",
  },
  {
    title: "Pee-Pee Teepee Lil Monkey Green - Laundry Bag",
    description: "",
    price: "11.95",
    rating: "4",
    numOfRatings: "471",
    posInSet: 9,
    url: "",
  },
  {
    title:
      "Nuanchu 5 Pieces Baby Pee Covers with Rubber Band Baby Pee Cover for Boys Soft Newborn Pee Cover Washable Infant Pee Guard E…",
    description: "",
    price: "16.99",
    rating: "2-5",
    numOfRatings: "2",
    posInSet: 10,
    url: "",
  },
];

const caruItems = document.querySelectorAll(".caru-item");
const rightBtn = document.querySelector(".btn-right");
const leftBtn = document.querySelector(".btn-left");

rightBtn.addEventListener("click", () => {
  for (i = 4; i >= 0; i--) {
    let oldItem = caruItems[i];
    let lastPos = parseInt(oldItem.getAttribute("aria-posinset"));
    let newItem = featuredItems[lastPos + 4];
    console.log(
      i,
      oldItem.getAttribute("aria-posinset"),
      lastPos,
      newItem.posInSet
    );
    oldItem.setAttribute("aria-posinset", `${newItem.posInSet}`);
    oldItem.innerHTML = `${newItem.posInSet}`;
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
