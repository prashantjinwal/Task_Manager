import { useRef } from "react";
import InputBox from "./InputBox";

export default function NewProject({onAdd}){

    const Title = useRef();
    const description = useRef();
    const Due_Date = useRef();

    function handleSave(){
        const EnteredTitle = Title.current.value;
        const EnteredDescription = description.current.value;
        const EnteredDate = Due_Date.current.value;

        onAdd({
            Title:EnteredTitle,
            Description:EnteredDescription,
            Due_Date:EnteredDate,
        })


    }

    return(
        <div className="w-[55rem] mt-16">
            <main className="flex items-center justify-end gap-1 ">
                <li className="decoration-none list-none ">
                    <button className="py-2 px-5 rounded-md bg-stone-100 text-stone-900 hover:bg-stone-200 ">Cancel</button>
                </li>

                <li className="decoration-none list-none">
                    <button onClick={handleSave} className="py-2 px-5 rounded-md bg-stone-900 text-stone-100 hover:bg-stone-800">Save</button>
                </li>
            </main>
            <div>
                    <InputBox type="text" ref={Title} label="Title" />
                    <InputBox ref={description} label="description" textarea />
                    <InputBox type="date" ref={Due_Date} label="Due Date"  />

            </div>

        </div>
    );
}