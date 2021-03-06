import axios from 'axios'
import React, { useEffect, useState } from 'react'
export default function LastCourseInDB() {
    let [course, setCourse] = useState([])

    useEffect( async () =>{
            const result = await axios('/api/course/last');
            setCourse(result.data.course);
    }, [])
    let route = "http://localhost:5000/images/products/"+course.image;
    let link = "http://localhost:5000/courses/"+course.id
    return (
        <React.Fragment>
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Ultimo curso registrado en base de datos</h6>
                    </div>
                    <div className="card-body">
                    <h5 className="row text-center pb-2">{course.name}</h5>
                    <div className="row">
                        <div className="col col-md-6">
                            <img src={route} className="col" />
                        </div>
                        <div className="col col-md-6">
                            <div className="text-center">
                                {/* <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src={image} alt="image dummy"/> */}
                            </div>
                            <p>{course.short_description}</p>
                            <hr/>
                            
                        </div>
                            <p>{course.description}</p>
                            <a href={link}>Ver producto detallado en web de Cursitos</a>
                    </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
