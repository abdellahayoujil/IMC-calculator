function calculerIMC() {

    let poids = document.getElementById("poids").value.replace(',', '.');
    let taille = document.getElementById("taille").value.replace(',', '.');
    
    let poidsFloat = parseFloat(poids);
    let tailleFloat = parseFloat(taille);
    
    let resultatDiv = document.getElementById("resultat");

    if (isNaN(poidsFloat) || isNaN(tailleFloat) || poidsFloat <= 0 || tailleFloat <= 0) {
        resultatDiv.innerHTML = "Veuillez entrer des valeurs valides.";
        resultatDiv.style.color = "red";
        return;
    }

    let imc = poidsFloat / (tailleFloat * tailleFloat);
    

    let interpretation;
    if (imc < 16.5) {
        interpretation = "Dénutrition";
    } else if (imc < 18.5) {
        interpretation = "Maigreur";
    } else if (imc < 25) {
        interpretation = "Corpulence normale";
    } else if (imc < 30) {
        interpretation = "Surpoids";
    } else if (imc < 35) {
        interpretation = "Obésité modérée";
    } else if (imc < 40) {
        interpretation = "Obésité sévère";
    } else {
        interpretation = "Obésité morbide ou massive";
    }

    resultatDiv.innerHTML = `IMC: ${imc.toFixed(2)}<br>${interpretation}`;
    resultatDiv.style.color = "black";
}