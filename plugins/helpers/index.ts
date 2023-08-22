import date from "./date"
import data from "./data"
import utils from "./utils"

export default defineNuxtPlugin(() => {
  return {
    provide: {
      helpers: { date, data, utils }
    }
  }
})