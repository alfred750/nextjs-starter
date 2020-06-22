import nextCookie from 'next-cookies'
import cookie from 'js-cookie'

const acceptLanguages = ['ru', 'en']
const defaultLocale = acceptLanguages[0]

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
