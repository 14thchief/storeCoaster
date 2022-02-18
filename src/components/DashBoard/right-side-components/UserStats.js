import React from "react";

const UserStats= ()=>{

    return (
        <div className="box-model">
            <h4>Users</h4>
            <div className="row">
                <div className=" col-lg-12 col-xs-12">
                    <div className="registered bg-primary">
                        <div className="row">
                            <div className="col-lg-8 col-xs-8">
                                <h5>REGISTERED USERS</h5>
                            </div>
                            <div className="col-lg-4 col-xs-4">
                                <h3 id="userscount"></h3>
                            </div>
                        </div>
                    </div>
                    <div className="registered bg-success">
                        <div className="row">
                            <div className="col-lg-8 col-xs-8">
                                <h5>THIS MONTH</h5>
                            </div>
                            <div className="col-lg-4 col-xs-4">
                                <h3 id="myTargetElement4.2"></h3>
                            </div>
                        </div>
                    </div>
                    <div className="registered bg-warning">
                        <div className="row">
                            <div className="col-lg-8 col-xs-8">
                                <h5>LAST MONTH</h5>
                            </div>
                            <div className="col-lg-4 col-xs-4">
                                <h3 id="myTargetElement4.1"></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UserStats;