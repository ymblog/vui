import './style';
import validateForm from 'async-validator';
import poptipWrap from './poptipWrap';
export default {
  name: 'UFormItem',
  inject: ['form'],
  props: {
    prefixCls: {
      type: String,
      default: 'ui-formItem',
    },
    label: {
      type: String,
      default: '',
    },
    labelCls: {
      type: String,
      default: 'ui-formItem-label',
    },
    prop: {
      type: String,
      default: '',
    },
    rule: {
      type: String,
      default: '',
    },
    labelType: {
      type: String,
      default: 'block',
    }
  },
  data() {
    return {
      validateState: '',
      validateMessage: '',
      errClass: '',
    };
  },
  computed: {
    fieldValue() {
      const model = this.form.model;
      if (!model || !this.prop) {
        return;
      }
      let path = this.prop;
      if (path.indexOf(':') !== -1) {
        path = path.replace(/:/, '.');
      }
      return this.getPropByPath(model, path).v;
    },
  },
  created() {},
  mounted() {
    if (this.prop) {
      this.dispatch('UForm', 'on-form-item-add', this);
      Object.defineProperty(this, 'initialValue', {
        value: this.fieldValue,
      });
    }
  },
  methods: {
    getPropByPath(obj, path) {
      let tempObj = obj;
      path = path.replace(/\[(\w+)\]/g, '.$1');
      path = path.replace(/^\./, '');
      let keyArr = path.split('.');
      let i = 0;
      for (let len = keyArr.length; i < len - 1; ++i) {
        let key = keyArr[i];
        if (key in tempObj) {
          tempObj = tempObj[key];
        } else {
          throw new Error('[iView warn]: please transfer a valid prop path to form item!');
        }
      }
      return {
        o: tempObj,
        k: keyArr[i],
        v: tempObj[keyArr[i]],
      };
    },
    dispatch(componentName, eventName, params) {
      let parent = this.$parent || this.$root;
      let name = parent.$options.name;

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;

        if (parent) {
          name = parent.$options.name;
        }
      }
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },

    getrules() {
      let formrules = this.form.rules;
      const selfrules = this.rules;
      formrules = formrules ? formrules[this.prop] : [];
      return [].concat(selfrules || formrules || []);
    },
    getFilteredRule(trigger) {
      const rules = this.getrules();
      return rules.filter(rule => !rule.trigger || rule.trigger.indexOf(trigger) !== -1);
    },
    validate(trigger, callback = function() {}) {
      let rules = this.getFilteredRule(trigger);
      if (!rules || rules.length === 0) {
        if (!this.required) {
          callback();
          return true;
        } else {
          rules = [{ required: true }];
        }
      }
      this.validateState = 'validating';
      let descriptor = {},
        model = {};
      descriptor[this.prop] = rules;
      // debugger;
      // console.log(this.form.model)
      const validator = new validateForm(descriptor);
      model[this.prop] = this.fieldValue;
      validator.validate(model, { firstFields: true }, errors => {
        this.validateState = !errors ? 'success' : 'error';
        this.validateMessage = errors ? errors[0].message : '';
        this.errClass = errors ? true : false;
        callback(this.validateMessage);
      });
    },
    resetField() {
      this.validateState = '';
      this.validateMessage = '';
      let model = this.form.model;
      let value = this.fieldValue;
      let path = this.prop;
      if (path.indexOf(':') !== -1) {
        path = path.replace(/:/, '.');
      }

      let prop = this.getPropByPath(model, path);
      if (Array.isArray(value)) {
        this.validateDisabled = true;
        prop.o[prop.k] = [].concat(this.initialValue);
      } else {
        this.validateDisabled = true;
        prop.o[prop.k] = this.initialValue;
      }
    },
    formItemClassName() {
      const { prefixCls } = this.$props;
      return {
        [`${prefixCls}`]: true,
      };
    },
    labelClassName() {
      const { labelCls } = this.$props;

      return {
        [`${labelCls}`]: true,
      };
    },
    boxClassName() {
      const { labelType } = this.$props;

      return {
        'ui-formItem-box': true,
        [`ui-formItem-${labelType}`]: true,
      };
    },
    renderlabel() {
      const { label } = this;
      const labelProps = {
        class: this.labelClassName(),
      };
      if (label) {
        return <label {...labelProps}>{label}</label>;
      }
    },
    renderPrompt() {
      const { validateState, validateMessage } = this;
      const poptip = this.form.poptip;
      const promptProps = {
        class: poptip ? 'ui-formItem-prompt-poptip' : 'ui-formItem-prompt',
      };
      const PoptipBox = poptip ?
                        <poptipWrap><p {...promptProps}>{validateMessage}</p></poptipWrap>
                        : <p {...promptProps}>{validateMessage}</p>
      return (
        <transition name="fade">
          {validateState === 'error' ?  PoptipBox : ''}
        </transition>
      );
    },
    renderBox() {
      const boxProps = {
        class: this.boxClassName(),
      };
      const { $slots, labelType } = this;
      return (
        <div {...boxProps}>
          {this.renderlabel() && labelType === 'location' ? '' : this.renderlabel()}
          {$slots.default}
          {this.renderlabel() && labelType === 'location' ? this.renderlabel() : ''}
        </div>
      );
    },
  },
  render() {
    const { formItemClassName, errClass } = this;
    const Props = {
      class: formItemClassName(),
    };
    return (
      <div {...Props} class={errClass ? 'ui-formItem-err' : ''}>
        {this.renderBox()}
        {this.renderPrompt()}
      </div>
    );
  },
};
