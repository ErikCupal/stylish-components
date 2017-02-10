/* Logic copied from ReactDOMUnknownPropertyHook */
const reactProps = [
  'children',
  'dangerouslySetInnerHTML',
  'key',
  'ref',
  'autoFocus',
  'defaultValue',
  'valueLink',
  'defaultChecked',
  'checkedLink',
  'innerHTML',
  'suppressContentEditableWarning',
  'onFocusIn',
  'onFocusOut',
  'className',
  /* List copied from https://facebook.github.io/react/docs/events.html */
  'onCopy',
  'onCut',
  'onPaste',
  'onCompositionEnd',
  'onCompositionStart',
  'onCompositionUpdate',
  'onKeyDown',
  'onKeyPress',
  'onKeyUp',
  'onFocus',
  'onBlur',
  'onChange',
  'onInput',
  'onSubmit',
  'onClick',
  'onContextMenu',
  'onDoubleClick',
  'onDrag',
  'onDragEnd',
  'onDragEnter',
  'onDragExit',
  'onDragLeave',
  'onDragOver',
  'onDragStart',
  'onDrop',
  'onMouseDown',
  'onMouseEnter',
  'onMouseLeave',
  'onMouseMove',
  'onMouseOut',
  'onMouseOver',
  'onMouseUp',
  'onSelect',
  'onTouchCancel',
  'onTouchEnd',
  'onTouchMove',
  'onTouchStart',
  'onScroll',
  'onWheel',
  'onAbort',
  'onCanPlay',
  'onCanPlayThrough',
  'onDurationChange',
  'onEmptied',
  'onEncrypted',
  'onEnded',
  'onError',
  'onLoadedData',
  'onLoadedMetadata',
  'onLoadStart',
  'onPause',
  'onPlay',
  'onPlaying',
  'onProgress',
  'onRateChange',
  'onSeeked',
  'onSeeking',
  'onStalled',
  'onSuspend',
  'onTimeUpdate',
  'onVolumeChange',
  'onWaiting',
  'onLoad',
  'onAnimationStart',
  'onAnimationEnd',
  'onAnimationIteration',
  'onTransitionEnd',

  'onCopyCapture',
  'onCutCapture',
  'onPasteCapture',
  'onCompositionEndCapture',
  'onCompositionStartCapture',
  'onCompositionUpdateCapture',
  'onKeyDownCapture',
  'onKeyPressCapture',
  'onKeyUpCapture',
  'onFocusCapture',
  'onBlurCapture',
  'onChangeCapture',
  'onInputCapture',
  'onSubmitCapture',
  'onClickCapture',
  'onContextMenuCapture',
  'onDoubleClickCapture',
  'onDragCapture',
  'onDragEndCapture',
  'onDragEnterCapture',
  'onDragExitCapture',
  'onDragLeaveCapture',
  'onDragOverCapture',
  'onDragStartCapture',
  'onDropCapture',
  'onMouseDownCapture',
  'onMouseEnterCapture',
  'onMouseLeaveCapture',
  'onMouseMoveCapture',
  'onMouseOutCapture',
  'onMouseOverCapture',
  'onMouseUpCapture',
  'onSelectCapture',
  'onTouchCancelCapture',
  'onTouchEndCapture',
  'onTouchMoveCapture',
  'onTouchStartCapture',
  'onScrollCapture',
  'onWheelCapture',
  'onAbortCapture',
  'onCanPlayCapture',
  'onCanPlayThroughCapture',
  'onDurationChangeCapture',
  'onEmptiedCapture',
  'onEncryptedCapture',
  'onEndedCapture',
  'onErrorCapture',
  'onLoadedDataCapture',
  'onLoadedMetadataCapture',
  'onLoadStartCapture',
  'onPauseCapture',
  'onPlayCapture',
  'onPlayingCapture',
  'onProgressCapture',
  'onRateChangeCapture',
  'onSeekedCapture',
  'onSeekingCapture',
  'onStalledCapture',
  'onSuspendCapture',
  'onTimeUpdateCapture',
  'onVolumeChangeCapture',
  'onWaitingCapture',
  'onLoadCapture',
  'onAnimationStartCapture',
  'onAnimationEndCapture',
  'onAnimationIterationCapture',
  'onTransitionEndCapture',
]

