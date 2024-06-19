
export default function Header({ onAdd }) {
  return (
    <div> 
      <header className="d-flex justify-content-between mb-3">
        <h3>Quản lý mượn trả sách</h3>
        <button className="btn btn-primary" onClick={onAdd}>Thêm thông tin</button>
      </header>
    </div>
  );
}
