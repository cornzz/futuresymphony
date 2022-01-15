export function mail() {
    window.location.href = `mailto:${this.dataset.user}@futuresymphony.lt`;
}

export function focusElement(el) {
    let target = document.getElementById(el)
    target.classList.add('focus')
    window.setTimeout(function () { target.classList.remove('focus') }, 1000);
}

export function initSmoothScrolling() {
    document.querySelectorAll('a[href*="#"]')
        .forEach(el => el.addEventListener('click', (event: any) => {
            let anchor = event.target
            if (
                location.pathname.replace(/^\//, '') == anchor.pathname.replace(/^\//, '') && 
                location.hostname == anchor.hostname
            ) {
                let target = document.querySelector(anchor.hash)
                event.preventDefault();
                anchor.parentElement.classList.add('clicked');
                let scroll = target.offsetTop - document.querySelector('.masthead').clientHeight
                scrollToY(scroll, 1000)
                window.setTimeout(function () {
                    anchor.parentElement.classList.remove('clicked')
                }, 1000);
                history.pushState(null, null, anchor.hash == '#start' ? ' ' : anchor.hash);
            }
        }))
}

// Scroll function from https://github.com/Robbendebiene/Sliding-Scroll
function scrollToY(y, duration = 0, element = document.scrollingElement) {
    if (element.scrollTop === y) return;
  
    const cosParameter = (element.scrollTop - y) / 2;
    let scrollCount = 0, oldTimestamp = null;
  
    function step(newTimestamp) {
        if (oldTimestamp !== null) {
            scrollCount += Math.PI * (newTimestamp - oldTimestamp) / duration;
            if (scrollCount >= Math.PI) return element.scrollTop = y;
            element.scrollTop = cosParameter + y + cosParameter * Math.cos(scrollCount);
        }
        oldTimestamp = newTimestamp;
        window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
}