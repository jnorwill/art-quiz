import './index.scss'
import quitHtml from './pages/quit-pop-up'
import winHtml from './pages/win-pop-up'
import resultHtml from './pages/result-pop-up'
import questionPictureHtml from './pages/question-picture'
import questionAuthorHtml from './pages/question-author'
import categoriesHtml from './pages/categories'
import settingsHtml from './pages/settings'
import homeHtml from './pages/home'

const openPage = (newPage) => {
    document.body.innerHTML = newPage
}
const openPopUp = (newPopUp) => {
    document.body.append(newPopUp)
}

document.body.innerHTML = homeHtml
let i = 'home'
document.addEventListener('click', (event) => {
    const actionType = (event.target.closest('.categories-item') || event.target).dataset?.actionType
    console.log(i, event.target.closest('.categories-item'), event.currentTarget)

    switch (actionType) {
        case 'open-settings':
            openPage(settingsHtml)
            break;

        case 'open-back':
            if (i === 'home') {
                openPage(homeHtml)
                i = 'home'
            } else if (i === 'caregories-artist' || i === 'caregories-picture') {
                openPage(categoriesHtml)
            }
            break;

        case 'open-home':
            i = 'home'
            openPage(homeHtml)
            break;

        case 'open-caregories-artist':
            i = 'caregories-artist'
            openPage(categoriesHtml)
            break;

        case 'open-caregories-picture':
            i = 'caregories-picture'
            openPage(categoriesHtml)
            break;

        case 'open-portrait':
            if (i === 'caregories-picture') {
                openPage(questionPictureHtml)
            } else if (i === 'caregories-artist') {
                openPage(questionAuthorHtml)
            }
            break;

        case 'open-landscape':
            if (i === 'caregories-picture') {
                openPage(questionPictureHtml)
            } else if (i === 'caregories-artist') {
                openPage(questionAuthorHtml)
            }
            break;

        case 'open-still-life':
            if (i === 'caregories-picture') {
                openPage(questionPictureHtml)
            } else if (i === 'caregories-artist') {
                openPage(questionAuthorHtml)
            }
            break;

        case 'open-graphic':
            if (i === 'caregories-picture') {
                openPage(questionPictureHtml)
            } else if (i === 'caregories-artist') {
                openPage(questionAuthorHtml)
            }
            break;

        case 'open-antique':
            if (i === 'caregories-picture') {
                openPage(questionPictureHtml)
            } else if (i === 'caregories-artist') {
                openPage(questionAuthorHtml)
            }
            break;

        case 'open-avant-garde':
            if (i === 'caregories-picture') {
                openPage(questionPictureHtml)
            } else if (i === 'caregories-artist') {
                openPage(questionAuthorHtml)
            }
            break;

        case 'open-renaissance':
            if (i === 'caregories-picture') {
                openPage(questionPictureHtml)
            } else if (i === 'caregories-artist') {
                openPage(questionAuthorHtml)
            }
            break;

        case 'open-surrealism':
            if (i === 'caregories-picture') {
                openPage(questionPictureHtml)
            } else if (i === 'caregories-artist') {
                openPage(questionAuthorHtml)
            }
            break;

        case 'open-kitsch':
            if (i === 'caregories-picture') {
                openPage(questionPictureHtml)
            } else if (i === 'caregories-artist') {
                openPage(questionAuthorHtml)
            }
            break;

        case 'open-minimalism':
            if (i === 'caregories-picture') {
                openPage(questionPictureHtml)
            } else if (i === 'caregories-artist') {
                openPage(questionAuthorHtml)
            }
            break;

        case 'open-avangard':
            if (i === 'caregories-picture') {
                openPage(questionPictureHtml)
            } else if (i === 'caregories-artist') {
                openPage(questionAuthorHtml)
            }
            break;

        case 'open-industrial':
            if (i === 'caregories-picture') {
                openPage(questionPictureHtml)
            } else if (i === 'caregories-artist') {
                openPage(questionAuthorHtml)
            }
            break;

        case 'open-industrial':
            if (i === 'caregories-picture') {
                openPage(questionPictureHtml)
            } else if (i === 'caregories-artist') {
                openPage(questionAuthorHtml)
            }
            break;

        case 'open-quit-pop-up':
            openPopUp(quitHtml)

            break;

        case 'close-pop-up':
            document.querySelector('.pop-up-container').remove()

            break;


        case 'open-categories':
            if (i === 'caregories-picture') {
                openPage(categoriesHtml)
            } else if (i === 'caregories-artist') {
                openPage(categoriesHtml)
            }
            break;

        default:
            break;
    }
})