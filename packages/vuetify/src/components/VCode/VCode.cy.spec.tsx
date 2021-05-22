/// <reference types="../../../types/cypress" />

import { VCode } from './index'
import { generate } from '@/../cypress/templates'

// TODO: generate these from types
const props = {}
const stories = {
  'Basic Example': <VCode>console.log('hello world!')</VCode>,
}

// Actual tests
describe('VCode', () => {
  it('renders', () => {
    cy.mount(() => <VCode>console.log('hello world!')</VCode>)
  })
})

// Useful to preview all of the variants and pre-made examples
describe('Showcase', { viewportHeight: 1000, viewportWidth: 1000 }, () => {
  generate({ stories, props, component: VCode as unknown as JSX.Element })
})
