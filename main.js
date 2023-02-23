import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'
import  API  from './api.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://cors-anywhere.herokuapp.com/corsdemo" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card" id="leagues">
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`
let leagues = await API.load('getLeagues')
console.log(leagues)
if (leagues && leagues.data){
  var html=""
  leagues.data.leagues.forEach(league=>{
    html+=`
    <div>
      <a data-id="${league.id}">
      <img src="${league.image}/>
      <span>${league.name}</span>
      </a>
    </div>
    `
  })
}
