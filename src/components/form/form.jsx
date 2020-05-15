import './style';
import formItem from './formItem';

export default {
  name: 'UForm',
  Item: formItem,
  provide() {
    return { form: this };
  },
  props: {
    rules: {
      type: Object,
      default: () => {
        return;
      },
    },
    model: {
      type: Object,
      default: () => {
        return;
      },
    },
    poptip: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      fields: [],
    };
  },
  created() {
    this.$on('on-form-item-add', field => {
      if (field) this.fields.push(field);
      return false;
    });
    this.$on('on-form-item-remove', field => {
      if (field.prop) this.fields.splice(this.fields.indexOf(field), 1);

      return false;
    });
  },
  methods: {
    getAllChildren: ele => {
      let componentOptions = ele.componentOptions || {};
      if (ele.$vnode) {
        componentOptions = ele.$vnode.componentOptions || {};
      }
      return ele.children || componentOptions.children || [];
    },
    validate(callback) {
      return new Promise(resolve => {
        let valid = true;
        let count = 0;
        let index = 0;
        this.fields.forEach(field => {
          field.errClass = false;
          field.validate('', errors => {
            if (errors) {
              ++index;
              valid = false;
            }
            if (index === 1) {
              field.$el.getElementsByTagName('input')[0].focus();
            }
            if (++count === this.fields.length) {
              resolve(valid);
              if (typeof callback === 'function') {
                callback(valid);
              }
            }
          });
        });
      });
    },
    resetFields() {
      this.fields.forEach(field => {
        field.errClass = false;
        field.resetField();
      });
    },
  },
  render() {
    const { $slots } = this;
    return <form>{$slots.default}</form>;
  },
};
