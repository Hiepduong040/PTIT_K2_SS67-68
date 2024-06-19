

import  { useEffect, useState } from 'react';
import TableRow from './TableRow';

type DataItem = {
  tenSach: string;
  sinhVienMuon: string;
  ngayMuon: string;
  ngayTra: string;
  trangThai: string;
  [key: string]: any;
};

type TableProps = {
  data: DataItem[];
};

export default function Table({ data }: TableProps) {
  const [tableData, setTableData] = useState<DataItem[]>(data);

  useEffect(() => {
    setTableData(data);
  }, [data]);

  const handleUpdateStatus = (index: number, newStatus: string) => {
    const updatedData = tableData.map((item, i) =>
      i === index ? { ...item, trangThai: newStatus } : item
    );
    setTableData(updatedData);
    localStorage.setItem('borrowData', JSON.stringify(updatedData));
  };

  const handleDelete = (index: number) => {
    const updatedData = tableData.filter((_, i) => i !== index);
    setTableData(updatedData);
    localStorage.setItem('borrowData', JSON.stringify(updatedData));
  };

  return (
    <table className="table table-bordered table-hover table-striped">
      <thead>
        <tr>
          <th>STT</th>
          <th>Tên sách</th>
          <th>Sinh viên mượn</th>
          <th>Ngày mượn</th>
          <th>Ngày trả</th>
          <th>Trạng thái</th>
          <th colSpan={2}>Chức năng</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item, index) => (
          <TableRow
            key={index}
            data={item}
            index={index}
            onUpdateStatus={handleUpdateStatus}
            onDelete={handleDelete}
          />
        ))}
      </tbody>
    </table>
  );
}


