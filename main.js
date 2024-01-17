
let ip = document.getElementById("IP");
let Pais = document.getElementById("Pais");
let Continente = document.getElementById("Continente");
let ZonaHoraria = document.getElementById("Zona Horaria");

const solicitudAPI = () => {
  axios
    .get('https://itp-bdd-mjhj-01.000webhostapp.com/php-geoip-api/')
    .then(function (response) {
      console.log(response.data);
      ip.innerHTML = response.data.ip;
      pais.innerHTML = "País: " + response.data.pais;
      continente.innerHTML = "Continente: " + response.data.continent;
      zonahoraria.innerHTML = "Zona horaria: GMT -" + response.data.time_zone;
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {});
};

// Llama al evento load cada vez que se actualiza la página.
window.addEventListener('load', solicitudAPI);


