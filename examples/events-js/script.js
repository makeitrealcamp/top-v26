// const button = document.querySelector("button")
// const counter = document.querySelector("h1")
// const input = document.querySelector("input")
// const textInput = document.querySelector("h2")


// let count = 0

// button.addEventListener("click", () => {
//   // console.dir(button)
//   count++
//   counter.textContent = count
// })

// input.addEventListener("change", (event) => {
//   textInput.textContent = event.target.value
// })

// textInput.addEventListener("mouseleave", () => {
//   console.log("Entro al elemento")
// })
const btn = document.querySelector('#append');
const squares = document.querySelectorAll('.square');

squares.forEach((square) => {
  square.addEventListener('mouseenter', () => {
    square.parentNode.removeChild(square);
  });
});

btn.addEventListener('click', () => {
  const square = document.createElement('div');
  square.classList.add('square');

  const squares = document.querySelector('.squares');
  squares.appendChild(square);

  // Bonus:
  square.addEventListener('mouseenter', () => {
    square.parentNode.removeChild(square);
  });
});