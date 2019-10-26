import { Player } from './player'

export class TennisGame1 {
  constructor() {
    this.player1 = new Player()
    this.player2 = new Player()
  }

  wonPoint(playerName) {
    if (playerName === 'player1') {
      this.player1.winnings += 1
    } else {
      this.player2.winnings += 1
    }
  }

  getScore() {
    return this.player1.getScoreTo(this.player2)
  }
}
