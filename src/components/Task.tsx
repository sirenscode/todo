interface task{
    title: string;
}
interface TaskProps{
    tasks: task[]
}

const TaskCard: React.FC<TaskProps> = (task) =>{
    console.log(task);
    return(
        <div>
            {task.tasks.map((data,index)=>(
                <h1>{data.title}</h1>
            ))}
        </div>
    )
}

export default TaskCard;