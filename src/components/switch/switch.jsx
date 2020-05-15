import "./style";

export default {
	name: 'USwitch',
	props: {
		width:{
			type: [Number, String]
		},
		openText:{
			type: String,
			default:''
		},
		closeText:{
			type: String,
			default:''
		},
		prefixCls: {
			type: String,
			default: 'ui-switch'
    },
		value:{
			type:[Boolean],
			default:false
		},
		size: {
      validator(value) {
        return ['large'].includes(value);
      },
    },
	},
	methods:{
		setClass() {
			const { value, prefixCls, size} = this;
			return {
				[`checked`]:value === true,
				[`${prefixCls}`]: true,
				[`${prefixCls}-lg`]: size === 'large'
			};
		}
	},
	render() {
		const { width, height, isShowIcon, $listeners, value, handleClick, setClass} = this;
		let props = {
			class:setClass(),
			on:{
				click:() => {
					this.$emit("on-change");
				}
			}
		}
		if(width){
			props.style = {
				width:`${width}px`
			}
		}
		return (
			<div {...props}>
				<p class="switch-open">
					{
						this.openText 
						? this.openText
						: <i class="switch-icon iconpersonalcenter_icon_tick iconfont"></i>
					}
				</p>
				<p class="switch-close">
					{
						this.closeText 
						? this.closeText
						: <i class="switch-icon iconpersonalcenter_icon_fork iconfont"></i>
					}
				</p>
			</div>
		)
	}
}

