import React, { useContext } from 'react'
import Person from '../Images/person.svg'
import { Context } from '../Context'
export default function Peoplebox() {
    let context = useContext(Context)
    function change(e){
        e.target.value = Math.round(e.target.value * 100) / 100
        let value = Number(e.target.value)
        if (value < 1 || value == '-') {
            e.target.value = ''
        }
        if (Number(e.target.value) >= 1) {
            document.querySelectorAll('.alert')[2].classList.add('deactivate')
        } else {
            document.querySelectorAll('.alert')[2].classList.remove('deactivate')
        }
        context.setPeople(value)
    }
    return (
        <div className="peopleBox">
            <div className="spaceBetween">
                <label htmlFor="people">Number of People</label>
                <p className="alert deactivate">Can't be zero</p>
            </div>
            <div>
                <input onClick={() => { context.turnOnMessages(true) }} onChange={change} type="number" id="people" name="people" placeholder="0" />
                <img src={Person} alt="Person Icon" />
            </div>
        </div>
    )
}
