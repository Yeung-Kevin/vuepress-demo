---
title: Web框架的本质（重要+理解）
---

## 编程的三部分: 使用数据 存储数据 展示数据

```python
import socket

sk = socket.socket()
sk.bind(('127.0.0.1', 8080))
sk.listen()

while 1:
    conn, addr = sk.accept()
    data = conn.recv(2048)
    print(data)
    conn.send(b'HTTP/1.1 200 OK\r\n\r\n')  # 因为要遵循HTTP协议，所以要在回复消息之前先发送状态行消息 -> 这里就相当于使用 socket 发送文件的例子中的报头（即：接收文件前要知道文件的名称/大小/类型，才可以开始接收文件，如果不懂的就看回 socket 中的报头）
    conn.send(b'<h1>Hello</h1>')
    conn.send(b'<a href="http://www.baidu.com">baidu</a>')
    conn.close()
```

![An image](/vuepress-demo/Django/Web框架的本质（重要+理解）/未标题-1.png)

<img :src="$withBase('/Django/Web框架的本质（重要+理解）/未标题-1.png')" alt="foo">