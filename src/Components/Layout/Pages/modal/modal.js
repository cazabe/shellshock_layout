import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import blackFRiday from "../../../../Assets/blackfridaynew.jpeg";

const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  window.addEventListener('load', (event) => {
    setModal(true)
  });

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader style={{"padding-left" : "90px"}} toggle={toggle}>PROMOCIÓN POR BLACK FRIDAY</ModalHeader>
        <ModalBody>
         <img src={blackFRiday} style={{height:580}}/>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cerrar</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;