import React from 'react'
import PropTypes from 'prop-types'

// We've provided you with a sample implementation of Part 1 of the grocery list.
// Now we want to implement adding items to the list.
//
// Task: You have to implement adding items to the list. Create the implementation
//       of the `addGroceryItem` method. This method should modify the `GroceryList`
//       component's state, causing the component to render again.
//
//       You need to render the defined input and button in `GroceryList` (after the
//       groceries list). Users will use them as an input for new groceries.
//
//       We prepared two components for you. Please render the button and
//       input under your list and define the `onClick` handler for the button.
//
//       Hint: See the `render` method body. Look for `newProductInput` and
//             `newProductAddButton` variables
//
//       Do you remember how we used `onChange` event in the third exercise?

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
    this.inputChanged = this.inputChanged.bind(this)
  }

  // Warning: This method already works as intended.
  inputChanged(event) {
    this.setState({newGroceryName: event.target.value})
  }

  // Fill the definition of the following method to allow adding new items to the list
  // Hint #1: You can use the `concat` function to modify arrays.
  // Hint #2: You should prevent empty groceries from being added.
  // Hint #3: The new grocery is always stored in `this.state.newGroceryName`.
  addGroceryItem() {
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

    // Here are components for task #2.
    const newProductInput = <input className='new-item' type='text' onChange={this.inputChanged}/>
    // This button definition needs to be updated to handle click events.
    const newProductAddButton = <button className='add-product'>Add new Product</button>

    return (
      <div>
        <ul>
          {groceriesComponents}
        </ul>
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
