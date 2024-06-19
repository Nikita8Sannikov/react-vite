import {createPortal} from 'react-dom'
import './Modal.css'
import {useRef, useEffect } from 'react'


export default function Modal({children, open}) {
    const dialog = useRef()

    useEffect(() => {
        if(open) {
            dialog.current.showModal()
        } else {
            dialog.current.close()
        }

    }, [open])

   


    // return <dialog open = {open}>{children}</dialog>
    return createPortal(
        <dialog ref={dialog}
        //  open = {open}
         >
            {children}</dialog>,
        document.getElementById('modal')
    )
}