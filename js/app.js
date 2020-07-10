let total = document.getElementById("counter");
let addCount = document.querySelector(".nextBtn");
let lowerCount = document.querySelector(".prevBtn");

let state = 0

const increaseCount = () => {
  state++;
  if (state < 0) {
    total.style.color = "red";
  } else {
    total.style.color = "black";
  };
  total.innerHTML = state;  
};

const decreaseCount = () => {
  state--;
  if (state < 0) {
    total.style.color = "red";
  } else {
    total.style.color = "black";
  };
  total.innerHTML = state;  
};

addCount.addEventListener("click", increaseCount);
lowerCount.addEventListener("click", decreaseCount);
