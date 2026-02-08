import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Home from '../Home'

function renderHome() {
  return render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  )
}

describe('Home', () => {
  it('renders without crashing', () => {
    renderHome()
  })

  it('shows "Shady Time" heading', () => {
    renderHome()
    expect(screen.getByRole('heading', { name: /shady time/i })).toBeInTheDocument()
  })

  it('has a "Listen Now" call-to-action', () => {
    renderHome()
    const cta = screen.getByRole('link', { name: /listen now/i })
    expect(cta).toBeInTheDocument()
  })

  it('shows an "About" section', () => {
    renderHome()
    expect(screen.getByRole('heading', { name: /about/i })).toBeInTheDocument()
  })

  it('shows navigation card linking to /episodes', () => {
    renderHome()
    const episodesLink = screen.getByRole('link', { name: /episodes/i })
    expect(episodesLink).toHaveAttribute('href', '/episodes')
  })

  it('shows navigation card linking to /guests', () => {
    renderHome()
    const guestsLink = screen.getByRole('link', { name: /guests/i })
    expect(guestsLink).toHaveAttribute('href', '/guests')
  })

  it('shows navigation card linking to /contact', () => {
    renderHome()
    const contactLink = screen.getByRole('link', { name: /contact/i })
    expect(contactLink).toHaveAttribute('href', '/contact')
  })
})
