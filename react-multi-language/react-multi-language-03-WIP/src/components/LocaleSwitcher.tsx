import React, { ReactElement } from 'react';
import { locales, languageNames } from '../translations/config';
import { LocaleContext } from '../context/LocaleContext';

const LocaleSwitcher: React.FC = (): ReactElement => {
  const { locale } = React.useContext(LocaleContext);

  // const handleLocaleChange = React.useCallback(
  //   (event: React.ChangeEvent<HTMLSelectElement>) => {
  //     const regex = new RegExp(`^/(${locales.join('|')})`);
  //     router.push(
  //       router.pathname,
  //       router.asPath.replace(regex, `/${event.target.value}`)
  //     );
  //   },
  //   [router]
  // );

  const handleLocaleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(`>>> ${event.target.value}`);
  };
  return (
    <select value={locale} onChange={handleLocaleChange}>
      {locales.map(locale => (
        <option key={locale} value={locale}>
          {languageNames[locale]}
        </option>
      ))}
    </select>
  );
};

export default LocaleSwitcher;
