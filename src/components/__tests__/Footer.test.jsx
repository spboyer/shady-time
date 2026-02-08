import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Footer from '../Footer'

function renderFooter() {
  return render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  )
}

describe('Footer', () => {
  it('renders without crashing', () => {
    renderFooter()
  })

  it('contains a <footer> semantic landmark', () => {
    renderFooter()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders social media links for Twitter, Instagram, YouTube, LinkedIn, TikTok', () => {
    renderFooter()
    const socialNames = ['twitter', 'instagram', 'youtube', 'linkedin', 'tiktok']
    socialNames.forEach((name) => {
      const link = screen.getByRole('link', { name: new RegExp(name, 'i') })
      expect(link).toBeInTheDocument()
    })
  })

  it('social links open in new tab with secure rel attribute', () => {
    renderFooter()
    const socialNames = ['twitter', 'instagram', 'youtube', 'linkedin', 'tiktok']
    socialNames.forEach((name) => {
      const link = screen.getByRole('link', { name: new RegExp(name, 'i') })
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'))
      expect(link).toHaveAttribute('rel', expect.stringContaining('noreferrer'))
    })
  })

  it('renders copyright text with current year', () => {
    renderFooter()
    const currentYear = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(currentYear))).toBeInTheDocument()
    expect(screen.getByText(/©|copyright/i)).toBeInTheDocument()
  })
})
