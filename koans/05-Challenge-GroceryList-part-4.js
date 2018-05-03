import React from 'react'
import PropTypes from 'prop-types'

// Task: Ok, now the last exercise. You have to implement toggling
//       completeness of the each grocery list's item. Make each item reactive.
//
//       This is why we prepared the declaration of the `toggleGroceryCompleteness`
//       method in the `GroceryList` component.
//
//       WARNING: You should remember that we create a `grocery` item in the
//                `addGroceryItem` method. You need to add a `completed` field to
//                the `grocery` objects created there.
//
// === Tasks below aren't required for proceeding in Koans, but we encourage you to try ===
//
// Extra Task: As you can see in the `GroceryList` component - it has more than one
//             responsiblity. It displays groceries list, handles state
//             modification and handles the display and logic of new grocery
//             addition. The last of these responsibilities can be easily
//             extracted to another component. The new component should handle
//             only text input and the submit button.
//
//             Hint: You can pass a callback to the component's method
//                   (like `addGroceryItem`) as an attribute in the `render` method.
//
//             Warning: This task doesn't have its own tests, but current ones
//                      should be enough to cover it. The behaviour of whole
//                      app should not change.
//
// Extra Task: You can try to disable submit button for `newGrocery` if
//             `newGroceryName` state is empty. You can just use property
//             `disabled` for submit button component in `render` method.
//
//             Hint: There are no tests for this extra task. You need to do them
//                   yourself. You can perform manual-testing (meh.)
//                   Or try to create your own tests.
//                   Check out `test/05-Challange-GroceryList.js` for tests to this part.

class GroceryList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      groceries: [
        {
          name: 'Apples',
          completed: false
        }
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

  clearList(event) {
    this.setState({groceries: []})
  }

  // Fill the definition of the following method to allow completing each item
  // Hint 1: Pay attention to the element's index on the list.
  toggleGroceryCompleteness(groceryIndex) {
    // Put your code here
  }

  render() {
    const groceriesComponents = []
    for (let index = 0; index < this.state.groceries.length; ++index) {
      groceriesComponents.push(
        <GroceryListItem key={index}
          grocery={this.state.groceries[index]}
          onComplete={this.toggleGroceryCompleteness.bind(this, index)}/>
      )
    }

    const newProductInput = <input className='new-item' type='text' onChange={this.inputChanged}/>
    const newProductAddButton = <button className='add-product' onClick={this.addGroceryItem}>Add new Product</button>
    const clearListButton = <button className='clear-list' onClick={this.clearList}>Clear the List</button>

    return (
      <div>
        <ul>
          {groceriesComponents}
        </ul>
        {newProductInput}
        {newProductAddButton}
        {clearListButton}
      </div>
    )
  }
}

const GroceryListItem = (props) => {
  const completed = props.grocery.completed ? 'completed' : ''
  return (
    <li className={completed} onClick={props.onComplete}>
      {props.grocery.name}
    </li>
  )
}
GroceryListItem.propTypes = {
  grocery: PropTypes.object.isRequired,
  onComplete: PropTypes.func.isRequired
}

export default GroceryList
