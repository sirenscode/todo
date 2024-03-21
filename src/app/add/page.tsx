"use client"
import db from "@/components/firebaseConfig";
import {doc, setDoc, deleteDoc} from "firebase/firestore";
import { useState } from "react";

const Add: React.FC = () =>{
    function generateID(){
        const timestamp = new Date().getTime();
        const randomNumber = Math.floor(Math.random()*1000);
        return `${timestamp}${randomNumber}`;
    }
    const GlobalID = generateID().toString();
    const docRef = doc(db,"school",GlobalID);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [task, setTask] = useState("");
    const [isLoading, setIsLoading] = useState(false);
        
    async function addTask(){
        const url = window.location.href;
        const where = new URL(url).searchParams.get("where");
        setIsLoading(true);
        if(description!=="" && title!==""){
            await setDoc(docRef,{
                title:title,
                category:"school",
                description:description,
                where: where,
                id: GlobalID,
                pending: true
            });
            window.location.href=`/tasks?where=${where}`;
        }
    }

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        e.preventDefault();
        setTitle(e.target.value);
    };
    const handleDescrpitonChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        e.preventDefault();
        setDescription(e.target.value);
    }

   return(
        <div className="w-full flex flex-col items-center justify-center min-h-[60vh]">
            <div className="w-3/4 flex flex-col items-center justify-center">
                <div className="w-1/2 flex flex-col p-3">
                    <span className="font-['Poppins']">Enter title:</span>
                    <input onChange={handleTitleChange} className="font-['Poppins'] outline-none border-[1px] border-[#eee] w-full p-2 rounded-[6px] text-[.9em] hover:shadow-lg" placeholder="task"/>
                    <div className="border rounded-lg"></div>
                </div>
                <div className="w-1/2 flex flex-col p-3">
                    <span className="font-['Poppins']">Enter description:</span>
                    <input onChange={handleDescrpitonChange} className="description font-['Poppins'] outline-none border-[1px] border-[#eee] w-full p-2 rounded-[6px] text-[.9em] hover:shadow-lg" placeholder="description"/>
                    <div className="border rounded-lg"></div>
                </div>
                <div className="w-1/2 p-3">
                    <button className="w-1/2 bg-[#02886F] font-['Poppins'] p-1 rounded-[6px] transition duration-300 text-[#fff] shadow-[#02886F] shadow-md ease-in font-semibold hover:bg-[#4dab9a]" onClick={addTask}>ADD</button>
                </div>
                {isLoading && <div className="w-1/4 flex flex-col mt-[50px]">
                    <div className="lds-ripple"><div></div><div></div></div>
                </div>}
                
                
                
            </div>
        </div>
    )
}

export default Add;