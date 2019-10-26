import { AdvantageSituation } from './advantage-situation'
import { AllSituation } from './all-situation'
import { NormalSituation } from './normal-situation'
import { WinSituation } from './win-situation'

export class SituationFactory {
  static currentSituation(player, opponent) {
    if (player.hasSameScore(opponent)) {
      return new AllSituation(player, opponent)
    }

    if (player.wins(opponent) || opponent.wins(player)) {
      return new WinSituation(player, opponent)
    }

    if (player.hasAdvantage(opponent) || opponent.hasAdvantage(player)) {
      return new AdvantageSituation(player, opponent)
    }

    return new NormalSituation(player, opponent)
  }
}
