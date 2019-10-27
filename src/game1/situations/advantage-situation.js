import { Situation } from './situation'

export class AdvantageSituation extends Situation {
  getScores() {
    if (this.player.hasAdvantage(this.opponent)) {
      return `Advantage ${this.player.name}`
    }

    return `Advantage ${this.opponent.name}`
  }
}
