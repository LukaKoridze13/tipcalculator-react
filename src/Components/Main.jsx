import React from 'react'
import Billbox from './Billbox'
import Peoplebox from './Peoplebox'
import PersonTip from './PersonTip'
import Tipbox from './Tipbox'
import TotalTip from './TotalTip'
import Button from './Button'
export default function Main() {
    return (
        <main className="main spaceAround">
            <div className="main__left">
                <Billbox />
                <Tipbox />
                <Peoplebox />
            </div>
            <div className="main__right">
                <PersonTip />
                <TotalTip />
                <Button />
            </div>
        </main>
    )
}
