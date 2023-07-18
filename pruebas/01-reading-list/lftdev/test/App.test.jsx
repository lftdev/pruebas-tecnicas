import { cleanup, fireEvent, getAllByRole, getByLabelText, getByRole, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import App from '../src/App'
describe('App', () => {
  afterEach(cleanup)
  // ⚠️ Unnecessary tests will be left as a comment in order to leave them open for review.
  /* it('should render correctly;', () => render(<App />))
  it('should display a level 3 heading;', () => {
    render(<App />)
    screen.getByRole('heading', { level: 3 })
  })
  it('should display a level 3 heading with the text: "Sin libros en la lista de lectura";', () => {
    render(<App />)
    const h3 = screen.getByRole('heading', { level: 3 })
    expect(h3.innerHTML).toBe('Sin libros en la lista de lectura')
  })
  it('should display a level 1 heading;', () => {
    render(<App />)
    screen.getByRole('heading', { level: 1 })
  })
  it('should display a level 1 heading with the text: "13 libros disponibles";', () => {
    render(<App />)
    const h1 = screen.getByRole('heading', { level: 1 })
    expect(h1.innerHTML).toBe('13 libros disponibles')
  })
  it('should render a search form as a main child;', () => {
    render(<App />)
    const main = screen.getByRole('main')
    getByRole(main, 'search')
  }) */
  it('should display a label with the text: "Filtrar por páginas" inside search form;', () => {
    render(<App />)
    const form = screen.getByRole('search')
    getByLabelText(form, 'Filtrar por páginas')
  })
  it('should display a label with the text: "Filtrar por género" inside search form;', () => {
    render(<App />)
    const form = screen.getByRole('search')
    getByLabelText(form, 'Filtrar por género')
  })
  it('should render an ul as a main child;', () => {
    render(<App />)
    const main = screen.getByRole('main')
    getByRole(main, 'list')
  })
  it('should render li elements as ul children;', () => {
    render(<App />)
    const ul = screen.getByRole('list')
    getAllByRole(ul, 'listitem')
  })
  it('should display a book cover on each li;', () => {
    render(<App />)
    screen.getAllByRole('img')
  })
  it('should render a region aside when an img is clicked and reading list is empty;', async () => {
    render(<App />)
    const img = screen.getAllByRole('img')[0]
    fireEvent.click(img)
    await screen.findByRole('region')
  })
  it('should display a heading of level 2 as aside child with the text: "Lista de lectura";', async () => {
    render(<App />)
    fireEvent.click(screen.getAllByRole('img')[0])
    const aside = await screen.findByRole('region')
    expect(getByRole(aside, 'heading', { level: 2 }).innerHTML).toBe('Lista de lectura')
  })
})
