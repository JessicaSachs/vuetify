import { mount as cyMount } from '@cypress/vue'
import { createVuetify } from '../../src/entry-bundler'

Cypress.Commands.add('mount', (component, options) => {
  const vuetify = createVuetify()
  const defaultOptions = {
    global: {
      plugins: [vuetify],
    },
  }

  return cyMount(component, { ...defaultOptions, ...options })
})
