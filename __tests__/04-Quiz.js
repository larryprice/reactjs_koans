import Answers from '../exercises/04-Quiz'

describe('04 - Quiz', () => {
  it('Question #1', () => {
    expect(Answers.answer1).toBe('React.Component')
  })

  it('Question #2', () => {
    // JSX is not HTML (so what is it?)
    expect(Answers.answer2).toBeTruthy()
  })

  it('Question #3', () => {
    // 'In every component we created, there was one method. It contained JSX code.'
    expect(Answers.answer3).toBe('render')
  })

  it('Question #4', () => {
    // '`class` is a reserved word in JavaScript. See JSX code in exercise #2.'
    expect(Answers.answer4).toBe('className')
  })

  it('Question #5', () => {
    // 'See the comments about properties in exercise #3'
    expect(Answers.answer5).not.toBeTruthy()
  })

  it('Question #6', () => {
    // 'See the `onNameChange` method from exercise #3'
    expect(Answers.answer6).toBe('setState')
  })

  it('Question #7', () => {
    // 'I\'ll make it easier for you: yes you have. Why? See exercise #3! It\'s very important.'
    expect(Answers.answer7).toBeTruthy()
  })
})
