# 📖 Hướng Dẫn Cài Đặt Và Chạy Dự Án

## ✅ Yêu cầu trước khi bắt đầu

- ✔️ Node.js đã cài (kiểm tra: `node --version`)
- ✔️ npm đã cài (kiểm tra: `npm --version`)
- ✔️ Git đã cài
- ✔️ Visual Studio Code (tùy chọn)

## 📋 Các bước cài đặt

### Bước 1: Clone repository về máy

Mở Command Prompt và gõ:

```bash
git clone https://github.com/dungmv9/cafe-management-system.git
cd cafe-management-system
```

### Bước 2: Cài đặt Backend

```bash
cd backend
npm install
```

### Bước 3: Cài đặt Frontend

Mở Command Prompt mới, từ thư mục gốc:

```bash
cd frontend
npm install
```

### Bước 4: Chạy Backend (Port 5000)

Từ thư mục `backend`:

```bash
npm start
```

Khi thấy dòng `Server running on port 5000` là thành công ✅

### Bước 5: Chạy Frontend (Port 3000)

Mở Command Prompt mới từ thư mục `frontend`:

```bash
npm start
```

Trình duyệt sẽ tự mở `http://localhost:3000`

---

## 🎉 Thành công!

Nếu cả 2 cửa sổ Command Prompt đều chạy mà không có lỗi = OK ✅

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

---

## 🆘 Gặp lỗi?

### Lỗi: "npm: command not found"
→ Node.js chưa được cài đúng, cài lại từ https://nodejs.org/

### Lỗi: "Port 5000 already in use"
→ Có chương trình khác dùng port 5000, đóng nó hoặc đổi port

### Lỗi: Khi git clone
→ Kiểm tra internet, hoặc cài git lại

---

**Bạn cần giúp gì thêm?** 💬