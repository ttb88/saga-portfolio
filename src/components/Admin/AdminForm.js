import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import MenuItem from '@material-ui/core/MenuItem';
import classNames from 'classnames';


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

    componentDidMount = () => {
        this.props.dispatch({ type: 'FETCH_TAGS' });
        // this.getTags();
    }


    // getTags() {
    //     this.props.dispatch({ type: 'FETCH_TAGS' });
    // }


    handleChange = (property) => (event) => {
        this.setState({
            ...this.state,
            [property]: event.target.value
        });
    }

    handleSubmit = () => {
        this.props.dispatch({ type: 'POST_PROJECT', payload: this.state });
        this.setState({
            name: '',
            selectedDate: new Date(),
            selectedTag: '',
            gitHubUrl: '',
            websiteUrl: '',
            description: '',
        });
        // window.location.reload('/')
    }


    handleDateChange = date => {
        this.setState({
            selectedDate: date
        });
    };

    handleClose = () => {
        this.props.dispatch({ type: 'RESET_POST' })
    };



    // Renders the entire app on the DOM
    render() {
        const { classes } = this.props;

        // console.log('tags', this.props.tags);

        return (
            <>
                <ValidatorForm
                    ref="form"
                    onSubmit={this.handleSubmit}
                    onError={errors => console.log(errors)}
                >
                    <Grid container spacing={8}>
                        <Grid item xs={12} sm={5}>
                            <TextValidator
                                id="outlined"
                                label="Name"
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
                                    // validators={['required']}
                                    // errorMessages={['this field is required']}
                                    className={classNames(classes.textField)}
                                    variant="outlined"
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <TextValidator
                                id="outlined-select-currency"
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
                                // helperText="Please select your currency"
                                validators={['required']}
                                errorMessages={['this field is required']}
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
                                id="outlined"
                                label="GitHub URL"
                                fullWidth
                                className={classNames(classes.textField)}
                                onChange={this.handleChange('gitHubUrl')}
                                name="gitHubUrl"
                                type="url"
                                margin="normal"
                                value={this.state.gitHubUrl}
                                validators={['required']}
                                errorMessages={['this field is required']}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextValidator
                                id="outlined"
                                label="Website URL (optional)"
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
                                id="filled-multiline-flexible"
                                label="Description"
                                multiline
                                fullWidth
                                rowsMax="4"
                                type="text"
                                value={this.state.description}
                                onChange={this.handleChange('description')}
                                className={classes.textField}
                                margin="normal"
                                // helperText="hello"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
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
                    open={this.props.confirmPost}
                    autoHideDuration={6000}
                    onClose={this.handleClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id" style={{ display: 'flex', alignItems: 'center'}}><CheckCircleIcon className={classes.icon} />Project Successfully Added!</span>}
                />
            </>
        );
    }
}


const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}


export default withStyles(styles)(connect(mapReduxStateToProps)(AdminForm));