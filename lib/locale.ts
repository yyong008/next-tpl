import 'server-only'

const locales = {
  'en-US': () => import('../locales/en-US.json').then((module) => module.default),
  'zh-CN': () => import('../locales/zh-CN.json').then((module) => module.default),
}

export const getLocales = async (locale: keyof typeof locales) => locales[locale]()
