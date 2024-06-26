export default function Button({children, ...props}){
    const classesBtn = "bg-stone-700 hover:bg-stone-600 text-stone-400 px-3 py-2 rounded-md md:text-base"
    return(
        <button className={classesBtn} {...props} >
                {children}
        </button>
    );
}