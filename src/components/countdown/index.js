import uCountdown from './countdown'

uCountdown.install = function(Vue){
    Vue.component(uCountdown.name,uCountdown)

}
export default uCountdown;