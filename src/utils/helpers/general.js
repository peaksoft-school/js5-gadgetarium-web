export const localStorageHelpers = {
   getFromLocalStorage: (key) => {
      return JSON.parse(localStorage.getItem(key))
   },
   saveToLocalStorage: (key, data) => {
      return localStorage.setItem(key, JSON.stringify(data))
   },
   deleteFromLocalStorage: (key) => {
      return localStorage.removeItem(key)
   },
}

export const sessionStorageHelpers = {
   getFromSessionStorage: (key) => {
      return JSON.parse(sessionStorage.getItem(key))
   },
   saveToSessionStorage: (key, data) => {
      return sessionStorage.setItem(key, JSON.stringify(data))
   },
   deleteFromSessionStorage: (key) => {
      return sessionStorage.removeItem(key)
   },
}

export const plusZero = (number) => {
   if (number < 10) {
      return `0${number}`
   }
   return number
}

export const dateFormatter = (date) => {
   if (date) {
      const dateFormat = `${date.getFullYear()}-${plusZero(
         date.getMonth() + 1
      )}-${plusZero(date.getDate())}`
      return dateFormat
   }
   return null
}

export const getRequestOptions = {
   startOfDate: null,
   finishOfDate: null,
   search: 'all',
   sortBy: null,
   page: null,
   size: null,
}

// export function requestWithSorting(requestObj) {
//    let text = ''
//    for (const key in requestObj) {
//       if (obj[key] !== null) {

//       }
//    }
// }

// const myCallbackFunction = (event) => {
//    // standard web api change event
//    const newValue = event.target.value
//    // update state based on input field changes
//    this.setState({ playerName: newValue })
// }

// const mySubmitFunction = (event) => {
//    // standard web api submit event
//    event.preventDefault()
//    // use state
//    const url = `https://nba-players.herokuapp.com/players-stats/${this.state.playerName}`
//    // TODO call axios with dynamic url
// }
