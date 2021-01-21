import React, { Component } from 'react'
import LastCourseInDB from './LastCourseInDB';
import ProductList from './ProductList';

export default class Courses extends Component {
    constructor(){
		super();
		this.state = {
			courses: []
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
			this.setState({ courses: productosRespuesta.allCourses})
		})
		.catch(error => {
			console.log(error)
		}
		)
    }
    
    render() {
        return (
            <div className="">
                <div className="col-lg-12">
                <h1 className="text-white bg-dark text-center p-4 ">CURSOS</h1>
                
            
                <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Todos los cursos en base de datos</h6>
                        </div>
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
										this.state.courses.map (
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
				</div>
			<LastCourseInDB/>
            </div>
        )
    }
}
