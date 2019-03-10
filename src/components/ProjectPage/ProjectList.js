import React, { Component } from 'react';
import {connect} from 'react-redux';
import ProjectItem from './ProjectItem';



class ProjectList extends Component {

    componentDidMount = () => {
        this.getProjects();
    }

    getProjects() {
        this.props.dispatch({type:'FETCH_PROJECTS'});
    }
   

    render() {

        console.log(this.props.projects)


        return (
            <div>
                <ProjectItem />
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(ProjectList);