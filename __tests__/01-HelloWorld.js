import React from 'react'
import {shallow, configure, render} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import HelloWorld from '../exercises/01-HelloWorld'

configure({adapter: new Adapter()})

describe('01 - HelloWorld', () => {
  it('should complete all tasks', () => {
    expect(shallow(<HelloWorld />).find('div').length).toBe(0)
    expect(shallow(<HelloWorld />).find('span').length).toBe(1)
    expect(render(<HelloWorld />).text()).toEqual('Hello World')
  })
})
