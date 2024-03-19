import { useEffect } from "react";
import TaskCard from "./Task";

const taskers=[
    {
        "title":"Create a TikTok Clone"
    },
    {
        "title":"Create a Youtube Clone"
    },
    {
        "title":"Create a SIRENS Clone"
    }
]
const CurrentTask: React.FC = () =>{
    useEffect(()=>{
        
    },[])
    return(
        <TaskCard
        tasks={taskers}
        />
    )
}

export default CurrentTask;