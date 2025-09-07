declare module 'next/dynamic' {
  import { ComponentType } from 'react';
  
  interface DynamicOptions {
    loading?: () => React.ReactElement | null;
    ssr?: boolean;
  }
  
  function dynamic<T = {}>(
    dynamicImport: () => Promise<{ default: ComponentType<T> }>,
    options?: DynamicOptions
  ): ComponentType<T>;
  
  export default dynamic;
}
