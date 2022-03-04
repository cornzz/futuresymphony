import { type Writable, writable } from 'svelte/store'
import { dev } from '$app/env'

export let showLanding: Writable<boolean> = writable(true)
export let showBack: Writable<boolean> = writable(true)
export let sections: Writable<object> = writable(null)
export let baseURL: Writable<string> = writable(dev ? 'http://localhost:3000' : 'https://futuresymphony.lt')
export let loading: Writable<boolean> = writable(false)
