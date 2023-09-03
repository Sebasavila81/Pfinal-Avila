import {db} from "../config/firebase"
import {getDocs, collection} from 'firebase/firestore'



const productos = []



export const getProductosAll = async () => { 
    const itemsCollectionRef = collection(db, "productos")
    const data = await getDocs(itemsCollectionRef)
    console.log(data)
    const filteredData = data.docs.map( (doc) => ({...doc.data(), id: doc.id}))
    console.log(filteredData)
    return filteredData
}


export const getProductosByID = async (productID) => { 
    const data = await getProductosAll()
    return data.filter( obj => obj.id == productID)
}
