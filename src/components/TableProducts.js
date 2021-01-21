import React, { Component } from 'react'
import ProductList from './ProductList'
import Swal from 'sweetalert2';

export default class TableProducts extends Component {
	constructor(){
		super();
		this.state = {
			products: []
		}
	}
	//Componentes ciclo de vida - Cuandos se monta, se actualiza y desmonto
	componentDidMount(){
		fetch('/api/course')
		.then(respuesta => {
			return respuesta.json();
		})
		.then(productosRespuesta => {
			// console.log(productos)
			this.setState({ products: productosRespuesta.allCourses})
		})
		.catch(error => {
			console.log(error)
		}
		)
	}
	//Creacion de un método
	mensaje(){
		Swal.fire({
			title:'Good job!',
			text: 'You clicked the button!',
			icon: 'success',
			timer: 2000,
		})
	}
	render() {
		return (
			<React.Fragment>
            {/* <!-- PRODUCTS LIST --> */}
					<h1 className="h3 mb-2 text-gray-800" onClick={this.mensaje}>All the products in the Database</h1>
					
					{/* <!-- DataTales Example --> */}
					<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%">
									<thead>
										<tr>
											<th>Id</th>
											<th>Name</th>
											<th>Price</th>
											<th>category</th>
											<th>Price</th>
											<th>Owner</th>
										</tr>
									</thead>
									<tfoot>
										<tr>
											<th>Id</th>
											<th>Name</th>
											<th>Price</th>
											<th>category</th>
											<th>Price</th>
											<th>Owner</th>
										</tr>
									</tfoot>
									<tbody>
									{
										this.state.products.map (
											(producto, index) => {
												return <ProductList {...producto} key={index}/>
											}
										)
									}
									</tbody>
								</table>
							</div>
						</div>
					</div>
        </React.Fragment>
		)
	}
}