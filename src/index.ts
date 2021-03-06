import { extend, factory } from './stylish'
import { sm, md, lg } from './media'
import { types, media } from 'typestyle'

export { extend, factory, sm, md, lg, }

export type StyleFunction = (...objects: types.NestedCSSProperties[]) => string

export let style: StyleFunction = undefined as any
export const init = (fn: StyleFunction) => { style = fn }

export type CSS = types.NestedCSSProperties

export const cssSelector = (selector: string) => (...objects: CSS[]) => {
  let prefinal = Object.assign({}, ...objects) as CSS
  const $nest = Object.assign({}, ...objects.map(obj => obj.$nest))
  prefinal.$nest = $nest as any
  const final = prefinal
  return {
    $nest: { [`${selector}`]: final }
  }
}

export const child = (...objects: CSS[]) => cssSelector('&>*')(...objects)
export const firstChild = (...objects: CSS[]) => cssSelector('&>*:first-child')(...objects)
export const lastChild = (...objects: CSS[]) => cssSelector('&>*:last-child')(...objects)

export const active = (...objects: CSS[]) => cssSelector('&:active')(...objects)
export const hover = (...objects: CSS[]) => cssSelector('&:hover')(...objects)
export const focus = (...objects: CSS[]) => cssSelector('&:focus')(...objects)
export const visited = (...objects: CSS[]) => cssSelector('&:visited')(...objects)

// Colors

export const aliceblue = 'aliceblue'
export const antiquewhite = 'antiquewhite'
export const aqua = 'aqua'
export const aquamarine = 'aquamarine'
export const azure = 'azure'
export const beige = 'beige'
export const bisque = 'bisque'
export const black = 'black'
export const blanchedalmond = 'blanchedalmond'
export const blue = 'blue'
export const blueviolet = 'blueviolet'
export const brown = 'brown'
export const burlywood = 'burlywood'
export const cadetblue = 'cadetblue'
export const chartreuse = 'chartreuse'
export const chocolate = 'chocolate'
export const coral = 'coral'
export const cornflowerblue = 'cornflowerblue'
export const cornsilk = 'cornsilk'
export const crimson = 'crimson'
export const cyan = 'cyan'
export const darkblue = 'darkblue'
export const darkcyan = 'darkcyan'
export const darkgoldenrod = 'darkgoldenrod'
export const darkgray = 'darkgray'
export const darkgreen = 'darkgreen'
export const darkgrey = 'darkgrey'
export const darkkhaki = 'darkkhaki'
export const darkmagenta = 'darkmagenta'
export const darkolivegreen = 'darkolivegreen'
export const darkorange = 'darkorange'
export const darkorchid = 'darkorchid'
export const darkred = 'darkred'
export const darksalmon = 'darksalmon'
export const darkseagreen = 'darkseagreen'
export const darkslateblue = 'darkslateblue'
export const darkslategray = 'darkslategray'
export const darkslategrey = 'darkslategrey'
export const darkturquoise = 'darkturquoise'
export const darkviolet = 'darkviolet'
export const deeppink = 'deeppink'
export const deepskyblue = 'deepskyblue'
export const dimgray = 'dimgray'
export const dimgrey = 'dimgrey'
export const dodgerblue = 'dodgerblue'
export const firebrick = 'firebrick'
export const floralwhite = 'floralwhite'
export const forestgreen = 'forestgreen'
export const fuchsia = 'fuchsia'
export const gainsboro = 'gainsboro'
export const ghostwhite = 'ghostwhite'
export const gold = 'gold'
export const goldenrod = 'goldenrod'
export const gray = 'gray'
export const green = 'green'
export const greenyellow = 'greenyellow'
export const grey = 'grey'
export const honeydew = 'honeydew'
export const hotpink = 'hotpink'
export const indianred = 'indianred'
export const indigo = 'indigo'
export const ivory = 'ivory'
export const khaki = 'khaki'
export const lavender = 'lavender'
export const lavenderblush = 'lavenderblush'
export const lawngreen = 'lawngreen'
export const lemonchiffon = 'lemonchiffon'
export const lightblue = 'lightblue'
export const lightcoral = 'lightcoral'
export const lightcyan = 'lightcyan'
export const lightgoldenrodyellow = 'lightgoldenrodyellow'
export const lightgray = 'lightgray'
export const lightgreen = 'lightgreen'
export const lightgrey = 'lightgrey'
export const lightpink = 'lightpink'
export const lightsalmon = 'lightsalmon'
export const lightseagreen = 'lightseagreen'
export const lightskyblue = 'lightskyblue'
export const lightslategray = 'lightslategray'
export const lightslategrey = 'lightslategrey'
export const lightsteelblue = 'lightsteelblue'
export const lightyellow = 'lightyellow'
export const lime = 'lime'
export const limegreen = 'limegreen'
export const linen = 'linen'
export const magenta = 'magenta'
export const maroon = 'maroon'
export const mediumaquamarine = 'mediumaquamarine'
export const mediumblue = 'mediumblue'
export const mediumorchid = 'mediumorchid'
export const mediumpurple = 'mediumpurple'
export const mediumseagreen = 'mediumseagreen'
export const mediumslateblue = 'mediumslateblue'
export const mediumspringgreen = 'mediumspringgreen'
export const mediumturquoise = 'mediumturquoise'
export const mediumvioletred = 'mediumvioletred'
export const midnightblue = 'midnightblue'
export const mintcream = 'mintcream'
export const mistyrose = 'mistyrose'
export const moccasin = 'moccasin'
export const navajowhite = 'navajowhite'
export const navy = 'navy'
export const oldlace = 'oldlace'
export const olive = 'olive'
export const olivedrab = 'olivedrab'
export const orange = 'orange'
export const orangered = 'orangered'
export const orchid = 'orchid'
export const palegoldenrod = 'palegoldenrod'
export const palegreen = 'palegreen'
export const paleturquoise = 'paleturquoise'
export const palevioletred = 'palevioletred'
export const papayawhip = 'papayawhip'
export const peachpuff = 'peachpuff'
export const peru = 'peru'
export const pink = 'pink'
export const plum = 'plum'
export const powderblue = 'powderblue'
export const purple = 'purple'
export const red = 'red'
export const rosybrown = 'rosybrown'
export const royalblue = 'royalblue'
export const saddlebrown = 'saddlebrown'
export const salmon = 'salmon'
export const sandybrown = 'sandybrown'
export const seagreen = 'seagreen'
export const seashell = 'seashell'
export const sienna = 'sienna'
export const silver = 'silver'
export const skyblue = 'skyblue'
export const slateblue = 'slateblue'
export const slategray = 'slategray'
export const slategrey = 'slategrey'
export const snow = 'snow'
export const springgreen = 'springgreen'
export const steelblue = 'steelblue'
export const tan = 'tan'
export const teal = 'teal'
export const thistle = 'thistle'
export const tomato = 'tomato'
export const turquoise = 'turquoise'
export const violet = 'violet'
export const wheat = 'wheat'
export const white = 'white'
export const whitesmoke = 'whitesmoke'
export const yellow = 'yellow'
export const yellowgreen = 'yellowgreen'

