// Import the mount() method from the test utils
// and the component you want to test
import { mount } from '@vue/test-utils'
import App from '../src/App.vue'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'

describe('App', () => {

    const localVue = createLocalVue()
    localVue.use(VueRouter)

    const $router = {
        path: '',
        push(arg) {
            this.path = arg.name;
        }
    }

    const wrapperRouter = shallowMount(App, {
        localVue
    })
    const wrapperPath = shallowMount(App, {
        stubs: ['RouterView'],
        mocks: {
            $router
        }
    })


    it('renders the correct markup', () => {
        expect(wrapperRouter.html()).toContain('<div id="app">')
    })

    it('contains RouterView element', () => {
        expect(wrapperRouter.contains('RouterView'))
    })

    it('should change token to correct value', () => {
        expect(wrapperRouter.vm.token).toBe('')
        wrapperRouter.vm.getToken('Success')
        expect(wrapperRouter.vm.token).toBe('Success')

    })
    it('should return {name: LogIn} to $router', () => {
        wrapperPath.vm.signOut()
        expect(wrapperPath.vm.$router.path).toBe('LogIn')
    })
})
