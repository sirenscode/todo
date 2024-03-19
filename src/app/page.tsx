import CurrentTask from "@/components/CurrentTasks";
import Categories from "@/components/categories";
import Image from "next/image";
import db from "@/components/firebaseConfig";
import {doc, setDoc, getDoc} from "firebase/firestore";

export default function Home() {
  
  const docRef = doc(db,"school","SIRENS");
  setDoc(docRef,{
    name:"Kisumu",
    state: "OKOK",
    country: "USAMERICA"
  },{merge: true});
  async function getData(){
    const docSnap = await getDoc(docRef);
    console.log("RETURN: ",docSnap.data());
  }
  
  
  const data ={
    name:"SIRENS",
    phone:"+254707589396"
  }

  

  async function postData(){
    await setDoc(docRef,{
      title:"Kisumu",
      state: "YEAH",
      country: "USAMERICA"
    },{merge: true});
  }
  setDoc(docRef,{
    title:"Create Next App",
    deadline:"25th Feb 2024"
  });
  //postData();
  //getData()
  return (
    <main>
      <Categories/>
    </main>
  );
}
