"use client"
import db from "@/components/firebaseConfig";
import {doc, getDocs, collection, query, where, deleteDoc, getDoc} from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";

const School: React.FC = () =>{
    const [taskData, setTaskData] = useState<any[]>([]);
    const [total, setTotal] = useState(0);
    const [noTasks, setNoTasks] = useState(true);
    const [currentDate, setCurrentDate] = useState("");
    const tasksRef = collection(db, "school");
    const [isLoading, setIsLoading] = useState(true);
    const where_to = new URL(window.location.href).searchParams.get("where");
    
    const q = query(tasksRef, where(`where`,"==",`${where_to}`));
    async function fetchAll(){
        const querySnapshot = await getDocs(q);
        const newData = querySnapshot.docs.map(doc=>doc.data());
        console.log("NEW: ",newData);
        setTaskData(newData.toReversed());
        setIsLoading(false);
        if(newData.length!==0){
            setNoTasks(false)
        }
        setTotal(newData.length);
        
    };
    useEffect(()=>{
        fetchAll();
    },[])

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

    async function removeTask(id: string){
        const delRef = doc(db,"school",`${id}`);
        await deleteDoc(delRef);
        window.location.reload();
    }
    return(
        <div className="w-full flex flex-col items-center gap-[20px]">
            <div className={noTasks ? "hidden": "flex flex-col w-full items-center"}>
                {<div className={"flex flex-col items-center justify-center w-full"}>
                    <h1 className="text-[1.5em] font-semilight font-['Poppins']">Welcome Back, Collins</h1>
                    {currentDate && <h2 className="text-[#8e918f] text-[.9em] font-['Poppins']">{currentDate}</h2>}
                </div>}
                {taskData && <div className="ml-[auto] pr-[50px] absolute w-full flex flex-col">
                    <Link href={`/add?where=${where_to}`} className="ml-[auto] drop-shadow-lg drop-shadow-[#02886F] cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 20 20"><path fill="#02886F" d="M11 9V5H9v4H5v2h4v4h2v-4h4V9zm-1 11a10 10 0 1 1 0-20a10 10 0 0 1 0 20"/></svg></Link>
                </div>}
                <div className="mt-[10px] w-1/2">
                    <h2 className="text-[1.2em] font-semilight w-full">Pending</h2>
                </div>          
            </div>
            {isLoading &&<div id="loader" className="fixed top-0 left-0 h-[100vh] w-full bg-[#fff] flex flex-col items-center justify-center">
                <div className="lds-ripple"><div></div><div></div></div>
            </div>}
            {taskData && taskData.map((data, index)=>(
                <div className="w-full flex flex-col">
                    <div className="flex flex-col w-full">
                        <div className="flex flex-row justify-center items-center w-full">
                        </div>
                        <div className="w-full flex flex-col items-center gap-[20px]">
                            <div key={index} className="task-wrapper w-1/2 flex flex-row p-2 rounded-lg cursor-pointer transition duration-300 ease-in shadow-sm shadow-[#9BECE1] items-center justify-center hover:bg-[#9BECE1]" style={{fontFamily:'Afacad'}}>
                                <div className="mr-[auto] flex flex-col w-full">
                                    <div className="flex flex-row">
                                        <h1 className="text-[1.2em] font-['Poppins']" >{data.title}</h1>
                                        <span className="text-[.7em] ml-[auto] text-[#999] font-['Poppins']">{data.id}</span>
                                    </div>
                                    <div className="flex flex-row items-center p-1">
                                        <p className="text-[.8em] text-[#CECECE] font-['Poppins']">{data.description}</p>
                                        <div className="ml-[auto] check hidden">
                                            <button onClick={()=>removeTask(data.id)}><svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 15 15"><path fill="#BA0021" fill-rule="evenodd" d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0m7.072 3.21l4.318-5.398l-.78-.624l-3.682 4.601L4.32 7.116l-.64.768z" clip-rule="evenodd"/></svg></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            {noTasks && <div className="flex flex-col items-center w-full">
                <img src="/images/404.svg" className="w-1/4 h-1/4"/>
                <div className="flex flex-col gap-[10px] items-center mt-[50px] w-full justify-center">
                    <p className="font-['Poppins']">No Tasks Found</p>
                    <Link href={`/add?where=${where_to}`} className="p-2 bg-[#4DAB9A] rounded-[10px] w-[150px] items-center flex flex-col transition duration-300  text-[#fff] ease-in hover:bg-[#02886F] hover:shadow-md hover:shadow-[#8e918f]">Add Task</Link>
                </div>
                </div>}
        </div>
    )
}

export default School;