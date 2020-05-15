// import './assets/style/reset.css'
import './style.js';
import { default as uButton } from './button';
import { default as uCountdown } from './countdown';
import { default as uInput } from './input';

import { default as uForm } from './form';
import { default as uMessage } from './message';
import { default as uSelect } from './select';


import { default as uUpload } from './upload';

import { default as uModal } from './modal';
import { default as uTooltip } from './tooltip';

import { default as uTable } from './table';
import { default as uSwitch} from './switch';

import { default as uCheckout } from './checkout';
const components = {
  uButton,
  uCountdown,
  uInput,
  uForm,
  uFormItem: uForm.uFormItem,
  uMessage,
  uSelect,
  uSelectItem: uSelect.uSelectItem,
  uSwitch,
  uModal,
  uTooltip,
  uTable,
  uCheckout
};
const install = function (Vue) {
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key]);
  });

  Vue.prototype.$uMessage = uMessage;
};
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export { uButton, uCountdown, uInput, uForm, uSelect, uUpload, uModal, uTooltip, uTable, uCheckout, uSwitch};

export default {
  install
};
