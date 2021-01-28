import React from 'react'

export default function SaleList(props) {
    return (
        <tr>
            <td>{props.user.user}</td>
            <td>{props.course.name}</td>
            <td>{props.price}</td>
        </tr>
    )
}
