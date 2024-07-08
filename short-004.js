export default [
  {
    questionNumber: "1",
    question: "关于H3C SecPath U200-S产品的安全区域,以下说法正确的有:",
    options: [
      {
        Key: "A",
        Value:
          " 防火墙默认有五个安全区域:Management、Local 、Trust、untrust、DMZ",
      },
      { Key: "B", Value: " 防火墙自身所有接口都属于Local区域" },
      { Key: "C", Value: " 不同安全域的优先级一定不一样" },
      { Key: "D", Value: " Management和Local区域的默认优先级都是100" },
    ],
    answer: "ABD",
    qtype: "2",
  },
  {
    questionNumber: "2",
    question: "查看SecPath防火墙会话的命令是()",
    options: [
      { Key: "A", Value: " display firewall session table" },
      { Key: "B", Value: " display firewall session" },
      { Key: "C", Value: " display session table" },
      { Key: "D", Value: " display aspf session" },
    ],
    answer: "C",
    qtype: "1",
  },
  {
    questionNumber: "3",
    question:
      "SecPath IPS设备的管理口仅支持同网段管理端PC访问,当管理端PC的地址与设备管理地址不在同一网段时,无法对设备进行Web管理,以上说法是:",
    options: [
      { Key: "A", Value: " 正确" },
      { Key: "B", Value: " 错误" },
    ],
    answer: "B",
    qtype: "1",
  },
  {
    questionNumber: "4",
    question: "关于IPS攻击防御策略的下发,下列说法正确的有:",
    options: [
      { Key: "A", Value: " 策略可以基于不同的IP地址(段)下发" },
      { Key: "B", Value: " 策略可以基于时间下发" },
      {
        Key: "C",
        Value: " 策略可以根据用户的具体应用来制定相应的攻击防护策略下发",
      },
      { Key: "D", Value: " 策略下发启,必须应用到段上,并且激活才能生效" },
    ],
    answer: "ACD",
    qtype: "2",
  },
  {
    questionNumber: "5",
    question: "以下哪个病毒可以破坏计算机硬件?",
    options: [
      { Key: "A", Value: " CIH病毒" },
      { Key: "B", Value: " 宏病毒" },
      { Key: "C", Value: " 冲击波病毒" },
      { Key: "D", Value: " 熊猫烧香病毒" },
    ],
    answer: "A",
    qtype: "1",
  },
  {
    questionNumber: "6",
    question: "安全概念在所属的各个领域有着不同的含义,那么网络安全应属于",
    options: [
      { Key: "A", Value: " 经济安全领域" },
      { Key: "B", Value: " 信息安全领域" },
      { Key: "C", Value: " 生成安全领域" },
      { Key: "D", Value: " 国家安全领域" },
    ],
    answer: "B",
    qtype: "1",
  },
  {
    questionNumber: "7",
    question: "信息安全的目标是实现:",
    options: [
      { Key: "A", Value: " 机密性" },
      { Key: "B", Value: " 完整性" },
      { Key: "C", Value: " 可用性" },
      { Key: "D", Value: " 可控性" },
      { Key: "E", Value: " 可审计性" },
    ],
    answer: "ABCDE",
    qtype: "2",
  },
  {
    questionNumber: "8",
    question:
      "IIS( Internet Security Systems)公司提出的PDR安全模型包括哪三个方面?",
    options: [
      { Key: "A", Value: " 响应" },
      { Key: "B", Value: " 设计" },
      { Key: "C", Value: " 保护" },
      { Key: "D", Value: " 检测" },
    ],
    answer: "ACD",
    qtype: "2",
  },
  {
    questionNumber: "9",
    question:
      "信息安全策略是特定应用环境中,为确保一定级别的安全保护所必须遵守的规则。而安全策略建立模型主要包括",
    options: [
      { Key: "A", Value: " 先进的技术" },
      { Key: "B", Value: " 相关法律法规" },
      { Key: "C", Value: " 管理审计制度" },
      { Key: "D", Value: " 先例与经验" },
    ],
    answer: "ABC",
    qtype: "2",
  },
  {
    questionNumber: "10",
    question: "信息对抗主要的研究方向包括:",
    options: [
      { Key: "A", Value: " 黑客攻击防范" },
      { Key: "B", Value: " 入侵检测" },
      { Key: "C", Value: " 系统安全性分析与评估" },
      { Key: "D", Value: " 信息隐藏算法与匿名技术" },
    ],
    answer: "ABC",
    qtype: "2",
  },
  {
    questionNumber: "11",
    question:
      '下列关于H3C SecPath ACG流控产品带宽管理技术描述中,正确的是（）\nA. 接口:通常是指一个物理接口,与路由器或者交换机的网络接口相似\nB. 通道带宽:通常将一个接口或者段的出方向带宽划分为个通道,每个通道都可以分配不同的平均带宽或者峰值带宽\nC. 段：一个段可以理解为一条物理链路或者多条物理链路,是一个虚拟抽象的概念\nD. 安全区域:多个物理接口的集合,是一个虚拟概念通常牙为,内部域”和"外部域\n\n正确答案: ABCD\n\n\n 问题 12\n下列选项中,属于深度安全防卸技术的是(）',
    options: [
      {
        Key: "A",
        Value: " 接口:通常是指一个物理接口,与路由器或者交换机的网络接口相似",
      },
      {
        Key: "B",
        Value:
          " 通道带宽:通常将一个接口或者段的出方向带宽划分为个通道,每个通道都可以分配不同的平均带宽或者峰值带宽",
      },
      {
        Key: "C",
        Value:
          " 段：一个段可以理解为一条物理链路或者多条物理链路,是一个虚拟抽象的概念",
      },
      {
        Key: "D",
        Value:
          ' 安全区域:多个物理接口的集合,是一个虚拟概念通常牙为,内部域”和"外部域',
      },
      { Key: "A", Value: " 状态监测" },
      { Key: "B", Value: " 应用识别" },
      { Key: "C", Value: " 内容识别" },
      { Key: "D", Value: " 威胁识别" },
    ],
    answer: "BCD",
    qtype: "2",
  },
  {
    questionNumber: "13",
    question: "常见的内网用户行为监管应包括",
    options: [
      { Key: "A", Value: " 内网Web应用的审计" },
      { Key: "B", Value: " 内网网络共享应用的审计" },
      { Key: "C", Value: " 内网Q0MSN应用的审计" },
      { Key: "D", Value: " 内网FTP应用的审计" },
    ],
    answer: "ACD",
    qtype: "2",
  },
  {
    questionNumber: "14",
    question: "H3C SecPath U200-S支持的行为审计协议包括()",
    options: [
      { Key: "A", Value: " FTP" },
      { Key: "B", Value: " HTTP" },
      { Key: "C", Value: " SMTP" },
      { Key: "D", Value: " Telnet" },
    ],
    answer: "ABC",
    qtype: "2",
  },
  {
    questionNumber: "15",
    question: "下列网络应用程序中,可能会造成带宽大量占用的应用包括",
    options: [
      { Key: "A", Value: " 迅雷" },
      { Key: "B", Value: " PPlive" },
      { Key: "C", Value: " Bit Torrent" },
      { Key: "D", Value: " MSN" },
    ],
    answer: "ABC",
    qtype: "2",
  },
  {
    questionNumber: "16",
    question: "常见的行为识别技术包括:",
    options: [
      {
        Key: "A",
        Value:
          " 基于端口的识别,主要应用子使用固定端口进行通信的引用,例如,HTTP、 FTP",
      },
      {
        Key: "B",
        Value:
          " 基于行为特征的识别,主要是基于部分应用的数据流里和其它流量在行为特征上的差异来进行",
      },
      {
        Key: "C",
        Value: " IP地址的识别,至要是对某些使用固定IP地址的业务进行识别",
      },
      {
        Key: "D",
        Value:
          " 基于负载信息的识别,主要是基于部分协议在负载中含有,议特征字符串来完成识别",
      },
    ],
    answer: "ABD",
    qtype: "2",
  },
  {
    questionNumber: "17",
    question: "行为识别主要有三种方法,分别是",
    options: [
      { Key: "A", Value: " 基于负载信息的识别" },
      { Key: "B", Value: " 基于协议的识别" },
      { Key: "C", Value: " 基于端口的识别" },
      { Key: "D", Value: " 基于行为特征的识别" },
    ],
    answer: "ACD",
    qtype: "2",
  },
  {
    questionNumber: "18",
    question: "安全的含义包过",
    options: [
      { Key: "A", Value: " Security（安全）" },
      { Key: "B", Value: " Safety（可靠）" },
      { Key: "C", Value: " Security（安全）和safety（可靠）" },
      { Key: "D", Value: " risk（风险）" },
    ],
    answer: "C",
    qtype: "1",
  },
  {
    questionNumber: "19",
    question: "在TCP连接的三次握手过程中,第一步是由发起端发送",
    options: [
      { Key: "A", Value: " SYN包" },
      { Key: "B", Value: " SCK包" },
      { Key: "C", Value: " UDP包" },
      { Key: "D", Value: " NULL包" },
    ],
    answer: "A",
    qtype: "1",
  },
  {
    questionNumber: "20",
    question:
      "现在各种P2P应用软件层出不穷,P2P流量的识别也必须采用多种方法写作进行,以上说法是",
    options: [
      { Key: "A", Value: " 正确" },
      { Key: "B", Value: " 错误" },
    ],
    answer: "A",
    qtype: "1",
  },
  {
    questionNumber: "21",
    question: "关于包过滤技术的描述,下列说法错误的是:单选",
    options: [
      { Key: "A", Value: " H3C UTM产品默认开启了包过滤功能" },
      {
        Key: "B",
        Value: " 用户并不知道报文是否被过滤,也就是说包过滤对用户端是透明的",
      },
      { Key: "C", Value: " 包过滤技术主要是根据报文中的IP头信息来进行过滤" },
      { Key: "D", Value: " 包过滤技术可以根据报文中的应用层信息进行过滤" },
    ],
    answer: "D",
    qtype: "1",
  },
  {
    questionNumber: "122",
    question: "从管理和控制上来区分,主流的带宽管理技术包括:",
    options: [
      { Key: "A", Value: " 基于段的带宽管理技术" },
      { Key: "B", Value: " 基于用启IP地址的带宽管理技术" },
      { Key: "C", Value: " 基于应用协议的带宽管理技术" },
      { Key: "D", Value: " 基于MAC地址的带宽管理技术" },
    ],
    answer: "ABC",
    qtype: "2",
  },
  {
    questionNumber: "23",
    question:
      "防火墙主要工作在网络的3-4层,其访问控制规则可以基于报文的五元组进行定义。下列元素中,哪些是五元组\n的组成部分?",
    options: [
      { Key: "A", Value: " 源端口" },
      { Key: "B", Value: " 目的端口" },
      { Key: "C", Value: " 源地址" },
      { Key: "D", Value: " 协议" },
      { Key: "E", Value: " 目的地址" },
      { Key: "F", Value: " 载荷" },
    ],
    answer: "ABCDE",
    qtype: "2",
  },
  {
    questionNumber: "24",
    question: "下面哪一个协议工作在TCP/IP协议栈的传输层以下?",
    options: [
      { Key: "A", Value: " SKIP" },
      { Key: "B", Value: " SSL" },
      { Key: "C", Value: " HTTPS" },
      { Key: "D", Value: " SSH" },
    ],
    answer: "A",
    qtype: "1",
  },
  {
    questionNumber: "25",
    question: "黑名单表项可以手工添加,也可以有防火墙动态生成,上述说法是:",
    options: [
      { Key: "A", Value: " 正确" },
      { Key: "B", Value: " 错误" },
    ],
    answer: "A",
    qtype: "1",
  },
  {
    questionNumber: "26",
    question: "常见的安全域划分方式有:",
    options: [
      { Key: "A", Value: " 按照接口划分" },
      { Key: "B", Value: " 按照业务划分" },
      { Key: "C", Value: " 按照规则划分" },
      { Key: "D", Value: " 按照IP地址划分" },
    ],
    answer: "A",
    qtype: "1",
  },
  {
    questionNumber: "27",
    question: "在企业的内部信息平台中,存在的信息泄露的途径包括:",
    options: [
      { Key: "A", Value: " 可移动存储介质" },
      { Key: "B", Value: " 打印机" },
      { Key: "C", Value: " 内部网络共享" },
      { Key: "D", Value: " 公司对外的FTP服务器" },
    ],
    answer: "ABCD",
    qtype: "2",
  },
  {
    questionNumber: "28",
    question:
      "随着网络技术的不断发展,防火墙也在完成自己的更新换代,防火墙所经历的技术演进包括有:",
    options: [
      { Key: "A", Value: " 包过滤防火墙" },
      { Key: "B", Value: " 应用代理防" },
      { Key: "C", Value: " Dos防火墙" },
      { Key: "D", Value: " 状态检测防火墙" },
    ],
    answer: "ABD",
    qtype: "2",
  },
  {
    questionNumber: "29",
    question: "下述哪些攻击手段是防火墙无法防御的?",
    options: [
      { Key: "A", Value: " Smurt" },
      { Key: "B", Value: " 跨站脚本攻击" },
      { Key: "C", Value: " 畸形报文攻击" },
      { Key: "D", Value: " 后门木马" },
      { Key: "E", Value: " WinNuke攻击" },
    ],
    answer: "BD",
    qtype: "2",
  },
  {
    questionNumber: "30",
    question:
      "永久黑名单表项建立后,会一直存在,直到超过一定生存时间后防火墙会自动将该黑名单表项删除,上述说法是",
    options: [
      { Key: "A", Value: " 正确" },
      { Key: "B", Value: " 错误" },
    ],
    answer: "B",
    qtype: "1",
  },
  {
    questionNumber: "31",
    question:
      "当防火墙接收到包含URL参数的HTTP请求报文时,根据Web传输参数方式,从报文中获取URL参数,目前防火墙支持的Web传输参数有:",
    options: [
      { Key: "A", Value: " PUT" },
      { Key: "B", Value: " GET" },
      { Key: "C", Value: " PUSH" },
      { Key: "D", Value: " POST" },
    ],
    answer: "ABD",
    qtype: "2",
  },
  {
    questionNumber: "32",
    question: "ARP协议报文包括有ARP请求和ARP应答报文",
    options: [
      { Key: "A", Value: " 错误" },
      { Key: "B", Value: " 正确" },
    ],
    answer: "B",
    qtype: "1",
  },
  {
    questionNumber: "33",
    question: "SMTP协议使用的端口号是",
    options: [
      { Key: "A", Value: " 21" },
      { Key: "B", Value: " 25" },
      { Key: "C", Value: " 110" },
      { Key: "D", Value: " 22" },
    ],
    answer: "B",
    qtype: "1",
  },
  {
    questionNumber: "34",
    question: "使用防火墙Web过滤功能,可以组织或者允许内部用户访问某些特定网页",
    options: [
      { Key: "A", Value: " 正确" },
      { Key: "B", Value: " 错误" },
    ],
    answer: "A",
    qtype: "1",
  },
  {
    questionNumber: "35",
    question:
      "H3C UTM从高优先级域到低优先级域是允许访问的,但是反之不行,上述说法:",
    options: [
      { Key: "A", Value: " 正确" },
      { Key: "B", Value: " 错误" },
    ],
    answer: "B",
    qtype: "1",
  },
  {
    questionNumber: "36",
    question:
      "防火墙的策略一般是应用在安全域之间的,而IPS/AV策略一般应用在某个段上。",
    options: [
      { Key: "A", Value: " 正确" },
      { Key: "B", Value: " 错误" },
    ],
    answer: "A",
    qtype: "1",
  },
  {
    questionNumber: "37",
    question: "下列攻击中,属于Dos拒绝服务玫击的是:",
    options: [
      { Key: "A", Value: " SYN Flood" },
      { Key: "B", Value: " ICMP Floed" },
      { Key: "C", Value: " WinNuke攻击" },
      { Key: "D", Value: " UDPFlood" },
    ],
    answer: "ABD",
    qtype: "2",
  },
  {
    questionNumber: "38",
    question: "根据由加密密钥得到解密密钥的算法复杂度差异,密码体制可以分为",
    options: [
      { Key: "A", Value: " 私钥密码体制" },
      { Key: "B", Value: " 公钥密码体制" },
      { Key: "C", Value: " 流密码" },
      { Key: "D", Value: " 分组密码" },
    ],
    answer: "AB",
    qtype: "2",
  },
  {
    questionNumber: "39",
    question: "防火墙能够防御的攻击包括:",
    options: [
      { Key: "A", Value: " 畸形报文攻击" },
      { Key: "B", Value: " DoS/DDOS" },
      { Key: "C", Value: " 扫描窥探攻击" },
      { Key: "D", Value: " 病毒木马" },
    ],
    answer: "ABCD",
    qtype: "2",
  },
  {
    questionNumber: "40",
    question: "以下关于DoS攻击的描述,正确的是?",
    options: [
      { Key: "A", Value: " 攻击者通过后门程序来入受攻击的系统" },
      { Key: "B", Value: " 攻击者以窃取目标系统上的机密信息为目的" },
      { Key: "C", Value: " 攻击行为会导致目标系统无法处理正常用户的请求" },
      { Key: "D", Value: " 如果目标系统没有漏洞,远程攻击就不可能成功" },
    ],
    answer: "C",
    qtype: "1",
  },
  {
    questionNumber: "41",
    question: "H3C SecPath设备中, ACL主要应用于",
    options: [
      { Key: "A", Value: " Qos 中,对数据流里进行分类" },
      { Key: "B", Value: " IPSec中 用来规定触发建立IPSec的条件" },
      { Key: "C", Value: " NAT 中,限制哪些地址需要被转换" },
      { Key: "D", Value: " 域间访问,控制不同区域间的互访" },
      { Key: "E", Value: " 策略路由" },
    ],
    answer: "ABCE",
    qtype: "2",
  },
  {
    questionNumber: "42",
    question:
      "SecPath防火墙中,下面哪些接口必须加入到区域中才能转发数据?\nA. Loopback接口\nB. 物理接口\nC. Vitual-Template 接口 ( )\nD. Encrypt 接口\nE. Tunnel 接口\nF. Dialer接口\nG. Bridge Templatei接口\nH. Vlan Interface接口\n正确答案: BCEFGH     (Loopback接口不需要加入域就能通，实验已经确认）\n\n\n\n\n问题 43\nH3C SecPath防火墙中,配置IP地址资源的方式有哪些?",
    options: [
      { Key: "A", Value: " Loopback接口" },
      { Key: "B", Value: " 物理接口" },
      { Key: "C", Value: " Vitual-Template 接口 ( )" },
      { Key: "D", Value: " Encrypt 接口" },
      { Key: "E", Value: " Tunnel 接口" },
      { Key: "F", Value: " Dialer接口" },
      { Key: "A", Value: " 主机地址" },
      { Key: "B", Value: " 范围地址" },
      { Key: "C", Value: " 子网地址" },
      { Key: "D", Value: " 网站域名" },
    ],
    answer: "ABCD",
    qtype: "2",
  },
  {
    questionNumber: "44",
    question: "H3C SecPath防火墙中,下面哪些攻击必须和动态黑名单组合使用?",
    options: [
      { Key: "A", Value: " WinNuke攻击" },
      { Key: "B", Value: " Land扫描攻击" },
      { Key: "C", Value: " 地址扫描攻击" },
      { Key: "D", Value: " Smurf攻击" },
      { Key: "E", Value: " 端口扫描攻击" },
    ],
    answer: "CE",
    qtype: "2",
  },
  {
    questionNumber: "45",
    question: "关于SecPath防火墙,下列说法正确的是口",
    options: [
      { Key: "A", Value: " 防火墙只能通过命令行方式升级版本" },
      { Key: "B", Value: " 防火墙通过WEB登录的默认用户名/密码是h3c/h3c" },
      { Key: "C", Value: " 防水墙的默认登录IP地址是192.168.0.1" },
      { Key: "D", Value: " 防火墙的域间策略只能再Web页面下配" },
    ],
    answer: "C",
    qtype: "1",
  },
  {
    questionNumber: "46",
    question: "H3C SecPath防火墙Web网站过滤具有哪些功能?",
    options: [
      { Key: "A", Value: " 网站地址过滤" },
      { Key: "B", Value: " URL参数" },
      { Key: "C", Value: " JAVA阻断" },
      { Key: "D", Value: " ActiveX阻断" },
    ],
    answer: "ABCD",
    qtype: "2",
  },
  {
    questionNumber: "47",
    question:
      "IPS (入侵防御系统)是一种基（）的产品,它对攻击识别是基于（）匹配的",
    options: [
      { Key: "A", Value: " 应用层,特征库" },
      { Key: "B", Value: " 网络层,协议" },
      { Key: "C", Value: " 应用层,协议" },
      { Key: "D", Value: " 网络层,特征库" },
    ],
    answer: "A",
    qtype: "1",
  },
  {
    questionNumber: "48",
    question: "下列关于对防火墙的功能描述,不正确的是",
    options: [
      { Key: "A", Value: " 防火墙能够执行安全策略" },
      { Key: "B", Value: " 防火墙能够产生审计日志" },
      { Key: "C", Value: " 防火墙能够限制组织安全状况的暴露" },
      { Key: "D", Value: " 防火墙能够防病毒" },
    ],
    answer: "D",
    qtype: "1",
  },
  {
    questionNumber: "49",
    question:
      "SecPath F1000-E防火墙Inline转发是依据Mac地址表完成的,上述说法是?",
    options: [
      { Key: "A", Value: " 正确" },
      { Key: "B", Value: " 错误" },
    ],
    answer: "B",
    qtype: "1",
  },
  {
    questionNumber: "50",
    question: "防火墙的DMZ区的主要用途是？",
    options: [
      { Key: "A", Value: " 解决公共设备如服务器防止问题" },
      { Key: "B", Value: " 解决军事侵犯问题" },
      { Key: "C", Value: " 解决防火墙区域划分不够问题" },
    ],
    answer: "A",
    qtype: "1",
  },
  {
    questionNumber: "51",
    question: "SecPath防火墙缺省开启黑名单功能。",
    options: [
      { Key: "A", Value: " 正确" },
      { Key: "B", Value: " 错误" },
    ],
    answer: "B",
    qtype: "1",
  },
  {
    questionNumber: "52",
    question: "一般来说,以下哪些功能不是由防火墙来实现的.",
    options: [
      { Key: "A", Value: " 隔离可信任网络和不可信网络" },
      { Key: "B", Value: " 防止病毒和木马程序入侵" },
      { Key: "C", Value: " 隔离内网和外网" },
      { Key: "D", Value: " 监控网络中会话状态" },
    ],
    answer: "B",
    qtype: "1",
  },
  {
    questionNumber: "53",
    question:
      "在防火墙应用中,一台需要与互联网通信的Web服务器放置在以下哪个区域时最安全?",
    options: [
      { Key: "A", Value: " DMZ区域" },
      { Key: "B", Value: " Trust区域" },
      { Key: "C", Value: " Local区域" },
      { Key: "D", Value: " Untrust 区域" },
    ],
    answer: "A",
    qtype: "1",
  },
  {
    questionNumber: "54",
    question:
      "由于新的漏洞、新的攻击工具、攻击方式的不断出现, IPS只有不断的更新特征库才能对网络、系统和业务的有效防御,下面关于IPS的特征：",
    options: [
      { Key: "A", Value: " H3C IPS升级持征库后需要重启设备才能是生效" },
      { Key: "B", Value: " H3C IPS特征库升级有手动升级和自动升级两种" },
      { Key: "C", Value: " H3C IPS只支持手动升级特征库" },
      { Key: "D", Value: " 用户可以H3C网站上自助进行License激活申请" },
    ],
    answer: "BD",
    qtype: "2",
  },
  {
    questionNumber: "55",
    question: "关于ACG1000智能和快速识别切换功能，下列说法正确的是：",
    options: [
      {
        Key: "A",
        Value:
          " 智能模式下应用识别只对50%流量生效,起到减轻设备性能压力的作用,在业务繁忙时可以使用",
      },
      {
        Key: "B",
        Value:
          " 快速模式下应用识别只对80%流里生效,起到减轻设备性能压力的作用,在业务繁忙时可以使用",
      },
      {
        Key: "C",
        Value:
          " 快速模式下应用识别只对50%流里生效,起到减轻设备性能压力的作用,在业务繁忙时可以使用",
      },
      { Key: "D", Value: " 系统默认智能模式" },
    ],
    answer: "CD",
    qtype: "2",
  },
  {
    questionNumber: "56",
    question: "ACG1000产品不支持VRF功能,因此无法可作为MCE设备和MPLS网络对接",
    options: [
      { Key: "A", Value: " 对" },
      { Key: "B", Value: " 错" },
    ],
    answer: "B",
    qtype: "1",
  },
  {
    questionNumber: "57",
    question:
      "ACG1000产品支持旁路部署,在系统管理-部署方式处将接收流量的接口打钩,并将流里镜像到该接口即可完成旁路部署",
    options: [
      { Key: "A", Value: " 对" },
      { Key: "B", Value: " 错" },
    ],
    answer: "A",
    qtype: "1",
  },
  {
    questionNumber: "58",
    question:
      "H3C NGFW的NAT特性支持下列哪些功能\nA. NAT PAT\nB. NAT-NOPAT\nC. Easy-IP\nD. NAT Server \nE. NAT444\nF. NAT Static\nG. NAT hairpin \n正确答案: ABCDEFG\n\n问题 59\nL2TP数据报文以报文的形式发送,注册的端口号为",
    options: [
      { Key: "A", Value: " NAT PAT" },
      { Key: "B", Value: " NAT-NOPAT" },
      { Key: "C", Value: " Easy-IP" },
      { Key: "D", Value: " NAT Server" },
      { Key: "E", Value: " NAT444" },
      { Key: "F", Value: " NAT Static" },
      { Key: "A", Value: " UDP, 1700" },
      { Key: "B", Value: " TCР, 1700" },
      { Key: "C", Value: " TCP,1701" },
      { Key: "D", Value: " UDP,1701" },
    ],
    answer: "D",
    qtype: "1",
  },
  {
    questionNumber: "60",
    question: "下列哪些协议属于二层隧道协议",
    options: [
      { Key: "A", Value: " L2TP" },
      { Key: "B", Value: " GRE" },
      { Key: "C", Value: " IPSec" },
      { Key: "D", Value: " PPTP" },
    ],
    answer: "AD",
    qtype: "2",
  },
  {
    questionNumber: "61",
    question: "IPSec协议族包含协议",
    options: [
      { Key: "A", Value: " PKI" },
      { Key: "B", Value: " AH" },
      { Key: "C", Value: " ESP" },
      { Key: "D", Value: " PPP" },
    ],
    answer: "BC",
    qtype: "2",
  },
  {
    questionNumber: "62",
    question: "IPSec协议支持哪些封装模式",
    options: [
      { Key: "A", Value: " 交换模式" },
      { Key: "B", Value: " 路由模式" },
      { Key: "C", Value: " 传输模式" },
      { Key: "D", Value: " 隧道模式" },
      { Key: "E", Value: " 桥模式" },
    ],
    answer: "CD",
    qtype: "2",
  },
  {
    questionNumber: "63",
    question: "防火墙不能实现哪些功能?",
    options: [{ Key: "A", Value: " 不能实现web防篡改" }],
    answer: "A",
    qtype: "1",
  },
  {
    questionNumber: "64",
    question: "关于SSL VPN的三种接入方式,下列说法正确的是。",
    options: [
      {
        Key: "A",
        Value: " WEB方式实现的真正的“免客户端”,主要适合于访问WEB站点",
      },
      { Key: "B", Value: " TCP接入比较适谷使用固定IP地址和端口的TCP应用" },
      { Key: "C", Value: " IP接入可以支持任何基于IP协议的网络应用" },
      { Key: "D", Value: " Telnet服务器跃可以通过TCP接入又可以通过IP接入" },
    ],
    answer: "ABCD",
    qtype: "2",
  },
  {
    questionNumber: "65",
    question: "根据防火墙的技术的演进特性,可以分为",
    options: [
      { Key: "A", Value: " 电信级防火墙" },
      { Key: "B", Value: " SMB应用代理防火墙" },
      { Key: "C", Value: " 状态防火墙;" },
      { Key: "D", Value: " 包过滤防火墙" },
    ],
    answer: "BCD",
    qtype: "2",
  },
  {
    questionNumber: "66",
    question:
      "基本NAT方式是指直接使用接口的公网IP地址作为转换后的源地址进行地址转换。上述说法是( )-",
    options: [
      { Key: "A", Value: " 正确" },
      { Key: "B", Value: " 错误" },
    ],
    answer: "B",
    qtype: "1",
  },
  {
    questionNumber: "67",
    question:
      "防火墙具有隐藏私网内部网络结构,防止外部攻击源对内部服务器的攻击行为的技术,称之为",
    options: [
      { Key: "A", Value: " 地址过滤;" },
      { Key: "B", Value: " NAT" },
      { Key: "C", Value: " 反转" },
      { Key: "D", Value: " IP欺骗" },
    ],
    answer: "B",
    qtype: "1",
  },
  {
    questionNumber: "68",
    question:
      "NAT技术可以隐藏私网的网络结构 防止外部攻击源对内部服务器的攻击。上述说法是",
    options: [
      { Key: "A", Value: " 正确" },
      { Key: "B", Value: " 错误" },
    ],
    answer: "A",
    qtype: "1",
  },
  {
    questionNumber: "69",
    question: "在Internet上,常见的安全威胁包括",
    options: [
      { Key: "A", Value: " 拒绝服务攻击" },
      { Key: "B", Value: " 资源共享" },
      { Key: "C", Value: " ARP攻击泛滥" },
      { Key: "D", Value: " 未授收资源访问" },
    ],
    answer: "ACD",
    qtype: "2",
  },
  {
    questionNumber: "70",
    question: "3C防火墙缺省的安全域包括",
    options: [
      { Key: "A", Value: " Trust" },
      { Key: "B", Value: " Untrust" },
      { Key: "C", Value: " Local" },
      { Key: "D", Value: " DMZ" },
    ],
    answer: "ABCD",
    qtype: "2",
  },
  {
    questionNumber: "71",
    question: "ACL (访问控制列表)的类型包括哪些",
    options: [
      { Key: "A", Value: " 基本ACL" },
      { Key: "B", Value: " 高级ACL" },
      { Key: "C", Value: " 二层ACL" },
      { Key: "D", Value: " 基于时间段的包过滤" },
    ],
    answer: "ABC",
    qtype: "2",
  },
  {
    questionNumber: "72",
    question:
      "NAT的Easy IP方式可以实现公网地址的复用,有效解决1PV4地址短缺问题。",
    options: [
      { Key: "A", Value: " 正确" },
      { Key: "B", Value: " 错误" },
    ],
    answer: "B",
    qtype: "1",
  },
  {
    questionNumber: "73",
    question:
      "NAT的NAT PAT方式属于多对一的地址转换,通过使用”地址+端口号”的形式进行转换,使多个私网用户可共用一个公网IP地址访问外网。上述说法是",
    options: [
      { Key: "A", Value: " 正确" },
      { Key: "B", Value: " 错误" },
    ],
    answer: "A",
    qtype: "1",
  },
  {
    questionNumber: "74",
    question: "防火墙双机热备工作填式包括主备模式和负载分担模式",
    options: [
      { Key: "A", Value: " 正确" },
      { Key: "B", Value: " 错误" },
    ],
    answer: "A",
    qtype: "1",
  },
  {
    questionNumber: "75",
    question: "下列关于应用层网关(ALG)技术,说法正确的是",
    options: [
      { Key: "A", Value: " ALG是为了解决某些协议无法成功穿越NAT所产生的技术;" },
      { Key: "B", Value: " ALG可以对某些多通道协议的载荷信息进行解析;." },
      {
        Key: "C",
        Value: " ALG可以解决包过滤防火墙无法理解数据报文上下文的问题",
      },
      {
        Key: "D",
        Value:
          " 除了解决NAT穿越问题, ALG还可以用来对应用层报文进行解析,从而阻断应用层攻击。",
      },
    ],
    answer: "ABC",
    qtype: "2",
  },
  {
    questionNumber: "76",
    question:
      "工程师小L在调试SecPath U200-S设备时,把缺省的GO/0接口当成内网口G0/1接口配置成了Untrust区域当成外网口,此时内网用户是否可以正常访问外网?",
    options: [
      { Key: "A", Value: " 能" },
      { Key: "B", Value: " 不能" },
    ],
    answer: "A",
    qtype: "1",
  },
  {
    questionNumber: "77",
    question:
      "AAA ( Authentication 、Authorization 、Accounting ,认证、授权、计费)是网络安全的一种管理机制,提供了认证、授权、计费三种安全功能。",
    options: [
      { Key: "A", Value: " 正确" },
      { Key: "B", Value: " 错误" },
    ],
    answer: "A",
    qtype: "1",
  },
  {
    questionNumber: "78",
    question: "用户AAA计费方式包括",
    options: [
      { Key: "A", Value: " 按流量计费" },
      { Key: "B", Value: " 本地计费" },
      { Key: "C", Value: " 远端计费" },
      { Key: "D", Value: " 不计费" },
    ],
    answer: "BCD",
    qtype: "2",
  },
  {
    questionNumber: "79",
    question: "哪些不属于AAA",
    options: [
      { Key: "A", Value: " ACL" },
      { Key: "B", Value: " Access" },
    ],
    answer: "AB",
    qtype: "2",
  },
  {
    questionNumber: "80",
    question: "AAA授权包括以下哪些？",
    options: [
      { Key: "A", Value: " 本地授权" },
      { Key: "B", Value: " 远程授权" },
      { Key: "C", Value: " 不授权" },
    ],
    answer: "A",
    qtype: "1",
  },
  {
    questionNumber: "81",
    question: "NAT PAT功能涉及到哪些层？",
    options: [{ Key: "A", Value: " 网络层和传输层" }],
    answer: "A",
    qtype: "1",
  },
  {
    questionNumber: "82",
    question: "ACG以下错误的是?",
    options: [{ Key: "A", Value: " 默认动作未不记录,还能往日志中查询到。" }],
    answer: "A",
    qtype: "1",
  },
  {
    questionNumber: "83",
    question: "NGFW的特征库有哪些?",
    options: [
      { Key: "A", Value: " IPS" },
      { Key: "B", Value: " AV" },
      { Key: "C", Value: " ACG" },
      { Key: "D", Value: " ARP" },
    ],
    answer: "AB",
    qtype: "2",
  },
  {
    questionNumber: "84",
    question: "防火墙实现包过滤的核心技术是ACL控制列表?",
    options: [
      { Key: "A", Value: " 正确" },
      { Key: "B", Value: " 错误" },
    ],
    answer: "A",
    qtype: "1",
  },
  {
    questionNumber: "85",
    question: "下列算法中，属于数字签名算法的是（）",
    options: [
      { Key: "A", Value: " SHA-1" },
      { Key: "B", Value: " DSA" },
      { Key: "C", Value: " RSA" },
      { Key: "D", Value: " MD5" },
    ],
    answer: "BC",
    qtype: "2",
  },
  {
    questionNumber: "86",
    question: "下列说法中，属于对称密码体制的特点是（）",
    options: [
      { Key: "A", Value: " 必须保证密钥的绝对安全性" },
      { Key: "B", Value: " 密钥量级为参与者的数目" },
      { Key: "C", Value: " 适合大数据量的加解密，加解密速度快" },
      { Key: "D", Value: " 加解密密钥相同或可以互相推导" },
    ],
    answer: "ACD",
    qtype: "2",
  },
  {
    questionNumber: "87",
    question: "SSL协议支持的加密算法包括",
    options: [
      { Key: "A", Value: " 3DES" },
      { Key: "B", Value: " DES" },
      { Key: "C", Value: " AES" },
      { Key: "D", Value: " RC4" },
    ],
    answer: "ABCD",
    qtype: "2",
  },
  {
    questionNumber: "88",
    question: "ESP报文格式如下图所示,关于ESP描述正确的有",
    options: [
      { Key: "A", Value: " SPI字段可以唯标识这个数据包的IPSec SA" },
      { Key: "B", Value: " ESP协议报文用IP报文协议号51表示" },
      {
        Key: "C",
        Value: " 根据特定加密算法的要求,可以在Padding字段增加填充位",
      },
      {
        Key: "D",
        Value: " 验证字段(Authentication Data )对于ESP来说是必选字段",
      },
    ],
    answer: "A",
    qtype: "1",
  },
  {
    questionNumber: "89",
    question:
      "如图所示, PC通过LAC建立到LNs的L2TP VPN连接,并通过该VPN隧道访问Http Sever服务器,发现能ping通该服务器,但是访问不了Http Server提供的Web页面,可能的原因为",
    options: [
      { Key: "A", Value: " LAC到LNS2间存在防火墙设备阻断了http访问" },
      { Key: "B", Value: " POEEAC之间存在防火墙设备阻断了http访问" },
      { Key: "C", Value: " LNSHp ever之间存在防火墙设备阻断了httpp访问" },
      {
        Key: "D",
        Value:
          " PC访问Http Sever交互报文长度为1500 ,且LAC和LNS之间有不支持IP分片的设备存在",
      },
    ],
    answer: "ABCD",
    qtype: "2",
  },
  {
    questionNumber: "90",
    question: "下面关于GRE说法正确的是",
    options: [
      {
        Key: "A",
        Value: " GRE用来封装IP协议报文时, GRE载荷协议类型号为0x0800,",
      },
      {
        Key: "B",
        Value: " GRE是一种在任意协议上承载任意-种其他协议的封装协议。",
      },
      { Key: "C", Value: " GRE报文对应IP协议号为50。" },
      {
        Key: "D",
        Value: " GRE协议不仅提供了隧道封装的方法,还提供了数据加密功能",
      },
    ],
    answer: "AB",
    qtype: "2",
  },
  {
    questionNumber: "91",
    question: "下列算法中,既可以用于加密,也可以用于签名的是",
    options: [
      { Key: "A", Value: " AES" },
      { Key: "B", Value: " DES" },
      { Key: "C", Value: " RSA" },
      { Key: "D", Value: " DSA" },
    ],
    answer: "C",
    qtype: "1",
  },
  {
    questionNumber: "92",
    question: "对证书授权中心的说法中,正确的是",
    options: [
      { Key: "A", Value: " CA按照证书链的层级机构进行工作" },
      { Key: "B", Value: " 证书授权中心简称CA" },
      { Key: "C", Value: " CA位于注册用户和RA之间" },
      { Key: "D", Value: " CA的最终权威中心成为根CA" },
    ],
    answer: "ABD",
    qtype: "2",
  },
  {
    questionNumber: "93",
    question: "根据加密时对明文消息是否分组,密钥体制可以分为",
    options: [
      { Key: "A", Value: " 私钥密码体制" },
      { Key: "B", Value: " 序列密码" },
      { Key: "C", Value: " 公钥密码体制" },
      { Key: "D", Value: " 分组密码" },
    ],
    answer: "BD",
    qtype: "2",
  },
  {
    questionNumber: "94",
    question: "默认情况下LAC和LNS之间通道的Hello报文发送时间间隔为",
    options: [
      { Key: "A", Value: " 10" },
      { Key: "B", Value: " 5" },
      { Key: "C", Value: " 30" },
      { Key: "D", Value: " 60" },
    ],
    answer: "D",
    qtype: "1",
  },
  {
    questionNumber: "95",
    question:
      "证书注册中心在收到用户的证书注册请求后,需要对注册用户进行验证,其验证的主要信息有",
    options: [
      { Key: "A", Value: " 确认注册用户有中请证书的权利" },
      { Key: "B", Value: " 确认注册用白拥有和证书请求相对应的私钥" },
      { Key: "C", Value: " 确认证书用户的身份信息正确" },
      { Key: "D", Value: " 确认注册用户是否曾注册过证书" },
    ],
    answer: "BC",
    qtype: "2",
  },
  {
    questionNumber: "96",
    question:
      "在SSL协议体系中,服务器端使用()端口接收并处理建立SSL链接的请求报文",
    options: [
      { Key: "A", Value: " 443" },
      { Key: "B", Value: " 441" },
      { Key: "C", Value: " 500" },
      { Key: "D", Value: " 520" },
    ],
    answer: "A",
    qtype: "1",
  },
  {
    questionNumber: "97",
    question: "关于x.509标准的说法,正确的是",
    options: [
      { Key: "A", Value: " 数字证书的格式不仅R有X509一种" },
      { Key: "B", Value: " 509是由国际电信联盟制定的数字证书标准" },
      { Key: "C", Value: " X609的版本号目前为V3" },
      {
        Key: "D",
        Value:
          " x509标准除了被数字证书采用外,还广泛应用于IPsec、SSL、安全电子交易等网络应用",
      },
    ],
    answer: "ABCD",
    qtype: "2",
  },
  {
    questionNumber: "98",
    question: "标准GRE头中必选字段包括有",
    options: [
      { Key: "A", Value: " Protocol Type" },
      { Key: "B", Value: " checksum" },
      { Key: "C", Value: " Key Field" },
      { Key: "D", Value: " Sequence Number" },
    ],
    answer: "A",
    qtype: "1",
  },
  {
    questionNumber: "99",
    question: "密码体制是一个使得通信双方能能够进行秘密通信的协议,它是由",
    options: [
      { Key: "A", Value: " 密钥" },
      { Key: "B", Value: " 明文、密文" },
      { Key: "C", Value: " 加密算法、解密算法" },
      { Key: "D", Value: " 通信双方" },
      { Key: "E", Value: " 信道" },
    ],
    answer: "ABC",
    qtype: "2",
  },
  {
    questionNumber: "100",
    question: "下面哪一项不是IKE的特点",
    options: [
      { Key: "A", Value: " 定时更新IPSec SA" },
      { Key: "B", Value: " 允许端到端动态验证" },
      { Key: "C", Value: " 定时更新IPsec共享密钥" },
      { Key: "D", Value: " 允许IPsec提供抗重播服务" },
    ],
    answer: "D",
    qtype: "1",
  },
];
