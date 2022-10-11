import React from 'react'
import SingleTip from './SingleTip'
import CustomTip from './CustomTip'
const tips = [5, 10, 15, 25, 50, "Custom"] // Tips

export default function Tipbox() {
    return (
        <div className="tipBox">
            <div className="spaceBetween">
                <p>Select Tip %</p>
                <p className="alert deactivate">Can't be zero</p>
            </div>

            <div className="tips">
                { tips.map((amo)=>{
                    if(amo!=="Custom"){
                        return <SingleTip amount={amo} key={amo} />
                    }else{
                        return <CustomTip key={amo}/>
                    }
                })}
            </div>
        </div>
    )
}
