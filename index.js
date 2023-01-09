let button = 0;
document.getElementById("btnIncrease").addEventListener("click", function () {
  button++;
  document.querySelector("h1").innerHTML = button;
});

document.getElementById("btnDecrease").addEventListener("click", function () {
  if (button <= 0) {
    alert(
      "Sorry Brother You can't Decrease Number Blow 0 Please Increase First Than Decrease the number Because I use If elase condition😃😃😃"
    );
  } else {
    button--;
    document.querySelector("h1").innerHTML = button;
  }
});
