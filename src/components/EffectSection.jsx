import Button from './Button/Button'
import Modal from './Modal/Modal'
import { useState } from 'react'

export default function() {
const[isModalOpen, setIsModalOpen] = useState(false)

    function openModal(){
        setIsModalOpen(true)
    }

    return(
        <section>
            <h3>Effects</h3>

            <Button onClick={openModal}>Открыть информацию</Button>

            <Modal open={isModalOpen}>
                <h3>Hello from modal</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque earum porro repudiandae iusto similique laboriosam, fugiat eaque! Repellat vitae sit sed est! Quia ducimus eum porro cum illo sapiente tenetur?</p>
                <Button onClick={() => {setIsModalOpen(false)}}>Close modal</Button>
            </Modal>
        </section>
    )
}