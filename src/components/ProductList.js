import React from 'react'

export default function ProductList(props ) {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.price}</td>
            <td>{props.category}</td>
            <td>{props.price}</td>
            <td>{props.owner}</td>
        </tr>
    )
}
