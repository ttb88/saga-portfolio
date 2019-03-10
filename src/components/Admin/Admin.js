import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ProjectNavBar from '../ProjectPage/ProjectNavBar';
import AdminForm from './AdminForm';
import AdminTable from './AdminTable';


const styles = theme => ({
    root: {
        flexGrow: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 40,
    },
    container: {
        maxWidth: 700,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
});


class Admin extends Component {
    // Renders the entire app on the DOM


    render() {

        const { classes } = this.props;

        return (
            <div>
                <ProjectNavBar />
                <div className={classes.root}>
                    <div className={classes.container}>
                        <AdminForm />
                        <AdminTable />
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Admin);