import { cookiePolicy, acceptLanguagePolicy, defaultPolicy } from '@moxy/next-intl';

export default {
  locales: [
    {
      id: 'en',
      name: 'English',
      loadMessages: async () => {
        const module = await import('../../theme/locales/en.json');
        return module.default;
      },
    },
    {
      id: 'ru',
      name: 'Russian',
      loadMessages: async () => {
        const module = await import('../../theme/locales/ru.json');
        return module.default;
      },
    },
  ],
  policies: [
    cookiePolicy(),
    acceptLanguagePolicy(),
    defaultPolicy('en'),
  ],
};
