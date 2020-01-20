import React from 'react'
import {
  HomePage,
  BasePage,
  ButtonPage,
  FormPage,
  CheckboxPage,
  ProgressBarPage,
  RadioPage,
  TogglePage,
  RangeSliderPage,
  AccordionPage,
  ActionPanelPage,
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
    {route === 'rangeslider' && (
      <RangeSliderPage />
    )}
    {route === 'accordion' && (
      <AccordionPage />
    )}
    {route === 'actionpanel' && (
      <ActionPanelPage />
    )}
    </>
  )
}

export default Routing
