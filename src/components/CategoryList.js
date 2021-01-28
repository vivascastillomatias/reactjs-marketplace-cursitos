import React from 'react'

export default function CategoryList(props) {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.description}</td>
        </tr>
    )
}