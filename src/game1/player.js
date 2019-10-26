import { Scores } from './scores'
import { SituationFactory } from './situations/factory'

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

  hasSameScore(player) {
    return this.#winnings === player.winnings
  }

  hasAdvantage(player) {
    return this.#winnings >= 4 && this.#winnings - player.winnings === 1
  }

  wins(player) {
    return this.#winnings >= 4 && this.#winnings - player.winnings >= 2
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
