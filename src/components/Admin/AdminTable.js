import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        fontSize: 14,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 8,
        overflowX: 'auto',
    },
    iconHover: {
        '&:hover': {
            color: theme.palette.primary.main,
        },
    },
});


class AdminTable extends Component {

    state = {
        open: false,
        selectedId: ''
    };

    componentDidMount = () => {
        this.props.dispatch({ type: 'FETCH_PROJECTS' });
    }


    // handles delete icon button and prompts confirmation dialog window to open up
    handleDeleteClick = id => () => {
        this.setState({
            open: true,
            selectedId: id,
        });
    }

    // displays the delete confirmation dialog window once a project has been successfully added to database
    deleteDialog = () => {
        return <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"Please Confirm"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Are you sure you want to delete this project from the database?
            </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={this.handleDeleteConfirm('disagree')} color="primary">
                    Disagree
            </Button>
                <Button onClick={this.handleDeleteConfirm('agree')} color="primary" autoFocus>
                    Agree
            </Button>
            </DialogActions>
        </Dialog>
    }

    // handles 'agree'/'disagree' buttons from dialog window and sends delete dispatch to redux
    handleDeleteConfirm = confirmation => () => {
        if (confirmation === 'agree') {
            this.props.dispatch({ type: 'DELETE_PROJECT', payload: this.state.selectedId });
        }
        this.setState({
            open: false,
            selectedId: ''
        });
    }


    render() {

        const { classes } = this.props;

        return (
            <>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <CustomTableCell>Project Name</CustomTableCell>
                                <CustomTableCell align="right"></CustomTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.projects.map(row => (
                                <TableRow key={row.id}>
                                    <CustomTableCell component="th" scope="row">
                                        {row.name}
                                    </CustomTableCell>
                                    <CustomTableCell style={{ width: '10%' }} align="right">
                                        <IconButton className={classes.iconHover} onClick={this.handleDeleteClick(row.id)} aria-label="Delete">
                                            <DeleteIcon />
                                        </IconButton></CustomTableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
                {this.deleteDialog()}
            </>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}


export default withStyles(styles)(connect(mapReduxStateToProps)(AdminTable));