import { Player } from './player'
import { SituationFactory } from './situations/factory'

export class TennisGame1 {
  constructor(player1Name, player2Name) {
    this.player1 = new Player(player1Name)
    this.player2 = new Player(player2Name)
  }

  wonPoint(playerName, points = 1) {
    this.wonPoints(playerName, points)
  }

  wonPoints(playerName, points) {
    if (playerName === this.player1.name) {
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
