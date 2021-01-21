import React, { Component } from 'react'

export default class Users extends Component {
    constructor(){
		super();
		this.state = {
			users: []
		}
	}
	//Componentes ciclo de vida - Cuandos se monta, se actualiza y desmonto
	// componentDidMount(){
	// 	fetch('/api/course')
	// 	.then(respuesta => {
	// 		return respuesta.json();
	// 	})
	// 	.then(productosRespuesta => {
	// 		// console.log(productos)
	// 		this.setState({ courses: productosRespuesta.allCourses})
	// 	})
	// 	.catch(error => {
	// 		console.log(error)
	// 	}
	// 	)
    // }
    
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                <h1 className="text-white bg-dark text-center p-4 ">USUARIOS</h1>
                </div>
            </div>
        )
    }
}
