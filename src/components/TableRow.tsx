
import React, { useState } from 'react';
import ConfirmModal from './ConfirmModal';

type TableRowProps = {
  data: {
    tenSach: string;
    sinhVienMuon: string;
    ngayMuon: string;
    ngayTra: string;
    trangThai: string;
    [key: string]: any;
  };
  index: number;
  onUpdateStatus: (index: number, newStatus: string) => void;
  onDelete: (index: number) => void; // Thêm prop onDelete để xử lý xóa
};

export default function TableRow({ data, index, onUpdateStatus, onDelete }: TableRowProps) {
  const [status, setStatus] = useState(data.trangThai);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value;
    setStatus(newStatus);
    onUpdateStatus(index, newStatus);
  };

  const handleDelete = () => {
    onDelete(index);
    setShowModal(false);
  };

  return (
    <>
      <tr>
        <td>{index}</td>
        <td>{data.tenSach}</td>
        <td>{data.sinhVienMuon}</td>
        <td>{data.ngayMuon}</td>
        <td>{data.ngayTra}</td>
        <td>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div className={`status ${status === 'Chưa trả' ? 'status-stop' : 'status-active'}`} />
            <select value={status} onChange={handleChange} className="form-select">
              <option value="Chưa trả">Chưa trả</option>
              <option value="Đã trả">Đã trả</option>
            </select>
          </div>
        </td>
        <td>
          <span className="button button-edit">Sửa</span>
        </td>
        <td>
          <span className="button button-delete" onClick={() => setShowModal(true)}>Xóa</span>
        </td>
      </tr>
      {showModal && (
        <ConfirmModal
          onClose={() => setShowModal(false)}
          onConfirm={handleDelete}
        />
      )}
    </>
  );
}

