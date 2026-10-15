import { defineI18n } from 'fumadocs-core/i18n';

// English lives at /docs, Hungarian at /hu/docs
export const i18n = defineI18n({
  defaultLanguage: 'en',
  languages: ['en', 'hu'],
  hideLocale: 'default-locale',
});
