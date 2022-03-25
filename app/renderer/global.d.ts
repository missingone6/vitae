declare module '*.jpg' {
  const jpg: string;
  export default jpg;
}
declare module '*.png' {
  const png: string;
  export default png;
}

declare module '*.tsx' {
  const path: string
  export default path
}


declare module '*.js' {
  const path: string
  export default path
}

declare module 'store' {
  const path: any
  export default path
}


declare interface Window {
  createObjectURL: any
}



