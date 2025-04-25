<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MBTI 测试题</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>MBTI 测试题</h1>
        <form id="testForm">
            <label for="name">姓名:</label>
            <input type="text" id="name" name="name" required><br><br>
            <label for="phone">电话号码:</label>
            <input type="tel" id="phone" name="phone" required><br><br>
            <!-- 这里添加你的测试题 -->
            <button type="button" id="submitBtn">提交测试</button>
        </form>
        <div id="qrcode"></div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/qrcode-generator"></script>
    <script src="script.js"></script>
</body>
</html>
