// you will find 2 imports already there, add the configuration and instantiate the app and database:
import firebaseConfig from "./firebaseConfig";
import { getDatabase, ref, get, set } from "firebase/database";

import { initializeApp } from "firebase/app";

const app= initializeApp(firebaseConfig)
const db= getDatabase(app)

const PATH="test";


function test(input) {
    set(ref(db, PATH+"/test"), input);
}

export {test};
