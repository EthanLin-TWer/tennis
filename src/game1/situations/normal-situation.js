import { Situation } from './situation'

export class NormalSituation extends Situation {
  getScores() {
    return `${this.player.getScore()}-${this.opponent.getScore()}`
  }
}
