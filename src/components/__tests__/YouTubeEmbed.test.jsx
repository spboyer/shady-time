import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import YouTubeEmbed from '../YouTubeEmbed'

describe('YouTubeEmbed', () => {
  it('renders iframe when url is provided', () => {
    render(<YouTubeEmbed url="https://www.youtube.com/embed/dQw4w9WgXcQ" />)
    const iframe = screen.getByTitle(/youtube/i)
    expect(iframe).toBeInTheDocument()
    expect(iframe.tagName).toBe('IFRAME')
    expect(iframe).toHaveAttribute('src', 'https://www.youtube.com/embed/dQw4w9WgXcQ')
  })

  it('iframe has allowfullscreen attribute', () => {
    render(<YouTubeEmbed url="https://www.youtube.com/embed/dQw4w9WgXcQ" />)
    const iframe = screen.getByTitle(/youtube/i)
    expect(iframe).toHaveAttribute('allowfullscreen')
  })

  it('iframe has title attribute for accessibility', () => {
    render(<YouTubeEmbed url="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Episode video" />)
    const iframe = screen.getByTitle('Episode video')
    expect(iframe).toBeInTheDocument()
  })

  it('renders placeholder when url is empty', () => {
    const { container } = render(<YouTubeEmbed url="" />)
    const iframe = container.querySelector('iframe')
    expect(iframe).toBeNull()
  })

  it('renders placeholder when url is null', () => {
    const { container } = render(<YouTubeEmbed url={null} />)
    const iframe = container.querySelector('iframe')
    expect(iframe).toBeNull()
  })

  it('maintains 16:9 aspect ratio container', () => {
    const { container } = render(<YouTubeEmbed url="https://www.youtube.com/embed/dQw4w9WgXcQ" />)
    const wrapper = container.firstChild
    expect(wrapper.className).toMatch(/aspect-video|aspect-\[16\/9\]/)
  })
})
