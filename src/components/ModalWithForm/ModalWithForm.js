import "./ModalWithForm.css";

function ModalWithForm({ children, modalName, title, buttonText = "Add garment", onClose }) {
  return (
    <div className={`modal modal_type_${modalName}`}>
      <div className="modal__content">
        <h3 className="modal__title">{title}</h3>
        <button className="modal__close-button" type="button" onClick={onClose} />
        <form>{children}</form>
        <button type="submit">{buttonText}</button>
      </div>
    </div>
  );
}

export default ModalWithForm;

/* <label>Name</label>
<input type="text" placeholder="Name"></input>
<label>Image</label>
<input type="url" placeholder="Image URL"></input>
<label>Select the weather type</label>
<button type="radio">Hot</button>
<button type="radio">Warm</button>
<button type="radio">Cold</button> */
