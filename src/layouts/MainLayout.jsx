import React from 'react';
import { Link } from 'react-router-dom';

const MainLayout = ({ children }) => {
  return (
    <div className="page">
      {/* Sidebar / Menu Tepi */}
      <aside className="navbar navbar-vertical navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <h1 className="navbar-brand navbar-brand-autodark">
            <a href="#">Portal Syarikat</a>
          </h1>
          <div className="collapse navbar-collapse" id="sidebar-menu">
            <ul className="navbar-nav pt-lg-3">
              <li className="nav-item">
                <Link className="nav-link" to="/info">
                  <span className="nav-link-title">Info Perusahaan</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/absensi">
                  <span className="nav-link-title">Absensi Karyawan</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cuti">
                  <span className="nav-link-title">Pengajuan Cuti</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </aside>

      {/* Konten Utama di Sebelah Kanan */}
      <div className="page-wrapper">
        <div className="page-body">
          <div className="container-xl">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;