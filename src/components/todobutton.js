import React from 'react'
import PropTypes from 'prop-types'
import AddIcon from '@material-ui/icons/Add'
import Fab from '@material-ui/core/Fab'
import { withStyles } from '@material-ui/core/styles';


// const Button = props => {
//     return (
//       <button color={props.color} onClick={e => props.onClick} className={props.className}>
//         {props.buttonText}
//       </button>
//     );
//   };

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  }
});

  const Button = (props) => {
    const { classes } = props;
    return(
      <Fab size={props.size} color={props.color} aria-label={props.label} className={classes.margin}>
          <AddIcon />
        </Fab>
    );
    }  

    Button.propTypes = {
      classes: PropTypes.object.isRequired,
    };
  
    export default withStyles(styles)(Button);
  