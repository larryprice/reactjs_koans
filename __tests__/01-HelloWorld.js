import React from 'react'
import {shallow, configure, render} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import HelloWorld from '../exercises/01-HelloWorld'
import diff from 'jest-diff'

configure({adapter: new Adapter()})

expect.extend({
  toBe(actual, expected) {
    if (!expected.hasOwnProperty('value')) {
      expected = {value: expected}
    }
    const pass = Object.is(actual, expected.value)

    const message = pass
      ? () => {
        return this.utils.matcherHint('.not.toBe') +
          '\n\n' + (expected.msg ||
          `Expected value to not be (using Object.is):\n` +
          `  ${this.utils.printExpected(expected.value)}\n` +
          `Received:\n` +
          `  ${this.utils.printReceived(actual)}`)
      }
      : () => {
        const diffString = diff(expected, actual, {
          expand: this.expand
        })
        return (
          this.utils.matcherHint('.toBe') +
            '\n\n' + (expected.msg ||
            `Expected value to be (using Object.is):\n` +
            `  ${this.utils.printExpected(expected.value)}\n` +
            `Received:\n` +
            `  ${this.utils.printReceived(actual)}` +
            (diffString ? `\n\nDifference:\n\n${diffString}` : ''))
        )
      }

    return {actual, message, pass}
  }
})

describe('01 - HelloWorld', () => {
  it('should complete all tasks', () => {
    expect(shallow(<HelloWorld />).find('div').length).toBe({value: 0, msg: 'No divs'})
    expect(shallow(<HelloWorld />).find('span').length).toBe(1)
    expect(render(<HelloWorld />).text()).toEqual('Hello World')
  })
})
