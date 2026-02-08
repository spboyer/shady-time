import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Layout from '../Layout'

function renderLayout(children = null) {
  return render(
    <BrowserRouter>
      <Layout>{children}</Layout>
    </BrowserRouter>
  )
}

describe('Layout', () => {
  it('renders without crashing', () => {
    renderLayout()
  })

  it('contains a <main> semantic landmark', () => {
    renderLayout()
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('renders children passed to it', () => {
    renderLayout(<p>Test child content</p>)
    expect(screen.getByText('Test child content')).toBeInTheDocument()
  })

  it('contains Header (nav) and Footer (contentinfo)', () => {
    renderLayout()
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
