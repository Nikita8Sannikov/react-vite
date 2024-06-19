import Button from './Button/Button'
import { useState, useRef } from 'react';

//TWO WAY BINDING - шаблон связанный непосредственно с фнкционалом
function StateVsRef() {
    const input = useRef()
    // const[value, setValue] = useState('')
    const[show, setShow] = useState(false)
    
    function handleKeyDown(event) {
        if(event.key==='Enter') {
            setShow(true)
        }
    }

    console.log(input);
    
//добавили чтбы отображалочсь по Энтеру но далее стейт продолжает меняться, можно добавлять ещё какие нибудь стейты НОООО 
//это будет не совсем корректно, есть другой хук useRef
    return(
        <div>
            <h3>Input Value:
                 {/* {show && value} */}
                 {show && input.current.value}
                 </h3>
            <input
            ref={input}
            type="text"
             className='control'
            //  value={value} 
            onKeyDown={handleKeyDown}
            // onChange={(event)=>setValue(event.target.value)}
            />
        </div>
    )
}

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

           <form style={{ marginBottom: '1rem' }}>
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
             
           <hr />

           <StateVsRef />
        </section>
    )
}