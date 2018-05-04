import Answers from '../exercises/04-Quiz'
import './helpers'

describe('04 - Quiz', () => {
  it('Question #1', () => {
    expect(Answers.answer1).toBe(
      {value: 'React.Component', msg: 'Check the line that contains `extends` word in each exercise.'})
  })

  it('Question #2', () => {
    expect(Answers.answer2).toBeTruthy('JSX is not HTML (so what is it?)')
  })

  it('Question #3', () => {
    expect(Answers.answer3).toBe(
      {value: 'render', msg: 'In every component we created, there was one method. It contained JSX code.'})
  })

  it('Question #4', () => {
    expect(Answers.answer4).toBe(
      {value: 'className', msg: '`class` is a reserved word in JavaScript. See JSX code in exercise #2.'})
  })

  it('Question #5', () => {
    expect(Answers.answer5).not.toBeTruthy('See the comments about properties in exercise #3')
  })

  it('Question #6', () => {
    expect(Answers.answer6).toBe({value: 'setState', msg: 'See the `onNameChange` method from exercise #3'})
  })

  it('Question #7', () => {
    expect(Answers.answer7).toBeTruthy(
      'I\'ll make it easier for you: yes you have. Why? See exercise #3! It\'s very important.')
  })
})
