import { TennisGame1 } from './game1/game1'
import { TennisGame2 } from './game2/game2'
import { TennisGame3 } from './game3'

const allScores = [
  [0, 0, 'Love-All'],
  [1, 1, 'Fifteen-All'],
  [2, 2, 'Thirty-All'],
  [3, 3, 'Deuce'],
  [4, 4, 'Deuce'],

  [1, 0, 'Fifteen-Love'],
  [0, 1, 'Love-Fifteen'],
  [2, 0, 'Thirty-Love'],
  [0, 2, 'Love-Thirty'],
  [3, 0, 'Forty-Love'],
  [0, 3, 'Love-Forty'],
  [4, 0, 'Win for player1'],
  [0, 4, 'Win for player2'],

  [2, 1, 'Thirty-Fifteen'],
  [1, 2, 'Fifteen-Thirty'],
  [3, 1, 'Forty-Fifteen'],
  [1, 3, 'Fifteen-Forty'],
  [4, 1, 'Win for player1'],
  [1, 4, 'Win for player2'],

  [3, 2, 'Forty-Thirty'],
  [2, 3, 'Thirty-Forty'],
  [4, 2, 'Win for player1'],
  [2, 4, 'Win for player2'],

  [4, 3, 'Advantage player1'],
  [3, 4, 'Advantage player2'],
  [5, 4, 'Advantage player1'],
  [4, 5, 'Advantage player2'],
  [15, 14, 'Advantage player1'],
  [14, 15, 'Advantage player2'],

  [6, 4, 'Win for player1'],
  [4, 6, 'Win for player2'],
  [16, 14, 'Win for player1'],
  [14, 16, 'Win for player2'],
]

describe('TennisGame', () => {
  const checkScore = function(
    reporter,
    TennisGame,
    player1Score,
    player2Score,
    expectedScore
  ) {
    const highestScore = Math.max(player1Score, player2Score)
    let game
    let result
    let message = ''
    let ok = false
    let i

    try {
      game = new TennisGame('player1', 'player2')
      for (i = 0; i < highestScore; i++) {
        if (i < player1Score) {
          game.wonPoint('player1')
        }
        if (i < player2Score) {
          game.wonPoint('player2')
        }
      }
      result = game.getScore()

      if (result === expectedScore) {
        ok = true
      } else {
        message = `Result = '${result}'`
      }
    } catch (ex) {
      message = `Exception: ${ex}`
    }

    reporter.addCase(expectedScore, ok, message)
  }

  const runSuiteOnGame = function(reporter, TennisGame, title) {
    reporter.addSuite(title)
    allScores.forEach(function(score) {
      checkScore(reporter, TennisGame, score[0], score[1], score[2])
    })
  }

  const getConsoleReporter = () => ({
    errors: 0,
    addSuite(title) {
      console.log(`Running suite '${title}'...`)
    },
    addCase(title, ok, message) {
      if (!ok) {
        console.log(`Case '${title}': ${message}`)
        this.errors += 1
      }
    },
    done() {
      if (this.errors > 0) {
        throw new Error(`Got ${this.errors} failure(s)!`)
      }

      console.log('Done, all OK ')
    },
  })

  const reporter = getConsoleReporter()

  afterEach(() => {
    reporter.done()
  })

  it.skip('should return correct result for game 1', () => {
    runSuiteOnGame(reporter, TennisGame1, 'TennisGame1')
  })

  it.skip('should return correct result for game 2', () => {
    runSuiteOnGame(reporter, TennisGame2, 'TennisGame2')
  })

  it('should return correct result for game 3', () => {
    runSuiteOnGame(reporter, TennisGame3, 'TennisGame3')
  })
})

describe('New TennisGame', () => {
  describe('TennisGame1', () => {
    test.each(allScores)(
      'score of %s-%s should be %s',
      (player1Winnings, player2Winnings, expectedScore) => {
        const game = new TennisGame1('player1', 'player2')
        game.player1.winnings += player1Winnings
        game.player2.winnings += player2Winnings

        const result = game.getScore()

        expect(result).toEqual(expectedScore)
      }
    )
  })

  describe('TennisGame2', () => {
    test.each(allScores)(
      'score of %s-%s should be %s',
      (player1Winnings, player2Winnings, expectedScore) => {
        const game = new TennisGame2('player1', 'player2')
        game.player1.winnings += player1Winnings
        game.player2.winnings += player2Winnings

        const result = game.getScore()

        expect(result).toEqual(expectedScore)
      }
    )
  })
})
