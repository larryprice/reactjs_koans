import React from 'react'
import {shallow, configure, render} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import WhatsYourName from '../exercises/03-WhatsYourName'

describe("03 - What's Your Name?", () => {
  let component
  let paragraphs
  let inputs

  const nameInParagraphEqualsTo = (paragraph, name) => {
    const children = paragraph.props.children
    const text = _.isArray(children) ? children.join('') : children
    return _.isEqual(text, `Hello ${name}`)
  }

  beforeEach(() => {
    let elem = document.createElement('div')
    elem = document.body.appendChild(elem)
    component = React.render(React.createElement(WhatsYourName), elem)
    paragraphs = React.addons.TestUtils.scryRenderedDOMComponentsWithTag(component, 'p')
    inputs = React.addons.TestUtils.scryRenderedDOMComponentsWithTag(component, 'input')
  })

  afterEach(() => {
    React.unmountComponentAtNode(React.findDOMNode(component))
  })

  describe('should complete all tasks', () => {
    describe('Task #1 - greet user', () => {
      it('Should change name in paragraph on name change in input', () => {
        const input = _.first(inputs)
        const paragraph = _.first(paragraphs)

        assert.equal(paragraphs.length, 1, 'There should be only one `p` element rendered by the component')
        assert.equal(inputs.length, 1, 'There should be only one `input` rendered by the component')

        React.addons.TestUtils.Simulate.change(input, {target: {value: 'XYZ'}})
        assert.equal(nameInParagraphEqualsTo(paragraph, 'XYZ'), true, "After changing name in input, I should see the change in `p` element's content. In other words: `this.state.name` should change.")

        React.addons.TestUtils.Simulate.change(input, {target: {value: 'ZYX'}})
        assert.equal(nameInParagraphEqualsTo(paragraph, 'ZYX'), true, 'After changing name in input for the second time, we should see the change in `p` element. In other words: `this.state.name` should change.')
      })
    })

    describe("Task #2 - don't greet user if name wasn't provided", () => {
      it("Should display welcoming message if user didn't provide their name", () => {
        const input = _.first(inputs)
        const paragraph = _.first(paragraphs)

        React.addons.TestUtils.Simulate.change(input, {target: {value: ''}})
        assert.equal(paragraph.props.children, 'Hey there. Enter your name.',
          "If user didn't enter the name (`this.state.name` length is 0), show \"Hey there. Enter your name.\". See the hint in task's description."
        )
      })
    })
  })
})
