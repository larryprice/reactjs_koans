import renderNameComponent from '../exercises/06-RenderComponent'
import './helpers'

describe('06 - RenderComponent', () => {
  describe('Task #1 - render Name component', () => {
    it('There should be a rendered React component', () => {
      const container = document.createElement('div')
      document.body.appendChild(container)

      renderNameComponent(container)

      const element = document.getElementById('hello')
      expect(element).toBeTruthy('There should be a paragraph with id `hello` rendered on site.')
      expect(element.innerHTML).toBe({value: 'Ahoy!', msg: 'Rendered paragraph should contain `Ahoy!`'})
    })
  })
})
