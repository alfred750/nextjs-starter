import React from 'react';
import {Button} from 'antd'
import { useIntl } from '../../../core/hooks'

const LanguageButton = () => {
  const { locale, changeLocale } = useIntl()
  const handleChangeLocale = () => {
    const newLocale = locale === 'en' ? 'ru' : 'en'
    changeLocale(newLocale)
  }
  return (
    <Button onClick={handleChangeLocale}>{locale}</Button>
  )
}

export default LanguageButton
