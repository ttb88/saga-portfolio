import React, { Component } from 'react';
import ProjectNavBar from '../ProjectPage/ProjectNavBar';
import AdminForm from '../Admin/AdminForm';
import AdminFormTwo from '../Admin/AdminFormTwo';



class Admin extends Component {
    // Renders the entire app on the DOM
    render() {

        return (
            <div>
                <ProjectNavBar />
                {/* <AdminForm /> */}
                <AdminFormTwo />
            </div>
        );
    }
}

export default Admin;