import { cubicOut } from 'svelte/easing'

export function fadeHeight(node, {
    delay = 0
}) {
    const height = parseInt(getComputedStyle(node).height)
    const calcDuration = (h) => h < 300 ? 500 : h < 500 ? 750 : 1000

    return {
        delay,
        duration: calcDuration(height),
        easing: cubicOut,
        css: t => `height: ${t * height}px`
    }
}

export function highlightElement(element: HTMLElement): void {
    element.style.backgroundColor = 'yellow'
    setTimeout(() => element.style.backgroundColor = '', 1000)
}

export function initSmoothScrolling(): void {
    document.querySelectorAll('a[href*="#"]')
        .forEach(el => el.addEventListener('click', (event: MouseEvent) => {
            let anchor = event.target as HTMLAnchorElement
            if (
                location.pathname.replace(/^\//, '') == anchor.pathname.replace(/^\//, '') && 
                location.hostname == anchor.hostname
            ) {
                let target = document.querySelector(anchor.hash) as HTMLElement
                event.preventDefault()
                anchor.parentElement.classList.add('clicked')
                let scroll = target.offsetTop - document.querySelector('.masthead').clientHeight + 1
                scrollToY(scroll, 1000)
                window.setTimeout(function () {
                    anchor.parentElement.classList.remove('clicked')
                }, 1000)
                history.pushState(null, null, anchor.hash == '#start' ? ' ' : anchor.hash)
            }
        }))
}

// Scroll function from https://github.com/Robbendebiene/Sliding-Scroll
function scrollToY(y: number, duration = 0, element = document.scrollingElement): void {
    if (element.scrollTop === y) return
  
    const cosParameter = (element.scrollTop - y) / 2
    let scrollCount = 0, oldTimestamp = null
  
    function step(newTimestamp) {
        if (oldTimestamp !== null) {
            scrollCount += Math.PI * (newTimestamp - oldTimestamp) / duration
            if (scrollCount >= Math.PI) return element.scrollTop = y
            element.scrollTop = cosParameter + y + cosParameter * Math.cos(scrollCount)
        }
        oldTimestamp = newTimestamp
        window.requestAnimationFrame(step)
    }
    window.requestAnimationFrame(step)
}

export const getAuth = (pass: string): HeadersInit => { return { 'Authorization': `Basic ${btoa('admin:' + pass)}` }}