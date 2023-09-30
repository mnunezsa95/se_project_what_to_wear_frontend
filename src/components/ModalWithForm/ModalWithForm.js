import "./ModalWithForm.css";

function ModalWithForm({ children, modalName, title, buttonText, onClose, isOpen, onSubmit, hasRedirectButton, redirectButtonText, redirectButtonClick }) {
  return (
    <div className={`modal modal_type_${modalName}`}>
      <div className="modal__content">
        <h3 className="modal__title">{title}</h3>
        <button className="modal__close-button " type="button" onClick={onClose} />
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <button className="modal__submit-button" type="submit">
            {buttonText}
          </button>
          {hasRedirectButton && (
            <button className="modal__redirect-button" onClick={redirectButtonClick} type="submit">
              {redirectButtonText}
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
