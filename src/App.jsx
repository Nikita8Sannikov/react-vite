import Header from "./components/Header/Header"
import TeachingSection from "./components/TeachingSection"
import ButtonSection from "./components/ButtonSection"
import IntroSection from "./components/IntroSection"
import TabsSection from "./components/TabsSection"
import FeedbackSection from "./components/FeedbackSection"
import { useState } from "react"
import EffectSection from "./components/EffectSection"
// import { Fragment } from "react"

function App() {
  const [tab, setTab] = useState('effect')

  return (
    <>
      <Header />
      <main>
      <IntroSection/>

      <TabsSection active={tab} onChange={(current)=>setTab(current)}/>

      {tab === 'main' && (
        <>
          <TeachingSection/>
          <ButtonSection/>
        </>
      )}
      
      {tab === 'feedback' && (
        <>
          <FeedbackSection/>
        </>
      )}

      {tab === 'effect' && (
        <>
          <EffectSection/>
        </>
      )}

      </main>
    </>
  )
}

export default App


