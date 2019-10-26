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
    if (this.m_score1 === this.m_score2) {
      return this.calculateNormalScores()
    }

    if (this.isGameFinished()) {
      return this.calculateFinalScores()
    }

    return this.calculateScores()
  }

  calculateNormalScores() {
    let score = ''
    switch (this.m_score1) {
      case 0:
        score = 'Love-All'
        break
      case 1:
        score = 'Fifteen-All'
        break
      case 2:
        score = 'Thirty-All'
        break
      default:
        score = 'Deuce'
        break
    }
    return score
  }

  calculateFinalScores() {
    let score = ''
    const minusResult = this.m_score1 - this.m_score2
    if (minusResult === 1) score = 'Advantage player1'
    else if (minusResult === -1) score = 'Advantage player2'
    else if (minusResult >= 2) score = 'Win for player1'
    else score = 'Win for player2'
    return score
  }

  isGameFinished() {
    return this.m_score1 >= 4 || this.m_score2 >= 4
  }

  calculateScores() {
    let tempScore = 0
    let score = ''
    for (let i = 1; i < 3; i++) {
      if (i === 1) tempScore = this.m_score1
      else {
        score += '-'
        tempScore = this.m_score2
      }
      switch (tempScore) {
        case 0:
          score += 'Love'
          break
        case 1:
          score += 'Fifteen'
          break
        case 2:
          score += 'Thirty'
          break
        case 3:
          score += 'Forty'
          break
      }
    }
    return score
  }
}
