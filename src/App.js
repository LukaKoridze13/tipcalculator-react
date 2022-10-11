import './CSS/reset.css';
import './CSS/style.css';
import './CSS/responsive.css';
import Header from './Components/Header';
import Main from './Components/Main';
import { useEffect, useState } from 'react';
import { Context } from './Context';
function App() {
  const [calculationStatus, setCalculationStatus] = useState(false)
  const [bill, setBill] = useState(0)
  const [tip, setTip] = useState(0)
  const [people, setPeople] = useState(0)
  const [tipAmount, setTipAmount] = useState('0.00')
  const [total, setTotal] = useState('0.00')
  let reset = document.querySelector('button')
  function messagesOn() {
    if (calculationStatus === true) {
      for (let x of document.querySelectorAll('.alert')) {
        x.classList.remove('deactivate')
      }
    }
  }
  function calculate() {
    let tipper = Math.floor(Number(bill) / 100 * tip / Number(people) * 100) / 100 // avoid overpaying, use floor
    setTipAmount(tipper)
    let total = Math.round((Number(bill) / Number(people) + tipper) * 100) / 100 // avoid overpaying
    setTotal(total)
    if (document.querySelector('.totalTip__right').innerText.length >= 9 || document.querySelector('.personTip__right').innerText >= 8) {
      document.querySelector('.totalTip__right').style.fontSize = "30px"
      document.querySelector('.personTip__right').style.fontSize = "30px"
    } else {
      document.querySelector('.totalTip__right').style.fontSize = "48px"
      document.querySelector('.personTip__right').style.fontSize = "48px"
    }
    reset.removeAttribute('disabled')
    reset.classList.add('activeButton')
  }
  useEffect(() => {
    if(calculationStatus){
      messagesOn()
    }
  }, [calculationStatus])
  useEffect(() => {
    if (bill >= 1 && tip >= 1 && people >= 1) {
      calculate()
    } else if(calculationStatus) {
      setTipAmount('0.00')
      setTotal('0.00')
      reset.setAttribute('disabled', true)
      reset.classList.remove('activeButton')
    }
  }, [bill, tip, people])
  return (
    <Context.Provider value={{ turnOnMessages: setCalculationStatus, setBill, setPeople, setTip, total, tipAmount, setTotal, setTipAmount }}>
      <div className="container centerCol">
        <Header />
        <Main />
      </div>
    </Context.Provider>
  );
}

export default App;
