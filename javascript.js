let input = document.querySelector("input");
let ciudadName = document.querySelector("#ciudad");
let temperatura = document.querySelector("#temperatura");
let wicon = document.querySelector("#wicon");
let desc = document.querySelector("#descripcion");
let button = document.querySelector("button");

function cargarCiudad() {
  if (!input.value) {
    alert("Por favor, ingrese una ciudad");
    return;
  }
  $.getJSON(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es`,
    function (data) {
      ciudadName.textContent = data.name;
      temperatura.innerHTML = data.main.temp.toFixed(1) + "<sup>°C</sup>";
      let icon = data.weather[0].icon;
      wicon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      desc.textContent = data.weather[0].description;
    }
  ).fail(function (jqXHR, textStatus, errorThrown) {
    alert("La ciudad ingresada no existe.");
  });
}

button.addEventListener("click", function () {
  document.querySelector(".container").style.visibility = "visible";
  cargarCiudad();
  input.value = "";
});
