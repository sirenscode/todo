import TaskCard from "./Task";

interface TaskProps{
    title:string
}
interface Tasks{
    tasks:TaskProps[]
}
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
    return(
        <TaskCard
        tasks={taskers}
        />
    )
}

export default CurrentTask;