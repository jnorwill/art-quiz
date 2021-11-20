import './index.scss'
export { default } from './index.html'
import { playAudioWrong } from '../../index.js'
import { playAudioClick } from '../../index.js'
import { openPopUp } from '../../index.js'
import resultHtml from '../result-pop-up'


export const runScript = () => {
    const timeCounter = document.querySelector('.question-counter')
    let isTime = localStorage.getItem('isTime')
    timeCounter.innerHTML = `${localStorage.getItem('timeValue')}`.padStart(2, '0')
    if (isTime === 'Off') {
        timeCounter.classList.add('hidden')
    }
    let i = +localStorage.getItem('timeValue')
    const showTimer = () => {
        if (i === 0) {
            playAudioWrong()
            openPopUp(resultHtml)
            clearTimeout(timerId);
            i = +localStorage.getItem('timeValue')
        } else i--
        timeCounter.innerHTML = `${i}`.padStart(2, '0')
        console.log(i)
    }
    let timerId = setInterval(showTimer, 1000)
    document.addEventListener('click', (event) => {
        const actionType = (event.target).dataset?.actionType
        switch (actionType) {
            case 'open-result-pop-up':
                playAudioClick()
                openPopUp(resultHtml)
                clearTimeout(timerId)
                break;
            case 'next':
                console.log('!!!!')
                playAudioClick()
                document.querySelector('.pop-up-container').remove()
                timerId = setInterval(showTimer, 1000)
                break;
            case 'open-quit-pop-up':
                clearTimeout(timerId)
                break;
            default:
                break;
        }
    })
}