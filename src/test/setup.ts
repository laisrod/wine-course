import '@testing-library/jest-dom'

// IntersectionObserver is not available in jsdom
class IntersectionObserverStub {
  observe()    {}
  unobserve()  {}
  disconnect() {}
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  value: IntersectionObserverStub,
})
