const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];

// IMC = poids en kg / taille² en m


// Variable form
const inputs = Array.from(document.querySelectorAll('input'));
const btn = document.querySelector('.btn');

// Variable resultats
const imc = document.querySelector('.imc');
const categorie = document.querySelector('.span-categorie');
const regex = /^[0-9]+$/



btn.addEventListener("click",(e)=> {
  e.preventDefault();
  for (const key in inputs) {
    const input = inputs[key];
    if(!regex.test(input.value)){
      imc.innerText = "Wops";
      categorie.innerText = "Remplissez correctment les inputs.";
      return;
    }
  }
  const calculImc = calcul(inputs[0].value,inputs[1].value);

  for (const key in BMIData) {
    const data = BMIData[key];

    if(calculImc >= data.range[0] && calculImc <= data.range[1]){
      
      categorie.innerText = data.name;
      imc.innerText = calculImc;
      imc.style.color = data.color;
      break;
    }
    if(typeof data.range === "number"){
      categorie.innerText = data.name;
      imc.innerText = calculImc;
      imc.style.color = data.color;
      break;
    }
  }
    
});



function calcul(taille,poids){
  return Math.round((poids/ Math.pow(taille/100,2)*10))/10;
}