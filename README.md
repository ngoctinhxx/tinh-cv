# Phạm Ngọc Tính — Portfolio CV

Website CV tĩnh, responsive và không cần bước build.

## Cấu trúc

```text
MY-CV/
├── index.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── images/
│   │   └── avatar.jpg
│   └── js/
│       └── app.js
└── README.md
```

## Chạy tại máy

Có thể mở trực tiếp `index.html`, hoặc chạy một static server tại thư mục gốc. Ví dụ với VS Code, dùng extension Live Server và chọn **Open with Live Server**.

## Chỉnh sửa

- Nội dung và bản dịch Việt/Anh: `index.html` qua thuộc tính `data-vi` và `data-en`.
- Màu sắc, khoảng cách, responsive và giao diện in PDF: `assets/css/styles.css`.
- Đổi ngôn ngữ, sáng/tối, menu mobile và hiệu ứng cuộn: `assets/js/app.js`.
- Ảnh chân dung: thay `assets/images/avatar.jpg` bằng ảnh mới cùng tên.

Nút **Lưu CV dạng PDF** sử dụng hộp thoại in của trình duyệt; chọn **Save as PDF** để xuất file.
