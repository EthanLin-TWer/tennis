import { Player } from './player'
import { Scores } from './scores'

export class TennisGame1 {
  constructor() {
    this.player1 = new Player()
    this.player2 = new Player()
  }

  wonPoint(playerName) {
    if (playerName === 'player1') {
      this.player1.winnings += 1
    } else {
      this.player2.winnings += 1
    }
  }

  getScore() {
    if (this.player1.hasSameScore(this.player2)) {
      return this.reportEqualScores()
    }

    if (
      this.player1.hasAdvantage(this.player2) ||
      this.player2.hasAdvantage(this.player1)
    ) {
      return this.reportWinningFrameScores()
    }

    if (this.player1.wins(this.player2) || this.player2.wins(this.player1)) {
      return this.reportGameFinalScores()
    }

    return this.reportNormalScores()
  }

  reportGameFinalScores() {
    if (this.player1.winnings - this.player2.winnings >= 2) {
      return 'Win for player1'
    }
    return 'Win for player2'
  }

  reportWinningFrameScores() {
    if (this.player1.winnings - this.player2.winnings === 1) {
      return 'Advantage player1'
    }

    return 'Advantage player2'
  }

  reportEqualScores() {
    if (this.player1.getScore() === Scores.FORTY) {
      return Scores.DEUCE
    }

    return `${this.player1.getScore()}-${Scores.ALL}`
  }
  reportNormalScores() {
    return `${this.player1.getScore()}-${this.player2.getScore()}`
  }
}
