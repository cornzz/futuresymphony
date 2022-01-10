import { type Writable, writable } from 'svelte/store'

export let showLanding: Writable<boolean> = writable(true)
export let sections: Writable<object> = writable(null)