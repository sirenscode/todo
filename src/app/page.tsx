"use client"
import Categories from "@/components/categories";
import Image from "next/image";
import db from "@/components/firebaseConfig";
import {doc, setDoc, getDoc} from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentDate, setCurrentDate] = useState("");
  
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
  const months =["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    const getCurrentDate=()=>{
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        setCurrentDate(`${day} ${months[month]} ${year}`);
    }
    useEffect(()=>{
        getCurrentDate();
    },[]);
  return (
    <main>
      <div className="flex flex-col items-center">
        <h1 className="text-[1.5em] font-semilight font-['Poppins']">Welcome Back, Collins</h1>
        {currentDate && <h2 className="text-[#8e918f] text-[.9em] font-['Poppins']">{currentDate}</h2>}
      </div>
      <Categories/>
    </main>
  );
}
