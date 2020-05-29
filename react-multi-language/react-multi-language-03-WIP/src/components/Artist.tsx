import React, { ReactElement } from 'react';
import useTranslation from '../hooks/useTranslation';

const Artist: React.FC = (): ReactElement => {
  const { locale, t } = useTranslation();
  return (
    <div>
      <h1>René Magritte</h1>
      <p>{t('bio')}</p>
      <a href={`http://${locale}.wikipedia.org/wiki/René_Magritte`}>
        {t('readMore')}
      </a>
    </div>
  );
};

export default Artist;
