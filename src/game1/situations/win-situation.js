import { Situation } from './situation'

export class WinSituation extends Situation {
  getScores() {
    if (this.player.wins(this.opponent)) {
      return `Win for ${this.player.name}`
    }
    return `Win for ${this.opponent.name}`
  }
}
