import React from 'react'

// This is a really simple React Component.
// It has its own name (HelloWorld) used for things like error display.
//
// Task: Render HTML span with "Hello World" text.

class HelloWorld extends React.Component {
  // All components *must* have a `render` method defined.
  //
  // To define a component's render method, we use JSX. As you
  // can see it looks similar to HTML. You can use normal JavaScript too, but
  // JSX is much more popular, so we will stick to it. JSX is converted to
  // JavaScript code through a transpiler (babel, in this project).
  //
  // Note: You can read about `render` syntax here:
  // https://reactjs.org/docs/rendering-elements.html
  //
  // Warning! JSX is not HTML - in the following lessons you will notice the differences.
  //
  // React delivers a big set of standard HTML elements like `div`, `p`,
  // `canvas` etc. Here you can see usage of a `div` element.

  render() {
    return (
      <div>FILL ME IN!</div>
    )
  }
}

// Note:
// You can use the official browser plugins to browse all ReactJS
// components rendered on a single page. See the description here:
// https://github.com/facebook/react-devtools

export default HelloWorld
