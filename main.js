import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css';
import './src/styles/elements/base.css';
import CardGame from "./src/components/CardGame";

//document.getElementById('root').innerHTML = 'Aqui';
const $root = document.querySelector('#root');
const $htmlCardGame = CardGame();
//$root.textContent = CardGame();
$root.insertAdjacentHTML('beforeend', $htmlCardGame);