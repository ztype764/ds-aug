declare global {
    interface window {
      __GLOBAL_VAR__: {
          localStorage: string;
      };
    }
  }
  
  export {};