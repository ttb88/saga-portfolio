import React, { Component } from 'react';
import 'date-fns';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 0,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: 800,
        minWidth: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    textField: {
        marginLeft: 4,
        marginRight: 4,
    },
    menu: {
        width: 200,
    },
});


class AdminForm extends Component {

  

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
    }

    handleChange = (property) => (event) => {
        this.setState({ 
            ...this.state,
            [property]: event.target.value });
    }

    handleSubmit = () => {
        // your submit logic
    }


    handleDateChange = date => {
        this.setState({ 
            selectedDate: date });
    };
  
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.container}>
               
                
                <ValidatorForm
                    ref="form"
                    onSubmit={this.handleSubmit}
                    onError={errors => console.log(errors)} 
                    >
                    <TextValidator
                        id="outlined"
                        label="Name"
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
                   
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker
                        margin="normal"
                        label="Date"
                        value={this.state.selectedDate}
                        onChange={this.handleDateChange}
                        // validators={['required']}
                        // errorMessages={['this field is required']}
                        className={classNames(classes.textField)}
                        variant="outlined"
                    />
                    </MuiPickersUtilsProvider>
                       
                    <TextValidator
                        id="outlined-select-currency"
                        select
                        label="Select a tag"
                        className={classes.textField}
                        value={this.state.currency}
                        onChange={this.handleChange('currency')}
                        SelectProps={{
                            MenuProps: {
                                className: classes.menu,
                            },
                        }}
                        helperText="Please select your currency"
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

                    <TextValidator
                        id="outlined"
                        label="Name"
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
                    <TextValidator
                        id="outlined"
                        label="Name"
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
               

                      </ValidatorForm>
            </div>
        );
    }
}

AdminForm.propTypes = {
    classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(AdminForm);