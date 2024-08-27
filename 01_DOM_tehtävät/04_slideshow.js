/* Toteuta Javascriptillä pieni diaesitys (slide show). Diaesityksessä on esimerkiksi viisi kuvaa – mutta 
se toimii millä tahansa määrällä kuvia korkeintaan vaihtamalla muuttujan arvon. Helpoin tapa on sijoittaa 
kaikki kuvat saman div-elementin sisään ja säädellä niiden näkyvyyttä. 
Voit ottaa mallia netistä löytyvistä tutoriaaleista.

Mutta tätä diaesitystä ei ohjatakaan napeista eikä se ole ajastettu. Sen sijaan dia vaihtuu näppäimistön 
nuolinäppäimistä (oikealle / vasemmalle). Jos ollaan esityksen alussa, vasemmalle-nuoli ei tee mitään, ja 
vastaavasti esityksen lopussa oikealle-nuoli ei tee mitään. Tapahtumakäsittelijä kannattaa kiinnittää 
document-olioon tai body-elementtiin. Koska tapahtumat kuplivat DOM-puussa ylöspäin, näppäinten painallukset 
toimivat riippumatta siitä, missä fokus on. */