import { Player } from './player'

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
    if (this.isTwoPlayersScoreEqually()) {
      return this.reportEqualScores()
    }

    if (this.isWinningPointForOnePlayer()) {
      return this.reportWinningFrameScores()
    }

    return this.reportNormalScores()
  }

  isTwoPlayersScoreEqually() {
    return this.player1.winnings === this.player2.winnings
  }

  reportEqualScores() {
    switch (this.player1.winnings) {
      case 0:
        return 'Love-All'
      case 1:
        return 'Fifteen-All'
      case 2:
        return 'Thirty-All'
      default:
        return 'Deuce'
    }
  }

  reportWinningFrameScores() {
    const minusResult = this.player1.winnings - this.player2.winnings
    if (minusResult === 1) {
      return 'Advantage player1'
    }

    if (minusResult === -1) {
      return 'Advantage player2'
    }

    if (minusResult >= 2) {
      return 'Win for player1'
    }

    return 'Win for player2'
  }

  isWinningPointForOnePlayer() {
    return this.player1.winnings >= 4 || this.player2.winnings >= 4
  }

  reportNormalScores() {
    return `${this.player1.getScore()}-${this.player2.getScore()}`
  }
}