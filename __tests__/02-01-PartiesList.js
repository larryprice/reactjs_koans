import React from 'react'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import PartiesList from '../exercises/02-PartiesList'

configure({adapter: new Adapter()})

describe('02 - PartiesList', () => {
  it('Task #1: Party hard - have more than 1 party on party list', () => {
    expect(shallow(<PartiesList />).find('ul').length).toBe(1)
    expect(shallow(<PartiesList />).find('ul li').length).toBeGreaterThan(1)
  })
})
