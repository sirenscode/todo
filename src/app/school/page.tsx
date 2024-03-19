"use client"
import db from "@/components/firebaseConfig";
import {doc, getDocs, collection, query, where} from "firebase/firestore";
import { useEffect, useState } from "react";

const School: React.FC = () =>{
    const [schoolData, setSchoolData] = useState<any[]>([]);
    const [currentDate, setCurrentDate] = useState("");
    const tasksRef = collection(db, "school");
    const q = query(tasksRef, where("school","==","true"));
    async function fetchAll(){
        const querySnapshot = await getDocs(q);
        const newData = querySnapshot.docs.map(doc=>doc.data());
        console.log("NEW: ",newData);
        setSchoolData(newData);
    };

    fetchAll();

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
    },[])
    
    
    return(
        <div className="w-full flex flex-col items-center gap-[20px]">
            <h1 className="text-[1.5em] font-semilight">Welcome Back, <strong>SI</strong>RENS</h1>
            {currentDate && <h2 className="text-[#8e918f]">{currentDate}</h2>}
            {schoolData && schoolData.map((data, index)=>(
                <div className="w-1/2 flex flex-row border-[1px] border-[#9BECE1] p-2 rounded-lg cursor-pointer transition duration-300 ease-in shadow-sm shadow-[#9BECE1] hover:bg-[#9BECE1]">
                    <h1>{data.title}</h1>
                </div>
            ))}
        </div>
    )
}

export default School;