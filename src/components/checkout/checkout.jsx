import './style/index';
export default {
    name: 'UCheckout',
    props: {
        countdownCls: {
            type: String,
            default: 'ui-checkout ',
          },
        value: {
            type: Boolean,
            default: () => false
        }
    },
    methods:{
        className() {
            const { value } = this;
            return {
              [`iconfont`]: true,
              [`icondeal_icon_cb_n`]: !value,
              [`icondeal_icon_cb_s`]: value,
              ['ui-checkout-active']: value
            };
          },
          handleClcik(){
              this.$emit('input',!this.value);
          }
    },
    render() {
        const {  className, handleClcik ,countdownCls ,$slots} = this;
        const Prop = {
            class: className(),
            on: {
                click: handleClcik,
            },
        };
        return (<div class={countdownCls}>
            <i {...Prop}></i> <span>{$slots.default}</span>
        </div>)
    }
}