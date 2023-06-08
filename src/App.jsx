import React from "react"
import Image from "./components/image"
import Title from "./components/Title"
import Context from "./components/Context"
import Button from "./components/Button"
import "./my.css"


function App(){
  return(
    <div className="card-container">
      <Image />
        <div className="card-context">
          <Title title="Lizard"/>
          <Context/>
          <Button/>
        </div>
    </div>
    
    

  )
}
  

export default App
