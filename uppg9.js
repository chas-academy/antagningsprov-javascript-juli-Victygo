

function uppg9 (){
    // skapa en funktion som heter sort och tar in en array av siffror som argument
    // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
    // i if-sattsen skriv ut i konsolen resultatet
    // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"

    // anropa funktionen och skicka med en array som argument
    // Skapa en funktion som heter sort
    function sort(numbers) {
        for (let num of numbers) {
            if (num % 2 === 0) {
              console.log(num, "jämt");
            } else {
              console.log(num, "udda");
            }
        }
    }

    // Anropa funktionen och skicka med en array som argument
    return sort([1, 2, 3, 4, 5]);

  
}

module.exports = { uppg9 };