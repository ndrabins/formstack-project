import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "../actions";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import TextField from '@material-ui/core/TextField';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import List from '@material-ui/core/List';



import Item from "../components/Item";

class ItemList extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired,
    selectedIndex: PropTypes.number.isRequired
  };

  state = {
    itemName: ""
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleFieldEnter = () => {
    const { actions } = this.props;
    const { itemName } = this.state;

    if( itemName === ""){
      return;
    }

    actions.createItem(itemName);
    this.setState({ itemName: ""});
  };

  handleDelete = (index) => {
    const { actions } = this.props;
    actions.deleteItem(index);
  }

  handleSelect = (index) => {
    const { actions } = this.props;
    actions.selectItem(index);
  }

  render() {
    const { classes, items, selectedIndex } = this.props;
    const { itemName } = this.state;

    return (
      <div className={classes.root}>
        <Paper className={classes.container}> 
          <Typography variant="display2"> </Typography> 
          <div>
            <TextField
              id="itemName"
              label="Item Name"
              className={classes.textField}
              value={itemName}
              onChange={this.handleChange('itemName')}
              margin="normal"
              onKeyPress={ev => {
                if (ev.key === "Enter" && !ev.shiftKey) {
                  this.handleFieldEnter();
                  ev.preventDefault();
                }
              }}
            />
            <Button variant="raised" className={classes.button}> Create Item </Button>
          </div>
          <List className={classes.list}>
            {items.map((item, index) => (
                <Item
                  data={item}
                  key={index}
                  handleDelete={() => this.handleDelete(index)}
                  handleSelect={() => this.handleSelect(index)}
                  isSelected = {index === selectedIndex}
                />
              ))}
          </List>
        </Paper>
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing.unit*3
  },
  container: {
    padding: theme.spacing.unit*3,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    width: "100%",
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
    marginBottom: theme.spacing.unit*2,
  },
  button: {
    background: "linear-gradient(to right, #29b6f6, #796eff)",
    color: "white",
  }
});

function mapStateToProps(state) {
  return {
    items: state.items.items,
    selectedIndex: state.items.selectedIndex
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ItemList));
