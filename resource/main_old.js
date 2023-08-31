/*加密前的文件，实际不需要此文件*/
    function getPassword() {
      var account = document.getElementById("accountInput").value;
      var accounts = {
        "c429369903@outlook.com": "mussster4",
        "eyesusaffalai@hotmail.com": "zyY6WZ02",
        "UvJzVwTxB@outlook.com": "7dyNSitM",
        "shandiana003@outlook.com": "wh327220",
        "user2": "password2",
      };
      if (account in accounts) {
        var password = accounts[account];
        document.getElementById("result").innerHTML = "账号：" + account + " 的密码是：" + password;
      } else {
        document.getElementById("result").innerHTML = "错误：账号不存在";
      }
    }