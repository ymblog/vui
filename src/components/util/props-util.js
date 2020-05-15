const getComponentFromProp = (instance, prop, options = instance, execute = true) => {
  if (instance.$createElement) {
    const h = instance.$createElement;
    const temp = instance[prop];
    if (temp !== undefined) {
      return typeof temp === 'function' && execute ? temp(h, options) : temp;
    }
    return (
      instance.$slots[prop] ||
      (instance.$scopedSlots[prop] && execute && instance.$scopedSlots[prop](options)) ||
      instance.$scopedSlots[prop] ||
      undefined
    );
  } else {
    const h = instance.context.$createElement;
    const temp = getPropsData(instance)[prop];
    if (temp !== undefined) {
      return typeof temp === 'function' && execute ? temp(h, options) : temp;
    }
    const slotsProp = [];
    const componentOptions = instance.componentOptions || {};
    (componentOptions.children || []).forEach(child => {
      if (child.data && child.data.slot === prop) {
        if (child.tag === 'template') {
          slotsProp.push(child.children);
        } else {
          slotsProp.push(child);
        }
      }
    });
    return slotsProp.length ? slotsProp : undefined;
  }
};
const getPropsData = ele => {
  let componentOptions = ele.componentOptions;
  if (ele.$vnode) {
    componentOptions = ele.$vnode.componentOptions;
  }
  return componentOptions ? componentOptions.propsData || {} : {};
};
const getAllChildren = ele => {
  let componentOptions = ele.componentOptions || {};
  if (ele.$vnode) {
    componentOptions = ele.$vnode.componentOptions || {};
  }
  return ele.children || componentOptions.children || [];
};

const getAttrs = ele => {
  let data = ele.data;
  if (ele.$vnode) {
    data = ele.$vnode.data;
  }
  return data ? data.attrs || {} : {};
};
const filterProps = (props, propsData = {}) => {
  const res = {};
  Object.keys(props).forEach(k => {
    if (k in propsData || props[k] !== undefined) {
      res[k] = props[k];
    }
  });
  return res;
};
const getOptionProps = instance => {
  if (instance.componentOptions) {
    const componentOptions = instance.componentOptions;
    const { propsData = {}, Ctor = {} } = componentOptions;
    const props = (Ctor.options || {}).props || {};
    const res = {};
    for (const [k, v] of Object.entries(props)) {
      const def = v.default;
      if (def !== undefined) {
        res[k] =
          typeof def === 'function' && getType(v.type) !== 'Function' ? def.call(instance) : def;
      }
    }
    return { ...res, ...propsData };
  }
  const { $options = {}, $props = {} } = instance;
  return filterProps($props, $options.propsData);
};
const hasProp = (instance, prop) => {
  console.log(instance.$options.propsData, prop)
  const $options = instance.$options || {};
  const propsData = $options.propsData || {};
  return prop in propsData;
};
const initDefaultProps = (propTypes, defaultProps) => {
  Object.keys(defaultProps).forEach(k => {
    if (propTypes[k]) {
      propTypes[k].def && (propTypes[k] = propTypes[k].def(defaultProps[k]));
    } else {
      throw new Error(`not have ${k} prop`);
    }
  });
  return propTypes;
};
export {
  getComponentFromProp,
  getPropsData,
  getAllChildren,
  hasProp,
  initDefaultProps,
  getOptionProps,
  getAttrs,
  filterProps
};
