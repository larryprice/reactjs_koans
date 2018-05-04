import React from 'react'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import PartiesList from '../exercises/02-PartiesList'
import './helpers'

configure({adapter: new Adapter()})

describe('02 - PartiesList', () => {
  it('Task #1: Party hard - have more than 1 party on party list', () => {
    expect(shallow(<PartiesList />).find('ul').length).toBe({value: 1, msg: 'You must render a `ul` HTML list'})
    expect(shallow(<PartiesList />).find('ul li').length > 1).toBeTruthy(
      'You have only one party on the list. Add one more party to the list.')
  })
})
