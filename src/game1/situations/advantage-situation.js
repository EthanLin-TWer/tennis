import { Situation } from './situation'

export class AdvantageSituation extends Situation {
  getScores() {
    if (this.player.hasAdvantage(this.opponent)) {
      return 'Advantage player1'
    }

    return 'Advantage player2'
  }
}
