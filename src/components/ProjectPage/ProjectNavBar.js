import React, { Component } from 'react';
import { HashRouter as Link } from 'react-router-dom';
import '../ProjectPage/ProjectNavBar.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';



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
    link: {
        textDecoration: 'none',
        color: 'inherit',
    }
};





class ProjectNavBar extends Component {

    state = {
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };
    
    
    
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static" color="primary" className={classes.root}>
                    <Toolbar>
                        <IconButton onClick={this.handleClick} className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu"
                            anchorEl={this.state.anchorEl}
                            open={Boolean(this.state.anchorEl)}
                            onClose={this.handleClose}
                        >
                            <MenuItem onClick={this.handleClose}><Link className={classes.link} to="/">Home</Link></MenuItem>
                            <MenuItem onClick={this.handleClose}><Link className={classes.link} to="/admin">Admin</Link></MenuItem>
                        </Menu>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                           My Github Portfoilio
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

ProjectNavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectNavBar);