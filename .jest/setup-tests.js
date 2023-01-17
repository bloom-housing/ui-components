import "@testing-library/jest-dom/extend-expect"
import { configure } from "@testing-library/dom"

// see: https://jestjs.io/docs/en/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
window.matchMedia = jest.fn().mockImplementation((query) => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }
})

window.IntersectionObserver = class {
  constructor(root, options) {
    // no-op
  }
  observe = jest.fn()
  disconnect = jest.fn()
}

configure({ testIdAttribute: "data-test-id" })
