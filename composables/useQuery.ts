

export const useQuery = async (request: string, method = 'GET', opts?: any) => {
    const config = useRuntimeConfig()

  return await useFetch(request, {
    baseURL: config.public.apiURL,
    method: method,
    headers: {
      Accept: "application/json",
    },
    ...opts
  })
}