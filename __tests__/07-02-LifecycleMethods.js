import React from 'react'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import sinon from 'sinon'
import LifecycleMethodsComponent from '../exercises/07-LifecycleMethods'

configure({adapter: new Adapter()})

describe('07 - Lifecycle methods', () => {
  describe('Task #2 - emit a console log when the component updates', () => {
    beforeEach(() => {
      sinon.spy(console, 'log')
    })
    afterEach(() => {
      console.log.restore()
    })

    it('should emit \'Updated!\' in developer console', () => {
      const wrapper = shallow(<LifecycleMethodsComponent />)
      wrapper.setState({name: 'Victor'})

      expect(console.log.calledWith('Updated!')).toBe(true)
    })
  })
})
