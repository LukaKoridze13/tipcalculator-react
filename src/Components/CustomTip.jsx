import React, { useContext } from 'react'
import { Context } from '../Context'

export default function CustomTip() {
  let context = useContext(Context)
  function click(e) {
    context.setTip(0)
    for (let y of document.querySelectorAll('.tip')) { y.classList.remove('active') }
    e.target.removeAttribute('placeholder')
    document.querySelectorAll('.alert')[1].classList.remove('deactivate')
    context.turnOnMessages(true);
  }
  function change(e){
    e.target.value = Math.round(e.target.value * 100) / 100
    let value = Number(e.target.value)
    if (value <= 0 || value == '-') {
      value = 0;
      e.target.value = '';
    }
    if (Number(e.target.value) >= 1) {
      document.querySelectorAll('.alert')[1].classList.add('deactivate')
    } else {
      document.querySelectorAll('.alert')[1].classList.remove('deactivate')
    }
    context.setTip(value)
    if(value===''){
      context.setTip(0)

    }
  }
  return (
    <input onClick={(e) => { click(e) }} onChange={change} type="number" className='tip center tip-Custom' placeholder='Custom' />
  )
}
