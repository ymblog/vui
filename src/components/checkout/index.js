import uCheckout from './checkout'

uCheckout.install = function(Vue){
    Vue.component(uCheckout.name,uCheckout)

}
export default uCheckout;