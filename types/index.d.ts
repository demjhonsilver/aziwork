// types/index.d.ts

declare module 'aziwork' {
    // TypeScript type definitions for aziwork module
  
    // Type for the sunder function
    type Sunder = (data: string) => any;
  
    // Interface for the aziwork object
    interface Aziwork {

      get(url: string, headers?: Record<string, string>): Promise<any>;

      post(url: string, data?: any, headers?: Record<string, string>): Promise<any>;
  
      put(url: string, data?: any, headers?: Record<string, string>): Promise<any>;
  
      delete(url: string, headers?: Record<string, string>): Promise<any>;
  
      patch(url: string, data?: any, headers?: Record<string, string>): Promise<any>;
  
      options(url: string, headers?: Record<string, string>): Promise<any>;
  
    }
  
    // Export the sunder function as a named export
    export const sunder: Sunder;
  
    // Export the aziwork object as the default export
    const aziwork: Aziwork;
    export default aziwork;
  }