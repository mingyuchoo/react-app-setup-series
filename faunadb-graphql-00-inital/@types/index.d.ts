export * from './server';

declare global {
  export type OmitObjectType = Omit<Record<string, any>, keyof string>; // because `{}` actually means "any non-nullish value".
}
