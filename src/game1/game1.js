import { Player } from './player'

export class TennisGame1 {
  constructor() {
    this.player1 = new Player()
    this.player2 = new Player()
  }

  wonPoint(playerName) {
    if (playerName === 'player1') {
      this.player1.score += 1
    } else {
      this.player2.score += 1
    }
  }

  getScore() {
    if (this.isTwoPlayersScoreEqually()) {
      return this.reportEqualScores()
    }

    if (this.isWinningPointForOnePlayer()) {
      return this.reportWinningFrameScores()
    }

    return this.calculateScores()
  }

  isTwoPlayersScoreEqually() {
    return this.player1.score === this.player2.score
  }

  reportEqualScores() {
    switch (this.player1.score) {
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
    const minusResult = this.player1.score - this.player2.score
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
    return this.player1.score >= 4 || this.player2.score >= 4
  }

  calculateScores() {
    const player1Score = this.calculateScoreForPlayer(this.player1.score)
    const player2Score = this.calculateScoreForPlayer(this.player2.score)
    return `${player1Score}-${player2Score}`
  }

  calculateScoreForPlayer(score) {
    switch (score) {
      case 0:
        return 'Love'
      case 1:
        return 'Fifteen'
      case 2:
        return 'Thirty'
      case 3:
        return 'Forty'
      default:
        return null
    }
  }
}
