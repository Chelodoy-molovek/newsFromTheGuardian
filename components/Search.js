import React from "react";

export default function Search({ slam }) {
    return (
        <div className="submit">
            <form onSubmit={slam} >
                <input type="text" name="input"></input>
                <button>Search</button>
            </form>
        </div>
    )
}