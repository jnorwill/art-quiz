import './index.scss'
import Pagehtml from './index.html'
import images from '../../images.js'
import { playAudioWrong } from '../../index.js'
import { playAudioCorrect } from '../../index.js'

export const runScript = () => {
    let div = document.createElement('div');
    div.className = "pop-up-container";
    div.innerHTML = Pagehtml


    const indicatorWrong = div.querySelector('.result__picture_wrong')
    const indicatorCorrect = div.querySelector('.result__picture_correct')
    const resultImg = div.querySelector('.result__picture')
    const resultName = div.querySelector('.result__name')
    const resultAuthor = div.querySelector('.result__author')
    const resultYear = div.querySelector('.result__year')
    const index = localStorage.getItem('indexPicture')
    const style = localStorage.getItem('style')
    const whatWasBefore = localStorage.getItem(`whatWasBefore`)
    const arr = whatWasBefore + style
    resultImg.style.backgroundImage = `url(${images[arr][index].imageNum})`
    resultName.innerHTML = `${images[arr][index].name}`
    resultAuthor.innerHTML = `${images[arr][index].author}`
    resultYear.innerHTML = `${images[arr][index].year}`

    const showIndicator  = () => {
        const answerNow = localStorage.getItem('answer now')
        if (answerNow === 'false') {
            playAudioWrong()
            indicatorWrong.classList.remove('result-hidden')
            indicatorCorrect.classList.add('result-hidden')
        } else if (answerNow === 'true') {
            playAudioCorrect()
            indicatorCorrect.classList.remove('result-hidden')
            indicatorWrong.classList.add('result-hidden')
        }

    }

    setTimeout(() => {
        showIndicator()

    })

    return div
}

