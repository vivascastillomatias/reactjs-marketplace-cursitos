import React from 'react';
import {Link} from 'react-router-dom';


import Logo from '../assets/images/logo.png'


function SideBar() {
    return(
        <React.Fragment>
            <ul className="navbar-nav bg-gradient-dark sidebar col-md-2 sidebar-dark" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <a className="sidebar-brand align-items-center justify-content-center" href="/">
                <div className="sidebar-brand-icon">
                    <img src={Logo} height="30" alt="" loading="lazy"></img>
                </div>
                <div className="sidebar-brand-text mx-3">Dashboard</div>
                
            </a>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-4"/>

            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
                <Link className="nav-link" to="/">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </Link>
            </li>

            <hr className="sidebar-divider"/>

            {/* <!-- Heading --> */}
            <div className="sidebar-heading">Actions</div>
            
            <li className="nav-item">
                <Link className="nav-link" to="/courses">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Cursos</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/users">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Usuarios</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/categories">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Categorías</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/sales">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Ventas</span>
                </Link>
            </li>
            {/* <!-- Divider --> */}
            <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
        </React.Fragment>
    );
}

export default SideBar;
