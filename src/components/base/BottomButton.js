import React from "react";
import buttons from "../../styles/buttons.css"

export default function BottomButton({ text, color, click = t => t }) {



    return (
        <>
            <button className={"btn " + color} onClick={click}>
                {
                    text
                }
            </button>

        </>
    )
}