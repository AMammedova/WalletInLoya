const NextI18Next = require('next-i18next').default
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig
const path = require('path')

module.exports = new NextI18Next({
    otherLanguages: ['ru', 'az', 'en'],
    defaultLanguage: 'az',
    strictMode: false,
    shallowRender: true,
    localePath: path.resolve('./public/locales')
})