import { click } from '@testing-library/user-event/dist/click'
import React, { useContext } from 'react'
import { Context } from '../Context'

export default function SingleTip(props) {
  let context = useContext(Context)
  function click(e){
    for (let y of document.querySelectorAll('.tip')) { y.classList.remove('active') }
    e.target.classList.add('active')
    let cust = document.querySelector('.tip-Custom')
    cust.value = '';
    cust.placeholder = 'Custom'
    document.querySelectorAll('.alert')[1].classList.add('deactivate')
  }
  return (
    <div onClick={(e) => { context.turnOnMessages(true); context.setTip(props.amount); click(e) }}  className={`tip center tip-${props.amount}`}>
        {props.amount}%
    </div>
  )
}
