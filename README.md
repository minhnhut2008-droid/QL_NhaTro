# Quản lý nhà trọ - bản web (laptop và điện thoại)

Đây là cùng một ứng dụng với bản Android, chạy trong trình duyệt Chrome hoặc Edge. Dữ liệu lưu trong IndexedDB của
trình duyệt (mỗi bản ghi mã hóa AES-256). Có ảnh, xóa có hoàn tác, thông tin nhà trọ và đồng bộ.

## Đưa lên GitHub Pages
1. Tạo kho **Public** mới trên GitHub (gói miễn phí chỉ cho Pages với kho công khai; kho chỉ chứa mã app, không chứa dữ liệu).
2. Giải nén zip, tải toàn bộ nội dung lên kho (Add file > Upload files).
3. Settings > Pages > Source: Deploy from a branch > main > / (root) > Save. Chờ 1 đến 3 phút để có đường link.
4. Mở link trên laptop bằng Chrome. Cài thành app: biểu tượng cài đặt ở thanh địa chỉ, hoặc menu > Cast, save and share > Install page as app.

## Chuyển dữ liệu từ bản PWA cũ (nha-tro-app)
Bản PWA cũ: Cài đặt bảo mật > Tải file sao lưu. Ở bản mới: Cài đặt bảo mật > Khôi phục từ file sao lưu, rồi nhập mật khẩu cũ.

## Đồng bộ
Xem `dong-bo/HUONG-DAN-DONG-BO.md`. Cần tạo một dự án Supabase miễn phí và chạy `dong-bo/supabase-setup.sql`.

## Lưu ý
- Xóa dữ liệu trình duyệt hoặc gỡ app sẽ mất dữ liệu trên máy đó. Hãy bật đồng bộ và tải file sao lưu định kỳ.
- Trên laptop, các nút Chụp ảnh mở bộ chọn file (hoặc webcam nếu trình duyệt hỗ trợ).

## Phòng và nhập Excel
- Phòng được lưu đúng theo **ký hiệu** trong file (chữ, số, dấu), ví dụ `P.101`, `A2`, `B-7`, `3A`. Chữ "Phòng" ở đầu được bỏ, chữ hoa và chữ thường coi như nhau.
- Nhận diện cột Excel dựa trên cả tiêu đề lẫn nội dung từng cột, mỗi trường chỉ gán cho một cột, hiện độ tin cậy và lý do. Cột đỏ (dưới 70%) cần bạn kiểm tra.
- Dòng không nhận được khi nhập (thiếu họ tên, số định danh thiếu hoặc sai ký tự, thiếu tên nhà trọ) được liệt kê theo số dòng ở bảng "Kết quả nhập". Bấm **Chọn / sửa / đưa vào thủ công** để tích chọn dòng, sửa thông tin từng dòng rồi đưa vào danh sách. Dòng còn thiếu hoặc sai số định danh vẫn vào được và gắn nhãn **Cần bổ sung**; mở người đó, bấm **Sửa thông tin** để chỉnh đầy đủ. Danh sách dòng chờ xử lý chỉ giữ đến khi tải lại trang, có nút mở lại ở tab Nhập.

## 16 trường nhập từ Excel
Họ tên, Ngày sinh, Giới tính, Số định danh, Số điện thoại, Địa chỉ_Tỉnh/TP, Địa chỉ_Xã/Phường/Đặc khu, Địa chỉ_Ấp/Thôn, Địa chỉ_Cụ thể, Loại nơi ở, Tên nơi ở, Ngày đến, Ngày dự kiến đi, Số phòng, Loại cư trú, Tình trạng cư trú.
Bắt buộc có Họ tên, Số định danh và tên nhà trọ (cột Tên nơi ở hoặc nhập tay). Tải file mẫu ngay trong app (tab Nhập, nút **Tải file Excel mẫu**). File xuất từ app dùng đúng các cột này nên xuất xong có thể nhập lại.

## Số định danh và nhiều nhà trọ trong một file
- Số định danh chỉ lấy **ký tự số**, bỏ qua mọi ký tự khác (dấu cách, gạch, dấu nháy, chữ như "CCCD:"). Đủ 12 số (hoặc 9 số CMND cũ) thì nhận; 11 số được bù số 0 đầu. Excel đổi số sang dạng khoa học (E+) thì app báo rõ dòng nào lỗi.
- Tên nhà trọ được so khớp **chính xác** (không phân biệt chữ hoa thường và khoảng trắng thừa, nhưng phân biệt dấu): "Thanh", "Thanh Long", "Bùi Thanh Long", "Thạnh" là các nhà trọ khác nhau. Chỉ khi hai tên chỉ khác tiền tố "Nhà trọ/Nhà nghỉ" thì app hỏi có gộp không.
- Tên nhà trọ lấy từ cột Tên nơi ở (nhận cả "Tên nơi ở/nhà trọ", "Cơ sở lưu trú"...). Một file nhiều nhà trọ thì mỗi dòng tự lưu vào đúng nhà, nhà chưa có tự tạo. Ô gộp trống lấy theo dòng trên. File không có cột tên nơi ở nhưng có các dòng tiêu đề nhà trọ xen giữa thì dùng các dòng đó.
