import React from 'react'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import sinon from 'sinon'
import LifecycleMethodsComponent from '../exercises/07-LifecycleMethods'

configure({adapter: new Adapter()})

describe('07 - Lifecycle methods', () => {
  describe('Task #4 - emit a console log when the props change', () => {
    beforeEach(() => {
      sinon.spy(console, 'log')
    })
    afterEach(() => {
      console.log.restore()
    })

    it('should emit \'Goodbye, cruel world! :(\' in developer console', () => {
      shallow(<LifecycleMethodsComponent />).setProps({name: 'Billy'})

      expect(console.log.calledWith('Updating \'Bob\' to \'Billy\'.')).toBe(true)
    })
  })
})