export const transparent = 'transparent'

// Styled

export const a = factory<HTMLAnchorElement>('a')
export const abbr = factory<HTMLElement>('abbr')
export const address = factory<HTMLElement>('address')
export const area = factory<HTMLAreaElement>('area')
export const article = factory<HTMLElement>('article')
export const aside = factory<HTMLElement>('aside')
export const audio = factory<HTMLAudioElement>('audio')
export const b = factory<HTMLElement>('b')
export const base = factory<HTMLBaseElement>('base')
export const bdi = factory<HTMLElement>('bdi')
export const bdo = factory<HTMLElement>('bdo')
export const big = factory<HTMLElement>('big')
export const blockquote = factory<HTMLElement>('blockquote')
export const body = factory<HTMLBodyElement>('body')
export const br = factory<HTMLBRElement>('br')
export const button = factory<HTMLButtonElement>('button')
export const canvas = factory<HTMLCanvasElement>('canvas')
export const caption = factory<HTMLElement>('caption')
export const cite = factory<HTMLElement>('cite')
export const code = factory<HTMLElement>('code')
export const col = factory<HTMLTableColElement>('col')
export const colgroup = factory<HTMLTableColElement>('colgroup')
export const data = factory<HTMLElement>('data')
export const datalist = factory<HTMLDataListElement>('datalist')
export const dd = factory<HTMLElement>('dd')
export const del = factory<HTMLElement>('del')
export const details = factory<HTMLElement>('details')
export const dfn = factory<HTMLElement>('dfn')
export const dialog = factory<HTMLElement>('dialog')
export const div = factory<HTMLDivElement>('div')
export const dl = factory<HTMLDListElement>('dl')
export const dt = factory<HTMLElement>('dt')
export const em = factory<HTMLElement>('em')
export const embed = factory<HTMLEmbedElement>('embed')
export const fieldset = factory<HTMLFieldSetElement>('fieldset')
export const figcaption = factory<HTMLElement>('figcaption')
export const figure = factory<HTMLElement>('figure')
export const footer = factory<HTMLElement>('footer')
export const form = factory<HTMLFormElement>('form')
export const h1 = factory<HTMLHeadingElement>('h1')
export const h2 = factory<HTMLHeadingElement>('h2')
export const h3 = factory<HTMLHeadingElement>('h3')
export const h4 = factory<HTMLHeadingElement>('h4')
export const h5 = factory<HTMLHeadingElement>('h5')
export const h6 = factory<HTMLHeadingElement>('h6')
export const head = factory<HTMLHeadElement>('head')
export const header = factory<HTMLElement>('header')
export const hgroup = factory<HTMLElement>('hgroup')
export const hr = factory<HTMLHRElement>('hr')
export const html = factory<HTMLHtmlElement>('html')
export const i = factory<HTMLElement>('i')
export const iframe = factory<HTMLIFrameElement>('iframe')
export const img = factory<HTMLImageElement>('img')
export const input = factory<HTMLInputElement>('input')
export const ins = factory<HTMLModElement>('ins')
export const kbd = factory<HTMLElement>('kbd')
export const keygen = factory<HTMLElement>('keygen')
export const label = factory<HTMLLabelElement>('label')
export const legend = factory<HTMLLegendElement>('legend')
export const li = factory<HTMLLIElement>('li')
export const link = factory<HTMLLinkElement>('link')
export const main = factory<HTMLElement>('main')
export const map = factory<HTMLMapElement>('map')
export const mark = factory<HTMLElement>('mark')
export const menu = factory<HTMLElement>('menu')
export const menuitem = factory<HTMLElement>('menuitem')
export const meta = factory<HTMLMetaElement>('meta')
export const meter = factory<HTMLElement>('meter')
export const nav = factory<HTMLElement>('nav')
export const noscript = factory<HTMLElement>('noscript')
export const object = factory<HTMLObjectElement>('object')
export const ol = factory<HTMLOListElement>('ol')
export const optgroup = factory<HTMLOptGroupElement>('optgroup')
export const option = factory<HTMLOptionElement>('option')
export const output = factory<HTMLElement>('output')
export const p = factory<HTMLParagraphElement>('p')
export const param = factory<HTMLParamElement>('param')
export const picture = factory<HTMLElement>('picture')
export const pre = factory<HTMLPreElement>('pre')
export const progress = factory<HTMLProgressElement>('progress')
export const q = factory<HTMLQuoteElement>('q')
export const rp = factory<HTMLElement>('rp')
export const rt = factory<HTMLElement>('rt')
export const ruby = factory<HTMLElement>('ruby')
export const s = factory<HTMLElement>('s')
export const samp = factory<HTMLElement>('samp')
export const script = factory<HTMLElement>('script')
export const section = factory<HTMLElement>('section')
export const select = factory<HTMLSelectElement>('select')
export const small = factory<HTMLElement>('small')
export const source = factory<HTMLSourceElement>('source')
export const span = factory<HTMLSpanElement>('span')
export const strong = factory<HTMLElement>('strong')
export const sub = factory<HTMLElement>('sub')
export const summary = factory<HTMLElement>('summary')
export const sup = factory<HTMLElement>('sup')
export const table = factory<HTMLTableElement>('table')
export const tbody = factory<HTMLTableSectionElement>('tbody')
export const td = factory<HTMLTableDataCellElement>('td')
export const textarea = factory<HTMLTextAreaElement>('textarea')
export const tfoot = factory<HTMLTableSectionElement>('tfoot')
export const th = factory<HTMLTableHeaderCellElement>('th')
export const thead = factory<HTMLTableSectionElement>('thead')
export const time = factory<HTMLElement>('time')
export const title = factory<HTMLTitleElement>('title')
export const tr = factory<HTMLTableRowElement>('tr')
export const track = factory<HTMLTrackElement>('track')
export const u = factory<HTMLElement>('u')
export const ul = factory<HTMLUListElement>('ul')
export const video = factory<HTMLVideoElement>('video')
export const wbr = factory<HTMLElement>('wbr')

export const debug = {
  backgroundColor: 'rgba(211, 211, 211, 0.75)'
}