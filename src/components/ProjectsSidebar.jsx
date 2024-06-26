export default function ProjectsSidebar(){
    return(
        <aside className=" w-1/3 px-8 py-16 bg-stone-900 text-stone-100 md:w-72 rounded-r-xl  ">
            <h2 className="md-8 uppercase font-bold text-stone-100 text-2xl pb-4 ">Your Project</h2>
            <div className="my-6">
                <button className="bg-stone-700 hover:bg-stone-600 text-stone-400 px-3 py-2 rounded-md">+ Add Project</button>
            </div>
            <ul>

            </ul>
        </aside>
    );
}