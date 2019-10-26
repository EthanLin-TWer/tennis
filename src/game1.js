export class TennisGame1 {
  constructor(player1Name, player2Name) {
    this.m_score1 = 0
    this.m_score2 = 0
    this.player1Name = player1Name
    this.player2Name = player2Name
  }

  wonPoint(playerName) {
    if (playerName === 'player1') this.m_score1 += 1
    else this.m_score2 += 1
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
    return this.m_score1 === this.m_score2
  }

  reportEqualScores() {
    switch (this.m_score1) {
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
    const minusResult = this.m_score1 - this.m_score2
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
    return this.m_score1 >= 4 || this.m_score2 >= 4
  }

  calculateScores() {
    const player1Score = this.calculateScoreForPlayer(this.m_score1)
    const player2Score = this.calculateScoreForPlayer(this.m_score2)
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
