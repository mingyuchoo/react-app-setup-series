import React from 'react';
import { isLocale, Locale } from '../translations/types';
import { LocaleProvider } from '../context/LocaleContext';

interface LangProps {
  locale?: Locale;
}

export default <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const WithLocale: React.FC<P & LangProps> = ({ locale, ...props }) => {
    if (!locale) {
      return <div>Error</div>;
    }
    return (
      <LocaleProvider lang={locale}>
        <WrappedComponent {...(props as P)} />
      </LocaleProvider>
    );
  };
  return WithLocale;
};
