import { SituationFactory } from './situations/factory'

export class TennisGame1 {
  constructor(player1, player2) {
    this.player1 = player1
    this.player2 = player2
  }

  getScore() {
    return SituationFactory.currentSituation(
      this.player1,
      this.player2
    ).getScores()
  }
}
