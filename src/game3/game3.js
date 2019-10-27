import { Player } from './player'

export class TennisGame3 {
  constructor(player1Name, player2Name) {
    this.player1 = new Player(player1Name)
    this.player2 = new Player(player2Name)
  }

  get p1() {
    return this.player1.winnings
  }

  get p2() {
    return this.player2.winnings
  }

  getScore() {
    let s
    if (this.p1 < 4 && this.p2 < 4 && this.p1 + this.p2 < 6) {
      const p = ['Love', 'Fifteen', 'Thirty', 'Forty']
      s = p[this.p1]
      return this.p1 == this.p2 ? `${s}-All` : `${s}-${p[this.p2]}`
    }
    if (this.p1 == this.p2) return 'Deuce'
    s = this.p1 > this.p2 ? this.player1.name : this.player2.name
    return (this.p1 - this.p2) * (this.p1 - this.p2) == 1
      ? `Advantage ${s}`
      : `Win for ${s}`
  }

  wonPoint(playerName, points = 1) {
    if (playerName === this.player1.name) {
      this.player1.winnings += points
    } else {
      this.player2.winnings += points
    }
  }
}
