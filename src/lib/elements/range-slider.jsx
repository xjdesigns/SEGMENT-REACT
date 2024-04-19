const RangeSlider = ({
  value = '0',
  min = '0',
  max = '100',
  step = '1',
  disabled,
  ...additionalProps
}) => {
  const disabledClass = disabled ? 'spx-is-disabled' : ''

  return (
    <div className={`spx-range-slider ${disabledClass}`} data-id="RangeSliderWrap">
      <input
        type="range"
        defaultValue={value}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        {...additionalProps}
      />
    </div>
  )
}

export default RangeSlider
