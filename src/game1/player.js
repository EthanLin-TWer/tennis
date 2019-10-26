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

  hasSameScore(player) {
    return this.#winnings === player.winnings
  }

  hasAdvantage(player) {
    return this.#winnings >= 4 && this.#winnings - player.winnings === 1
  }

  wins(player) {
    return this.#winnings >= 4 && this.#winnings - player.winnings !== 1
  }

  getScoreTo(player) {
    if (this.hasSameScore(player)) {
      return this.reportEqualScores()
    }

    if (this.hasAdvantage(player) || player.hasAdvantage(this)) {
      return this.reportWinningFrameScores(player)
    }

    if (this.wins(player) || player.wins(this)) {
      return this.reportGameFinalScores(player)
    }

    return this.reportNormalScores(player)
  }

  reportGameFinalScores(player) {
    if (this.winnings - player.winnings >= 2) {
      return 'Win for player1'
    }
    return 'Win for player2'
  }

  reportWinningFrameScores(player) {
    if (this.winnings - player.winnings === 1) {
      return 'Advantage player1'
    }

    return 'Advantage player2'
  }

  reportEqualScores() {
    if (this.getScore() === Scores.FORTY) {
      return Scores.DEUCE
    }

    return `${this.getScore()}-${Scores.ALL}`
  }

  reportNormalScores(player) {
    return `${this.getScore()}-${player.getScore()}`
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
