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

//bai2
var a=3.5;
var b=4.2;
var c=5.3;
var d=6;
var e=7;
var trungBinh;
trungBinh = (a+b+c+d+e)/5;
console.log(trungBinh);

//bai3
var giaQuydoi = 23500;
var soTienCanDoi = 5;
var tongTien;
tongTien = giaQuydoi*soTienCanDoi;
giaQuydoi = giaQuydoi.toLocaleString('vi', {style : 'currency', currency : 'VND'});
console.log("1 do =",giaQuydoi);
console.log("so tien do can doi :", soTienCanDoi);
tongTien = tongTien.toLocaleString('vi', {style : 'currency', currency : 'VND'});
console.log("tong tien nhan duoc :", tongTien);

//bai4
var chieuDai = 5;
var chieuRong = 4;
var dienTich,chuVi;
dienTich = chieuDai*chieuRong;
chuVi = (chieuDai + chieuRong)*2;
console.log("chieu dai :",chieuDai);
console.log("chieu rong :",chieuRong);
console.log("dien tich :",dienTich);
console.log("chu vi :",chuVi);





