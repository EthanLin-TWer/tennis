import { Player } from './player'

export class TennisGame3 {
  constructor(player1Name, player2Name) {
    this.player1 = new Player(player1Name)
    this.player2 = new Player(player2Name)
  }

  getScore() {
    if (this.neitherPlayerReachesForty()) {
      const Scores = ['Love', 'Fifteen', 'Thirty', 'Forty']
      const player1Score = Scores[this.player1.winnings]

      if (this.player1.winnings === this.player2.winnings) {
        return `${player1Score}-All`
      }

      return `${player1Score}-${Scores[this.player2.winnings]}`
    }

    if (this.player1.winnings === this.player2.winnings) {
      return 'Deuce'
    }

    const t =
      this.player1.winnings > this.player2.winnings
        ? this.player1.name
        : this.player2.name

    return (this.player1.winnings - this.player2.winnings) *
      (this.player1.winnings - this.player2.winnings) ===
      1
      ? `Advantage ${t}`
      : `Win for ${t}`
  }

  neitherPlayerReachesForty() {
    return (
      this.player1.winnings < 4 &&
      this.player2.winnings < 4 &&
      this.player1.winnings + this.player2.winnings < 6
    )
  }
}
