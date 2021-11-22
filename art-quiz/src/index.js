import './index.scss'
import quitHtml from './pages/quit-pop-up'
import winHtml from './pages/win-pop-up'
import resultHtml from './pages/result-pop-up'
import questionPictureHtml, { runScript as questionPictureRunScript } from './pages/question-picture'
import questionAuthorHtml, { runScript as questionAuthorRunScript } from './pages/question-author'
import categoriesHtml, { runScript as categoriesRunScript } from './pages/categories'
import settingsHtml, { runScript as settingsRunScript } from './pages/settings'
import homeHtml from './pages/home'
import {
    click, correctanswer, endround,
    wronganswer
} from 'src/assets/audio/index.js'
// localStorage.clear()
const openPage = (newPage) => {
    document.body.innerHTML = newPage
}
export const openPopUp = (newPopUp) => {
    document.body.append(newPopUp)
}

export const playAudioClick = () => {
    let volume = localStorage.getItem('volume')
    const audio = new Audio()
    audio.src = click
    audio.volume = volume / 100
    audio.play()
}

export const playAudioWrong = () => {
    let volume = localStorage.getItem('volume')
    const audio = new Audio()
    audio.src = wronganswer
    audio.volume = volume / 100
    audio.play()
}

export const playAudioCorrect = () => {
    let volume = localStorage.getItem('volume')
    const audio = new Audio()
    audio.src = correctanswer
    audio.volume = volume / 100
    audio.play()
}

export const playAudioEnd = () => {
    let volume = localStorage.getItem('volume')
    const audio = new Audio()
    audio.src = endround
    audio.volume = volume / 100
    audio.play()
}

document.body.innerHTML = homeHtml
let whatWasBefore = 'home'
document.addEventListener('click', (event) => {

    const actionType = (event.target.closest('.categories-item') || event.target).dataset?.actionType
    switch (actionType) {
        case 'open-settings':
            playAudioClick()
            openPage(settingsHtml)
            settingsRunScript()
            break;

        case 'open-back':
            playAudioClick()
            if (whatWasBefore === 'home') {
                openPage(homeHtml)
                whatWasBefore = 'home'
            } else if (whatWasBefore === 'caregories-artist' || whatWasBefore === 'caregories-picture') {
                openPage(categoriesHtml)
            }
            break;

        case 'open-home':
            playAudioClick()
            whatWasBefore = 'home'
            openPage(homeHtml)
            break;

        case 'open-caregories-artist':
            openPage(categoriesHtml)
            categoriesRunScript()
            playAudioClick()
            whatWasBefore = 'caregories-artist'
            localStorage.setItem(`whatWasBefore`, `artist`)
            break;

        case 'open-caregories-picture':
            openPage(categoriesHtml)
            categoriesRunScript()
            playAudioClick()
            whatWasBefore = 'caregories-picture'
            localStorage.setItem(`whatWasBefore`, `picture`)
            break;

        case 'open-quit-pop-up':
            playAudioClick()
            openPopUp(quitHtml)
            break;

        case 'close-pop-up':
            playAudioClick()
            document.querySelector('.pop-up-container').remove()
            break;

        case 'open-categories':
            playAudioClick()
            if (whatWasBefore === 'caregories-picture') {
                openPage(categoriesHtml)
            } else if (whatWasBefore === 'caregories-artist') {
                openPage(categoriesHtml)
            }
            break;

        case 'open-portrait':
        case 'open-landscape':
        case 'open-still-life':
        case 'open-graphic':
        case 'open-antique':
        case 'open-avant-garde':
        case 'open-renaissance':
        case 'open-surrealism':
        case 'open-kitsch':
        case 'open-minimalism':
        case 'open-avangard':
        case 'open-industrial':
            playAudioClick()
            if (whatWasBefore === 'caregories-picture') {
                openPage(questionPictureHtml)
                questionPictureRunScript()
            } else if (whatWasBefore === 'caregories-artist') {
                openPage(questionAuthorHtml)
                questionAuthorRunScript()
            }
            break;
        default:
            break;
    }
})