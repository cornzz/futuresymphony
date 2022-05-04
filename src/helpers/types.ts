export type NewsArticle = {
    slug: string
    meta: {
        en: string
        lt: string
    }
    date: {
        en: string
        lt: string
    }
    title: {
        en: string
        lt: string
    }
    content: {
        short?: {
            en: string
            lt: string
        }
        full: {
            en: string
            lt: string
        }
    }
    images: {
        regular?: string
        small: string
        caption?: {
            en: string
            lt: string
        }
    }
}

export type Image = {
    src: string,
    alt: string,
    bigsrc?: string,
    caption?: string
} 
