export class Player {
  score
  constructor(score = 0) {
    this.score = score
  }

  getScore() {
    switch (this.score) {
      case 0:
        return 'Love'
      case 1:
        return 'Fifteen'
      case 2:
        return 'Thirty'
      case 3:
        return 'Forty'
      default:
        return null
    }
  }
}
