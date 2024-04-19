import Button from './button'

const Input = ({
  label,
  id,
  type = 'text',
  defaultValue = '',
  hasError = false,
  searchAction,
  ...additionalProps
}) => {
  const errorClass = hasError ? 'has-error' : ''

  return (
    <>
      <label className="spx-label" htmlFor={id}>{label}</label>
      {type === 'search' ? (
        <>
          <div className="spx-search">
            <input
              className={`spx-input ${errorClass}`}
              type={type}
              id={id}
              defaultValue={defaultValue}
              {...additionalProps}
            />
              <Button
                circle
                dataIcon="search"
                type="button"
                onClick={searchAction}
              />
            </div>
        </>
      ) : <input
        className={`spx-input ${errorClass}`}
        type={type}
        id={id}
        defaultValue={defaultValue}
        {...additionalProps}
      />}
    </>
  )
}

export default Input
