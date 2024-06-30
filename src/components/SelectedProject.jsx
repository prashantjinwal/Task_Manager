import Task from "./Task";

export default function SelectedProject({project, onDelete, onAddTask, onDeleteTask}){

    const formattedDate = new Date(project.Due_Date).toLocaleDateString("en-US", 
        {
            year : "numeric",
            month : "short",
            Date : "numeric"
        }
    )

    return(
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex justify-between items-center">
                    <h2 className="text-stone-600 text-3xl mb-2 font-bold">{project.Title}</h2>
                    <button className="text-stone-600 hover:text-stone-950 text-right" onClick={onDelete}>Cancel</button>
                </div>
                <p className="text-stone-400 mb-4">{formattedDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
            </header>
            <Task onAdd={onAddTask} onDelete={onDeleteTask} />
        </div>
    );
}