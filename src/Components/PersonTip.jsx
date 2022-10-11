import React, { useContext } from 'react'
import { Context } from '../Context'

export default function PersonTip() {
    let context = useContext(Context)
  return (
      <div className="personTip">
          <div className="personTip__left">
              <p className="tipAmount">Tip Amount</p>
              <p className="person">/ person</p>
          </div>
          <div className="personTip__right">
              ${context.tipAmount}
          </div>
      </div>
  )
}
