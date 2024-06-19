import Button from './Button/Button'
import Modal from './Modal/Modal'
import { useEffect, useState } from 'react'

export default function() {
const[isModalOpen, setIsModalOpen] = useState(false)
const [loading, setLoading] = useState(false)
const [users, setLUsers] = useState([])



    useEffect(()=>{
        async function fetchUsers() {
            setLoading(true)
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const users = await response.json()
            setLUsers(users)
            setLoading(false)
        }
        
        fetchUsers()
    },[])



    function openModal(){
        setIsModalOpen(true)
    }

    return(
        <section>
            <h3>Effects</h3>

            <Button style={{marginBottom: '1rem'}} onClick={openModal}>Открыть информацию</Button>

            <Modal open={isModalOpen}>
                <h3>Hello from modal</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque earum porro repudiandae iusto similique laboriosam, fugiat eaque! Repellat vitae sit sed est! Quia ducimus eum porro cum illo sapiente tenetur?</p>
                <Button onClick={() => {setIsModalOpen(false)}}>Close modal</Button>
            </Modal>

            {loading && <p>Loading...</p>}

            {!loading && <ul>
                {users.map((user)=> <li key={user.id}>{user.name}</li>)}
                </ul>}
        </section>
    )
}