import LifecycleMethodsComponent from '../src/07-LifecycleMethods.js'
import sinon from 'sinon'

describe('07 - Lifecycle methods', () => {
  let component

  describe('Task #1 - emit a console log when the component mounts', () => {
    it("should emit 'I'm mounted!' in developer's console", () => {
      const mock = sinon.mock(console)
      mock.expects('log').once().withArgs("I'm mounted!")

      const rootNode = document.body.appendChild(document.createElement('div'))
      React.render(React.createElement(LifecycleMethodsComponent), rootNode)
      mock.verify()
    })
  })

  describe('Task #2 - emit a console log when the component updates', () => {
    it("should emit 'Updated!' in developer's console", () => {
      const rootNode = document.body.appendChild(document.createElement('div'))
      const component = React.render(React.createElement(LifecycleMethodsComponent), rootNode)

      const mock = sinon.mock(console)
      mock.expects('log').exactly(2).withArgs('Updated!')

      component.setState({name: 'Victor'})
      component.forceUpdate()

      mock.verify()
    })
  })

  describe('Task #3 - emit a console log when the component unmounts', () => {
    it("should emit 'Goodbye, cruel world! :(' in developer's console", () => {
      const rootNode = document.body.appendChild(document.createElement('div'))
      const component = React.render(React.createElement(LifecycleMethodsComponent), rootNode)

      const mock = sinon.mock(console)
      mock.expects('log').once().withArgs('Goodbye, cruel world! :(')
      React.unmountComponentAtNode(rootNode)
      mock.verify()
    })
  })
})
