import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';



class Item extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleSelect: PropTypes.func.isRequired,
    isSelected: PropTypes.bool.isRequired,
  };

  render() {
    const { classes, data, handleDelete, handleSelect, isSelected } = this.props;
    return (
      <ListItem button onClick={handleSelect} className={isSelected ? classes.selected : null}>
        <ListItemText primary={data.name} secondary={data.dateCreated.toString()} />
        <ListItemSecondaryAction>
          <IconButton aria-label="Delete" onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 5,
    color: "#303030"
  },
  selected: {
    background: "linear-gradient(to left, rgb(111, 229, 201), rgb(0, 188, 212))",
  }
});
export default withStyles(styles)(Item);
