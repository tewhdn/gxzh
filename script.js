function getAccount() {
  // 获取输入的邀请码
  const invitationCode = document.getElementById('invitationCode').value;

  // 假设正确的邀请码为'123456'
  if (invitationCode === '186432') {
    // 在这里编写获取账号的逻辑，可以通过调用服务器接口或者读取本地存储的数据

    // 假设账号信息存储在一个数组中
    const accounts = [
      { username: 'shandiana002@outlook.com', password: 'mussster4' },
      { username: 'c429369903@outlook.com', password: 'mussster4' },
      { username: 'shandiana003@outlook.com', password: 'wh327220' }
    ];

    // 随机选择一个账号
    const randomIndex = Math.floor(Math.random() * accounts.length);
    const selectedAccount = accounts[randomIndex];

    // 弹窗显示账号信息
    alert(`账号：${selectedAccount.username}\n密码：${selectedAccount.password}`);
  } else {
    alert('邀请码错误，请重新输入');
  }
}
function redirectToSponsor() {
  window.location.href = 'http://zanzhu.327220.xyz';
}

function sendFeedback() {
  window.location.href = 'mailto:2932944216@qq.com?subject=反馈主题&body=这里是反馈内容';
}
