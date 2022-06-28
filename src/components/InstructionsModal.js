const InstructionsModal = ({open, onClose}) => {
  return (
    <div className="modal" style={{display: open ? "block" : "none"}}
      onClick={onClose}
    >
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="ui centered segment">
          <i className="close icon" onClick={onClose}></i>
          <p>Google the rules</p>
        </div>
      </div>
    </div>
  )
}

export default InstructionsModal
