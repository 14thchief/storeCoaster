/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';


const SideBar= ()=> {

    return(
        <aside className="left-side sidebar-offcanvas">
            {/*sidebar: style can be found in sidebar*/}
            <section className="sidebar">
                <div id="menu" role="navigation">
                    <div className="nav_profile">
                        <div className="media profile-left">
                            <a className="pull-left profile-thumb" href="#">
                                <i className="fas fa-user-circle fa-3x"></i>
                            </a>
                            <div className="content-profile">
                                <h4 className="media-heading">Admin</h4>
                            </div>
                        </div>
                    </div>
                    <ul className="navigation">
                        <li className="active" id="active">
                            <a href="index-2.html">
                                <i className="text-primary menu-icon fa fa-fw fa-dashboard"></i>
                                <span className="mm-text ">Dashboard</span>
                                <span className="arrow"></span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i className="text-success menu-icon fa fa-fw fa-info-circle"></i>
                                <span className="mm-text">Apps</span>
                            </a>
                        </li>
                        <li className="menu-dropdown">
                            <a href="#">
                                <i className="text-default menu-icon fa fa-fw fa-users"></i>
                                <span className=" -text">Users</span>
                                <span className="fa fa-angle-down pull-right"></span>
                            </a>
                            <ul className="sub-menu">
                                <li>
                                    <a href="">
                                        <i className="text-primary fa fa-fw fa-users"></i> View List
                                    </a>
                                </li>
                                <li>
                                    <a href="admin_userprofile.html">
                                        <i className="text-success fa fa-fw fa-user"></i> View Grid
                                    </a>
                                </li>
                                <li>
                                    <a href="add_users.html">
                                        <i className="text-info fa fa-fw fa-user"></i> Add Users
                                    </a>
                                </li>
                                <li>
                                    <a href="admin_userpayment.html">
                                        <i className="text-danger fa fa-fw fa-money"></i> Bulk Upload
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-dropdown">
                            <a href="#">
                                <i className="text-warning menu-icon fa fa-fw fa-graduation-cap"></i>
                                <span className="mm-text">Courses</span>
                                <span className="fa fa-angle-down pull-right"></span>
                            </a>
                            <ul className="sub-menu">
                                <li>
                                    <a href="admin_courseschedule.html">
                                        <i className="text-primary fa fa-fw fa-th"></i> View Courses
                                    </a>
                                </li>
                                <li>
                                    <a href="courses.html">
                                        <i className="text-success fa fa-fw fa-indent"></i>Add Courses
                                    </a>
                                </li>
                                <li>
                                    <a href="admin_rooms.html">
                                        <i className="text-info fa fa-fw fa-star"></i> Performance
                                    </a>
                                </li>
                                <li>
                                    <a href="admin_trainers.html">
                                        <i className="text-danger fa fa-fw fa-paw"></i> Goals
                                    </a>
                                </li>
                                <li>
                                    <a href="admin_trainers.html">
                                        <i className="text-danger fa fa-fw fa-paw"></i> Training
                                    </a>
                                </li>
                                <li>
                                    <a href="admin_trainers.html">
                                        <i className="text-danger fa fa-fw fa-paw"></i> Promotion
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