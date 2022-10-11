import React, { useContext, useState } from 'react'
import Dollar from '../Images/dollar.svg'
import { Context } from '../Context'
export default function Billbox() {
    let context = useContext(Context)
    const [bill, setBill] = useState(0)
    function change(e) {
        e.target.value = Math.round(e.target.value * 100) / 100
        setBill(e.target.value);
        let value = Number(e.target.value)
        if (value < 1 || value == 0 || value == '-') {
            setBill('')
        }
        if (Number(e.target.value) >= 1) {
            document.querySelectorAll('.alert')[0].classList.add('deactivate')
        } else {
            document.querySelectorAll('.alert')[0].classList.remove('deactivate')
        }
        context.setBill(Math.round(e.target.value * 100) / 100)
    }
    return (
        <div className="billBox">
            <div className="spaceBetween">
                <label htmlFor="bill">Bill</label>
                <p className="alert deactivate">Can't be zero</p>
            </div>
            <div>
                <input onChange={change} onClick={() => { context.turnOnMessages(true) }} type="number" id="bill" name="bill" placeholder="0" />
                <img src={Dollar} alt="Dollar Sign" />
            </div>
        </div>
    )
}
