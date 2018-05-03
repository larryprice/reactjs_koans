import React from 'react'
import {render} from 'react-dom'

import HelloWorld from './01-HelloWorld'
import PartiesList from './02-PartiesList'
import WhatsYourName from './03-WhatsYourName'
import GroceryListPart1 from './05-Challenge-GroceryList-part-1'
import GroceryListPart2 from './05-Challenge-GroceryList-part-2'
import GroceryListPart3 from './05-Challenge-GroceryList-part-3'
import GroceryListPart4 from './05-Challenge-GroceryList-part-4'
import renderName from './06-RenderComponent'

render(<HelloWorld/>, document.getElementById('tab-content1'))
render(<PartiesList/>, document.getElementById('tab-content2'))
render(<WhatsYourName/>, document.getElementById('tab-content3'))
render(<GroceryListPart1/>, document.getElementById('tab-content4'))
render(<GroceryListPart2/>, document.getElementById('tab-content5'))
render(<GroceryListPart3/>, document.getElementById('tab-content6'))
render(<GroceryListPart4/>, document.getElementById('tab-content7'))
renderName(document.getElementById('tab-content8'))
