import { differences} from '../data'
import Button from "../components/Button/Button"
import { useState } from "react"


export default function ButtonSection() {

    const [contentType, setContentType] = useState(null)

    console.log('app render');

    function handleClick(type) {
        setContentType(type)
      }
    
    return(
        <section>
        <h3>Lorem ipsum dolor sit amet consectetur.</h3>

      <Button isActive={contentType==='way'} onClick ={() => handleClick('way') }>Подход</Button>
      <Button isActive={contentType==='easy'} onClick ={ () => handleClick('easy') }>Доступность</Button>
      <Button isActive={contentType==='program'} onClick ={ () => handleClick('program') }>Концентрация</Button>



    {!contentType && <p>Нажми на кнопку</p>}
    {contentType && <p>{differences[contentType]}</p>}

      </section>
    )
}