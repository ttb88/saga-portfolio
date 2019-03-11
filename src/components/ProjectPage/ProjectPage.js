import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import NavBar from '../NavBar/NavBar';
import '../ProjectPage/ProjectPage.css';
import ProjectList from './ProjectList';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    typography: {
        useNextVariants: true,
    },
};


class ProjectPage extends Component {
    render() {
        const { classes } = this.props;

        return (
            <>
                <div>
                    <NavBar />
                </div>
                <div className="hero-content">
                    <div className="github-logo"><img src="/images/GitHub-Mark-Light-120px-plus.png" alt="github logo" />
                        <Typography variant="h5" color="inherit" className={classes.grow}>TONY BRAASCH</Typography>
                    </div>
                    <ProjectList />
                </div>
                
            </>
        );
    }
}


export default withStyles(styles)(ProjectPage);