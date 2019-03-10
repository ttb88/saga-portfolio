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

    componentDidMount = () => {
        this.props.dispatch({ type: 'FETCH_PROJECTS' });
    }


    handleClick = id => () => {
        console.log('delete click for id', id);
        this.props.dispatch({ type: 'DELETE_PROJECT', payload: id });
    }

    render() {

        const { classes } = this.props;

        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <CustomTableCell>Project Name</CustomTableCell>
                            <CustomTableCell align="right"></CustomTableCell>
                            {/* <CustomTableCell align="right">Fat (g)</CustomTableCell>
                            <CustomTableCell align="right">Carbs (g)</CustomTableCell>
                            <CustomTableCell align="right">Protein (g)</CustomTableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.projects.map(row => (
                            <TableRow key={row.id}>
                                <CustomTableCell component="th" scope="row">
                                    {row.name}
                                </CustomTableCell>
                                <CustomTableCell style={{ width: '10%' }} align="right">
                                    <IconButton className={classes.iconHover} onClick={this.handleClick(row.id)} aria-label="Delete">
                                        <DeleteIcon />
                                    </IconButton></CustomTableCell>
                                {/* <CustomTableCell align="right">{row.fat}</CustomTableCell>
                                <CustomTableCell align="right">{row.carbs}</CustomTableCell>
                                <CustomTableCell align="right">{row.protein}</CustomTableCell> */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}


export default withStyles(styles)(connect(mapReduxStateToProps)(AdminTable));