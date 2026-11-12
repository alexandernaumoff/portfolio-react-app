import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

const SCROLL_KEY = 'portfolio-scroll-y'

const ScrollManager = () => {
    const { pathname } = useLocation()
    const mounted = useRef(false)

    useEffect(() => {
        if (pathname !== '/') return

        const saveScroll = () => {
            sessionStorage.setItem(SCROLL_KEY, String(window.scrollY))
        }

        window.addEventListener('scroll', saveScroll, { passive: true })
        window.addEventListener('beforeunload', saveScroll)

        return () => {
            window.removeEventListener('scroll', saveScroll)
            window.removeEventListener('beforeunload', saveScroll)
            saveScroll()
        }
    }, [pathname])

    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true

            if (pathname !== '/') {
                window.scrollTo(0, 0)
                return
            }

            const saved = Number(sessionStorage.getItem(SCROLL_KEY) || 0)
            if (!saved) return

            let frame
            const started = performance.now()
            let cancelled = false

            const cancel = () => {
                cancelled = true
                cancelAnimationFrame(frame)
            }

            const restore = () => {
                if (cancelled) return
                window.scrollTo(0, saved)

                if (performance.now() - started < 1200 && Math.abs(window.scrollY - saved) > 2) {
                    frame = requestAnimationFrame(restore)
                }
            }

            window.addEventListener('wheel', cancel, { passive: true })
            window.addEventListener('touchstart', cancel, { passive: true })
            window.addEventListener('keydown', cancel)

            restore()

            return () => {
                cancelAnimationFrame(frame)
                window.removeEventListener('wheel', cancel)
                window.removeEventListener('touchstart', cancel)
                window.removeEventListener('keydown', cancel)
            }
        }

        window.scrollTo(0, 0)
    }, [pathname])

    return null
}

export default ScrollManager
