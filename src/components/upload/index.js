import uploadwrap from './uploadwrap';
import upload from './upload';
/* istanbul ignore next */
upload.install = function(Vue) {
  Vue.component(upload.name, uPload);
  Vue.component(uploadwrap.name, uploadwrap)
};
export default upload;
