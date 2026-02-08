import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Episodes from '../Episodes'

function renderEpisodes() {
  return render(
    <MemoryRouter>
      <Episodes />
    </MemoryRouter>
  )
}

describe('Episodes', () => {
  it('renders without crashing', () => {
    renderEpisodes()
  })

  it('shows "Episodes" heading', () => {
    renderEpisodes()
    expect(screen.getByRole('heading', { name: /episodes/i })).toBeInTheDocument()
  })

  it('renders multiple episode cards', () => {
    renderEpisodes()
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThanOrEqual(2)
  })

  it('displays at least one episode title from seed data', () => {
    renderEpisodes()
    const found = screen.queryAllByText(/cloud architecture|design systems|developer experience|podcasting|open source/i)
    expect(found.length).toBeGreaterThanOrEqual(1)
  })
})
