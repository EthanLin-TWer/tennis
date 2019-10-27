export class Player {
  name
  #winnings
  score

  constructor(name) {
    this.name = name
    this.#winnings = 0
    this.score = ''
  }

  get point() {
    return this.#winnings
  }

  get winnings() {
    return this.#winnings
  }

  set winnings(value) {
    this.#winnings = value
  }

  getScore() {
    if (this.point === 0) return 'Love'
    if (this.point === 1) return 'Fifteen'
    if (this.point === 2) return 'Thirty'
    if (this.point === 3) return 'Forty'
    throw new Error('oops')
  }
}
