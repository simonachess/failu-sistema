/* 
CRUD
C - create (sukurti)
R - read (skaityti)
U - update (atnaujinti)
D - delete (istrinti)

*/
/**
 * Darbiniu funkciju su failu sistema objektas
 */

const data = {};


/**
 * JSON failo kurimas .data folderyje
 * @param {string} dir Sub-folderis esantis  .data folderyje
 * @param {string} fileName Kuriamo failo pavadinimas be failo pletinio
 * @param {Object} content JavaScript objektas, pvz.: `{name: "Marsietis"}`
 * @returns {boolean} Pozymis, ar funkcija sekmingai sukure nurodyta faila
 */
data.create = (dir, fileName, content) =>{
    console.log('Kuriamas failas...');
    return true;
}

/**
 * JSON failo turinio nuskaitymas
 * @param {string} dir Sub-folderis esantis  .data folderyje
 * @param {string} fileName Kuriamo failo pavadinimas be failo pletinio
 * @returns {Object} Isparsintas failo turinys
 */
data.read = (dir, fileName) => {
    console.log('Skaitomas failas...');
}

/**
 * JSON failo atnaujinimas .data folderyje
 * @param {string} dir Sub-folderis esantis  .data folderyje
 * @param {string} fileName Kuriamo failo pavadinimas be failo pletinio
 * @param {Object} content JavaScript objektas, pvz.: `{name: "Marsietis"}`
 * @returns {boolean} Pozymis, ar funkcija sekmingai atnaujintas nurodyta faila
 */
data.update = (dir, fileName, content) => {
    console.log('Atnaujinamas failas...');
    return true;
}


/**
 * JSON failo istrynimas .data folderyje
 * @param {string} dir Sub-folderis esantis  .data folderyje
 * @param {string} fileName Kuriamo failo pavadinimas be failo pletinio
 * @returns {boolean} Pozymis, ar funkcija sekmingai istrintas nurodyta faila
 */
data.delete = (dir, fileName) => {
    console.log('Trinamas failas...');
}

module.exports = data;