import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { nextTick } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import routes from 'virtual:generated-pages'
import App from '../src/App.vue'

async function mountSite(path: string) {
  const router = createRouter({ history: createMemoryHistory(), routes })
  await router.push(path)
  const wrapper = mount(App, { global: { plugins: [router] } })
  return { router, wrapper }
}

describe('Vaim website', () => {
  it('updates the workout panel when a training goal is selected', async () => {
    const { wrapper } = await mountSite('/')
    const upperBody = wrapper.findAll('button').find(button => button.text() === 'Upper body')!

    await upperBody.trigger('click')

    expect(upperBody.attributes('aria-pressed')).toBe('true')
    expect(wrapper.get('#goal-preview').text()).toContain('Build your upper-body routine.')
    wrapper.unmount()
  })

  it('connects both existing legal pages and supports the terms alias', async () => {
    const { router, wrapper } = await mountSite('/privacy')

    expect(wrapper.get('h1').text()).toBe('Privacy Policy')
    const agreementLink = wrapper.get('nav[aria-label="Legal pages"] a[href="/users"]')
    await router.push(agreementLink.attributes('href')!)
    await nextTick()

    expect(router.currentRoute.value.path).toBe('/users')
    expect(wrapper.get('h1').text()).toBe('User Agreement')
    expect(wrapper.get('nav[aria-label="Legal pages"] [aria-current="page"]').text()).toBe('User Agreement')

    await router.push('/terms')
    await nextTick()
    expect(wrapper.get('h1').text()).toBe('User Agreement')
    wrapper.unmount()
  })
})
