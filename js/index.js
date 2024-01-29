//bai1
var luongNgay = 100000;
var soNgayLam = 30;
var luongTong;
luongTong = soNgayLam * luongNgay;
console.log( "so ngay lam :",soNgayLam);
luongNgay = luongNgay.toLocaleString('vi', {style : 'currency', currency : 'VND'});
console.log("luong hang ngay:",luongNgay);
luongTong = luongTong.toLocaleString('vi', {style : 'currency', currency : 'VND'});
console.log("tong luong nhan duoc:",luongTong);



