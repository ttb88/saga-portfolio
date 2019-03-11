import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import NavBar from '../NavBar/NavBar';
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


    render() {

        const { classes } = this.props;

        return (
            <div>
                <NavBar />
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