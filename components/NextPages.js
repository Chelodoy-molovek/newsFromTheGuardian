import React from "react";

export default function NextPajes({last,next,pages}) {
    return (
        <div>
            <button onClick={last} disabled={pages === 1}>Предыдущая</button>
            <button onClick={next}>Следующая</button>
        </div>
    )
}