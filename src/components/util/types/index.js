import isPlainObject from 'lodash/isPlainObject';
import { toType, getType, isFunction, validateType, isArray, warn } from './utils';

const VuePropTypes = {
  get any() {
    return toType('any', {
      type: null,
    });
  },
  get bool() {
    return toType('boolean', {
      type: Boolean,
    }).def(currentDefaults.bool);
  },

  get string() {
    return toType('string', {
      type: String,
    }).def(currentDefaults.string);
  },
  oneOf(arr) {
    if (!isArray(arr)) {
      throw new TypeError('[VueTypes error]: You must provide an array as argument');
    }

    const msg = `oneOf - value should be one of "${arr.join('", "')}"`;
    const allowedTypes = arr.reduce((ret, v) => {
      if (v !== null && v !== undefined) {
        ret.indexOf(v.constructor) === -1 && ret.push(v.constructor);
      }
      return ret;
    }, []);

    return toType('oneOf', {
      type: allowedTypes.length > 0 ? allowedTypes : null,
      validator(value) {
        const valid = arr.indexOf(value) !== -1;
        if (!valid) warn(msg);
        return valid;
      },
    });
  },
  oneOfType(arr) {
    if (!isArray(arr)) {
      throw new TypeError('[VueTypes error]: You must provide an array as argument');
    }

    let hasCustomValidators = false;

    const nativeChecks = arr.reduce((ret, type) => {
      if (isPlainObject(type)) {
        if (type._vueTypes_name === 'oneOf') {
          return ret.concat(type.type || []);
        }
        if (type.type && !isFunction(type.validator)) {
          if (isArray(type.type)) return ret.concat(type.type);
          ret.push(type.type);
        } else if (isFunction(type.validator)) {
          hasCustomValidators = true;
        }
        return ret;
      }
      ret.push(type);
      return ret;
    }, []);

    if (!hasCustomValidators) {
      // we got just native objects (ie: Array, Object)
      // delegate to Vue native prop check
      return toType('oneOfType', {
        type: nativeChecks,
      }).def(undefined);
    }

    const typesStr = arr
      .map(type => {
        if (type && isArray(type.type)) {
          return type.type.map(getType);
        }
        return getType(type);
      })
      .reduce((ret, type) => ret.concat(isArray(type) ? type : [type]), [])
      .join('", "');

    return this.custom(function oneOfType(value) {
      const valid = arr.some(type => {
        if (type._vueTypes_name === 'oneOf') {
          return type.type ? validateType(type.type, value, true) : true;
        }
        return validateType(type, value, true);
      });
      if (!valid) warn(`oneOfType - value type should be one of "${typesStr}"`);
      return valid;
    }).def(undefined);
  },
};

const typeDefaults = () => ({
  func: undefined,
  bool: undefined,
  string: undefined,
  number: undefined,
  array: undefined,
  object: undefined,
  integer: undefined,
});

let currentDefaults = typeDefaults();

Object.defineProperty(VuePropTypes, 'sensibleDefaults', {
  enumerable: false,
  set(value) {
    if (value === false) {
      currentDefaults = {};
    } else if (value === true) {
      currentDefaults = typeDefaults();
    } else if (isPlainObject(value)) {
      currentDefaults = value;
    }
  },
  get() {
    return currentDefaults;
  },
});
export default VuePropTypes;
