import uTooltip from './tooltip';

uTooltip.install = function(Vue) {
  Vue.component(uTooltip.name, uTooltip);
};
export default uTooltip;
