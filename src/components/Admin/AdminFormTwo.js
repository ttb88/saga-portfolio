import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import MenuItem from '@material-ui/core/MenuItem';
import classNames from 'classnames';

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 40,
    },
    container: {
        maxWidth: 700,
        // minWidth: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    textField: {
        // marginLeft: theme.spacing.unit,
        // marginRight: theme.spacing.unit,
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
});


class AdminFormTwo extends Component {
    state = {
        name: '',
        currency: '',
        selectedDate: new Date(),
        currencies: [
            {
                value: 'USD',
                label: 'React',
            },
            {
                value: 'EUR',
                label: 'Javascript',
            },
            {
                value: 'BTC',
                label: '฿',
            },
            {
                value: 'JPY',
                label: '¥',
            },
        ],
        description: '',
        gitHubUrl: '',
        websiteUrl: '',
    }

    handleChange = (property) => (event) => {
        this.setState({
            ...this.state,
            [property]: event.target.value
        });
    }

    handleSubmit = () => {
        // your submit logic
    }


    handleDateChange = date => {
        this.setState({
            selectedDate: date
        });
    };



    // Renders the entire app on the DOM
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
            <div className={classes.container}>
            
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
                                    value={this.state.currency}
                                    onChange={this.handleChange('currency')}
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
                                    {this.state.currencies.map(option => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
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
                                <Button type="submit" variant="contained" color="primary" size="large" className={classes.button}>
                                    Submit
                                 </Button>
                            </Grid>        
                </Grid>
                </ValidatorForm>
            </div>
            </div>
        );
    }
}

AdminFormTwo.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(AdminFormTwo);