import './index.scss'
export { default } from './index.html'
import { playAudioClick } from '../../index.js'
// import timeCounter from '../../index.js'




export const runScript = () => {
    const timeButtonToggle = document.querySelector('.settings-main__time-toggle')
    const timeTogglePoint = document.querySelector('.settings-main__time-toggle-point')
    const timeLabel = document.querySelector('.settings-main__time-label')
    const timeButtonLess = document.querySelector('.settings-main__time-button_less')
    const timeButtonMore = document.querySelector('.settings-main__time-button_more')
    const timeValue = document.querySelector('.settings-main__time-value')
    const volumeAll = document.querySelector('.settings-main__volume-all')
    const volumeCurrent = document.querySelector('.settings-main__volume-current')
    const buttonDefault = document.querySelector('.settings-main__button_default')
    const buttonSave = document.querySelector('.settings-main__button_save')


    volumeCurrent.style.width = `${localStorage.getItem('volume')}%`
    const controlVolume = (event, width) => {
        const widthAll = volumeAll.offsetWidth
        width = +((+event.pageX.toFixed(0) - volumeCurrent.getBoundingClientRect().left.toFixed(0)) * 100 / widthAll).toFixed(0)
        if (width < 0) {
            width = 0
        } else if (width > 100) {
            width = 100
        }
        localStorage.setItem('volume', `${width}`)
        volumeCurrent.style.width = `${localStorage.getItem('volume')}%`
    }


    let contrilIsDown
    volumeAll.addEventListener('mousedown', () => {
        document.addEventListener('mousemove', controlVolume)
        volumeAll.addEventListener('click', controlVolume)
        contrilIsDown = 'yes'
    })

    document.addEventListener('mouseup', () => {
        if (contrilIsDown === 'yes') {
            document.removeEventListener('mousemove', controlVolume)
            contrilIsDown = 'no'
            playAudioClick()
        }
    })


    let time = +localStorage.getItem('timeValue')
    timeValue.innerHTML = `${localStorage.getItem('timeValue')}`.padStart(2, '0');



    if (localStorage.getItem('isTime') === 'On') {
        timeTogglePoint.classList.add('settings-main__time-toggle-point-checked')
    } else if (localStorage.getItem('isTime') === 'Off') {
        timeTogglePoint.classList.remove('settings-main__time-toggle-point-checked')
    }
    timeLabel.innerHTML = `${localStorage.getItem('isTime')}`
    document.addEventListener('click', (event) => {
        switch (event.target) {
            case timeButtonToggle:
                playAudioClick()
                if (localStorage.getItem('isTime') === 'On') {
                    timeTogglePoint.classList.remove('settings-main__time-toggle-point-checked')
                    localStorage.setItem('isTime', 'Off')
                } else {
                    timeTogglePoint.classList.add('settings-main__time-toggle-point-checked')
                    localStorage.setItem('isTime', 'On')
                }
                timeLabel.innerHTML = `${localStorage.getItem('isTime')}`
                break;
            case timeButtonMore:
                playAudioClick()
                if (time === 30) {
                    break;
                } else {
                    time += 5
                    localStorage.setItem('timeValue', time)
                    timeValue.innerHTML = `${localStorage.getItem('timeValue')}`.padStart(2, '0')
                }
                break;
            case timeButtonLess:
                playAudioClick()
                if (time === 0) {
                    break;
                } else {
                    time -= 5
                    localStorage.setItem('timeValue', time)
                    timeValue.innerHTML = `${localStorage.getItem('timeValue')}`.padStart(2, '0')
                    if (time === 0) {
                        timeTogglePoint.classList.remove('settings-main__time-toggle-point-checked')
                        localStorage.setItem('isTime', 'Off')
                    }
                }
                break;
            case buttonDefault:

                break;
            case buttonSave:

                break;
            default:
                break;
        }

    })
}
