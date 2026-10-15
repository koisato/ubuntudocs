import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { uiTranslations } from 'fumadocs-ui/i18n';
import { i18n } from './i18n';
import { appName, gitConfig } from './shared';

// UI labels per language (the language button shows `displayName`)
export const translations = i18n
  .translations()
  .extend(uiTranslations())
  .add('ui', {
    en: {
      displayName: 'English',
    },
    hu: {
      displayName: 'Magyar',
      search: 'Keresés',
      searchNoResult: 'Nincs találat',
      searchOpen: 'Keresés megnyitása',
      searchClose: 'Keresés bezárása',
      toc: 'Ezen az oldalon',
      tocNoHeadings: 'Nincsenek címsorok',
      tocInline: 'Ezen az oldalon',
      lastUpdate: 'Utoljára frissítve',
      chooseLanguage: 'Nyelv választása',
      nextPage: 'Következő oldal',
      previousPage: 'Előző oldal',
      chooseTheme: 'Téma',
      editOnGithub: 'Szerkesztés GitHubon',
      themeToggle: 'Téma váltása',
      themeLight: 'Világos',
      themeDark: 'Sötét',
      themeSystem: 'Rendszer',
      codeBlockCopy: 'Másolás',
      codeBlockCopied: 'Másolva',
      pageActionsCopyMarkdown: 'Markdown másolása',
      pageActionsOpen: 'Megnyitás',
      pageActionsOpenGitHub: 'Megnyitás GitHubon',
      pageActionsViewMarkdown: 'Markdown megtekintése',
      sidebarOpen: 'Oldalsáv megnyitása',
      sidebarCollapse: 'Oldalsáv bezárása',
      menuToggle: 'Menü',
      notFoundTitle: 'Az oldal nem található',
      notFoundDescription: 'Ez az oldal nem létezik.',
      notFoundLink: 'Vissza a főoldalra',
    },
  });

export function baseOptions(locale: string): BaseLayoutProps {
  return {
    nav: {
      // JSX supported
      title: appName,
      url: locale === i18n.defaultLanguage ? '/' : `/${locale}`,
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
