import { deprecated } from 'core-decorators'
import { Player } from './player'

export class TennisGame2 {
  constructor(player1Name, player2Name) {
    this.player1 = new Player(player1Name)
    this.player2 = new Player(player2Name)
  }

  getScore() {
    if (this.player1.point === this.player2.point && this.player1.point < 3) {
      return `${this.player1.getScore()}-All`
    }

    if (this.player1.point === this.player2.point && this.player1.point > 2) {
      return 'Deuce'
    }

    if (this.player1Won()) {
      return `Win for ${this.player1.name}`
    }

    if (this.player2Won()) {
      return `Win for ${this.player2.name}`
    }

    if (this.isInTheMiddleOfAMatch()) {
      this.player1.score = this.player1.getScore()
      this.player2.score = this.player2.getScore()
      return `${this.player1.score}-${this.player2.score}`
    }

    if (this.isPlayer1InWinningFrame()) {
      return `Advantage ${this.player1.name}`
    }

    if (this.isPlayer2InWinningFrame()) {
      return `Advantage ${this.player2.name}`
    }

    throw new Error('should never reach here')
  }

  isPlayer1InWinningFrame() {
    return this.player1.point > this.player2.point && this.player2.point >= 3
  }

  isPlayer2InWinningFrame() {
    return this.player2.point > this.player1.point && this.player1.point >= 3
  }

  player2Won() {
    return (
      this.player2.point >= 4 &&
      this.player1.point >= 0 &&
      this.player2.point - this.player1.point >= 2
    )
  }

  player1Won() {
    return (
      this.player1.point >= 4 &&
      this.player2.point >= 0 &&
      this.player1.point - this.player2.point >= 2
    )
  }

  isInTheMiddleOfAMatch() {
    return (
      (this.player1.point > 0 && this.player2.point === 0) ||
      (this.player2.point > 0 && this.player1.point === 0) ||
      (this.player1.point > this.player2.point && this.player1.point < 4) ||
      (this.player2.point > this.player1.point && this.player2.point < 4)
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
