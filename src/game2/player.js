export class Player {
  name
  #winnings
  score

  constructor(name) {
    this.name = name
    this.#winnings = 0
    this.score = ''
  }

  get point() {
    return this.#winnings
  }

  get winnings() {
    return this.#winnings
  }

  set winnings(value) {
    this.#winnings = value
  }
}