/* From HTMLDOMPropertyConfig */
const htmlProps = [
  /**
   * Standard Properties
   */
  'accept',
  'acceptCharset',
  'accessKey',
  'action',
  'allowFullScreen',
  'allowTransparency',
  'alt',
  // specifies target context for links with `preload` type
  'as',
  'async',
  'autoComplete',
  // autoFocus is polyfilled/normalized by AutoFocusUtils
  // autoFocus: true,
  'autoPlay',
  'capture',
  'cellPadding',
  'cellSpacing',
  'charSet',
  'challenge',
  'checked',
  'cite',
  'classID',
  'className',
  'cols',
  'colSpan',
  'content',
  'contentEditable',
  'contextMenu',
  'controls',
  'coords',
  'crossOrigin',
  'data', // For `<object />` acts as `src`.
  'dateTime',
  'default',
  'defer',
  'dir',
  'disabled',
  'download',
  'draggable',
  'encType',
  'form',
  'formAction',
  'formEncType',
  'formMethod',
  'formNoValidate',
  'formTarget',
  'frameBorder',
  'headers',
  'height',
  'hidden',
  'high',
  'href',
  'hrefLang',
  'htmlFor',
  'httpEquiv',
  'icon',
  'id',
  'inputMode',
  'integrity',
  'is',
  'keyParams',
  'keyType',
  'kind',
  'label',
  'lang',
  'list',
  'loop',
  'low',
  'manifest',
  'marginHeight',
  'marginWidth',
  'max',
  'maxLength',
  'media',
  'mediaGroup',
  'method',
  'min',
  'minLength',
  // Caution; `option.selected` is not updated if `select.multiple` is
  // disabled with `removeAttribute`.
  'multiple',
  'muted',
  'name',
  'nonce',
  'noValidate',
  'open',
  'optimum',
  'pattern',
  'placeholder',
  'playsInline',
  'poster',
  'preload',
  'profile',
  'radioGroup',
  'readOnly',
  'referrerPolicy',
  'rel',
  'required',
  'reversed',
  'role',
  'rows',
  'rowSpan',
  'sandbox',
  'scope',
  'scoped',
  'scrolling',
  'seamless',
  'selected',
  'shape',
  'size',
  'sizes',
  'span',
  'spellCheck',
  'src',
  'srcDoc',
  'srcLang',
  'srcSet',
  'start',
  'step',
  'style',
  'summary',
  'tabIndex',
  'target',
  'title',
  // Setting .type throws on non-<input> tags
  'type',
  'useMap',
  'value',
  'width',
  'wmode',
  'wrap',

  /**
   * RDFa Properties
   */
  'about',
  'datatype',
  'inlist',
  'prefix',
  // property is also supported for OpenGraph in meta tags.
  'property',
  'resource',
  'typeof',
  'vocab',

  /**
   * Non-standard Properties
   */
  // autoCapitalize and autoCorrect are supported in Mobile Safari for
  // keyboard hints.
  'autoCapitalize',
  'autoCorrect',
  // autoSave allows WebKit/Blink to persist values of input fields on page reloads
  'autoSave',
  // color is for Safari mask-icon link
  'color',
  // itemProp, itemScope, itemType are for
  // Microdata support. See http://schema.org/docs/gs.html
  'itemProp',
  'itemScope',
  'itemType',
  // itemID and itemRef are for Microdata support as well but
  // only specified in the WHATWG spec document. See
  // https://html.spec.whatwg.org/multipage/microdata.html#microdata-dom-api
  'itemID',
  'itemRef',
  // results show looking glass icon and recent searches on input
  // search fields in WebKit/Blink
  'results',
  // IE-only attribute that specifies security restrictions on an iframe
  // as an alternative to the sandbox attribute on IE<10
  'security'
]

const isValidAttribute = ([name]: [string, any]) => reactProps.includes(name) || htmlProps.includes(name)

export default isValidAttribute