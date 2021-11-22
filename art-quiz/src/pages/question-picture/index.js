import './index.scss'
export { default } from './index.html'
import { playAudioWrong } from '../../index.js'
import { playAudioClick } from '../../index.js'
import { openPopUp } from '../../index.js'
import images from '../../images.js'
import { runScript as resultRunScript } from '../result-pop-up/index.js'
import { runScript as winHtmlScript } from '../win-pop-up'

export const runScript = () => {
    const timeCounter = document.querySelector('.question-counter')
    let isTime = localStorage.getItem('isTime')
    let secondsLeft = +localStorage.getItem('timeValue')
    let timerId

    const showTimer = () => {
        if (secondsLeft === 0) {
            playAudioWrong()
            openPopUp(resultRunScript())
            clearTimeout(timerId)
            secondsLeft = +localStorage.getItem('timeValue')
        } else secondsLeft--
        timeCounter.innerHTML = `${secondsLeft}`.padStart(2, '0')
    }
    const startTimer = () => {
        if (isTime === 'On') {
            timeCounter.innerHTML = `${secondsLeft}`.padStart(2, '0')
            timerId = setInterval(showTimer, 1000)
        } else if (isTime === 'Off') {
            let timerId = false
            timeCounter.classList.add('hidden')
        }
    }
    startTimer()

    const authorText = document.querySelector('.question-picture-main__text_author')
    const answerArr = document.querySelectorAll('.question-picture-main__answer')
    let indexPicture = 0
    localStorage.setItem('indexPicture', `${indexPicture}`)


    const changeQuestion = () => {
        const style = localStorage.getItem('style')
        const whatWasBefore = localStorage.getItem(`whatWasBefore`)
        const arr = whatWasBefore + style
        authorText.innerHTML = `${images[arr][indexPicture].author}`
        const randomRight = Math.floor(Math.random() * 4)
        const allStyles = Object.keys(images)
        answerArr.forEach((item, index) => {
            if (item.classList.contains('wrong-answer')) {
                item.classList.remove('wrong-answer')
            } else if (item.classList.contains('correct-answer')) {
                item.classList.remove('correct-answer')
            }
            let randomWrong = Math.floor(Math.random() * 9)
            const randomStyle = Math.floor(Math.random() * 23)
            const type = allStyles[randomStyle]
            let pathWrong = images[type][randomWrong].imageNum
            const pathRight = images[arr][indexPicture].imageNum
            if (index === randomRight) {
                item.style.backgroundImage = `url(${pathRight})`
                item.classList.add('correct-answer')
            } else if (index != randomRight) {
                if (images[type][randomWrong].author != images[arr][indexPicture].author) {
                    item.style.backgroundImage = `url(${pathWrong})`
                    item.classList.add('wrong-answer')
                } else if (images[type][randomWrong].author === images[arr][indexPicture].author) {
                    randomWrong = Math.floor(Math.random() * 9)
                    pathWrong = images[type][randomWrong].imageNum
                    item.style.backgroundImage = `url(${pathWrong})`
                    item.classList.add('wrong-answer')
                }
            }
        })
    }

    setTimeout(() => {
        changeQuestion()

    })

    let numberAnswer = 0
    document.addEventListener('click', (event) => {

        const actionType = (event.target).dataset?.actionType
        switch (actionType) {
            case 'open-result-pop-up':

                const style = localStorage.getItem('style')
                const whatWasBefore = localStorage.getItem(`whatWasBefore`)
                playAudioClick()
                clearTimeout(timerId)
                secondsLeft = +localStorage.getItem('timeValue')
                if (indexPicture < 10) {
                    openPopUp(resultRunScript())
                    indexPicture++
                    localStorage.setItem('indexPicture', `${indexPicture}`)

                    if (event.target.classList.contains('wrong-answer')) {
                        localStorage.setItem('answer now', `false`)
                    } else if (event.target.classList.contains('correct-answer')) {
                        numberAnswer++
                        localStorage.setItem(`${whatWasBefore} ${style} correct answer`, `${numberAnswer}`)
                        localStorage.setItem('answer now', `true`)
                    }
                }
                break;

            case 'next':
                playAudioClick()
                document.querySelector('.pop-up-container').remove()
                if (indexPicture < 10) {
                    changeQuestion()
                    startTimer()
                } else if (indexPicture = 10) {
                    openPopUp(winHtmlScript())
                    indexPicture = 0
                    localStorage.setItem('indexPicture', `${indexPicture}`)
                }

                break;

            case 'open-quit-pop-up':
                clearTimeout(timerId)
                break;

            case 'close-quit-pop-up':
                playAudioClick()
                document.querySelector('.pop-up-container').remove()
                startTimer()
                break;

            case 'open-home':
                secondsLeft = +localStorage.getItem('timeValue')
                break;

            default:
                break;
        }
    })
}
