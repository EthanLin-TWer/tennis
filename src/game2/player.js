import { Points, Scores } from './constants'

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
    return Scores[this.point]
  }

  wins(opponent) {
    return this.point > Points.FORTY && this.point - opponent.point >= 2
  }

  isInAdvantage(opponent) {
    return this.point > opponent.point && opponent.point >= Points.FORTY
  }
}
