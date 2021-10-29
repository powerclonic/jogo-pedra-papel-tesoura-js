const gameScreen = document.querySelector('.gameContainer')
const buttons = document.querySelector('.optionsContainer')

const rockPlr = gameScreen.querySelector('.rockPlayer')
const paperPlr = gameScreen.querySelector('.paperPlayer')
const sciPlr = gameScreen.querySelector('.scissorsPlayer')

const rockBot = gameScreen.querySelector('.rockOpponent')
const paperBot = gameScreen.querySelector('.paperOpponent')
const sciBot = gameScreen.querySelector('.scissorsOpponent')

const hands = gameScreen.querySelectorAll('.hand')

const winDisplay = gameScreen.querySelector('.winCase')
const loseDisplay = gameScreen.querySelector('.loseCase')
const tieDisplay = gameScreen.querySelector('.tieCase')
const resDisplays = gameScreen.querySelectorAll('.case')

const options = ['R', 'P', 'S']

let played;
let botPlayed;
let result;

buttons.addEventListener('click', e => {
    const el = e.target
    const rock = buttons.querySelector('.rockOption')
    const paper = buttons.querySelector('.paperOption')
    const sci = buttons.querySelector('.sciOption')


    if (el != buttons) {
        for (let i of hands) {
            i.style.display = 'none'
        }

        switch (el) {
            case rock:
                played = options[0]
                rockPlr.style.display = 'block'
                break;

            case paper:
                played = options[1]
                paperPlr.style.display = 'block'
                break;

            case sci:
                played = options[2]
                sciPlr.style.display = 'block'
                break;
        }

        botPlayed = options[Math.floor(Math.random() * 3)]

        switch (botPlayed) {
            case 'R':
                rockBot.style.display = 'block'
                break;

            case 'P':
                paperBot.style.display = 'block'
                break;

            case 'S':
                sciBot.style.display = 'block'
                break;
        }


        displayRes(played, botPlayed)
    }
})

function displayRes(plr, bot) {
    const result = verifyResult(plr, bot)

    switch (result) {
        case 0:
            resetResDisplay()
            loseDisplay.style.display = 'flex'
            break;

        case 1:
            resetResDisplay()
            winDisplay.style.display = 'flex'
            break;

        case 2:
            resetResDisplay()
            tieDisplay.style.display = 'flex'
            break;
    }
}

function verifyResult(plr, bot) {
    // Tie:
    if (plr == bot) {
        result = 2
        return result
    }
    // Lose:
    if ((plr == 'R' && bot == 'P') || (plr == 'P' && bot == 'S') || (plr == 'S' && bot == 'R')) {
        result = 0
        return result
    }
    // Win:
    if ((plr == 'S' && bot == 'P') || (plr == 'P' && bot == 'R') || (plr == 'R' && bot == 'S')) {
        result = 1
        return result
    }
}

function log(a) {
    console.log(a)
}

function resetResDisplay() {
    for (let i of resDisplays) {
        i.style.display = 'none'
    }
}