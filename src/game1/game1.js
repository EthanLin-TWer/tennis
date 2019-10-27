import { Player } from './player'
import { SituationFactory } from './situations/factory'

export class TennisGame1 {
  constructor() {
    this.player1 = new Player()
    this.player2 = new Player()
  }

  wonPoint(playerName, points = 1) {
    this.wonPoints(playerName, points)
  }

  wonPoints(playerName, points) {
    if (playerName === 'player1') {
      this.player1.winnings += points
    } else {
      this.player2.winnings += points
    }
  }

  getScore() {
    return SituationFactory.currentSituation(
      this.player1,
      this.player2
    ).getScores()
  }
}
