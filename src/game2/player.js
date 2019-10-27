import { Points, Scores } from './constants'

export class Player {
  #name
  #points

  constructor(name) {
    this.#name = name
    this.#points = 0
  }

  get name() {
    return this.#name
  }

  get points() {
    return this.#points
  }

  set points(value) {
    this.#points = value
  }

  getScore() {
    return Scores[this.points]
  }

  wins(opponent) {
    return this.points > Points.FORTY && this.points - opponent.points >= 2
  }

  isInAdvantage(opponent) {
    return this.points > opponent.points && opponent.points >= Points.FORTY
  }
}
