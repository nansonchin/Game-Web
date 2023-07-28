import { createI18n } from "vue-i18n";
import EN from './en.json'

const i18n = createI18n({
  legacy: false,
  locale:  'EN',
  fallbackLocale: [EN],
  globalInjection: true,
  messages: {EN},
});
export default i18n;
