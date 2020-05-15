export default {
    name: "USelectItem",
    inject: ['select'],
    props: {
        value: {
            type: [Object, String, Number],
            default: () => {
                return ''
            }
        },
        label: {
            type: [Object, String, Number],
            default: () => {
                return ''
            }
        }
    },
  
    computed: {
        conditions() {

            let str = "", val = JSON.stringify(this.select.inputValue).toUpperCase().replace(/"/g, "");
            if (this.$el) {
                str = (this.$el.outerText).toUpperCase();
               
                return str.indexOf(val) > -1;
            }
            return true;

        }
    },
    methods: {
        handleClick() {

            const { value, $slots, label } = this;
            let str = $slots.default.find(item => item.text !== undefined)
            this.dispatch('USelect', 'on-select-selected', {
                label: label === "" ? (str.text).replace(/\s*/g, "") : label,
                value: value
            });
            this.$emit('click')
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
        }
    },
    render() {
        const { $slots, $listeners, handleClick, conditions } = this;
        const Prop = {
            on: {
                ...$listeners,
                click: handleClick
            }
        }

        return (<li {...Prop} v-show={conditions}>{$slots.default}</li>)
    }
}