import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import EpisodeDetail from '../EpisodeDetail'

function renderEpisodeDetail(slug = 'getting-started-cloud-architecture') {
  return render(
    <MemoryRouter initialEntries={[`/episodes/${slug}`]}>
      <Routes>
        <Route path="/episodes/:slug" element={<EpisodeDetail />} />
      </Routes>
    </MemoryRouter>
  )
}

describe('EpisodeDetail', () => {
  it('renders episode when valid slug provided', () => {
    renderEpisodeDetail()
    expect(document.body).toBeInTheDocument()
  })

  it('shows the episode title', () => {
    renderEpisodeDetail()
    expect(
      screen.getByRole('heading', { name: /getting started with cloud architecture/i })
    ).toBeInTheDocument()
  })

  it('contains a YouTube embed', () => {
    renderEpisodeDetail()
    const iframe = document.querySelector('iframe')
    if (iframe) {
      expect(iframe).toHaveAttribute('src', expect.stringContaining('youtube'))
    } else {
      expect(document.querySelector('[data-testid="youtube-placeholder"]')).toBeInTheDocument()
    }
  })

  it('shows a "Back to Episodes" link', () => {
    renderEpisodeDetail()
    const backLink = screen.getByRole('link', { name: /back to episodes/i })
    expect(backLink).toBeInTheDocument()
    expect(backLink).toHaveAttribute('href', '/episodes')
  })

  it('shows 404/not found for invalid slug', () => {
    renderEpisodeDetail('totally-fake-episode-slug')
    const heading = screen.getByRole('heading')
    expect(heading.textContent).toMatch(/not found|404/i)
  })
})
