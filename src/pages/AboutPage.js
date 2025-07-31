import React from 'react';

const AboutPage = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: '#f0f2f5',
      fontFamily: 'Arial, sans-serif',
    }}>
      <div style={{
        background: 'white',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
        maxWidth: '600px',
        width: '100%',
        textAlign: 'center',
      }}>
        <h1 style={{ color: '#333', marginBottom: '20px' }}>🎬 Giới thiệu về nhóm</h1>
        <p style={{ fontSize: '16px', color: '#555' }}>
          Chúng tôi là nhóm sinh viên thực hiện bài <strong>Lab 08</strong> môn
          <em> Lập trình trên thiết bị di động</em>.
        </p>
        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: '20px 0',
          textAlign: 'left',
          color: '#444'
        }}>
          <li><strong>👤 Thành viên 1:</strong> Hà Văn Thọ – 12345678</li>
          <li><strong>👤 Thành viên 2:</strong> Nguyễn Lâm Duy – 87654321</li>
          <li><strong>👤 Thành viên 3:</strong> Nguyễn Nhật Quế Trân  – 11223344</li>
        </ul>
        <p style={{ color: '#666' }}>
          🎯 Mục tiêu của nhóm là xây dựng một website giới thiệu phim đơn giản bằng React.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
