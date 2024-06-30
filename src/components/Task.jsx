import NewTask from "./NewTask";

export default function Task({onDelete, onAdd}){
    return(
        <section>
            <h2 className="text-2xl mb-2 font-bold text-stone-700">Task</h2>
            <NewTask onAdd={onAdd} />
            <p className="text-stone-800 my-4" >
                The project does not have any task yet...
            </p>
            <ul>

            </ul>
        </section>
    );
}