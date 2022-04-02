import React, { useState } from 'react';
import Person from './Person'
import BottomButton from "./base/BottomButton"
import { PersonReducer } from "../reducer/PersonReducer"

export default function Card() {

  let [personsData, setPersonsData] = useState(PersonReducer("", "list"));

  const click = () => {
    setPersonsData([]);
  }
 
  return (
    <div className="card">
      <div className="card-top">
        <h1>{personsData.length} birthdays today</h1>
      </div>
      <div className="card-middle">
        {
          
            personsData.map(person => (<Person age={person.age} pictureUrl={person.pictureUrl} name={person.name} />))
            
        }

      </div>
      <div className="card-bottom">
        <BottomButton color={"purple"} text="Clear All" click={click} />
      </div>
    </div>

  )
}