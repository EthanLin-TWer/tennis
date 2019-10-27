export class Player {
  #name
  #points

  constructor(name, points = 0) {
    this.#name = name
    this.#points = points
  }

  get name() {
    return this.#name
  }

  get points() {
    return this.#points
  }
}
