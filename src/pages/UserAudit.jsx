import React, { useState } from "react";
import "../styles/userAudit.css"; // ใช้ไฟล์ CSS ที่เปลี่ยนชื่อเป็น userAudit.css

const UserAudit = () => {
  const [logs, setLogs] = useState([
    { id: 1, user: "John Doe", action: "Logged in", timestamp: "2024-04-01 10:00" },
    { id: 2, user: "Jane Smith", action: "Changed role", timestamp: "2024-04-01 10:05" },
    { id: 3, user: "John Doe", action: "Deleted account", timestamp: "2024-04-01 10:10" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // กรองผลลัพธ์ตามคำค้นหา
  const filteredLogs = logs.filter(
    (log) =>
      log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.action.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="user-audit">
      <h2>Audit & Monitoring</h2>
      <input
        type="text"
        placeholder="Search activity..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar"
      />

      {/* แสดงข้อความเมื่อไม่มีผลลัพธ์ */}
      {searchTerm && filteredLogs.length === 0 && (
        <p className="no-results">No matching activities found.</p>
      )}

      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Action</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {filteredLogs.map((log) => (
            <tr key={log.id}>
              <td>{log.user}</td>
              <td>{log.action}</td>
              <td>{log.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserAudit;
