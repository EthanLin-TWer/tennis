import { Scores } from '../scores'
import { Situation } from './situation'

export class AllSituation extends Situation {
  getScores() {
    if (this.player.getScore() === Scores.FORTY) {
      return Scores.DEUCE
    }

    return `${this.player.getScore()}-${Scores.ALL}`
  }
}
