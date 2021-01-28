import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserList from './UserList';

export default function Users() {
    let [users, setUsers] = useState([])

    useEffect( async () =>{
            const result = await axios('/api/user');
            setUsers(result.data.allUsers);
	}, [])
    return (
        <React.Fragment>
			<div className="col-md-10">
				<h1 className="text-white bg-dark text-center p-4 ">USUARIOS</h1>

				<div className="card shadow mb-4">
					<div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Usuarios registrados en base de datos</h6>
                    </div>
					<div className="card-body">
						<div className="table-responsive">
							<table className="table table-bordered" id="dataTable" width="100%">
								<thead>
									<tr>
										<th>Id</th>
										<th>User</th>
										<th>Nombre</th>
										<th>Apellido</th>
										<th>Email</th>
									</tr>
								</thead>
								<tfoot>
									<tr>
										<th>Id</th>
										<th>User</th>
										<th>Nombre</th>
										<th>Apellido</th>
										<th>Email</th>
									</tr>
								</tfoot>
								<tbody>
								{
									users.map((u,index) => <UserList {...u} key={index}  />)
								}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
        </React.Fragment>
    )
}

