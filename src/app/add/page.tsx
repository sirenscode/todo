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
    async function addTask(){
        await setDoc(docRef,{
            title:title,
            category:"school",
            description:description,
            school: true,
            id: GlobalID,
        });
        window.location.reload();
        
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
        <div className="w-full flex flex-col items-center justify-center h-[50vh]">
            <div className="w-3/4 flex flex-col items-center justify-center">
                <div className="w-1/2 flex flex-col p-3">
                    <span className="">Enter title:</span>
                    <input onChange={handleTitleChange} className="outline-none border-[1px] border-[#eee] w-full p-1 rounded-[6px] text-[.9em]" placeholder="task"/>
                </div>
                <div className="w-1/2 flex flex-col p-3">
                    <span className="">Enter description:</span>
                    <input onChange={handleDescrpitonChange} className="outline-none border-[1px] border-[#eee] w-full p-1 rounded-[6px] text-[.9em]" placeholder="description"/>
                </div>
                <div className="w-1/2 p-3">
                    <button className="w-1/2 bg-[#9BECE1] p-1 rounded-[6px]" onClick={addTask}>ADD</button>
                </div>
                
                
            </div>
        </div>
    )
}

export default Add;