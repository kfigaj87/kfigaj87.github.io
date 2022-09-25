//wersja 1

$(document).ready(function () {
  let button = document.querySelector("#btn");
  let div = document.createElement("div");
  div.setAttribute("id", "dane-programisty");

  button.after(div);

  const getData = () => {
    fetch(
      "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php"
    )
      .then((response) => response.json())
      .then((data) => {
        let pImie = document.createElement("p");
        let pNazwisko = document.createElement("p");
        let pZawod = document.createElement("p");
        let pFirma = document.createElement("p");

        pImie.innerText = `Imię: ${data.imie}`;
        pNazwisko.innerText = `Nazwisko: ${data.nazwisko}`;
        pZawod.innerText = `Zawód: ${data.zawod}`;
        pFirma.innerText = `Firma: ${data.firma}`;

        document.querySelector("#dane-programisty").appendChild(pImie);
        document.querySelector("#dane-programisty").appendChild(pNazwisko);
        document.querySelector("#dane-programisty").appendChild(pZawod);
        document.querySelector("#dane-programisty").appendChild(pFirma);

        console.log(data);
      });
  };

  button.addEventListener("click", getData);
});

//wersja 2

// $(document).ready(function () {
//   let button = document.querySelector("#btn");
//   let div = document.createElement("div");
//   div.setAttribute("id", "dane-programisty");

//   button.after(div);

//   const getData = () => {
//     fetch(
//       "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php"
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         let p = document.createElement("p");
//         p.innerHTML = `${data.imie}  <br> ${data.nazwisko} <br> ${data.zawod} <br> ${data.firma}`;
//         div.appendChild(p);

//         console.log(data);
//       });
//   };

//   button.addEventListener("click", getData);
// });
