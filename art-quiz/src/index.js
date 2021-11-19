import quitHtml from './pages/quit-pop-up'
import winHtml from './pages/win-pop-up'
import resultHtml from './pages/result-pop-up'
import questionPictureHtml from './pages/question-picture'
import questionAuthorHtml from './pages/question-author'
import categoriesHtml from './pages/categories'
import settingsHtml from './pages/settings'
import homeHtml from './pages/home'

import './index.scss'
const openPage = (newPage) => {
    document.body.innerHTML = newPage
}

document.body.innerHTML = homeHtml

// const buttonSettings = document.querySelector('.header__settings')
// console.log(buttonSettings)
// buttonSettings.addEventListener('click', () => openPage(settingsHtml))
// buttonSettings.addEventListener('click', alert('привет'))