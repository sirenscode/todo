import CategoryCard from "./CategoryCard";
import {doc, getDoc,collection} from "firebase/firestore"
import db from "./firebaseConfig";

const Categories: React.FC = () =>{
    

    const citiesRef = collection(db,"cities");
    const docRef = doc(db, "cities", "LA");

    async function getData(){
        const data = await getDoc(docRef);
        console.log("FROM ME: ",data.data())
    }
    getData();
    return (
        <div className="mt-[50px] w-full pl-[30px] flex flex-col w-full flex items-center justify-center gap-[20px]">
            <h1 className="text-[1.2em] font-semilight">Welcome Back, <strong>SI</strong>RENS</h1>
            <CategoryCard/>
        </div>
    )
}

export default Categories;