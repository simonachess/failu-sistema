const fs = require('fs');
const path = require('path')

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
data.baseDir = path.join(__dirname, '../.data/');
console.log(data.baseDir)
/**
 * Absoliutaus kelio konstravimas iki nurodyto failo esancio .data folderyje
 * @param {string} dir Sub-folderis esantis  .data folderyje
 * @param {string} fileName Kuriamo failo pavadinimas be failo pletinio
 * @return {string} Absoliutus kelias iki failo
 */
function fullPath(dir, file){
    return `${baseDir}${dir}/${file}.json`;
}

/**
 * JSON failo kurimas .data folderyje
 * @param {string} dir Sub-folderis esantis  .data folderyje
 * @param {string} fileName Kuriamo failo pavadinimas be failo pletinio
 * @param {Object} content JavaScript objektas, pvz.: `{name: "Marsietis"}`
 * @returns {boolean} Pozymis, ar funkcija sekmingai sukure nurodyta faila
 */
data.create = (dir, fileName, content) =>{
    console.log('Kuriamas failas...');
// open - sukuriame faila ir gauname prieiga prie jo
// writeFile - irasome turini i faila
// close - uzbaigiama darba su failu ir atlaisviname prieiga prie jo
// const absPath = fullPath(dir, fileName);
// console.log(absPath);
// fs.open();
//     return true;
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