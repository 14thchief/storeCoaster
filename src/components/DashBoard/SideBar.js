/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';


const SideBar= ()=> {

    return(
        <aside className="left-side sidebar-offcanvas" style={{maxHeight: "200vh", height: "100%", width: "max-content", position: "absolute", top: "0%", padding: "5% 0", boxSizing: "border-box", overflow: "hidden", backgroundColor: "dodgerBlue" }}>
            {/*sidebar: style can be found in sidebar*/}
            <section className="sidebar">
                <div id="menu" role="navigation">
                    
                    <ul className="navigation">
                        <li className="active" id="active" >
                            <a href="#" style={{backgroundColor:"whitesmoke", borderRadius: "50px", fontSize: "18px", fontWeight: "bold", color: "dodgerBlue", width: "110%"}}>
                                <i className="text-primary menu-icon fa fa-fw fa-dashboard"></i>
                                <span className="mm-text " >Dashboard</span>
                                <span className="arrow"></span>
                            </a>
                        </li>
                        
                        <li className="menu-dropdown" >
                            <a href="#" style={{backgroundColor:"dodgerBlue", fontSize: "17px", fontWeight: "bold", color: "white" }}>
                                <i className="text-default menu-icon fa fa-fw fa-users"></i>
                                <span className=" -text">Users</span>
                                <span className="fa fa-angle-down pull-right"></span>
                            </a>
                            <ul className="sub-menu" style={{backgroundColor:"dodgerBlue", fontSize: "17px", fontWeight: "bold", color: "white" }}>
                                <li>
                                    <a href="#" style={{color: "inherit", fontSize: "inherit"}}>
                                        <i className="text-primary fa fa-fw fa-users" style={{color: "inherit", fontSize: "inherit"}}></i> View List
                                    </a>
                                </li>
                                <li>
                                    <a href="#" style={{color: "inherit", fontSize: "inherit"}}>
                                        <i className="text-success fa fa-fw fa-user" style={{color: "inherit", fontSize: "inherit"}}></i> View Grid
                                    </a>
                                </li>
                                <li>
                                    <a href="#" style={{color: "inherit", fontSize: "inherit"}}>
                                        <i className="text-info fa fa-fw fa-user" style={{color: "inherit", fontSize: "inherit"}}></i> Add Users
                                    </a>
                                </li>
                                <li>
                                    <a href="#" style={{color: "inherit", fontSize: "inherit"}}>
                                        <i className="text-danger fa fa-fw fa-money" style={{color: "inherit", fontSize: "inherit"}}></i> Bulk Upload
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-dropdown" >
                            <a href="#" style={{backgroundColor:"dodgerBlue", fontSize: "17px", fontWeight: "bold", color: "white" }}>
                                <i className="text-warning menu-icon fa fa-fw fa-graduation-cap"  style={{color: "inherit", fontSize: "inherit"}}></i>
                                <span className="mm-text">Courses</span>
                                <span className="fa fa-angle-down pull-right"></span>
                            </a>
                            <ul className="sub-menu" style={{backgroundColor:"dodgerBlue", fontSize: "17px", fontWeight: "bold", color: "white" }}>
                                <li>
                                    <a href="#" style={{color: "inherit", fontSize: "inherit"}}>
                                        <i className="text-primary fa fa-fw fa-th"  style={{color: "inherit", fontSize: "inherit"}}></i> View Courses
                                    </a>
                                </li>
                                <li>
                                    <a href="#" style={{color: "inherit", fontSize: "inherit"}}>
                                        <i className="text-success fa fa-fw fa-indent"  style={{color: "inherit", fontSize: "inherit"}}></i>Add Courses
                                    </a>
                                </li>
                                <li>
                                    <a href="#"  style={{color: "inherit", fontSize: "inherit"}}>
                                        <i className="text-info fa fa-fw fa-star"  style={{color: "inherit", fontSize: "inherit"}}></i> Policies
                                    </a>
                                </li>
                                <li>
                                    <a href="#"  style={{color: "inherit", fontSize: "inherit"}}>
                                        <i className="text-info fa fa-fw fa-star"  style={{color: "inherit", fontSize: "inherit"}}></i> Reports
                                    </a>
                                </li>
                                <li>
                                    <a href="#"  style={{color: "inherit", fontSize: "inherit"}}>
                                        <i className="text-info fa fa-fw fa-star"  style={{color: "inherit", fontSize: "inherit"}}></i> Performance
                                    </a>
                                </li>
                                <li>
                                    <a href="#"  style={{color: "inherit", fontSize: "inherit"}}>
                                        <i className="text-info fa fa-fw fa-star"  style={{color: "inherit", fontSize: "inherit"}}></i> Goals
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    {/*<!-- / .navigation -->*/}
                </div>
                {/*<!-- menu -->*/}
            </section>
            {/*<!-- /.sidebar -->*/}
        </aside>
    )
}

export default SideBar;