import Button from './Button/Button'
import { useState } from 'react';


export default function FeedbackSection() {
    const [form, setForm] = useState({
        name: '',
        hasError: false,
        reason: 'help',
    })
    // const[name, setName] = useState('')
    // const[hasError, setHasError] = useState(false)
    // const[reason, setReason] = useState('help')

    function handleNameChange(event) {
        // console.log(event.target.value);
        setForm((prev)=> ({
            ...prev,
            name:event.target.value,
            hasError:event.target.value.trim().length === 0,
        }))
        // setForm({
        //     name:event.target.value,
        //     hasError:event.target.value.trim().length === 0,
        //     reason: form.reason
        // })
        // setName(event.target.value)
        // setHasError(event.target.value.trim().length === 0)
    }

    // function toggleError() {
    //     // setHasError((prev)=>!prev) //true
    //     // setHasError((prev)=>!prev) //false
    //     // setHasError(!hasError) //false
    // }


    return(
        <section>
           <h3>Обратная связь</h3> 

           {/* <Button onClick={toggleError}>ToggleError</Button> */}

           <form >
            <label htmlFor="name">Ваше имя</label>
            <input type="text" id="name" className="control" value={form.name} 
            style={{
                border: form.hasError ? '1px solid red' : null
            }}
            onChange={handleNameChange}/>

            <label htmlFor="reason">Причина обращения</label>
            <select id="reason" className="control" value={form.reason}
            //  onChange={event=>setForm({
            //       name: form.name,
            //       hasError:event.target.value.trim().length === 0,
            //     reason:event.target.value
            // })}
             onChange={event=>setForm((prev) => ({
                ...prev,
                reason:event.target.value
            }))}>
                <option value="error">Ошибка</option>
                <option value="help">Нужна помощь</option>
                <option value="suggest">Предложение</option>
            </select>

            <pre>
                {/* Name: {form.name}
                <br />
                Reason: {form.reason} */}

                {/* {JSON.stringify(form,null, 2)} */}
            </pre>

            <Button disabled={form.hasError} isActive={!form.hasError}>Отправить</Button>
           </form>
        </section>
    )
}