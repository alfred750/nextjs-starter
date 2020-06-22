export const getMessages = async (locale) => {
  try {
    return require(`../../theme/locales/${locale}.json`)
  } catch (error) {
    return require(`../../theme/locales/ru.json`)
  }
}
