import React from 'react'

export default class ListItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        checked: false
      };
    }
  
    render() {
      return (
        <div className="flex list-item">
          <input
            type="checkbox"
            onClick={() => {
              this.props.handleChecked(this.props.keyProp);
            }}
          />
          <li key={this.props.keyProp}>
            {!this.props.checked ? (
              this.props.itemName
            ) : (
              <strike>{this.props.itemName}</strike>
            )}
          </li>
          <button
            className="remove-button"
            onClick={() => {
              this.props.removeItem(this.props.keyProp);
            }}>
            X
          </button>
        </div>
      );
    }
  }