import React from 'react'
import Button from '../components/todobutton'
import TodoInput from '../components/todoinput'



  

const TodoApp = props => {
    let input;
    return(
      <div className="form">
        <TodoInput
          id = "outlined-with-placeholder"
          label = "InputTask"
          placeholder = "Enter the task"
          className="itemName"
          ref={node => {
            input = node;
          }}
          onPressEnterKey={e => {
              // charCode 13 is a value of enter key.
            if (e.charCode === 13) {
              props.addItem(input.value);
              input.value = "";
            }
          }}
        />
        <Button 
        className="addItem"
        size="small" 
        color="secondary" 
        aria-label="Add"
        onClick={() => {
          props.addItem(input.value);
          console.log(input.value);
          input.value = "";
        }}
        />

      </div>
    );
}

export default TodoApp;