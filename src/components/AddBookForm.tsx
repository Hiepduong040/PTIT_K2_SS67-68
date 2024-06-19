
import React, { useState } from 'react';

type FormData = {
    tenSach: string;
    sinhVienMuon: string;
    ngayMuon: string;
    ngayTra: string;
  };
  
  type Errors = {
    tenSach?: string;
    sinhVienMuon?: string;
    ngayMuon?: string;
    ngayTra?: string;
  };
  
  type AddBookFormProps = {
    onSave: (data: FormData & { trangThai: string }) => void;
    onClose: () => void;
  };
  
  export default function AddBookForm({ onSave, onClose }: AddBookFormProps) {
    const [formData, setFormData] = useState<FormData>({
      tenSach: '',
      sinhVienMuon: '',
      ngayMuon: '',
      ngayTra: ''
    });
    const [errors, setErrors] = useState<Errors>({});
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.id]: e.target.value });
    };
  
    const validate = () => {
      const newErrors: Errors = {};
      if (!formData.tenSach) newErrors.tenSach = 'Tên sách không được để trống';
      if (!formData.sinhVienMuon) newErrors.sinhVienMuon = 'Tên người mượn không được để trống';
      if (!formData.ngayMuon) newErrors.ngayMuon = 'Ngày mượn không được để trống';
      if (!formData.ngayTra) newErrors.ngayTra = 'Ngày trả không được để trống';
  
      const today = new Date().toISOString().split('T')[0];
      if (formData.ngayMuon && formData.ngayMuon < today) newErrors.ngayMuon = 'Ngày mượn không được nhỏ hơn ngày hiện tại';
      if (formData.ngayTra && formData.ngayTra < today) newErrors.ngayTra = 'Ngày trả không được nhỏ hơn ngày hiện tại';
  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (validate()) {
        onSave({ ...formData, trangThai: formData.ngayTra > new Date().toISOString().split('T')[0] ? 'Chưa trả' : 'Đã trả' });
      }
    };
  
    return (
      <div className="overlay">
        <form className="form" onSubmit={handleSubmit}>
          <div className="d-flex justify-content-between align-items-center">
            <h4>Thêm thông tin mượn sách</h4>
            <i className="fa-solid fa-xmark" onClick={onClose} />
          </div>
          <div>
            <label className="form-label" htmlFor="tenSach">
              Tên sách
            </label>
            <input id="tenSach" type="text" className="form-control" value={formData.tenSach} onChange={handleChange} />
            {errors.tenSach && <div className="form-text error">{errors.tenSach}</div>}
          </div>
          <div>
            <label className="form-label" htmlFor="sinhVienMuon">
              Tên người mượn
            </label>
            <input id="sinhVienMuon" type="text" className="form-control" value={formData.sinhVienMuon} onChange={handleChange} />
            {errors.sinhVienMuon && <div className="form-text error">{errors.sinhVienMuon}</div>}
          </div>
          <div>
            <label className="form-label" htmlFor="ngayMuon">
              Ngày mượn
            </label>
            <input id="ngayMuon" type="date" className="form-control" value={formData.ngayMuon} onChange={handleChange} />
            {errors.ngayMuon && <div className="form-text error">{errors.ngayMuon}</div>}
          </div>
          <div>
            <label className="form-label" htmlFor="ngayTra">
              Ngày trả
            </label>
            <input id="ngayTra" type="date" className="form-control" value={formData.ngayTra} onChange={handleChange} />
            {errors.ngayTra && <div className="form-text error">{errors.ngayTra}</div>}
          </div>
          <div>
            <button className="w-100 btn btn-primary">Thêm</button>
          </div>
        </form>
      </div>
    );
  }
  