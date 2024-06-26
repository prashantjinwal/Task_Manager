import InputBox from "./InputBox";

export default function NewProject(){
    return(
        <div className="w-[55rem] mt-16">
            <main className="flex items-center justify-end gap-1 ">
                <li className="decoration-none list-none ">
                    <button className="py-2 px-5 rounded-md bg-stone-100 text-stone-900 hover:bg-stone-200 ">Cancel</button>
                </li>
                <li className="decoration-none list-none">
                    <button className="py-2 px-5 rounded-md bg-stone-900 text-stone-100 hover:bg-stone-800">Save</button>
                </li>
            </main>
            <div>
                    <InputBox label="Title" />
                    <InputBox label="description" textarea />
                    <InputBox label="Due Date"  />

            </div>

        </div>
    );
}