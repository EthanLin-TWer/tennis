import { Points, Scores } from './constants'

export class Player {
  #name
  #points

  constructor(name, points = 0) {
    this.#name = name
    this.#points = points
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
