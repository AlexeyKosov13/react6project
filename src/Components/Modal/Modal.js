import React, { useState } from 'react';
import './Modal.scss';

const ModalWindow = ({open, setOpen}) => (
  <div className={`overlay animated ${open?'show':''}`} onClick={() => setOpen(false)}>
        <div className="modal">
          <svg height="200" viewBox="0 0 200 200" width="200" onClick={() => setOpen(true)} >
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
          <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
        </div>
      </div>
)

function Modal() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setOpen(true)} className="open-modal-btn">✨ Открыть окно</button>
      <ModalWindow open={open} setOpen={setOpen} />
    </div>
  );
}

export default Modal;
