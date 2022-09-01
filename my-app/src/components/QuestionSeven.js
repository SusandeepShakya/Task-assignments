import React, { useEffect } from 'react'


const QuestionSeven = ({ setNumValue, numValue }) => {

    function hookupevents() {
        for (var i = 0; i < 3; i++) {
            document.getElementById("button" + i)
                .addEventListener("click", function () {
                    alert(i);
                });
        }
    }

    return (
        <>
            <button id="button0" onClick={hookupevents}>Submit</button>
            <button id="button1">Submit</button>
            <button id="button2">Submit</button>
        </>

    )
}

export default QuestionSeven