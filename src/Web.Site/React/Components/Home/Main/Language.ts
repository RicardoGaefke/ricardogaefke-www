import i18next from 'i18next';
import { useEffect } from 'react';
import LanguagePT from './LanguagePT';
import LanguageENG from './LanguageENG';

export default (): void => {
  i18next.addResourceBundle('PT', 'HomePage', LanguagePT);
  i18next.addResourceBundle('ENG', 'HomePage', LanguageENG);

  useEffect((): void => {
    if (!i18next.hasResourceBundle('PT', 'HomePage')) {
      i18next.addResourceBundle('PT', 'HomePage', LanguagePT);
    }
    if (!i18next.hasResourceBundle('ENG', 'HomePage')) {
      i18next.addResourceBundle('ENG', 'HomePage', LanguageENG);
    }
    // return type void != (): void... so as unknown as void
    return ((): void => {
      i18next.removeResourceBundle('PT', 'HomePage');
      i18next.removeResourceBundle('ENG', 'HomePage');
    }) as unknown as void;
  }, []);
};
