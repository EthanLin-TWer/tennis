import { Player } from './player'

export class TennisGame3 {
  constructor(player1Name, player2Name) {
    this.player1 = new Player(player1Name)
    this.player2 = new Player(player2Name)
  }

  get p2() {
    return this.player2.winnings
  }

  getScore() {
    let s
    if (
      this.player1.winnings < 4 &&
      this.p2 < 4 &&
      this.player1.winnings + this.p2 < 6
    ) {
      const p = ['Love', 'Fifteen', 'Thirty', 'Forty']
      s = p[this.player1.winnings]
      return this.player1.winnings === this.p2
        ? `${s}-All`
        : `${s}-${p[this.p2]}`
    }
    if (this.player1.winnings === this.p2) return 'Deuce'
    s = this.player1.winnings > this.p2 ? this.player1.name : this.player2.name
    return (this.player1.winnings - this.p2) *
      (this.player1.winnings - this.p2) ===
      1
      ? `Advantage ${s}`
      : `Win for ${s}`
  }
}
