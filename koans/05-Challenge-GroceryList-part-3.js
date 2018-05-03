import React from 'react'
import PropTypes from 'prop-types'

// Task: User needs to be able to clear whole grocery list in one click.
//       Render a proper button under your list and implement the `clearList` method.
//       This method should clear the `groceries` array placed in your state.
//       This is similar to the previous task so I don't want to say any more.
//       Have fun.
//
//       Caution: Remember that you should change state only using `setState`
//                method. The only exception of that rule is state definition
//                in a component's class constructor.
//
//       Hint: Don't forget about adding the clearing list button to the
//             `GroceryList` rendering method.

class GroceryList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      groceries: [
        {name: 'Apples'}
      ],
      newGroceryName: ''
    }

    this.addGroceryItem = this.addGroceryItem.bind(this)
    this.clearList = this.clearList.bind(this)
    this.inputChanged = this.inputChanged.bind(this)
  }

  inputChanged(event) {
    this.setState({newGroceryName: event.target.value})
  }

  addGroceryItem() {
    if (this.state.newGroceryName) {
      const newGroceryItem = {name: this.state.newGroceryName}
      this.setState((prevState) => {
        return {groceries: prevState.groceries.concat([newGroceryItem])}
      })
    }
  }

  // Fill the definition of the following method to allow clearing the list
  // Hint: You can just simply set the groceries to an empty array.
  clearList() {
    // Put your code here
  }

  render() {
    const groceriesComponents = []

    for (let index = 0; index < this.state.groceries.length; index++) {
      groceriesComponents.push(
        <GroceryListItem key={index}
          grocery={this.state.groceries[index]}/>
      )
    }

    const newProductInput = <input className='new-item' type='text' onChange={this.inputChanged}/>
    const newProductAddButton = <button className='add-product' onClick={this.addGroceryItem}>Add new Product</button>
    const clearListButton = <button onClick={this.clearList} className='clear-list'>Clear the List</button>

    return (
      <div>
        <ul>
          {groceriesComponents}
        </ul>
        {newProductInput}
        {newProductAddButton}
      </div>
    )
  }
}

const GroceryListItem = (props) => {
  return <li>{props.grocery.name}</li>
}
GroceryListItem.propTypes = {
  grocery: PropTypes.object.isRequired
}

export default GroceryList
