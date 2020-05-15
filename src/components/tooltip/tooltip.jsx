
export default {
  name: 'UTooltip',
  inheritAttrs: true,
  props:{
    prefixCls: {
      type: String,
      default: 'ui-tooltip',
    },
    placement:{
      type:String,
      default:'top-left'
    },
    content:{
      type:String,
      default:()=>{
        return ''
      }
    },
    width:{
      type:[String,Number],
      default:()=>{
        return 'auto'
      }
    }
  },
  methods:{
    classPopper(){
      const {prefixCls,placement,width}  =  this;
      return{
         [ `${prefixCls}-opper`]: true,
         [`${placement}`]:placement,
        [ `${prefixCls}-normal`]:width!=='auto'
      }
    },
    renderPopper(createElement){
      const {classPopper,prefixCls,content,width,$slots,slotsHtml} = this;
      const propsPopper = {
        class:classPopper()
      }
      return(<div {...propsPopper} style={`width:${width!=='auto'?width+`px`:''};`}>
         <div class={`${prefixCls}-box`}> {$slots.context?slotsHtml($slots.context,createElement):content}
          <span />
         </div>
      </div>) 
    },
    slotsHtml(data,createElement){
      return createElement('div',{

      },data)
    }
  },
  render(createElement){
    const { $slots,renderPopper } = this;

    return (<div class="ui-tooltip">
      {renderPopper(createElement)}
      <div class="ui-tooltip-gestures">{$slots.default}</div>
    </div>)
  }
};
