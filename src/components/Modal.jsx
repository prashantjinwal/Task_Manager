import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const Modal = forwardRef( function Modal({children, buttonCaption }, ref){

    const dialog = useRef();
    useImperativeHandle(ref, () =>{
        return{
            open(){
                dialog.current.showModal()
            }
        }
    })

    return createPortal (
    <dialog className="p-5 backdrop:bg-stone-900/90 shadow-md rounded-md" ref={dialog}>
        {children}
        <form method="dialog" className="text-right mt-4" >
            <Button>
               {buttonCaption}
            </Button>
        </form>
    
    </dialog>
    , document.getElementById('modal-root')
    )
});

export default Modal