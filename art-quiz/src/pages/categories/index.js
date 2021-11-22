import './index.scss'
export { default } from './index.html'

export const runScript = () => {
    
    document.addEventListener('click', (event) => {
        const actionType = (event.target.closest('.categories-item') || event.target).dataset?.actionType

        switch (actionType) {
            case 'open-portrait':
                localStorage.setItem('style', 'Portrait')
                break;
            case 'open-landscape':
                localStorage.setItem('style', 'Landscape')
                break;
            case 'open-still-life':
                localStorage.setItem('style', 'StillLife')
                break;
            case 'open-graphic':
                localStorage.setItem('style', 'Graphic')
                break;
            case 'open-antique':
                localStorage.setItem('style', 'Antique')
                break;
            case 'open-avant-garde':
                localStorage.setItem('style', 'AvantGarde')
                break;
            case 'open-renaissance':
                localStorage.setItem('style', 'Renaissance')
                break;
            case 'open-surrealism':
                localStorage.setItem('style', 'Surrealism')
                break;
            case 'open-kitsch':
                localStorage.setItem('style', 'Kitsch')
                break;
            case 'open-minimalism':
                localStorage.setItem('style', 'Minimalism')
                break;
            case 'open-avangard':
                localStorage.setItem('style', 'Avangard')
                break;
            case 'open-industrial':
                localStorage.setItem('style', 'Industrial')
                break;
            default:
                break;
        }
    })
}

