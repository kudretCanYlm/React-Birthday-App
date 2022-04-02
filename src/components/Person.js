import React from "react";

export default function Person({ name, age, pictureUrl }) {

    return (
        <div testId={1} className="person">
            <div className="left">
                <img src={pictureUrl} />
            </div>
            <div className="right">
                <h4 className="title">{name}</h4>
                <span className="contain">{age} years</span>
            </div>
        </div>
    )

}