import * as menu from './menu.js'
import * as drawer from './drawer.js'
import * as scroll from './scroll.js'
import * as sticky from './sticky.js'

export default defineNuxtPlugin(() => {
    return {
        provide: {
            components: {
                menu,
                scroll,
                sticky
            }
        }
    }
})