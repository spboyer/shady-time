import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header from '../Header'

function renderHeader() {
  return render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )
}

describe('Header', () => {
  it('renders without crashing', () => {
    renderHeader()
  })

  it('contains a <nav> semantic landmark', () => {
    renderHeader()
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('renders "Shady Time" text linking to /', () => {
    renderHeader()
    const link = screen.getByRole('link', { name: /shady time/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/')
  })

  it('renders navigation links for Episodes, Guests, Contact', () => {
    renderHeader()
    expect(screen.getByRole('link', { name: /episodes/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /guests/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument()
  })

  it('has a mobile menu button', () => {
    renderHeader()
    const menuButton = screen.getByRole('button', { name: /menu/i })
    expect(menuButton).toBeInTheDocument()
  })

  it('does not use redundant ARIA roles on <nav>', () => {
    renderHeader()
    const nav = screen.getByRole('navigation')
    // <nav> has implicit role="navigation" — adding it explicitly is redundant
    expect(nav).not.toHaveAttribute('role')
  })
})
