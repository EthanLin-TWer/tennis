import { deprecated } from 'core-decorators'
import { Player } from './player'
import { Points } from './points'

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
      this.player1.point === this.player2.point &&
      this.player1.point <= Points.THIRTY
    )
  }

  isDeuce() {
    return (
      this.player1.point === this.player2.point &&
      this.player1.point > Points.THIRTY
    )
  }

  @deprecated('Will be removed once Game3 refactorings done.')
  wonPoint(playerName, points = 1) {
    if (playerName === this.player1.name) {
      this.player1.winnings += points
    } else {
      this.player2.winnings += points
    }
  }
}
