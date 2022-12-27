import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            Dashboard
            <div className="fixed-action-btn">
                <a className="btn-floating btn-large red">
                    <i class="material-icons">add</i>
                </a>
            </div>

        </div>
    );
};

export default Dashboard;