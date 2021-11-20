import './index.scss'
export {default} from './index.html'

export const runScript = () => {
    const timeCounter = document.querySelector('.question-counter')
    let isTime = localStorage.getItem('isTime')
    if (isTime === 'Off') {
        timeCounter.classList.add('hidden')
    }
}