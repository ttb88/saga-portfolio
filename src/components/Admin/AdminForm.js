import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import MenuItem from '@material-ui/core/MenuItem';
import classNames from 'classnames';
import { Typography } from '@material-ui/core';


const styles = theme => ({
    textField: {
        marginTop: 2,
        marginBottom: 2,
    },
    menu: {
        width: 200,
    },
    button: {
        margin: 0,
        width: 120,
        float: 'right',
    },
    icon: {
        fontSize: 20,
        opacity: 0.9,
        marginRight: theme.spacing.unit,
    },
    typography: {
        useNextVariants: true,
    },
});


class AdminForm extends Component {

    state = {
        name: '',
        selectedDate: new Date(),
        selectedTag: '',
        gitHubUrl: '',
        websiteUrl: '',
        description: '',
    }

    // send fetch dispatch to redux which will return all items from 'tags' table on database
    componentDidMount = () => {
        this.props.dispatch({ type: 'FETCH_TAGS' });
    }

    // handles on inputs on form and sets state
    handleChange = (property) => (event) => {
        this.setState({
            ...this.state,
            [property]: event.target.value
        });
    }

    // handles form submit button, sends post dispatch to redux with payload of all selected form inputs + clears form 
    handleSubmit = () => {
        this.state.selectedTag === '' && this.setState({selectedTag: null});
        this.props.dispatch({ type: 'POST_PROJECT', payload: this.state });
        this.setState({
            name: '',
            selectedDate: new Date(),
            selectedTag: '',
            gitHubUrl: '',
            websiteUrl: '',
            description: '',
        });
    }

    // handles date select from date-picker
    handleDateChange = date => {
        this.setState({
            selectedDate: date
        });
    };


    // determines which message will display on snackbar depending if post to database was successful  
    alertMessage = () => {
        const { classes } = this.props;
        if (this.props.confirmPost.status) {
            return <span id="message-id" style={{ display: 'flex', alignItems: 'center' }}>
                <CheckCircleIcon className={classes.icon} />Project Successfully Added!</span>
        }
        else {
            return <span id="message-id" style={{ display: 'flex', alignItems: 'center' }}>
                <ErrorIcon className={classes.icon} />Project add was unsuccessful</span>
        }
    }

    // handles close from snackbar and sends reset dispatch to redux  
    handleClose = () => {
        this.props.dispatch({ type: 'RESET_POST' })
    };


    render() {
        const { classes } = this.props;

        return (
            <>
                <Typography><h2>Add New Project</h2></Typography>
                <ValidatorForm
                    ref="form"
                    onSubmit={this.handleSubmit}
                    onError={errors => console.log(errors)}
                >
                    <Grid container spacing={8}>
                        <Grid item xs={12} sm={5}>
                            <TextValidator
                                id="name"
                                label="* Name"
                                fullWidth
                                className={classNames(classes.textField)}
                                onChange={this.handleChange('name')}
                                name="name"
                                type="text"
                                margin="normal"
                                value={this.state.name}
                                validators={['required']}
                                errorMessages={['this field is required']}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <DatePicker
                                    margin="normal"
                                    label="Date"
                                    fullWidth
                                    value={this.state.selectedDate}
                                    onChange={this.handleDateChange}
                                    className={classNames(classes.textField)}
                                    variant="outlined"
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <TextValidator
                                id="tag"
                                select
                                fullWidth
                                label="Select a tag"
                                className={classes.textField}
                                value={this.state.selectedTag}
                                onChange={this.handleChange('selectedTag')}
                                SelectProps={{
                                    MenuProps: {
                                        className: classes.menu,
                                    },
                                }}
                                // validators={['required']}
                                // errorMessages={['this field is required']}
                                margin="normal"
                                variant="outlined"
                            >
                                {this.props.tags.map(option => (
                                    <MenuItem key={option.id} value={option.id}>
                                        {option.name}
                                    </MenuItem>
                                ))}
                            </TextValidator>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextValidator
                                id="github"
                                label="* GitHub URL"
                                fullWidth
                                className={classNames(classes.textField)}
                                onChange={this.handleChange('gitHubUrl')}
                                name="gitHubUrl"
                                type="url"
                                margin="normal"
                                // helperText="*required"
                                value={this.state.gitHubUrl}
                                validators={['required']}
                                errorMessages={['this field is required']}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextValidator
                                id="website"
                                label="Website URL"
                                fullWidth
                                className={classNames(classes.textField)}
                                onChange={this.handleChange('websiteUrl')}
                                name="websiteUrl"
                                type="url"
                                margin="normal"
                                value={this.state.websiteUrl}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextValidator
                                id="description"
                                label="Description"
                                multiline
                                fullWidth
                                rowsMax="4"
                                type="text"
                                value={this.state.description}
                                onChange={this.handleChange('description')}
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={4} sm={2} >
                            <h5 style={{ margin: '0', fontWeight: 'lighter', fontStyle: 'italic' }}>* required</h5>
                        </Grid>
                        <Grid item xs={8} sm={10}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                size="large"
                                className={classes.button}>
                                Submit
                                 </Button>
                        </Grid>
                    </Grid>
                </ValidatorForm>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.props.confirmPost.open}
                    autoHideDuration={6000}
                    onClose={this.handleClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={this.alertMessage()}
                />
            </>
        );
    }
}


const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}


export default withStyles(styles)(connect(mapReduxStateToProps)(AdminForm));