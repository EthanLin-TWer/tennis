export class Player {
  #winnings

  constructor(winnings = 0) {
    this.#winnings = winnings
  }

  get winnings() {
    return this.#winnings
  }

  set winnings(value) {
    this.#winnings = value
  }

  getScore() {
    switch (this.#winnings) {
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
