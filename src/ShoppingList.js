import React, { Component } from "react";
 
class ShoppingList extends Component {
  render() {
    return (
      <div className="ShoppingListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input>
            </input>
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ShoppingList;