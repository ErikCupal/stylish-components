import React from 'react';
import { style } from 'typestyle';
import isValidAttribute from './isValidAttribute';
const filterObject = (obj, fn) => (Object.entries(obj)
    .filter((pair) => fn(pair))
    .reduce((accObj, [key, value]) => {
    accObj[key] = value;
    return accObj;
}, {}));
export const factory = (tag) => ((...objects) => ((props) => {
    const cssObjects = objects.map(obj => {
        if (typeof obj === 'function') {
            const fn = obj;
            return fn(props);
        }
        return obj;
    }).reduce((acc, cur) => acc.concat(cur), []);
    const { className } = props;
    const computedClassName = style(...cssObjects);
    const finalClassName = className ? `${className} + ${computedClassName}` : computedClassName;
    const passedProps = Object.assign({}, filterObject(props, isValidAttribute), props, { className: finalClassName });
    return React.createElement(tag, passedProps, props.children);
}));
export class Helper {
    static styled(type) {
        return (...objects) => ((props) => {
            const cssObjects = objects.map(obj => {
                if (typeof obj === 'function') {
                    const fn = obj;
                    return fn(props);
                }
                return obj;
            }).reduce((acc, cur) => {
                if (Array.isArray(cur)) {
                    return acc.concat(cur);
                }
                acc.push(cur);
                return acc;
            }, []);
            const { className } = props;
            const computedClassName = style(...cssObjects);
            const finalClassName = className ? `${className} + ${computedClassName}` : computedClassName;
            const passedProps = Object.assign({}, props, { className: finalClassName });
            return React.createElement(type, passedProps, props.children);
        });
    }
}
export const extend = Helper.styled;
