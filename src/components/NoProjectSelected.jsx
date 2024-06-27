import Logo from "/logo.png"
import Button from "./Button";

export default function NoProjectSelected({onStartProject}){
    return(
        <div className="mt-28 text-center w-3/4">
            <img src={Logo} className="w-16 h-16 object-contain mx-auto"  alt="An Empty Task List"/>
            <h2 className="text-4xl md:text-3xl font-bold my-4 text-stone-500">No project selected</h2>
            <p className="text-stone-400 mb-4"  >
                Select a project or get started with a new one
            </p>

            <p className="mt-8">
                <Button onClick={onStartProject} >Create new project</Button>
            </p>
        </div>
    );
}