import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import EpisodeCard from '../EpisodeCard'

const episode = {
  id: 'ep-001',
  title: 'Getting Started with Cloud Architecture: A Deep Dive into Modern Infrastructure and Deployment Strategies',
  slug: 'getting-started-cloud-architecture',
  episodeNumber: 1,
  description: 'We explore the fundamentals of cloud architecture.',
  thumbnail: '/images/episodes/ep-001.svg',
}

function renderEpisodeCard(props = {}) {
  return render(
    <MemoryRouter>
      <EpisodeCard episode={episode} {...props} />
    </MemoryRouter>
  )
}

describe('EpisodeCard', () => {
  it('renders without crashing', () => {
    renderEpisodeCard()
  })

  it('displays the episode title', () => {
    renderEpisodeCard()
    expect(screen.getByText(episode.title)).toBeInTheDocument()
  })

  it('displays the episode number', () => {
    renderEpisodeCard()
    expect(screen.getByText(/1/)).toBeInTheDocument()
  })

  it('displays the episode description', () => {
    renderEpisodeCard()
    expect(screen.getByText(episode.description)).toBeInTheDocument()
  })

  it('links to /episodes/{slug}', () => {
    renderEpisodeCard()
    const link = screen.getByRole('link', { name: new RegExp(episode.title, 'i') })
    expect(link).toHaveAttribute('href', `/episodes/${episode.slug}`)
  })

  it('shows the thumbnail image', () => {
    renderEpisodeCard()
    const img = screen.getByRole('img')
    expect(img).toHaveAttribute('src', episode.thumbnail)
  })

  it('wraps card content in a Link for hover-friendly interaction', () => {
    renderEpisodeCard()
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThanOrEqual(1)
    const cardLink = links.find(link => link.getAttribute('href') === `/episodes/${episode.slug}`)
    expect(cardLink).toBeInTheDocument()
  })
})
