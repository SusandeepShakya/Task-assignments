import React from 'react'


const ListComponent = (props) => {
    return (
        <>
            <h2>{props.heading}</h2>
            <ul>
                <li>{props.name}</li>
                <li>{props.email}</li>
                <li>{props.phoneNumber}</li>
            </ul>
        </>

    )
}

export default ListComponent