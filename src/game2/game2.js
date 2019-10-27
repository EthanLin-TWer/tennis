import { Points } from './constants'

export class TennisGame2 {
  constructor(player1, player2) {
    this.player1 = player1
    this.player2 = player2
  }

  getScore() {
    if (this.player1.wins(this.player2)) {
      return `Win for ${this.player1.name}`
    }

    if (this.player2.wins(this.player1)) {
      return `Win for ${this.player2.name}`
    }

    if (this.player1.isInAdvantage(this.player2)) {
      return `Advantage ${this.player1.name}`
    }

    if (this.player2.isInAdvantage(this.player1)) {
      return `Advantage ${this.player2.name}`
    }

    if (this.isDeuce()) {
      return 'Deuce'
    }

    if (this.isFifteenFifteenOrThirtyThirty()) {
      return `${this.player1.getScore()}-All`
    }

    return `${this.player1.getScore()}-${this.player2.getScore()}`
  }

  isFifteenFifteenOrThirtyThirty() {
    return (
      this.player1.points === this.player2.points &&
      this.player1.points <= Points.THIRTY
    )
  }

  isDeuce() {
    return (
      this.player1.points === this.player2.points &&
      this.player1.points > Points.THIRTY
    )
  }
}
