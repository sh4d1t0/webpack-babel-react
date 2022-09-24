import { cleanup, render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  afterEach(cleanup)

  it('render hello react', () => {
    render(<App />)
    const textElement = screen.getByText(/hello react/i)
    expect(textElement).toBeInTheDocument()
  })
})
