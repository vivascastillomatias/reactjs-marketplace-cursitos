import React from 'react'

export default function UserList(props) {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.user}</td>
            <td>{props.first_name ? props.first_name : 'S/D - Incompleto' }</td>
            <td>{props.last_name ? props.last_name : 'S/D - Incompleto' }</td>
            <td>{props.email}</td>
        </tr>
    )
}
