import {ways} from "../data"
import WayToTeach from "./WayToTeach"


export default function TeachingSection() {
    return(
        <section>
        <h3>Наш подход</h3>
        <ul>
          {[ways.map(way => <WayToTeach key = {way.title} {...way}/>)]}   
        </ul>
      </section>
    )
}