import { filterEmpty } from '../util/props';
import buttonTypes from './type';

const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;

const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
const props = buttonTypes();
export default {
  name: 'UButton',
  inheritAttrs: true,
  props,
  data() {
    return {
      sizeMap: {
        large: 'lg',
        small: 'sm',
      },
     
    };
  },
  computed: {
    classes() {
      const { prefixCls, type, sizeMap, size, block } = this;
      const sizeCls = sizeMap[size] || '';
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-${type}`]: type,
        [`${prefixCls}-${sizeCls}`]: sizeCls,
        [`${prefixCls}-block`]: block,
      };
    },
  },
  methods: {
    insertSpace(child, needInserted) {
      const space = needInserted ? '' : '';
      if (typeof child.text === 'string') {
        let text = child.text.trim();
        if (isTwoCNChar(text)) {
          text = text.split('').join(space);
        }
        return <span>{text}</span>;
      }
      return child;
    },
    isNeedInserted() {
      const { icon, $slots } = this;
      return $slots.default && $slots.default.length === 1 && !icon;
    },
    handleClick(event) {
      this.$emit('click', event);
    },
    renderLoading(){
      return (<i class="iconfont iconjiazai"></i>)
    }
  },
  render() {
    const { $slots, handleClick, $listeners, classes,loading,renderLoading } = this;
    const children = filterEmpty($slots.default);
    const kisd = children.map(child => this.insertSpace(child, this.isNeedInserted()));
    const buttonProps = {
      class: classes,
      on: {
        ...$listeners,
        click: handleClick,
      },
    };
    return <button {...buttonProps} class={loading?'wait':''}>{loading?renderLoading():kisd}</button>;
  },
};
