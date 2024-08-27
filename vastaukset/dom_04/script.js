let dianumero = 1;
let dioja = 4;

document.querySelector("body").addEventListener("keydown", function(e) {
    // piilota kaikki diat
    document.querySelectorAll("#diaesitys > div").forEach(function(dia) {
        dia.classList.add("piilotettu");
    });
    let nappain = e.key;
    if (nappain === "ArrowLeft" && dianumero > 1) {
        dianumero--;
    } else if (nappain === "ArrowRight" && dianumero < dioja) {
        dianumero++;
    }
    // tämän pitää olla ehtolauseiden ulkopuolella, jotta aina näytetään jokin dia
    document.getElementById("dia" + dianumero).classList.remove("piilotettu");
});
