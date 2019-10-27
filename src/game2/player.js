import { Points } from './points'

export class Player {
  name
  #winnings
  #score

  constructor(name) {
    this.name = name
    this.#winnings = 0
    this.#score = ''
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

  get score() {
    return this.#score
  }

  set score(value) {
    this.#score = value
  }

  getScore() {
    if (this.point === 0) return 'Love'
    if (this.point === 1) return 'Fifteen'
    if (this.point === 2) return 'Thirty'
    if (this.point === 3) return 'Forty'
    return this.#score
  }

  wins(opponent) {
    return this.point > Points.FORTY && this.point - opponent.point >= 2
  }
}
