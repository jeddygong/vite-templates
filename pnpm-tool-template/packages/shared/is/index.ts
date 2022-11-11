export const isClient = typeof window !== 'undefined';
const toString = Object.prototype.toString;
export const isArray = Array.isArray;
export const isMap = (val: unknown): val is Map<any, any> => toString.call(val) === '[object Map]';
export const isSet = (val: unknown): val is Set<any> => toString.call(val) === '[object Set]';

export const isDate = (val: unknown): val is Date => toString.call(val) === '[object Date]';
export const isBoolean = (val: unknown): val is boolean => typeof val === 'boolean';
export const isFunction = <T extends Function>(val: unknown): val is T => typeof val === 'function';
export const isNumber = (val: unknown): val is number => typeof val === 'number';
export const isString = (val: unknown): val is string => typeof val === 'string';
export const isSymbol = (val: unknown): val is symbol => typeof val === 'symbol';
export const isObject = (val: unknown): val is Record<any, any> => toString.call(val) === '[object Object]';

export const isPromise = <T = any>(val: unknown): val is Promise<T> => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};

export const isWindow = (val: unknown): val is Window => typeof window !== 'undefined' && toString.call(val) === '[object Window]';
export const isIOS = /* #__PURE__ */ isClient && window?.navigator?.userAgent && /iP(ad|hone|od)/.test(window.navigator.userAgent);
export const hasOwn = <T extends object, K extends keyof T>(val: T, key: K): key is K => Object.prototype.hasOwnProperty.call(val, key);
