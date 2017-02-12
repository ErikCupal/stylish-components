import React from 'react'
import { style, types } from 'typestyle'
import isValidAttribute from './isValidAttribute'

const filterObject = <T extends {}>(obj: T, fn: (pair: [string, {}]) => boolean): T => (
  Object.entries(obj)
    .filter((pair) => fn(pair))
    .reduce((accObj, [key, value]) => {
      accObj[key] = value
      return accObj
    }, {} as any)
)

export type CSS = types.NestedCSSProperties
// export type Element<P> = React.ReactElement<P>

export type Props<P, H> = P & H
export type Styler<P, H> = (params: Props<P, H>) => CSS[]

export type HtmlProps<P, H> = Props<P, React.HTMLProps<H>>
export type HtmlStyler<P, H> = (params: HtmlProps<P, H>) => CSS[]


export const factory = <H>(tag: string) => (
  <P>(...objects: (HtmlStyler<P, H> | CSS[])[]) => (
    (props: HtmlProps<P, H>) => {
      const cssObjects = objects.map(obj => {
        if (typeof obj === 'function') {
          const fn = obj
          return fn(props)
        }
        return obj
      }).reduce((acc, cur) => acc.concat(cur), [])

      const { className } = props
      const computedClassName = style(...cssObjects)
      const finalClassName = className ? `${className} + ${computedClassName}` : computedClassName

      const passedProps = Object.assign(
        {},
        filterObject(props, isValidAttribute),
        { className: finalClassName }
      )

      return React.createElement(tag, passedProps, props.children)
    }
  )
)

export class Helper {
  static styled<H>(type: React.ComponentClass<H>):
    <P>(...objects: (Styler<P, H> | CSS[])[]) => (props: Props<P, H> & React.Props<H>) => React.ReactElement<H>

  static styled<H>(type: React.StatelessComponent<H>):
    <P>(...objects: (Styler<P, H> | CSS[])[]) => (props: Props<P, H> & React.Props<H>) => React.SFCElement<H>

  static styled<H>(type: React.StatelessComponent<H> | React.ComponentClass<H>) {
    return <P>(...objects: (Styler<P, H> | CSS[])[]) => (
      (props: Props<P, H> & React.Props<H>) => {
        const cssObjects = objects.map(obj => {
          if (typeof obj === 'function') {
            const fn = obj
            return fn(props)
          }
          return obj
        }).reduce((acc: CSS[], cur) => {
          if (Array.isArray(cur)) {
            return acc.concat(cur)
          }
          acc.push(cur)
          return acc
        }, []) as CSS[]

        const { className } = (props as any)
        const computedClassName = style(...cssObjects)
        const finalClassName = className ? `${className} + ${computedClassName}` : computedClassName

        const passedProps = Object.assign(
          {},
          props,
          { className: finalClassName }
        )

        return React.createElement(type as any, passedProps, props.children) as any
      }
    )
  }
}

export const extend = Helper.styled