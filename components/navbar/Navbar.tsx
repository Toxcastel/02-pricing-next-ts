import React from 'react'
import { ActiveLink } from './ActiveLink'

export const Navbar = () => {
  return (
    <nav>
        <ActiveLink text="Home" href="/" />
        <ActiveLink text="About" href="/about" />
        <ActiveLink text="Contact" href="/contact" />
        <ActiveLink text="pricing" href="/pricing" />

    </nav>
  )
}