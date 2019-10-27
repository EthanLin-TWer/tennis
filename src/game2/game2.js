import { deprecated } from 'core-decorators'
import { Player } from './player'
import { Points } from './constants'

export class TennisGame2 {
  constructor(player1Name, player2Name) {
    this.player1 = new Player(player1Name)
    this.player2 = new Player(player2Name)
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
