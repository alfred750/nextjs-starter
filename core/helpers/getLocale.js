import nextCookie from 'next-cookies'
import cookie from 'js-cookie'

const defaultLocale = process.env.DEFAULT_LANGUAGE

const acceptLanguages = process.env.ACCEPT_LANGUAGES
  ? process.env.ACCEPT_LANGUAGES.split(',')
  : ['en']

export const getLocale = async (ctx) => {
  try {
    const cookieLocale = nextCookie(ctx).locale
    let locale = defaultLocale
    if (cookieLocale) {
      locale = acceptLanguages.includes(cookieLocale) ? cookieLocale : defaultLocale
    } else {
      const systemLocale = ctx.req.headers['accept-language'] || navigator.language || defaultLocale
      locale = acceptLanguages.includes(systemLocale) ? systemLocale : defaultLocale
      cookie.set('locale', locale, { expires: 365 })
    }
    return locale
  } catch (error) {
    return defaultLocale
  }
}
