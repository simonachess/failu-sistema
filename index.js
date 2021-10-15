const { appendToArray, update } = require('./lib/data.js');
const data = require('./lib/data.js');

const initialDataPetras = { name: 'Petras', age: 99 };

// data.create('books', 'Dievu miskas', { text: 'Amen'}, (err, msg) => {
//     console.log(err, msg);
//     console.log('Sekantys zingsniai po bandymo sukurti faila....');
// });

// data.create('books', 'Anyksciu silelis', { text: 'Zibintai zibintai'}, (err, msg) => {
//     console.log(err, msg);
//     console.log('Sekantys zingsniai po bandymo sukurti faila....');
// });



// data.create('users', 'petras', initialDataPetras, (err, msg) => {
//     console.log(err, msg);
//     console.log('Sekantys zingsniai po bandymo sukurti faila....');
//     data.read('users', 'petras', (err, content) => {
//         const fileData = JSON.parse(content);
//         console.log('READ 1', fileData);

//         data.update('users', 'petras', { ...initialDataPetras, favoriteColor: 'red' }, (err, msg) => {
//             console.log('UPDATE 1', err, msg);

//             //dar karta perskaitome 
//             data.read('users', 'petras', (err, content) => {
//                 const fileData = JSON.parse(content);
//                 console.log('READ 2', fileData);

//                 data.delete('users', 'petras', (err, msg) => {
//                     console.log('DELETE 1', err, msg);
//                 })
//             });
//         });
//     });
// });

// data.create('books', 'du-gaideliai', { text: 'Baltus zirnius kule'}, (err, msg) => {
//     console.log(err, msg);
//     console.log('Sekantys zingsniai po bandymo sukurti faila....');
// });
//pirminis perskaitymas


//prie Petro prideti megstama spalva

// data.folderContent('books', (err, content) => {
//     console.log(err);
//     console.log(content);
//     if (!err) {
//         // eiti per failu sarasa ir kiekviena ju perskaityti
//         for (const book of content) {
//             data.read('books', book, (err, bookContent) => {
//                 console.log(err, bookContent);
//             })
//         }
//     }
// });

// const pirmasKioskas = {
//     name: 'Pirmas kioskas',
//     size: 20,
//     price: 5000
// }

// const antrasKioskas = {
//     name: 'Antras kioskas',
//     size: 15,
//     price: 4000
// }

// data.appendToArray('shop', 'kioskas', pirmasKioskas, (err, content) => {
//     // tikimasi, jog sekmes atveju, grazinamas turinys
//     // bus atnaujinta failo turinio versija
//     // turesim matyti:
//     // [{"name":"Pirmas kioskas","size":20,"price":5000}]
//     console.log(err, content);
//     data.appendToArray('shop', 'kioskas', antrasKioskas, (err, content) => {
//         // tikimasi, jog sekmes atveju, grazinamas turinys
//         // bus atnaujinta failo turinio versija
//         // turesim matyti:
//         // [{"name":"Pirmas kioskas","size":20,"price":5000},{"name":"Antras kioskas","size":15,"price":4000}]
//         console.log(err, content);
//     })
// })


data.updateArrayValue('shop', 'kioskas', 2, 'name', 'Trecias kioskas', (err, msg) => {
    console.log(err, msg);

    data.updateArrayValue('shop', 'kioskas', 3, 'name', 'Ketvirtas kioskas', (err, msg) => {
        console.log(err, msg);

        data.updateArrayValue('shop', 'kioskas', 0, 'size', 50, (err, msg) => {
            console.log(err, msg);

            data.updateArrayValue('shop', 'kioskas', 0, 'color', 'golden', (err, msg) => {
                console.log(err, msg);
            })
        })
    })
})