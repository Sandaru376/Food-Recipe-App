import React from 'react';

export default function Model({ children, onClose }) {
  return (
    <>
      <div className="backdrop" onClick={onClose}></div>
      <dialog className="modal" open onClick={(e) => e.stopPropagation()}>
        {children}
      </dialog>
    </>
  );
}
