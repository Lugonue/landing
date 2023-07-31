export const useIndexFetch = async (request: string, opts?: any) => {
  const config = useRuntimeConfig()
  const route = useRoute()

  const { data, pending, error, refresh } = await useFetch(request, {
    baseURL: config.public.apiURL,
    headers: {
      Accept: "application/json",
    },
    onRequest({ request, options }) {
      options.query = route.query
    },
    ...opts
  })

  watch(() => route.query || route.params, () => {
    refresh()
  })

  return {
    data, pending, error, refresh
  }
}