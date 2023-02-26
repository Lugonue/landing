import date from "./date.ts"
import metrics from "./metrics.ts"
import data from "./data.ts"

export default defineNuxtPlugin(() => {
    return {
      provide: {
        helpers: {date, metrics, data}
      }
    }
})