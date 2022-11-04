const container = document.querySelector(".container");
const coffees = [
  {
    name: "coffee1",
    image: "images/coffee1.jpg"
  },
  {
    name: "coffee2",
    image: "images/coffee2.jpg"
  },
  {
    name: "coffee3",
    image: "images/coffee3.jpg"
  },
  {
    name: "coffee4",
    image: "images/coffee4.jpg"
  },
  {
    name: " coffee5",
    image: "images/coffee5.jpg"
  },
  {
    name: " coffee6",
    image: "images/coffee6.jpg"
  },
  {
    name: "coffee7",
    image: "images/coffee7.jpg"
  },
  {
    name: "coffee8",
    image: "images/coffee8.jpg"
  },
  {
    name: "coffee9",
    image: "images/coffee9.jpg"
  }
];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
