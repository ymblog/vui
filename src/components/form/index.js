import uForm from './form';
import uFormItem from './formItem';
uForm.uFormItem = uFormItem;

uForm.install = function(Vue){
  Vue.component(uForm.name, uForm)
}
export default uForm;
