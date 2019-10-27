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

  set name(value) {
    this.#name = value
  }

  get points() {
    return this.#points
  }

  set points(value) {
    this.#points = value
  }
}
