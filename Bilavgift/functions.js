function vektavgift(vekt) {
    avgift = 0; // Lager en variabel som skal endres i de ulike forholdene.
    
    switch(true) {
        case vekt > 500 && vekt <= 1200:
            sats = 25.90; // Bestemmer satsen.
            avgift = (vekt - 500) * sats; // Endrer 'avgift' som er 0 , til den faktiske avgiften.
            break; // Hopper ut av løkken, slik at vi kan sende resultatet videre.
        
        case vekt > 1200 && vekt <= 1400:
            sats = 64.55; // Bestemmer satsen.
            avgift = (vekt - 1200) * sats; // Endrer 'avgift' som er 0, til den faktiske avgiften.
            avgift += (700 * 25.90); // Inkluderer avgiften "neste 700 kg"
            break; // Hopper ut av løkken, slik at vi kan sende resultatet videre.

        case vekt > 1400 && vekt <= 1500:
            sats = 201.72; // Bestemmer satsen.
            avgift = (vekt - 1400) * sats; // Endrer 'avgift' som er 0,  til den faktiske avgiften.
            avgift += (700 * 25.90); // Inkluderer avgiften "neste 700 kg"
            avgift += (200 * 64.55) // Inkluderer avgiften "neste 200 kg"
            break; // Hopper ut av løkken, slik at vi kan sende resultatet videre.
        
        case vekt >= 1500:
            sats = 234.60; // Bestemmer satsen.
            avgift = (vekt - 1500) * sats; // Endrer 'avgift' som er 0,  til den faktiske avgiften.
            avgift += (700 * 25.90); // Inkluderer avgiften "neste 700 kg"
            avgift += (200 * 64.55); // Inkluderer avgiften "neste 200 kg"
            avgift += (100 * 201.72); // Inkluderer avgiften "neste 100 kg"
            break; // Hopper ut av løkken, slik at vi kan sende resultatet videre.
        default:
            console.log('Vennligst skriv inn en gyldig verdi'); // Sier ifra om ugyldig verdi.
    }
    return avgift; // Returnerer vektavgiften vi har kommet fram til.
}

function co2avgift(co2){
    avgift = 0; // Lager en variabel som skal endres i de ulike forholdene.

    switch(true) {
        case co2 > 0 && co2 < 50: // Co2-utslipp mindre enn 50 g/km^2?
            sats = -932.92; // Fradrag
            avgift = (50 - co2) * sats; // Registrerer avgiften, som er da et fradrag.

        case co2 < 87 && co2 >= 50: // Co2-utslipp mellom 87 g/km^2 og 50 g/km^2?
            sats = -792.95; // Fradrag
            avgift = (87 - co2) * sats; // Registrerer avgiften, som er da et fradrag.
            break; // Hopper ut, og sender resultatet videre.
        
        case co2 > 87 && co2 <= 118: // Co2-utslipp mellom 87 g/km^2 og 118 g/km^2?
            sats = 773.91; // Kr per g/km^2.
            avgift = (co2 - 87) * sats; // Registrerer avgiften
            break; // Hopper ut, og sender resultatet videre.

        case co2 > 118 && co2 <= 155: // Co2-utslipp mellom 118 g/km^2 og 155 g/km^2?
            sats = 867.25; // Kr per g/km^2.
            avgift = (co2 - 118) * sats; // Registrerer avgiften
            avgift += (31 * 773.91); // Inkluderer avgiften "neste 31g/km"
            break; // Hopper ut, og sender resultatet videre.
    
        case co2 > 155 && co2 <= 225: // Co2-utslipp mellom 155 g/km^2 og 225 g/km^2?
            sats = 2272.56; // Kr per g/km^2.
            avgift = (co2 - 155) * sats; // Registrerer avgiften
            avgift += (31 * 773.91); // Inkluderer avgiften "neste 31g/km"
            avgift += (37 * 867.25); // Inkluderer avgiften "neste 37g/km"
            break; // Hopper ut, og sender resultatet videre.

        case co2 > 225: // Co2-utslipp over 225 g/km^2?
            sats = 3625.17; // Kr per g/km^2.
            avgift = (co2 - 225) * sats; // Registrerer avgiften
            avgift += (31 * 773.91); // Inkluderer avgiften "neste 31g/km"
            avgift += (37 * 867.25); // Inkluderer avgiften "neste 37g/km"
            avgift += (70 * 2272.56); // Inkluderer avgiften "neste 70g/km"
            break; // Hopper ut, og sender resultatet videre.
        
        default:
            console.log('Vennligst skriv inn en gyldig verdi'); // Sier ifra om ugyldig verdi.
  }
  return avgift; // Returnerer vektavgiften vi har kommet fram til.
}

function noxavgift(nox) {
    
    sats = 74.53 // kr per mg/km
    avgift = sats * nox; // Registrerer avgiften
    return avgift; 
}

function engangsavgift() {
    var vekt = document.getElementById("vekt").value; // Henter vekten fra bruker-input.
    var co2 = document.getElementById("co2").value; // Henter co2 fra bruker-input.
    var nox = document.getElementById("nox").value; // Henter nox fra bruker-input.
    total = vektavgift(vekt)+co2avgift(co2) + noxavgift(nox);
    document.getElementById("divAvgift").innerHTML = 
    ` <br/>  <br/>  
    Avgift for vekt : \t + ${vektavgift(vekt).toFixed(2)} kr <br/>  <br/>  
    Avgift for Co2  :  \t + ${co2avgift(co2).toFixed(2)} kr <br/> <br/> 
    Avgift for NOx  :  \t + ${noxavgift(nox).toFixed(2)} kr <br/>  <br/>  
    Engangsavgift  =  ${total.toFixed(2)} kr`; 
}