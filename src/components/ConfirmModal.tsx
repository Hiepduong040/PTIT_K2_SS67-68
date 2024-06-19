
type ConfirmModalProps = {
  onClose: () => void;
  onConfirm: () => void;
};

export default function ConfirmModal({ onClose, onConfirm }: ConfirmModalProps) {
  return (
    <div className="overlay">
      <div className="modal-custom">
        <div className="modal-title">
          <h4>Cảnh báo</h4>
          <i className="fa-solid fa-xmark" onClick={onClose} />
        </div>
        <div className="modal-body-custom">
          <span>Bạn có chắc chắn muốn xóa bản ghi này?</span>
        </div>
        <div className="modal-footer-custom">
          <button className="btn btn-light" onClick={onClose}>Hủy</button>
          <button className="btn btn-danger" onClick={onConfirm}>Xác nhận</button>
        </div>
      </div>
    </div>
  );
}
