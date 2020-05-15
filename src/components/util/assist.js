import Vue from 'vue';
const isServer = Vue.prototype.$isServer;
// 判断参数是否是其中之一
export function oneOf(value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true;
    }
  }
  return false;
}
export const MutationObserver = isServer
  ? false
  : window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver || false;

// Find components downward
export function findComponentsDownward (context, componentName) {
  return context.$children.reduce((components, child) => {
      if (child.$options.name === componentName) components.push(child);
      const foundChilds = findComponentsDownward(child, componentName);
      return components.concat(foundChilds);
  }, []);
}
