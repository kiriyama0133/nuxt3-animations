import type { PiniaPluginContext, Pinia } from 'pinia'

declare module 'pinia' {
  export interface DefineStoreOptionsBase<S, Store> {
    debounce?: Record<string, number>
  }
}

type StoreAction = (...args: any[]) => any

function debounceAction<T extends StoreAction>(action: T, delay: number) {
  let timer: ReturnType<typeof setTimeout> | undefined
  let pendingCalls: Array<{
    resolve: (value: Awaited<ReturnType<T>>) => void
    reject: (reason?: unknown) => void
  }> = []
  let latestArgs: Parameters<T>

  return (...args: Parameters<T>): Promise<Awaited<ReturnType<T>>> => {
    latestArgs = args

    return new Promise((resolve, reject) => {
      pendingCalls.push({ resolve, reject })

      if (timer) {
        clearTimeout(timer)
      }

      timer = setTimeout(async () => {
        const currentCalls = pendingCalls
        pendingCalls = []
        timer = undefined

        try {
          const result = await action(...latestArgs)
          currentCalls.forEach(call => call.resolve(result))
        } catch (error) {
          currentCalls.forEach(call => call.reject(error))
        }
      }, delay)
    })
  }
}

export function createDebouncePlugin() {
  return (context: PiniaPluginContext) => {
    const { options, store } = context
    if (!options.debounce) return

    const debouncedActions: Record<string, unknown> = {}

    Object.entries(options.debounce).forEach(([actionsName, delay]) => {
      const originalAction = store[actionsName]
      if (typeof originalAction !== 'function') return

      debouncedActions[actionsName] = debounceAction(
        originalAction.bind(store) as StoreAction,
        delay
      )
    })

    return debouncedActions
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  const pinia = nuxtApp.$pinia as Pinia
  pinia.use(createDebouncePlugin())
})
