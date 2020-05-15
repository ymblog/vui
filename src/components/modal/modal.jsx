import "./style"

export default {
    name: 'UModal',
    props: {
        height: {
            type: [Number, String],
            default: () => {
                return 'auto';
            }
        },
        width: {
            type: [Number, String],
            default: () => {
                return 500;
            }
        },
        value:{
            type:[Boolean,String],
            default:()=>{
                return false;
            }
        }
    },
  
    methods: {
        closed(e) {
             if(e.toElement.className==='ui-modal'){
               this.$emit('input',false);
            }
        }
    },
    render() {
        const { $slots, $listeners, closed,width,height} = this;
        let Props = {
            on: {
                ...$listeners,
                mousedown: closed,
            },
        }
        let itemProps = {
            style:{
                width:`${width}px`,
                height:`${height}${height==='auto'?'':'px'}`
            },
            
        }
        return this.value?<transition name="ui-modal-fade" ><div class="ui-modal" {...Props} >
            <div {...itemProps}  class="ui-modal-context" >{$slots.default}</div>
        </div></transition>:'';
    }
}


