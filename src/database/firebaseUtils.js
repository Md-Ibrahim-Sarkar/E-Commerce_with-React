

import { getDatabase, ref, onValue } from "firebase/database";
import app from "./firebase.init";

export const getFirebaseData = () => {
    // Code to fetch data from Firebase and return it
    const db = getDatabase(app);
    const starCountRef = ref(db, 'categories');
    return new Promise((resolve, reject) => {
        try {
            onValue(starCountRef, (snapshot) => {
                const updateValue = []
                snapshot.forEach(item => {
                    updateValue.push({
                      id: item.key,
                     ...item.val(),
                  })}

                )
                
                resolve(updateValue)   
            });
        } catch (error) {
           reject(error);
            
        }
        
     })
}