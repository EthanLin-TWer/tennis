import { deprecated } from 'core-decorators'
import { Player } from './player'
import { SituationFactory } from './situations/factory'

export class TennisGame1 {
  constructor(player1Name, player2Name) {
    this.player1 = new Player(player1Name)
    this.player2 = new Player(player2Name)
  }

  getScore() {
    return SituationFactory.currentSituation(
      this.player1,
      this.player2
    ).getScores()
  }
}
