import Vue from 'vue'
import SignUp from '@/components/SignUp/index.vue'

describe('SignUp.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(SignUp)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.m-input[name=name]').textContent)
      .toEqual('')
  })
})
