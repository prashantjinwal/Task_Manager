import { forwardRef } from "react";

const InputBox = forwardRef( function InputBox({label, textarea, ...props}, ref) {
    const classes = "bg-stone-200 p-3 rounded-md border-solid border-b-2 border-stone-400 focus:outline-none focus:border-stone-800";
    return(
        <p className="flex flex-col my-5">
            <label className="uppercase font-bold text-sm text-stone-600">{label}</label>
            {
                textarea ? <textarea ref={ref} className={classes} {...props} /> : <input ref={ref} className={classes}  {...props} />
            }
        </p>
    );
})

export default InputBox