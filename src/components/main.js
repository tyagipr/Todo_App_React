import React from "react";
import TodoApp from "../components/todoapp";
import ListItems from "../components/listitems";
import "../App.css";
import uuid from "uuid/v1";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        id: 0,
        text: "",
        checked: false
      },
      items: [],
      filteredArray: []
    };
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    
  }

  // function to add item
  addItem(item) {
    if (!item) {
      console.log("additem", item);
      this.setState(
        {
          item: {
            id : uuid(),
            text: item,
            checked: false
          }
        },
        function() {
          this.state.items.push(this.state.item);
          this.setState({
            items: this.state.items
          });
        }
      );
    }
  }

  // function to remove item
  removeItem(key) {
    let filteredArray = this.state.items.filter(x => x.id !== key);
    this.setState({
      items: filteredArray
    });
  }
  
  render() {
    return (
      <div>
        <TodoApp addItem={this.addItem} />
        <ListItems
          items = {this.state.items}
          removeItem={this.removeItem}
          uniqueKey={this.id}
          itemName={this.state.items}
          handleChecked={this.handleChecked}
        />
      </div>
    );
  }
}
     

export default Main;
