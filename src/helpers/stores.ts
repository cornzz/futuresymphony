import { type Writable, writable } from 'svelte/store'
import { dev } from '$app/env'
import type ImageFrame from '../components/ImageFrame.svelte'

export let showLanding: Writable<boolean> = writable(true)
export let showBack: Writable<boolean> = writable(true)
export let sections: Writable<object> = writable(null)
export let baseURL: Writable<string> = writable(dev ? 'http://localhost:8080/api/' : `https://www.futuresymphony.lt/api/`)
export let loading: Writable<boolean> = writable(false)
export let imageFrame: Writable<ImageFrame> = writable(null)
export let deadline: Writable<boolean> = writable(new Date() > new Date('Jun 30 2022 23:59:59 GMT+0200'))
