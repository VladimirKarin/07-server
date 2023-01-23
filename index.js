import { server } from "./lib/server.js";

const app = {};

app.init = () => {
       // trukstamu pradinio turinio generavimas:
       // - folder
       // - file
       // gauti prisijungima prie DB
       // uzkurti serveri
       server.init();

       // const timer = setInterval(() => {
       //     console.log('apsivalymas....');
       //     // reguliarus procesai:
       //     // - info sinchronizavimas/atsinaujinimas
       //     // - failu archyvavimas
       //     // - info agregravimas (statistika)
       //     // - nereikalingos info salinimas:
       //     //      - failu trinimas
       //     //      - DB optimizavimas
       // }, 5000);
}


// import { server } from "./lib/server.js"

// const app = {};


//key value poros
//paleidinejame projekta
// app.init = () => {

/*
 Trukstamu tpradinio turinio generavimas
 -- Folders
 -- Files
 Gauti prisijungima prie Duom.Baz.(DB)
 Uzkurti serveri (DBconnection)
 */

//     server.init();
    // const timer = setInterval(() => {
    //     console.log('apsivalymas');
    // }, 5000)

/*
 - Info sinchronizavimas\atsinaujinimas
 - Failu arhivavimas
 - Info agregavimas (Statistika)
 - Nereikalingos info salinimas
        - Failu trinimas
        - DB optimizavimas

 */
// }

// app.init();
// export { app }
