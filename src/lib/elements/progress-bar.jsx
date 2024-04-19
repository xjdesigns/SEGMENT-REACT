const ProgressBar = ({
  progress = '0',
  title,
  ...additionalProps
}) => {
  const barProg = {
    width: `${progress}%`,
  }
  const hasTitle = title ? 'spx-progress--title' : ''

  return (
    <div
      className={`spx-progress ${hasTitle}`}
      data-title={progress}
      {...additionalProps}
    >
      <div style={barProg} />
    </div>
  )
}

export default ProgressBar
