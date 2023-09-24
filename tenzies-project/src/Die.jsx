import React from 'react';

export default function die (props) {

    const isHold = props.hold === true ?  "bg-green-400" : "bg-gray-200"
    const hover = props.hold === true ? " hover:drop-shadow-4xl" : " hover:bg-gray-300 hover:rounded-lg hover:drop-shadow-4xl"

    return(
        <div onClick = {props.holdDice} className={`${isHold} rounded-md drop-shadow-lg w-[50px] h-[50px] flex justify-center items-center ${hover} cursor-pointer`}>
        <p className="text-lg">{props.value}</p>
    </div>
    )
}