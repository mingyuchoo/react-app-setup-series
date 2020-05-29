import React, { createContext, useEffect, ReactElement } from 'react';
import { Locale, isLocale } from '../translations/types';

interface ContextProps {
  readonly locale: Locale;
  readonly setLocale: (locale: Locale) => void;
}

export const LocaleContext = createContext<ContextProps>({
  locale: 'ko',
  setLocale: () => null,
});

export const LocaleProvider: React.FC<{ lang: Locale }> = ({
  lang,
  children,
}): ReactElement => {
  const [locale, setLocale] = React.useState(lang);

  useEffect(() => {
    if (locale !== localStorage.getItem('locale')) {
      localStorage.setItem('locale', locale);
    }
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};
