"use client"
import db from "@/components/firebaseConfig";
import {doc, setDoc} from "firebase/firestore";
import { useState } from "react";

const Add: React.FC = () =>{
    const docRef = doc(db,"school","1");
    const [task, setTask] = useState("");
    async function addTask(){
        setDoc(docRef,{
            title:"Create a Youtube CLone",
            category:"school"
        });

    }
    return(
        <div className="w-full">
            <div className="3/4">
                <div className="w-1/2 flex flex-col p-3">
                    <span className="">Enter title:</span>
                    <input className="outline-none border-[1px] border-[#eee] w-1/2 p-1 rounded-[6px]" placeholder="task"/>
                </div>
                <div className="w-1/2 p-3">
                    <button className="w-1/2 bg-[#9BECE1] p-1 rounded-[6px]" onClick={addTask}>ADD</button>
                </div>
                
                
            </div>
        </div>
    )
}

export default Add;