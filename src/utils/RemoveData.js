import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig/config";


export async function delDoc(id){
    await deleteDoc(doc(db, "testResults", id));
}