const fs = require('fs');
const path = require('path');

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
// console.log(data.baseDir)
/**
 * Absoliutaus kelio konstravimas iki nurodyto failo esancio .data folderyje
 * @param {string} dir Sub-folderis esantis  .data folderyje
 * @param {string} fileName Kuriamo failo pavadinimas be failo pletinio
 * @return {string} Absoliutus kelias iki failo
 */
function fullPath(dir, file) {
    return `${data.baseDir}${dir}/${file}.json`;
}

/**
 * JSON failo kurimas .data folderyje
 * @param {string} dir Sub-folderis esantis  .data folderyje
 * @param {string} fileName Kuriamo failo pavadinimas be failo pletinio
 * @param {Object} content JavaScript objektas, pvz.: `{name: "Marsietis"}`
 * @returns {boolean} Pozymis, ar funkcija sekmingai sukure nurodyta faila
 */
data.create = (dir, fileName, content, callback) => {
    // open - sukuriame faila ir gauname prieiga prie jo
    // writeFile - irasome turini i faila
    // close - uzbaigiama darba su failu ir atlaisviname prieiga prie jo

    fs.open(fullPath(dir, fileName), 'wx', (err, fileDescriptor) => {
        if (err || !fileDescriptor) {
            return callback(false, 'Ivyko klaida bandant sukurti faila ir gauti prieeiga prie jo :(');
        }
        const stringContent = JSON.stringify(content);
        fs.writeFile(fileDescriptor, stringContent, (err) => {
            if (err) {
                return callback(false, 'Ivyko klaida bandant irasyti turini i faila')
            }
        });
        fs.close(fileDescriptor, (err) => {
            if (err) {
                return callback(false, 'Nepavyko uzdaryti/atlaisvinti failo :( ')
            }
        })
        return callback(true, 'Failas sekmingai sukurtas ir turinys irasytas');
    });

}

/**
 * JSON failo turinio nuskaitymas
 * @param {string} dir Sub-folderis esantis  .data folderyje
 * @param {string} fileName Kuriamo failo pavadinimas be failo pletinio
 * @returns {Object} Isparsintas failo turinys
 */
data.read = (dir, fileName, callback) => {
    fs.readFile(fullPath(dir, fileName), 'utf-8' , (err, fileContent) =>{
        if(err){
            return callback(true, 'epavyko nuskaityti failo turinio');
        } 
        return callback(false, fileContent);
    })
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