import { Scores } from './scores'

export class Player {
  #points
  #name

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

  hasSameScore(player) {
    return this.#points === player.points
  }

  hasAdvantage(player) {
    return this.#points >= 4 && this.#points - player.points === 1
  }

  wins(player) {
    return this.#points >= 4 && this.#points - player.points >= 2
  }

  getScore() {
    switch (this.#points) {
      case 0:
        return Scores.ZERO
      case 1:
        return Scores.FIFTEEN
      case 2:
        return Scores.THIRTY
      case 3:
      default:
        return Scores.FORTY
    }
  }
}
