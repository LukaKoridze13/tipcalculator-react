import React, { useContext, useState } from 'react'
import { Context } from '../Context'
export default function TotalTip() {
    let context = useContext(Context)
  return (
      <div className="totalTip">
          <div className="totalTip__left">
              <p className="tipAmount">Total</p>
              <p className="person">/ person</p>
          </div>
          <div className="totalTip__right">
              ${context.total}
          </div>
      </div>
  )
}
