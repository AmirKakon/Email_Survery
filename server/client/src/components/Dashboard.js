import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            Dashboard
            <div className="fixed-action-btn">
                <Link className="btn-floating btn-large red" to='/surveys/new'>
                    <i class="material-icons">add</i>
                </Link>
            </div>

        </div>
    );
};

export default Dashboard;