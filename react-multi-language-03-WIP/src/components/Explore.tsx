import React, { useState, ReactElement } from 'react';
import useTranslation from '../hooks/useTranslation';

export default function Explore() {
  const { t } = useTranslation();
  const [clickText, setClickText] = useState();

  const handleClick = () => {
    setClickText(t('readMore'));
  };

  return (
    <div>
      <h1>Explore</h1>
      <div>
        <button onClick={handleClick}>{t('bio')}</button>
        <p>{clickText}</p>
      </div>
    </div>
  );
}
