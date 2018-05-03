import React from 'react'
import {shallow, configure, render} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import PartiesList from '../exercises/02-PartiesList'

configure({adapter: new Adapter()})

describe('02 - PartiesList', () => {
  describe('should complete all tasks', () => {
    it('Task #1: Party hard - have more than 1 party on party list', () => {
      expect(shallow(<PartiesList />).find('ul').length).toBe(1)
      expect(shallow(<PartiesList />).find('ul li').length).toBeGreaterThan(1)
    })

    it('Task #2: List has proper class attribute', () => {
      expect(shallow(<PartiesList />).find('ul.parties-list').length).toBe(1)
    })
  })
})
