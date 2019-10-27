export class Player {
  #name
  #winnings

  constructor(name, points = 0) {
    this.#name = name
    this.#winnings = points
  }

  get name() {
    return this.#name
  }

  set name(value) {
    this.#name = value
  }

  get winnings() {
    return this.#winnings
  }

  set winnings(value) {
    this.#winnings = value
  }
}
