import React from "react";

export default function Modal({ visible, close }) {
  return (
    <>
      {visible && (
        <div className="overlay">
          <div className="modal" id="modal">
            <span className="close" onClick={close}>
              x
            </span>
            <h2>Modal Window</h2>
            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              deserunt corrupti, ut fugit magni qui quasi nisi amet repellendus
              non fuga omnis a sed impedit explicabo accusantium nihil
              doloremque consequuntur.
            </div>
            <div className="actions">
              <button className="toggle-button" onClick={close}>
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
