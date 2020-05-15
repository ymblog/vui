import uSelect from './select';
import uSelectItem from './select-item';

uSelect.uSelectItem = uSelectItem;
uSelect.install = function(Vue) {
  Vue.component(uSelect.name, uSelect);
  Vue.component(uSelect.Item.name, uSelect.Item);
};
export default uSelect;
