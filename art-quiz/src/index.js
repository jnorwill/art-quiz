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
import loadingGif from 'assets/img/loading.gif'

// localStorage.clear()
const openPage = (newPage) => {
  document.body.innerHTML = newPage
}
export const openPopUp = (newPopUp) => {
  document.body.append(newPopUp)
}
const audioClick = new Audio()
audioClick.src = click

export const playAudioClick = () => {
  let volume = localStorage.getItem('volume')
  audioClick.volume = volume / 100
  audioClick.play()
}

if (!localStorage.getItem('isTime')) {
  localStorage.setItem('isTime', 'Off')
}
if (!localStorage.getItem('timeValue')) {
  localStorage.setItem('timeValue', '0')
}
if (!localStorage.getItem('volume')) {
  localStorage.setItem('volume', '25')
}

const AudioWrong = new Audio()
AudioWrong.src = wronganswer

export const playAudioWrong = () => {
  let volume = localStorage.getItem('volume')
  AudioWrong.volume = volume / 100
  AudioWrong.play()
}

const audioCorrect = new Audio()
audioCorrect.src = correctanswer

export const playAudioCorrect = () => {
  let volume = localStorage.getItem('volume')
  audioCorrect.volume = volume / 100
  audioCorrect.play()
}

const audioEnd = new Audio()
audioEnd.src = endround

export const playAudioEnd = () => {
  let volume = localStorage.getItem('volume')
  audioEnd.volume = volume / 100
  audioEnd.play()
}

export const loadImg = (src, imgNode) => {
  if (imgNode) {
    imgNode.classList.add('loading')
  }

  return new Promise((resolve) => {
    const img = new Image()
    img.src = src
    img.onload = resolve
  }).then(() => {
    if (imgNode) {
      imgNode.classList.add('loading-end')
      setTimeout(() => {
        imgNode.classList.remove('loading')
        imgNode.classList.remove('loading-end')
      },
        // 300ms duration animation .loading
        300)
    }
  })
}

loadImg(loadingGif)

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
        categoriesRunScript()
      }
      break;

    case 'open-home':
      playAudioClick()
      whatWasBefore = 'home'
      openPage(homeHtml)
      break;

    case 'open-caregories-artist':
      whatWasBefore = 'caregories-artist'
      localStorage.setItem(`whatWasBefore`, `artist`)
      openPage(categoriesHtml)
      categoriesRunScript()
      playAudioClick()
      break;

    case 'open-caregories-picture':
      whatWasBefore = 'caregories-picture'
      localStorage.setItem(`whatWasBefore`, `picture`)
      openPage(categoriesHtml)
      categoriesRunScript()
      playAudioClick()
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
        categoriesRunScript()
      } else if (whatWasBefore === 'caregories-artist') {
        openPage(categoriesHtml)
        categoriesRunScript()
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