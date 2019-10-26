import { Situation } from './situation'

export class WinSituation extends Situation {
  getScores() {
    if (this.player.wins(this.opponent)) {
      return 'Win for player1'
    }
    return 'Win for player2'
  }
}
