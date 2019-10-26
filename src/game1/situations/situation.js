export class Situation {
  player
  opponent
  constructor(player, opponent) {
    this.player = player
    this.opponent = opponent
  }

  getScores() {
    throw new Error('developer responsibility exception')
  }
}
