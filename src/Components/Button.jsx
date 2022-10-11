import React, { useContext } from 'react'
import { Context } from '../Context';
export default function Button() {
    let context  = useContext(Context)
    let bill = document.querySelector('#bill')
    let people = document.querySelector('#people')

    function click(e) {
        bill.value = ''
        people.value = ''
        for (let y of document.querySelectorAll('.tip')) { y.classList.remove('active') }
        document.querySelector('.tip-Custom').value = '';
        document.querySelector('.tip-Custom').placeholder = "Custom"
        document.querySelector('.totalTip__right').style.fontSize = "48px"
        document.querySelector('.personTip__right').style.fontSize = "48px"
        context.setTip(0)
        context.setPeople(0)
        context.setBill(0)
        context.setTipAmount('0.00')
        context.setTotal('0.00')
        context.turnOnMessages(false)
        e.target.classList.remove('activeButton')
    }
    return (
        <button onClick={click} >RESET</button>
    )
}
