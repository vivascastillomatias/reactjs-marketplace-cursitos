import React, { Component } from 'react'

export default class Sales extends Component {
    // constructor(){
	// 	super();
	// 	this.state = {
	// 		courses: []
	// 	}
	// }
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
            <div className="">
                <div className="col-lg-12">
                <h1 className="text-white bg-dark text-center p-4 ">VENTAS</h1>
                </div>
            </div>
        )
    }
}
