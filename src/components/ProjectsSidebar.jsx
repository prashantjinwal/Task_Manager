import Button from "./Button";

export default function ProjectsSidebar({onStartProject, projects}){
    const mapClass = "w-full text-left px-3 py-2 my-1 rounded-md text-stone-400 hover:text-stone-200 hover:bg-stone-800";
    return(
        <aside className=" w-1/3 px-8 py-16 bg-stone-900 text-stone-100 md:w-72 rounded-r-xl  ">
            <h2 className="md-8 uppercase font-bold text-stone-100 text-2xl pb-4 ">Your Project</h2>
            <div className="my-6">
                <Button onClick={onStartProject} >+ Add Project</Button>
            </div>
            <ul className="mt-8">
                {projects.map((project) =>  (
                    <li key={project.id}>
                         <button className={mapClass} >{project.Title}</button>
                    </li>
                ))}

            </ul>
        </aside>
    );
}