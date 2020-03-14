import I18n from 'i18n-js'
import * as RNLocale from 'react-native-localize'

// Language Files
import en from './en.json'
import ko from './ko.json'

const locales = RNLocale.getLocales()

if (Array.isArray(locales)) {
    I18n.locale = locales[0].languageTag
}

I18n.fallbacks = true
I18n.translations = {
    en,
    ko
}

console.log(locales)

export default I18n
