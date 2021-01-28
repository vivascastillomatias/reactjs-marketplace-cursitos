import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BestSaleCourse from './BestSaleCourse';
import SaleList from './SaleList';

export default function Sales() {
    let [sales, setSales] = useState([])

    useEffect( async () =>{
            const result = await axios('/api/sales');
            setSales(result.data.allSales);
	}, [])
    return (
        <React.Fragment>
			<div className="col-md-10">
				<h1 className="text-white bg-dark text-center p-4 ">VENTAS</h1>

				<div className="card shadow mb-4">
					<div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Últimos cursos vendidos</h6>
                    </div>
					<div className="card-body">
						<div className="table-responsive">
							<table className="table table-bordered" id="dataTable" width="100%">
								<thead>
									<tr>
										<th>Usuario</th>
										<th>Curso</th>
										<th>Precio</th>
									</tr>
								</thead>
								<tfoot>
									<tr>
										<th>Usuario</th>
										<th>Curso</th>
										<th>Precio</th>
									</tr>
								</tfoot>
								<tbody>
								{
									sales.map((s,index) => <SaleList {...s} key={index}  />)
								}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			<BestSaleCourse/>
			</div>
        </React.Fragment>
    )
}

