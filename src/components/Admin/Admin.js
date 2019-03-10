import React, { Component } from 'react';
import ProjectNavBar from '../ProjectPage/ProjectNavBar';
import AdminForm from './AdminForm';


class Admin extends Component {
    // Renders the entire app on the DOM
    render() {

        return (
            <div>
                <ProjectNavBar />
                <AdminForm />
            </div>
        );
    }
}

export default Admin;