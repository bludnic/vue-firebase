import { mount } from '@vue/test-utils'
import SigninForm from '~/components/SigninForm'

describe('SigninForm.vue', () => {
  const wrapper = mount(SigninForm)

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<button>Sign in</button>')
  })
})
