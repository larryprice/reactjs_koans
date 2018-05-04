import React from 'react'
import PropTypes from 'prop-types'

// Every React component exposes special methods that allow you to plug in logic
// when certain events occur during the component's life. They are called
// 'lifecycle methods', and they can be used in variety of ways.
//
// These are some common lifecycle methods:
// * componentDidMount - this method fires when a React component is rendered for
//                       the first time in the web browser. It does not run when
//                       you render component using server-side rendering.
//                       A render can be caused by an explicit React.render
//                       call or when a child component is rendered within a render
//                       method of its parent component.
//
// * componentDidUpdate - this method fires when a component is updated -
//                        when state changes or the forceUpdate method
//                        is called explicitly.
//
// * componentWillUnmount - this method fires before the component 'dies'. You
//                          can unmount the component directly using the
//                          React.unmountComponentAtNode method. A component can
//                          be also unmounted during re-rendering of the parent component.
//
// * getDerivedStateFromProps - this method fires after the component is instantiated and
//                              whenever new props are received.
//
// Tasks for this exercise are in comments inside the component class code.
//
// In this exercise, lifecycle methods will be used to provide convenient debug
// messages in developer's console.
//
// There are other interesting lifecycle methos, such as shouldComponentUpdate,
// which compares incoming and current state to determine if the component
// should update.
//
// More information on lifecycle methods can be found here:
// https://reactjs.org/docs/react-component.html

class LifecycleMethodsComponent extends React.Component {
  static propTypes = {
    name: PropTypes.string
  }
  static defaultProps = {
    name: 'Bob'
  }

  constructor(props) {
    super(props)
    this.state = {name: props.name}
  }

  // This code will be called when the component finishes mounting
  // (so it is visible for a user).
  componentDidMount() {
    // Task 1: Display a message "I'm mounted!" in developer's console when the
    //         component finishes mounting. Use `console.log` function for it.
  }

  // This code will be called after a component has rendered.
  componentDidUpdate(prevProps, prevState) {
    // Task 2: Display a message "Updated!" in developer's console
    //         when the component updates.
    //         Here you also need to use the console.log function.
    //         Notice that in this lifecycle method you have an access
    //         to previous values of properties and state.
    //         Think about it: Could you find a possible use case
    //                         for using previous state and properties values?
  }

  // This will be called when a component is being removed from the DOM
  componentWillUnmount() {
    // Task 3: Display a message "Goodbye, cruel world! :(" in developer's
    //         console when the component unmounts.
    //         In the real world this lifecycle method is often used to
    //         'clean up' external integrations from the component.
    //         Think about the use case like this: You have an event bus and
    //         you are listening for events. Your event listeners use setState
    //         directly. What will happen if you unmount the component?
    //         How can this lifecycle method help you to avoid such problems?
  }

  // This will be called after a component is instantiated and whenever new
  // props are passed to the component.
  static getDerivedStateFromProps(nextProps, prevState) {
    // Task 4: Display a message "Updating 'oldName' to 'newName'." in
    //         developer's console when the props do not match the current state.
    //         Use `console.log` function for it.
  }

  render() {
    return (<p>Whatever, {this.state.name}!</p>)
  }
}

export default LifecycleMethodsComponent
