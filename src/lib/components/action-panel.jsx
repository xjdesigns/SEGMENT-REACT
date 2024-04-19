const ActionPanel = ({
  title,
  baseAction,
  baseIcon = 'check',
  actions,
  ...additionalProps
}) => {
  return (
    <div className="spx-apanel" {...additionalProps}>
      {baseAction && (
        <div className="spx-apanel__core">
          <button
            className="spx-btn spx-btn--sm spx-btn--pr--inverted spx-btn--circle"
            data-icon={baseIcon}
            onClick={baseAction}
            data-id="BaseActionBtn"
          />
        </div>
      )}

      <div className="spx-apanel__title">{title}</div>

      {actions && (
        <div className="spx-apanel__actions">
          <div className="spx-panel-actions">
            {actions}
          </div>
        </div>
      )}
    </div>
  )
}

export default ActionPanel
