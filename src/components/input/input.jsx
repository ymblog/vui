// import classNames from 'classnames';
import './style/index';
import omit from 'omit.js';
import { isIE, isIE9 } from '../util/env';
// import { getComponentFromProp } from '../util/props-util'
import PropTypes from '../util/types';
export default {
  name: 'UInput',
  inheritAttrs: true,
  props: {
    prefixCls: {
      default: 'ui-input',
      type: String,
    },
    size: {
      validator(value) {
        return ['small', 'large', 'default'].includes(value);
      },
    },
    bottom: {
      type:[Boolean,String],
      default: false,
    },
    addonBefore: PropTypes.any,
    addonAfter: PropTypes.any,
  },
  methods: {
    inputClassName() {
      const { prefixCls, size, disabled, bottom } = this.$props;
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-sm`]: size === 'small',
        [`${prefixCls}-lg`]: size === 'large',
        [`${prefixCls}-disabled`]: disabled,
        [`${prefixCls}-bottom`]: bottom != false,
      };
    },
    handleKeyDown(e) {
      if (e.keyCode === 13) {
        this.$emit('pressEnter', e);
      }
      this.$emit('keydown', e);
    },
    handleChange(e) {
      if (isIE && !isIE9) {
        return;
      }
      this.$emit('change', e.target.value);
      this.$emit('input', e.target.value);
    },
    focus() {
      this.$refs.input.focus();
    },

    blur() {
      this.$refs.input.blur();
    },
    select() {
      this.$refs.input.select();
    },
    // renderLabel(children) {
    //     const props = this.$props;
    //     let addonAfter = getComponentFromProp(this, 'addonAfter');
    //     let addonBefore = getComponentFromProp(this, 'addonBefore');

    //     if (!addonAfter && !addonBefore) {
    //         return children;
    //     }
    //     const wrapperClassName = `${props.prefixCls}-group`;
    //     const addonBeforeClassName = `${wrapperClassName}-addonBefore`;
    //     const addonAfterClassName = `${wrapperClassName}-addonAfter`;
    //     addonBefore = addonBefore ? <span class={addonBeforeClassName}>{addonBefore}</span> : null;
    //     addonAfter = addonAfter ? <span class={addonAfterClassName}>{addonAfter}</span> : null;
    //     const groupClassName = classNames(`${props.prefixCls}-group-wrapper`, {
    //         [`${props.prefixCls}-group-wrapper-sm`]: props.size === 'small',
    //         [`${props.prefixCls}-group-wrapper-lg`]: props.size === 'large',
    //     });

    //     return (
    //         <span class={groupClassName}>
    //             {addonBefore}
    //             {children}
    //             {addonAfter}
    //         </span>
    //     );
    // },
    renderRear() {},
    renderInput() {
      const otherProps = omit(this.$props, ['prefixCls', 'addonBefore', 'addonAfter', 'genre']);

      const { inputClassName, handleKeyDown, handleChange, $listeners } = this;

      const inputProps = {
        on: {
          ...$listeners,
          keydown: handleKeyDown,
          input: handleChange,
        },
        attrs: { ...otherProps, ...this.$attrs },
        class: inputClassName(),
        ref: 'input',
      };
      return <input {...inputProps} />;
    },
  },
  render() {
    return this.renderInput();
  },
};
