declare module 'next/link' {
  import { Url } from 'url'

  export default class Link extends React.Component<{ href: string | Url }, {}> {}
}

declare module 'next/head' {
  import * as React from 'react'

  export default class Head extends React.Component<any, any> {}
}
