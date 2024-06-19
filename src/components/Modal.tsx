import React from 'react';

type ModalProps = {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  onConfirm: () => void;
};

export default function Modal({ title, children, onClose, onConfirm }: ModalProps) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h5 className="modal-title">{title}</h5>
          <button className="close" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          {children}
        </div>
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>Hủy</button>
          <button className="btn btn-danger" onClick={onConfirm}>Xóa</button>
        </div>
      </div>
    </div>
  );
}
