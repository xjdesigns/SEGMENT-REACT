import React from 'react'
import Menu from './menu'
import {
  HomePage,
  BasePage,
  ButtonPage,
  FormPage,
  CheckboxPage,
  ProgressBarPage,
  RadioPage,
  TogglePage,
} from './pages'

const Routing = ({ route }) => {
  return (
    <>
    {route === 'home' && (
      <HomePage />
    )}
    {route === 'base' && (
      <BasePage />
    )}
    {route === 'button' && (
      <ButtonPage />
    )}
    {route === 'forms' && (
      <FormPage />
    )}
    {route === 'checkbox' && (
      <CheckboxPage />
    )}
    {route === 'progressbar' && (
      <ProgressBarPage />
    )}
    {route === 'radio' && (
      <RadioPage />
    )}
    {route === 'toggle' && (
      <TogglePage />
    )}
    </>
  )
}

export default Routing
