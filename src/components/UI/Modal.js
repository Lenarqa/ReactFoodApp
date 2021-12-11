import React from "react";
import reactDom from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const Overlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <React.Fragment>
      {reactDom.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
      {reactDom.createPortal(
        <Overlay>{props.children}</Overlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
