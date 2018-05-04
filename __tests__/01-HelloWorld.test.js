import React from 'react'
import {shallow, configure, render} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import HelloWorld from '../exercises/01-HelloWorld'
import './helpers'

configure({adapter: new Adapter()})

describe('01 - HelloWorld', () => {
  it('should complete all tasks', () => {
    expect(shallow(<HelloWorld />).find('div').length).toBe(
      {value: 0, msg: 'Your React component shouldn\'t render any `div` HTML elements'})
    expect(shallow(<HelloWorld />).find('span').length).toBe(
      {value: 1, msg: 'You need to render exactly one `span` HTML element'})
    expect(render(<HelloWorld />).text()).toBe(
      {value: 'Hello World', msg: 'You have rendered the wrong message in your `span` element'})
  })
})
