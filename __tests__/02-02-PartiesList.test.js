import React from 'react'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import PartiesList from '../exercises/02-PartiesList'
import './helpers'

configure({adapter: new Adapter()})

describe('02 - PartiesList', () => {
  it('Task #2: List has proper class attribute', () => {
    expect(shallow(<PartiesList />).find('ul.parties-list').length).toBe(
      {value: 1, msg: '`ul` element rendered by React should have `className` attribute `parties-list`'})
  })
})
