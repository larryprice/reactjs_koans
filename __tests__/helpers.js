import diff from 'jest-diff'

expect.extend({
  toBe(actual, expected) {
    if (!expected.hasOwnProperty('value')) {
      expected = {value: expected}
    }
    const pass = Object.is(actual, expected.value)

    const message = pass
      ? () => {
        return this.utils.matcherHint('.not.toBe') +
          '\n\n' + (expected.msg ? `${expected.msg}\n\n` : '') +
          `Expected value to not be (using Object.is):\n` +
          `  ${this.utils.printExpected(expected.value)}\n` +
          `Received:\n` +
          `  ${this.utils.printReceived(actual)}`
      }
      : () => {
        const diffString = diff(expected, actual, {
          expand: this.expand
        })
        return (
          this.utils.matcherHint('.toBe') +
            '\n\n' + (expected.msg ? `${expected.msg}\n\n` : '') +
            `Expected value to be (using Object.is):\n` +
            `  ${this.utils.printExpected(expected.value)}\n` +
            `Received:\n` +
            `  ${this.utils.printReceived(actual)}` +
            (diffString ? `\n\nDifference:\n\n${diffString}` : '')
        )
      }

    return {actual, message, pass}
  },
  toBeTruthy(actual, msg) {
    const pass = !!actual
    const message = () =>
      this.utils.matcherHint('.toBeTruthy', 'received', '', {
        isNot: this.isNot
      }) +
    '\n\n' + (msg ? `${msg}\n\n` : '') +
    `Received: ${this.utils.printReceived(actual)}`
    return {message, pass}
  }
})
