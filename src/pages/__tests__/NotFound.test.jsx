import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import NotFound from '../NotFound'

function renderNotFound() {
  return render(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>
  )
}

describe('NotFound', () => {
  it('renders without crashing', () => {
    renderNotFound()
  })

  it('shows 404 or "not found" message', () => {
    renderNotFound()
    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()
    // Should contain either "404" or "not found" (case-insensitive)
    const textContent = heading.textContent
    expect(textContent).toMatch(/404|not found/i)
  })
})
