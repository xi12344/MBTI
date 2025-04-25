document.getElementById('userInfoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    
    // 这里可以添加代码将姓名和电话号码发送到服务器或存储起来
    
    alert('Thank you, ' + name + '! Your phone number is ' + phone + '. The test will start now.');
    
    // 这里可以添加代码来开始MBTI测试
});
