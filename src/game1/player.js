import { Scores } from './scores'

export class Player {
  #winnings

  constructor(winnings = 0) {
    this.#winnings = winnings
  }

  get winnings() {
    return this.#winnings
  }

  set winnings(value) {
    this.#winnings = value
  }

  getScore() {
    switch (this.#winnings) {
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
