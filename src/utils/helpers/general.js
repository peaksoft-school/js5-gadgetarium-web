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
