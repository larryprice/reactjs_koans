import React from 'react'

// You have already learned how to create React's components and how they affect
// each other. In this exercise you will learn how to render components on the web page.
//
// Task #1: Fill the `renderNameComponent` function. It should render ReactElement
//          into the DOM.
class Name extends React.Component {
  render() {
    return (<p id='hello'>Ahoy!</p>)
  }
}

// You receive a DOM node passed in as a `domNode` argument.
export default function renderNameComponent(domNode) {
  // Put your code here
}

// Hint: You have to use the `render(ReactElement element, DOMNode node)` method.
//       As you can see, this method takes two parameters:
//       `ReactElement` and DOM node.
//
//       Don't mistake this with `render` method in a component class.
//       They are completely different methods!
//
//       See exercises/main.js for an example.
