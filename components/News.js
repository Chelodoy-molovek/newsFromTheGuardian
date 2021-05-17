import React from "react";

export default function Sport({ sport, paginace, economy }) {
    return (
        <div className="button">
            <button className="buttons" onClick={sport}>Sport</button>
            <button className="buttons" onClick={paginace}>Politic</button>
            <button className="buttons" onClick={economy}>Economy</button>
        </div>
    )
} 