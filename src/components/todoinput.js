import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/Input'
import { withStyles } from '@material-ui/core/styles';

 


const styles = theme => ({
        textField: {
            marginLeft: theme.spacing.unit,
            marginRight: theme.spacing.unit,
        },
        
  
});
const TodoInput = (props) => {
    const { classes } = props;
    return(
        <TextField
          id={props.id}
          label={props.label}
          placeholder={props.placeholder}
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
    );
}

TodoInput.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(TodoInput);

