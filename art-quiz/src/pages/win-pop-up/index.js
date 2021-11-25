import './index.scss'
import Pagehtml from './index.html'
import { playAudioEnd } from '../../index.js'

export const runScript = () => {
	let div = document.createElement('div');
	div.className = "pop-up-container";
	div.innerHTML = Pagehtml

	playAudioEnd()
	const result = div.querySelector('.win__result')
	const style = localStorage.getItem('style')
	const whatWasBefore = localStorage.getItem(`whatWasBefore`)
	const newResult = localStorage.getItem(`${whatWasBefore} ${style} correct answer`)
	const permanentResult = localStorage.getItem(`permanent ${whatWasBefore} ${style} correct answer`)
	if (newResult > permanentResult) {
		localStorage.setItem(`permanent ${whatWasBefore} ${style} correct answer`, `${newResult}`)
	}
	result.innerHTML = `${newResult}`
	return div
}
