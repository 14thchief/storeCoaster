import React from 'react';

const Header= ()=>{


    return(
        <div style={{display: "block"}}>
            <div className="se-pre-con"></div>
            {/*<!-- header logo: style can be found in header-->*/}
            <header className="header">
                <nav className="navbar navbar-static-top">
                    <a href="index-2.html" className="logo">
                        {/*<!-- Add the className icon to your logo image or logo icon to add the margining -->*/}

                    </a>
                    {/*<!-- Header Navbar: style can be found in header-->
                    <!-- Sidebar toggle button-->
                    <!-- Sidebar toggle button-->*/}
                    <div>
                        <a href="#" className="navbar-btn sidebar-toggle" data-toggle="offcanvas" role="button"> <i className="fa fa-fw fa-navicon"></i>
                        </a>
                    </div>
                    <div className="navbar-right">
                        <ul className="nav navbar-nav">

                            {/*<!--tasks-->

                            <!-- Notifications: style can be found in dropdown-->

                            <!-- User Account: style can be found in dropdown-->*/}
                            <li className="dropdown user user-menu">
                                <a href="#" className="dropdown-toggle padding-user" data-toggle="dropdown">
                                    <i className="fas fa-user-circle fa-2x"></i>
                                    <i className="caret"></i>
                                    <div className="riot">
                                        <div>
                                            <span>
                                                </span>
                                        </div>
                                    </div>
                                </a>
                                <ul className="dropdown-menu">
                                   {/* <!-- User image -->*/}
                                    <li className="user-header">
                                        <i className="fas fa-user-circle fa-3x"></i>
                                        <p>Name</p>
                                    </li>
                                    {/*<!-- Menu Body -->*/}
                                    <li className="pad-3">
                                        <a href="#">
                                            <i className="fa fa-fw fa-user"></i> My Profile
                                        </a>
                                    </li>
                                    <li role="presentation"></li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-fw fa-gear"></i> Account Settings
                                        </a>
                                    </li>
                                    <li role="presentation" className="divider"></li>
                                    {/*<!-- Menu Footer-->*/}
                                    <li className="user-footer">
                                        <div className="pull-right">
                                            <a href="">
                                                <i className="fa fa-fw fa-sign-out"></i> Logout
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header;