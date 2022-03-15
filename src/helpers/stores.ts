import { type Writable, writable } from 'svelte/store'
import { dev } from '$app/env'

export let showLanding: Writable<boolean> = writable(true)
export let showBack: Writable<boolean> = writable(true)
export let sections: Writable<object> = writable(null)
export let baseURL: Writable<string> = writable(dev ? 'http://localhost:8080/api/' : `https://www.futuresymphony.lt/api/`)
export let loading: Writable<boolean> = writable(false)
