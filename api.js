export default class API {
  
  constructor(){
    this.headers = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0',
      'Accept': '*/*',
      'Accept-Language': 'es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3',
      'Accept-Encoding': 'gzip, deflate, br',
      'Referer': 'https://lolesports.com/',
      'x-api-key': '0TvQnueqKa5mxJntVWt0w4LpLfEkrV1Ta8rQBb9Z',
      'Pragma': 'no-cache',
      'Access-Control-Allow-Origin': '*',
      'Origin': 'https://esports-api.lolesports.com',
      'Cache-Control': 'no-cache',
      'TE': 'trailers'
    };
    this.url = 'https://cors-anywhere.herokuapp.com/https://esports-api.lolesports.com/persisted/gw/';
    this.params = {hl: 'es-ES'};
  }
  async function load(path,params){
    let result = await fetch(this.url+path+'?'+ new URLSearchParams({...params,...this.params}), {
      method: "GET",
      headers: new Headers(this.headers)
    }),
    json = await result.json();

    return json;
  }
}

