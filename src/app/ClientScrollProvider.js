// src/app/ClientScrollProvider.js
'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

export default function ClientScrollProvider({ children }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // initialize Lenis smooth scrolling
    const lenis = new Lenis()
    lenis.on('scroll', ScrollTrigger.update)

    // proxy ScrollTrigger’s scroller to Lenis
    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop(value) {
        return arguments.length
          ? lenis.scrollTo(value)
          : lenis.scroll
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        }
      },
      pinType: document.documentElement.style.transform
        ? 'transform'
        : 'fixed'
    })

    // kick off the RAF loop for Lenis
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // keep Lenis in sync if ScrollTrigger ever refreshes
    const onRefresh = () => lenis.resize()
    ScrollTrigger.addEventListener('refresh', onRefresh)
    ScrollTrigger.refresh()

    return () => {
      ScrollTrigger.clearScrollMemory()
      ScrollTrigger.removeEventListener('refresh', onRefresh)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
