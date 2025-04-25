function generateQRCode(text) {
    const qr = qrcode(0, 'L');
    qr.addData(text);
    qr.make();
    document.getElementById('qrcode').innerHTML = qr.createImgTag();
}
