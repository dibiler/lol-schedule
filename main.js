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
let leagues = await API.loadFake('getLeagues')
if (leagues && leagues.data){
  var html=""
  leagues.data.leagues.forEach(league=>{
    html+=`
    <div>
      <a data-id="${league.id}">
      <!--<img src="${league.image}"/>-->
      <span>${league.name}</span>
      </a>
    </div>
    `
  })
  async function refreshResults(){
    let leagues = Array.from(document.getElementById("leagues").querySelectorAll('a.active')).map(item=>item.dataset.id)
    if(leagues.length>0){
      console.log(leagues)
      let schedule = await API.loadFake('getSchedule',{leagueId:leagues.join(',')})
      console.log(schedule)
    }
  }
  document.getElementById("leagues").innerHTML = html
  document.getElementById("leagues").addEventListener('click',e=>{
    console.log(e.target)
    if (e.target.nodeName=='A'){
      e.target.classList.toggle('active')
      refreshResults()
    }
  })
}
