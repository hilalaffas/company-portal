import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ProtectedRoute from './components/ProtectedRoute';

// Import Halaman
import Login from './pages/Login/Login';
import InfoPerusahaan from './pages/Profile/profile';
import Absensi from './pages/Absensi/absensi';
import Cuti from './pages/Cuti/Cuti';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rute Publik: Login */}
        <Route path="/login" element={<Login />} />

        {/* Rute Publik: Info Perusahaan (Menggunakan Layout tapi tidak dikunci) */}
        <Route path="/info" element={<MainLayout><InfoPerusahaan /></MainLayout>} />

        {/* Rute Terproteksi: Absensi & Cuti (Wajib Lewat Satpam) */}
        <Route path="/absensi" element={
          <ProtectedRoute>
            <MainLayout><Absensi /></MainLayout>
          </ProtectedRoute>
        } />
        
        <Route path="/cuti" element={
          <ProtectedRoute>
            <MainLayout><Cuti /></MainLayout>
          </ProtectedRoute>
        } />

        {/* Jika nyasar, lempar ke info perusahaan */}
        <Route path="*" element={<Navigate to="/info" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;