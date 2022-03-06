//require('cypress-xpath');

export class helperFunctions{

static getURL(env) {
   let url;
   if(env=='qa'){
        url = 'https://trello.com/'
   } 
   return url;
}

}