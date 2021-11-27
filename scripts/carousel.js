const shippingCardInfo =
  "FREE Shipping on orders over $49 shipped by Amazon In stock soon.";
const ratings = [
  "./images/icons/ratings/rating-0.png",
  "./images/icons/ratings/rating-0-5.png",
  "./images/icons/ratings/rating-1.png",
  "./images/icons/ratings/rating-1-5.png",
  "./images/icons/ratings/rating-2.png",
  "./images/icons/ratings/rating-2-5.png",
  "./images/icons/ratings/rating-3.png",
  "./images/icons/ratings/rating-3-5.png",
  "./images/icons/ratings/rating-4.png",
  "./images/icons/ratings/rating-4-5.png",
  "./images/icons/ratings/rating-5.png",
];
const featuredItems = [
  {
    title: "Pee-pee Teepee Rubber Ducky Blue - Cello Bag",
    description: "",
    price: "12.95",
    rating: "4",
    numOfRatings: "243",
    posInSet: 1,
    url: "./images/featured/rubber-ducky.jpg",
  },
  {
    title:
      "The Peepee Teepee For the Sprinkling  WeeWee: 5 Airplanes in Cellophane Bag",
    description: "",
    price: "9.95",
    rating: "4",
    numOfRatings: "101",
    posInSet: 2,
    url: "./images/featured/airplanes.jpg",
  },
  {
    title: "Pee-Pee Teepee Cars Blue - Cello Bag",
    description: "",
    price: "12.95",
    rating: "4",
    numOfRatings: "499",
    posInSet: 3,
    url: "./images/featured/cars.jpg",
  },
  {
    title: "Pee-Pee Teepee Fishing Blue - Cello Bag",
    description: "",
    price: "9.95",
    rating: "4",
    numOfRatings: "374",
    posInSet: 4,
    url: "./images/featured/fishing.jpg",
  },
  {
    title: "Beba Bean Pee-Pee Teepee Cellophane Bag - Green",
    description: "",
    price: "11.99",
    rating: "4",
    numOfRatings: "236",
    posInSet: 5,
    url: "./images/featured/green-black-camo.jpg",
  },
  {
    title: "Beba Bean Pee-pee Teepee Golf Green - Cello Bag, 5 Golf Teepees",
    description: "",
    price: "12.31",
    rating: "4",
    numOfRatings: "231",
    posInSet: 6,
    url: "./images/featured/golf.jpg",
  },
  {
    title:
      "The Peepee Teepee for the Sprinkling WeeWee: 5 Wild West in Cellophane Bag",
    description: "",
    price: "9.95",
    rating: "5",
    numOfRatings: "62",
    posInSet: 7,
    url: "./images/featured/wild-west.jpg",
  },
  {
    title: "Pee-Pee Teepee Cold Monkey Blue - Cello Bag",
    description: "",
    price: "12.95",
    rating: "4",
    numOfRatings: "83",
    posInSet: 8,
    url: "./images/featured/cold-monkey.jpg",
  },
  {
    title: "Pee-Pee Teepee Lil Monkey Green - Laundry Bag",
    description: "",
    price: "11.95",
    rating: "5",
    numOfRatings: "471",
    posInSet: 9,
    url: "./images/featured/monkey-banana.jpg",
  },
  {
    title:
      "Nuanchu 5 Pieces Baby Pee Covers with Rubber Band Baby Pee Cover for Boys Soft Newborn Pee Cover Washable Infant Pee Guard E…",
    description: "",
    price: "16.99",
    rating: "2.5",
    numOfRatings: "2",
    posInSet: 10,
    url: "./images/featured/traffic-get-out-go.jpg",
  },
];

const caruItems = document.querySelectorAll(".caru-item");
const rightBtn = document.querySelector(".btn-right");
const leftBtn = document.querySelector(".btn-left");

// onload fill in the first 5 featured
function fillFeaturedItems() {
  for (let i = 0; i < caruItems.length; i++) {
    let itemToFill = caruItems[i];
    let obj = featuredItems[i];
    let oldImg = caruItems[i].querySelector(`img`);
    let oldPrice = itemToFill.querySelector(".card-price");
    let oldTitle = itemToFill.querySelector(".card-title");
    let oldRatingImg = itemToFill.querySelector(".rating");
    let oldNumOfRatings = itemToFill.querySelector(".numOfRatings");
    let oldShipping = itemToFill.querySelector(".shipping-card");
    console.log(oldPrice);
    oldImg.src = `${obj.url}`;
    oldShipping.innerHTML = shippingCardInfo;
    oldPrice.innerHTML = `${obj.price}`;
    oldTitle.innerHTML = `${obj.title}`;
    oldRatingImg.src = `${ratings[obj.rating * 2]}`;
    oldNumOfRatings.innerHTML = `${obj.numOfRatings}`;
  }
}
fillFeaturedItems();

rightBtn.addEventListener("click", () => {
  for (i = 4; i >= 0; i--) {
    let oldItem = caruItems[i];
    let lastPos = parseInt(oldItem.getAttribute("aria-posinset"));
    let newItem = featuredItems[lastPos + 4];
    // fillCaruItems(oldItem, newItem);
    let oldImg = oldItem.querySelector(`img`);
    let oldPrice = oldItem.querySelector(".card-price");
    let oldTitle = oldItem.querySelector(".card-title");
    let oldRatingImg = oldItem.querySelector(".rating");
    let oldNumOfRatings = oldItem.querySelector(".numOfRatings");
    console.log(oldPrice, newItem.price);
    oldImg.src = `${newItem.url}`;
    oldImg.innerHTML = shippingCardInfo;
    // oldPrice.innerHTML = `${newItem.price}`;
    oldTitle.innerHTML = `${newItem.title}`;
    oldRatingImg.src = `${ratings[newItem.rating * 2]}`;
    oldNumOfRatings.innerHTML = `${newItem.numOfRatings}`;
    oldItem.setAttribute("aria-posinset", `${newItem.posInSet}`);
  }
});

leftBtn.addEventListener("click", () => {
  if (caruItems[0].getAttribute("aria-posinset") > 1) {
    for (i = 4; i >= 0; i--) {
      let oldItem = caruItems[i];
      let lastPos = parseInt(caruItems[i].getAttribute("aria-posinset"));
      let newItem = featuredItems[lastPos - 5 - 1];
      let oldImg = oldItem.querySelector(`img`);
      let oldPrice = oldItem.querySelector(".card-price");
      let oldTitle = oldItem.querySelector(".card-title");
      let oldRatingImg = oldItem.querySelector(".rating");
      let oldNumOfRatings = oldItem.querySelector(".numOfRatings");
      oldImg.src = `${newItem.url}`;
      oldImg.innerHTML = shippingCardInfo;
      // oldPrice.innerHTML = `${newItem.price}`;
      oldTitle.innerHTML = `${newItem.title}`;
      oldRatingImg.src = `${ratings[newItem.rating * 2]}`;
      oldNumOfRatings.innerHTML = `${newItem.numOfRatings}`;
      oldItem.setAttribute("aria-posinset", `${newItem.posInSet}`);
    }
  }
});
