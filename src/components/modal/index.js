import uModal from './modal';

uModal.install = function(Vue) {
  Vue.component(uModal.name, uModal);
};
export default uModal;
