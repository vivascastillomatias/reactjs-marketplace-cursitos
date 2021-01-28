import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CategoryList from './CategoryList';

export default function Categories() {
    let [categories, setCategories] = useState([])

    useEffect( async () =>{
            const result = await axios('/api/categories');
            setCategories(result.data.allCategories);
	}, [])
    return (
        <React.Fragment>
			<div className="col-md-10">
				<h1 className="text-white bg-dark text-center p-4 ">CATEGORÍAS</h1>

				<div className="card shadow mb-4">
					<div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Categorías registradas en base de datos</h6>
                    </div>
					<div className="card-body">
						<div className="table-responsive">
							<table className="table table-bordered" id="dataTable" width="100%">
								<thead>
									<tr>
										<th>Id</th>
										<th>Nombre</th>
										<th>Descripción</th>
									</tr>
								</thead>
								<tfoot>
									<tr>
										<th>Id</th>
										<th>Nombre</th>
										<th>Descripción</th>
									</tr>
								</tfoot>
								<tbody>
								{
									categories.map((c,index) => <CategoryList {...c} key={index}  />)
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

