import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebaseConfig/config";
import { useContext } from "react";
import UserInfo from "../context/userInfo";



export async function getSubject() {
    let subject = [];
    let loading = true;
    try {
        const subjectRef = collection(db, 'All_Subjects');
        const subjectSnapshot = await getDocs(subjectRef);
        subjectSnapshot.docs.forEach((elm) => {
            subject.push(elm.data())
        })

    } catch (err) {
        console.error(err);
    } finally {
        loading = false;
    }

    return {
        subject: subject,
        loading: loading,
    }
}

export const getAllTest = async (uid) => {
    let tests = []
    let loading = true;
    try {
        
        const subjectsRef = collection(db, "testResults");
        const q = query(
            subjectsRef,
            where('userId', '==' , uid)
        )
        const snapShot = await getDocs(q);
        snapShot.docs.forEach((doc)=>{
            tests.push({
                data : doc.data(),
                id : doc.id
            })
        })  
    }
    catch (err) {
        console.error(err);
    } finally {
        loading = false;
    }

    return{
        results:tests,
        loading:loading

    }

}

export async function getTestById(subject,id) {
        const docRef = doc(db , subject , id)
        const document = await getDoc(docRef);
        // console.log(document.data());
        return(document.data())

        
}