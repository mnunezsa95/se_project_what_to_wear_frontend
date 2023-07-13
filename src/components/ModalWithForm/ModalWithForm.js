import "./ModalWithForm.css";

function ModalWithForm({ children, modalName, title, buttonText = "Add garment", onClose }) {
  return (
    <div className={`modal modal_type_${modalName}`}>
      <div className="modal__content">
        <h3 className="modal__title">{title}</h3>
        <button className="modal__close-button" type="button" onClick={onClose} />
        <form className="modal__form">{children}</form>
        <button className="modal__submit-button" type="submit">
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default ModalWithForm;
