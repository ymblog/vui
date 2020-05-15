import uSelectItem from './select-item';
import imgUrl from './common_icon_illustrations_data.png';
export default {
  name: 'USelect',
  Item: uSelectItem,
  provide() {
    return { select: this };
  },
  props: {
    prefixCls: {
      default: 'ui-select',
      type: String,
    },
    value: {

      default: '',
    },
  },
  data() {
    return {
      label: '',
      isShow: false,
      inputValue: '',
      linkage: false,
      is: false,
    };
  },
  watch: {
    value(val) {
   
      this.initLable()
    },
  },

  mounted() {
    this.initLable();

    this.$on('on-select-selected', this.onOptionClick);
    this.bodyListener = () => {
      this.inputValue = '';
      this.isShow = false;
    };
    document.body.addEventListener('click', this.bodyListener, false);
  },
  beforeDestroy() {
    document.body.removeEventListener('click', this.bodyListener);
  },
  methods: {
    initLable() {
      let { $slots,$attrs } = this;
    
      if ($slots.default && (this.label === '' ||$attrs['linkage']==='')) {
        let arr = $slots.default, obj = arr.find(element => element.componentOptions.propsData.value === this.value);
        if(obj){
          this.label = obj.componentOptions.propsData.label;
        }
        
      }
    },
    selectContainer() {
      const { prefixCls, $attrs } = this;
      let bol = $attrs['seach'] === undefined ? false : true;
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-seach`]: bol,
      };
    },
    handleInput(e) {
      this.$emit('input', e.target.value);
    },
    handleClick(e) {
      this.inputValue = '';
      this.isShow = !this.isShow;
      e.stopPropagation();
    },
    renderInput() {
      const { $attrs, label, handleClick, $listeners, handleInput } = this;

      const atters = {
        readonly: $attrs['readonly'] === undefined ? '' : 'readonly',
        value: label,
      };
      const PropInput = {
        attrs: {
          ...$attrs,
          ...atters,
        },
      };
      let Prop = {};
      if($attrs.disabled === undefined || $attrs.disabled === false){
        Prop = {
          on: {
            ...$listeners,
            click: handleClick,
            input: handleInput,
          },
  
        };
      }
      return (
        <p {...Prop}>
          <input {...PropInput} />
          <i class="iconfont iconcommon_form_icon_arrow"></i>
        </p>
      );
    },
    onOptionClick(obj) {
      this.inputValue = '';
      this.label = obj.label;
      this.$emit('input', obj.value);
      this.isShow = false;
    },
    renderSeach() {
      const Prop = {
        on: {
          click: e => {
            e.stopPropagation();
          },
        },
        class: 'seachInput',
      };
      return (
        <div {...Prop}>
          <i class="iconcommon_icon_search iconfont"></i>
          <input v-model={this.inputValue} />
        </div>
      );
    },
    renderBox() {
      const { prefixCls, $slots, $attrs, renderSeach } = this;
      const PropBox = {
        class: {
          [`${prefixCls}-box`]: true,
        },
      };
      if ($slots && $slots.default) {
        this.is = $slots.default.find(element => {
          if (element && element.componentInstance) {
            return element.componentInstance.conditions === true;
          }
        });
      }
    
      let bol = $attrs['seach'] === undefined ? false : true;
      return (
        <div {...PropBox}>
          {bol ? renderSeach() : ''}
          <ul v-show={this.is}>{$slots.default}</ul>
          <div class="noData" v-show={!this.is}>
            <img src={imgUrl} />
            <p>暂无记录</p>
          </div>
        </div>
      );
    },
  },
  render() {
    const { selectContainer, renderInput, renderBox, isShow } = this;

    const PropSelect = {
      class: selectContainer(),
    };
    return (
      <div {...PropSelect} class={isShow ? 'isShow' : ''}>
        {renderInput()}
        {renderBox()}
      </div>
    );
  },
};
