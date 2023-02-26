import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "landing" | "start"
declare module "/var/www/freeeco/landing/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}