document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submitBtn').addEventListener('click', submitTest);
});

function submitTest() {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var result = "测试结果"; // 这里应该是实际计算出的结果

    // 调用生成二维码的函数，将结果作为参数传递
    generateQRCode(result);
}

function generateQRCode(text) {
    const qr = qrcode(0, 'L');
    qr.addData(text);
    qr.make();
    document.getElementById('qrcode').innerHTML = qr.createImgTag();
}
