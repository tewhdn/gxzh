function getAccount() {
  const invitationCode = document.getElementById('invitationCode').value;


  if (invitationCode === '123456') {
  
    const accounts = [
      { username: 'shandiana002@outlook.com', password: 'mussster4' },
      { username: 'c429369903@outlook.com', password: 'herobrine1' },
      { username: 'shandiana003@outlook.com', password: 'herobrine2' }
    ];

   
    const randomIndex = Math.floor(Math.random() * accounts.length);
    const selectedAccount = accounts[randomIndex];


    alert(`账号：${selectedAccount.username}\n密码：${selectedAccount.password}`);
  } else {
    alert('邀请码错误，请重新输入');
  }
}
function redirectToSponsor() {
  window.location.href = 'http://zanzhu.shandiana.top';
}

function sendFeedback() {
  window.location.href = 'mailto:2932944216@qq.com?subject=反馈主题&body=这里是反馈内容';
}
