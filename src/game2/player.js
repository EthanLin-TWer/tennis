import { Points } from './points'

export class Player {
  name
  #winnings
  #score

  constructor(name) {
    this.name = name
    this.#winnings = 0
    this.#score = ''
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
  }

  wins(opponent) {
    return this.point > Points.FORTY && this.point - opponent.point >= 2
  }

  isInAdvantage(opponent) {
    return this.point > opponent.point && opponent.point >= Points.FORTY
  }
}
