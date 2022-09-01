import React from 'react'


const NumIncrementButton = ({ setNumValue, numValue }) => {
    return (
        <>
            <button onClick={() => setNumValue(numValue + 5)}>Add 5</button>
        </>

    )
}

export default NumIncrementButton