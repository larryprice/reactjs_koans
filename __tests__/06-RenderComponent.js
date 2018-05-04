import renderNameComponent from '../exercises/06-RenderComponent'

describe('06 - RenderComponent', () => {
  describe('Task #1 - render Name component', () => {
    it('There should be a rendered React component', () => {
      const container = document.createElement('div')
      document.body.appendChild(container)

      renderNameComponent(container)

      const element = document.getElementById('hello')
      expect(element).toBeTruthy()
      expect(element.innerHTML).toBe('Ahoy!')
    })
  })
})
