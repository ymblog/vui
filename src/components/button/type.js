import PropTypes from '../util/types'
export default () => ({
    prefixCls: PropTypes.string.def('ui-bnt'),
    type: PropTypes.oneOf(['primary', 'default','text']).def('default'),
    size: PropTypes.oneOf(['small', 'large', 'default']).def('default'),
    block: PropTypes.bool,
    loading:PropTypes.bool
    // htmlType: PropTypes.oneOf(['button', 'submit', 'reset']).def('button'),
    // icon: PropTypes.string,
    // shape: PropTypes.oneOf(['circle', 'circle-outline']),
   
    // loading: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    // disabled: PropTypes.bool,
    // ghost: PropTypes.bool,
    
});
