import NewTask from "./NewTask";

export default function Task({tasks, onAdd}){
    return(
        <section>
            <h2 className="text-2xl mb-2 font-bold text-stone-700">Task</h2>
            <NewTask onAdd={onAdd} />
            { tasks.length === 0 && <p className="text-stone-800 my-4" >
                The project does not have any task yet...
            </p>}
           { tasks.length > 0 && <ul className="p-4 mt-8 rounded-md bg-stone-100"> {
                        tasks.map((task) =>{
                            <li key={task.id} className="flex justify-between my-4" >
                                 <span> {task.text} </span>
                                 <button className="text-stone-700 hover:text-red-500"> Clear </button>
                            </li>
                        })
                    }
            
                </ul>}
        </section>
    );
}