/// <reference types="react" />
import React from 'react';
import { types } from 'typestyle';
export declare type CSS = types.NestedCSSProperties;
export declare type Props<P, H> = P & H;
export declare type Styler<P, H> = (params: Props<P, H>) => CSS[];
export declare type HtmlProps<P, H> = Props<P, React.HTMLProps<H>>;
export declare type HtmlStyler<P, H> = (params: HtmlProps<P, H>) => CSS[];
export declare const factory: <H>(tag: string) => <P>(...objects: (types.NestedCSSProperties[] | HtmlStyler<P, H>)[]) => (props: Props<P, React.HTMLProps<H>>) => React.DOMElement<{} & P & React.HTMLProps<H> & {
    className: string;
}, Element>;
export declare class Helper {
    static styled<H>(type: React.ComponentClass<H>): <P>(...objects: (Styler<P, H> | CSS[])[]) => (props: Props<P, H> & React.Props<H>) => React.ReactElement<H>;
    static styled<H>(type: React.StatelessComponent<H>): <P>(...objects: (Styler<P, H> | CSS[])[]) => (props: Props<P, H> & React.Props<H>) => React.SFCElement<H>;
}
export declare const extend: typeof Helper.styled;
