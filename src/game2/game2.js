import { deprecated } from 'core-decorators'
import { Player } from './player'

export class TennisGame2 {
  constructor(player1Name, player2Name) {
    this.player1 = new Player(player1Name)
    this.player2 = new Player(player2Name)
  }

  getScore() {
    let score = ''

    if (this.player1.point === this.player2.point && this.player1.point < 3) {
      score += `${this.player1.getScore()}-All`
    }
    if (this.player1.point === this.player2.point && this.player1.point > 2)
      score = 'Deuce'

    if (this.player1.point > 0 && this.player2.point === 0) {
      if (this.player1.point === 1) this.player1.score = 'Fifteen'
      if (this.player1.point === 2) this.player1.score = 'Thirty'
      if (this.player1.point === 3) this.player1.score = 'Forty'

      this.player2.score = 'Love'
      score = `${this.player1.score}-${this.player2.score}`
    }
    if (this.player2.point > 0 && this.player1.point === 0) {
      if (this.player2.point === 1) this.player2.score = 'Fifteen'
      if (this.player2.point === 2) this.player2.score = 'Thirty'
      if (this.player2.point === 3) this.player2.score = 'Forty'

      this.player1.score = 'Love'
      score = `${this.player1.score}-${this.player2.score}`
    }

    if (this.player1.point > this.player2.point && this.player1.point < 4) {
      if (this.player1.point === 2) this.player1.score = 'Thirty'
      if (this.player1.point === 3) this.player1.score = 'Forty'
      if (this.player2.point === 1) this.player2.score = 'Fifteen'
      if (this.player2.point === 2) this.player2.score = 'Thirty'
      score = `${this.player1.score}-${this.player2.score}`
    }
    if (this.player2.point > this.player1.point && this.player2.point < 4) {
      if (this.player2.point === 2) this.player2.score = 'Thirty'
      if (this.player2.point === 3) this.player2.score = 'Forty'
      if (this.player1.point === 1) this.player1.score = 'Fifteen'
      if (this.player1.point === 2) this.player1.score = 'Thirty'
      score = `${this.player1.score}-${this.player2.score}`
    }

    if (this.player1.point > this.player2.point && this.player2.point >= 3) {
      score = `Advantage ${this.player1.name}`
    }

    if (this.player2.point > this.player1.point && this.player1.point >= 3) {
      score = `Advantage ${this.player2.name}`
    }

    if (
      this.player1.point >= 4 &&
      this.player2.point >= 0 &&
      this.player1.point - this.player2.point >= 2
    ) {
      score = `Win for ${this.player1.name}`
    }
    if (
      this.player2.point >= 4 &&
      this.player1.point >= 0 &&
      this.player2.point - this.player1.point >= 2
    ) {
      score = `Win for ${this.player2.name}`
    }
    return score
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
