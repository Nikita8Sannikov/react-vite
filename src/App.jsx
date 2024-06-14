import Header from "./components/Header"
import {ways, differences} from './data'
import WayToTeach from "./components/WayToTeach"
import Button from "./components/Button/Button"
import { useState } from "react"

function App() {
  const [contentType, setContentType] = useState(null)
// let content = 'Нажми на кнопку'


console.log('app render');
  function handleClick(type) {
    // console.log('button clicked', type);
    setContentType(type)
    console.log('app render');
  }

  // let tabContent = null

  // if(contentType) {
  //   tabContent = <p>{differences[contentType]}</p>
  // }else {
  //   tabContent = <p>Нажми на кнопку</p>
  // }

  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Наш подход</h3>
          <ul>
            {[ways.map(way => <WayToTeach key = {way.title} {...way}/>)]}
           {/* <WayToTeach {...ways[0]}/>
           <WayToTeach {...ways[1]}/>
           <WayToTeach {...ways[2]}/>
           <WayToTeach {...ways[3]}/>
           <WayToTeach {...ways[4]}/> */}
                
          </ul>
        </section>
        {/* <h1>Hello React!!</h1> */}
        <section>
          <h3>Lorem ipsum dolor sit amet consectetur.</h3>

        {/* <Button text="Button1"/> */}
        <Button isActive={contentType==='way'} onClick ={() => handleClick('way') }>Подход</Button>
        <Button isActive={contentType==='easy'} onClick ={ () => handleClick('easy') }>Доступность</Button>
        <Button isActive={contentType==='program'} onClick ={ () => handleClick('program') }>Концентрация</Button>

      {/* {contentType?  <p>{differences[contentType]}</p> : <p>Нажми на кнопку</p>} */}
       
      {/* {!contentType? <p>Нажми на кнопку</p> : null} 
      {contentType? <p>{differences[contentType]}</p> : null}  */}

      {!contentType && <p>Нажми на кнопку</p>}
      {contentType && <p>{differences[contentType]}</p>}

      {/* {tabContent} */}
        </section>
      </main>
    </div>
  )
}

export default App


