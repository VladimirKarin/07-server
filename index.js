import { server } from "./lib/server.js"

const app = {};


//key value poros
//paleidinejame projekta
app.init = () => {

    /*
     Trukstamu tpradinio turinio generavimas
     -- Folders
     -- Files
     Gauti prisijungima prie Duom.Baz.(DB)
     Uzkurti serveri (DBconnection)
     */

    server.init();
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
}

app.init();
export { app }
