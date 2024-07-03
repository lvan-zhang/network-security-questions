export default [
  {
    question:
      '<br class="markdown_return">H3C防火墙防病毒功能需要安装License文件。License到期后无法升级特征库，防病毒功能不能正常工作。',
    answer: "A",
    options: [
      { Key: "A", Value: "错误" },
      { Key: "B", Value: "正确" },
    ],
    analysis: "（无法更新，但是还能继续用旧的特征库）",
    qtype: "1",
    correct: "",
  },
  {
    question: '<br class="markdown_return">如何防范Land攻击?',
    answer: "D",
    options: [
      {
        Key: "A",
        Value:
          "检查TCP报文，如果报文的目的端口号为139，且TCP的紧急标志被置位，而且携带了紧急数据区，则根据用户配置选择对报文进行转发或拒绝接收，并将该攻击记示",
      },
      {
        Key: "B",
        Value:
          "检查ICMP应答请求报文的目的地址是否为子网广播地址或子网的网络地址，如果是则根据用户配置选择对报文进行转发或拒绝接收，井将该攻击记录到日志",
      },
      {
        Key: "C",
        Value:
          "检查UDP报文，如果报文的目的端口号为139，且UDP的紧急标志被置位，而且携带了紧急数据区，则根据用户配置选择对报文进行转发或拒绝接收，井将该攻击记:",
      },
      {
        Key: "D",
        Value:
          "检测每一个IP报文 的源地址和目标地址，若两者相同，或者源地址为环回地址127.0.0.1，则根据用户配置选择对报文进行转发或拒绝接收，并将该攻击记录到日志",
      },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">关于防火墙设备的ISP域的描述,正确的是',
    answer: "A",
    options: [
      { Key: "A", Value: "防火墙系统缺省存在域的名称为system" },
      { Key: "B", Value: "防火墙系统最多配置10个ISP域" },
      { Key: "C", Value: "防火墙系统缺省存在域的名称为administrator" },
      { Key: "D", Value: "防火墙系统最多配置16个ISP域" },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">若接口同时配置IPsec和nat,则以下哪些描述是正确的？',
    answer: "D",
    options: [
      { Key: "A", Value: "接口策略无法正常匹配" },
      {
        Key: "B",
        Value:
          "由于nat在报文处理流程的优先级上高于IPsec，因此应当走IPsec的流量无法正常走\t\tIPsec隧道",
      },
      {
        Key: "C",
        Value:
          "由于nat在报文处理流程的优先级上低于IPsec，因此应当走IPsec的流量可以正常走\t\tIPseC隧道",
      },
      { Key: "D", Value: "两者互不影响" },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question: "172.168.1.1为_____地址？",
    answer: "C",
    options: [
      { Key: "A", Value: " D类" },
      { Key: "B", Value: " A类" },
      { Key: "C", Value: " B类" },
      { Key: "D", Value: " C类" },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question:
      "OSI七层模型中，给每一个对等层数据起一个统一的名字为：协议数据单元。下列关于各层协议数据单元说 法正确的是？",
    answer: "A",
    options: [
      { Key: "A", Value: " 数据链路层数据称为帧" },
      { Key: "B", Value: " 传输层数据称为数据包" },
      { Key: "C", Value: " 网络层数据称为段" },
      { Key: "D", Value: " 表示层数据称为SPDU" },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">下面哪种VPN技术可以保证数据在网络上传递的私密性？',
    answer: "C",
    options: [
      { Key: "A", Value: " GRE" },
      { Key: "B", Value: " L2TP" },
      { Key: "C", Value: " IPsec" },
      { Key: "D", Value: " PPTP" },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question: '<br class="markdown_return">在防火墙上使用_____命令配置地址池。',
    answer: "B",
    options: [
      { Key: "A", Value: " nat ip pool" },
      { Key: "B", Value: " nat address-group" },
      { Key: "C", Value: " nat pool" },
      { Key: "D", Value: " nat net pool" },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question: '<br class="markdown_return">L2TP协议操作的正确顺序为以下哪项?',
    answer: "D",
    options: [
      {
        Key: "A",
        Value: "建立控制连接→转发PPP帧→建立会话→Keepalive→关闭隧道→关闭会话",
      },
      {
        Key: "B",
        Value: "建立控制连接→建立会话→转发PPP帧→Keepalive→关闭隧道→关闭会话",
      },
      {
        Key: "C",
        Value: "建立控制连接→转发PPP帧→-建立会话→Keepalive→关闭会话→关闭隧道",
      },
      {
        Key: "D",
        Value: "建立控制连接→建立会话→转发PPP帧→Keepalive→关闭会话→关闭隧道",
      },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">以下哪些配置可以实现portal用户的本地认证',
    answer: "D",
    options: [
      { Key: "A", Value: "[Device- line vty0-63] authentication-mode local" },
      { Key: "B", Value: "[Device line -console0] authentication-mode scheme" },
      { Key: "C", Value: "[Device-line-vty0-63] authentication-mode none" },
      { Key: "D", Value: "[Device-line-vty0-63] authentication-mode scheme" },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">某工程师在H3C防火墙上进行DPI相关配置时，下列说法正确的有，',
    answer: "B",
    options: [
      {
        Key: "A",
        Value:
          "在使用回滚特征库功能时，当前病毒特征库版本是V2.上一版本是V1。第一次执行回滚到上一版本的操作后，特征库替换成V1版本，再执行回滚上一版本的操作则特征库重新变为V2版本。",
      },
      {
        Key: "B",
        Value:
          "在单击&lt;提交>按钮，激活入侵防御配置文件的配置内容时，为避免重复配置此功能对DPI业务造成影响，只需要在完成部署DPI各个模块的配置文件后统一配置此功能。",
      },
      {
        Key: "C",
        Value:
          "设备虚拟化之后，可以做到License统 管理，这种情况下，在其中一个成员设备上安装License徽活文件即可。",
      },
      {
        Key: "D",
        Value:
          "当需要的IPS特征在设备当前IPS特征库中不存在时，可通过编辑Snort格式的IPS特征文件，并将其导入设备中来生成所需的IPS特征库，这些导入的IPS特征文件内容会自动覆盖，包括系统中所有的自定义IPS特征。",
      },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">某工程师在H3C防火墙上进行DPI相关配置时，下列说法正确的有，',
    answer: "B",
    options: [
      {
        Key: "A",
        Value:
          "在使用回滚特征库功能时，当前病毒特征库版本是V2.上一版本是V1。第一次执行回滚到上一版本的操作后，特征库替换成V1版本，再执行回滚上一版本的操作则特征库重新变为V2版本。",
      },
      {
        Key: "B",
        Value:
          "在单击&lt;提交>按钮，激活入侵防御配置文件的配置内容时，为避免重复配置此功能对DPI业务造成影响，只需要在完成部署DPI各个模块的配置文件后统一配置此功能。正确",
      },
      {
        Key: "C",
        Value:
          "设备虚拟化之后，可以做到License统 管理，这种情况下，在其中一个成员设备上安装License徽活文件即可。",
      },
      {
        Key: "D",
        Value:
          "当需要的IPS特征在设备当前IPS特征库中不存在时，可通过编辑Snort格式的IPS特征文件，并将其导入设备中来生成所需的IPS特征库，这些导入的IPS特征文件内容会自动覆盖，包括系统中所有的自定义IPS特征。错误",
      },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question:
      '\t单选<br class="markdown_return">某内网一台ftp服务器B:192.168.5.1现在需使用公网地址1.1.13与公网上的另一台FTP服务器C:67.209.187.182<br class="markdown_return">进行数据交互。出防火墙已经完成了接口IP和地址对象组的配置，将公网口加入了untrust威，私网口加入trust域。<br class="markdown_return">#<br class="markdown_return">Object-group ip address ftpserverb<br class="markdown_return">1retwork host address 192.168.5.1<br class="markdown_return">Object- group ip address internetaddress<br class="markdown_return">1network host address 1.1.1.3<br class="markdown_return">O.bject-group ip address ftpserverc <br class="markdown_return">1network host address 67.209.187.182<br class="markdown_return">为了实现两台ftp服务器可以正常实现数据交互以下哪个安全策胳规则配置是正确的?',
    answer: "C",
    options: [
      {
        Key: "A",
        Value:
          ' rule name ftp<br class="markdown_return">Source-zone trust<br class="markdown_return">Destination-zone untrust<br class="markdown_return">Source-ip internetaddress<br class="markdown_return">Destination-ip ftpserverc<br class="markdown_return">Action pass',
      },
      {
        Key: "B",
        Value:
          ' rule name ftp<br class="markdown_return">Source-zone trust<br class="markdown_return">Destination-zone untrust<br class="markdown_return">Source-ip ftpserverb<br class="markdown_return">Destination-ip ftpserverc<br class="markdown_return">Action pass',
      },
      {
        Key: "C",
        Value:
          ' rule name ftp1<br class="markdown_return">Source-zone trust<br class="markdown_return">Destination-zone untrust<br class="markdown_return">Source-ip ftpserverb<br class="markdown_return">Destination-ip ftpserverc<br class="markdown_return">Action pass<br class="markdown_return">Rule name ftp2<br class="markdown_return">Source-zone untrust<br class="markdown_return">Destination-zone trust<br class="markdown_return">Source-ip ftpserverc<br class="markdown_return">Destination-ip ftpserverb<br class="markdown_return">Action pass',
      },
      {
        Key: "D",
        Value:
          ' rule name ftp<br class="markdown_return">Source-zone untrust<br class="markdown_return">Destination-zone trust<br class="markdown_return">Source-ip  ftpserverc<br class="markdown_return">Destination-ip ftpserverb<br class="markdown_return">Action pass',
      },
    ],
    analysis: "双向访问开通",
    qtype: "1",
    correct: "",
  },
  {
    question:
      '\t<br class="markdown_return">如下图所示，客户需要两台防火墙做SSL VPN供远程办公，用户分为内部员工和合作员工，需要分开进行认证，并且区分可访问的资源。且防火墙管理员要求:合作用户采用本地密码+证书认证，内部员工采用radius认证，合作用户与内部员工采用相同的SSLVPN网关地址; Web Server可以被所有的用户访问，FTP Server 1只能被部门1访问，FTP Server 2只能被部门2访问。下列关键配置正确的是?<br class="markdown_return"><img src="https://up.zaixiankaoshi.com/e.question/112450/564abd83f54d6661daca596b4db76a2d">',
    answer: "C",
    options: [
      {
        Key: "A",
        Value:
          '配置SSL VPN证书认证访问实例<br class="markdown_return">#<br class="markdown_return">Sslvpn context ctxb<br class="markdown_return">Gateway Cc domain domainb<br class="markdown_return">Ip-tunnel interface SSLVPN-AC10<br class="markdown_return">Port-forward plist<br class="markdown_return">Local-port 33891 local-name 127.0.0.1 remote-server 172.31.0.200 remote-port 3389<br class="markdown_return">Ip-route-list iplist<br class="markdown_return">Include 172.31.0.0 255.255.252.0<br class="markdown_return">Url-list CC<br class="markdown_return">Url webserver2 ip portal url-value 172.31.0.200:8080/imc/<br class="markdown_return">Policy-group pgroupb<br class="markdown_return">Ip-tunnel address-pool ippool mask 255.255.255.0<br class="markdown_return">Ip-tunnel access-route ip-route-list iplist<br class="markdown_return">Resources url-list cc',
      },
      {
        Key: "B",
        Value:
          '配置PKI域cc<br class="markdown_return">Pki domain Cc<br class="markdown_return">Public-key rsa general name cc length 2048<br class="markdown_return">Undo crl check enable<br class="markdown_return">配置SSL服务器端策略cc<br class="markdown_return">Ssl server-policy cc<br class="markdown_return">Pki-domain cc<br class="markdown_return">Client-verify enable<br class="markdown_return">网关cc的IP地址为172.31.0.25，端口号为2000，并引用SSL服务器端策略cc，并开启SSL VPN网关cc.此网关用来对外提供SSL VPN验证的地址和端口号<br class="markdown_return">Sslvpn gateway cc<br class="markdown_return">Ip address 172.31.0.25 port 2000<br class="markdown_return">Ssl server-policy cc<br class="markdown_return">Service enable',
      },
      {
        Key: "C",
        Value:
          '创建本地SSL VPN用户组usergroupa/usergroupb/usergroupc,授权用户的SSL VPN策略组分别为为pgroupa/pgroupb/pgroupc<br class="markdown_return">User-group usergroupa<br class="markdown_return">Authorization-attribute sslvpn-policy-group pgroupa<br class="markdown_return">User-group usergroupb<br class="markdown_return">Authorization-attribute sslvpn-policy-group pgroupb<br class="markdown_return">User-group usergroupc<br class="markdown_return">Authorization-attribute sslvpn-policy-group pgroupc<br class="markdown_return">本地用户的类型一定是network ，并且关联group组<br class="markdown_return">Local-user cc2 class network<br class="markdown_return">Password simple 123<br class="markdown_return">Service-type sslvpn<br class="markdown_return">Group usergroupb<br class="markdown_return">Authorization-attribute user-role network-admin<br class="markdown_return">Local-user cc3 class network<br class="markdown_return">Password simple 123<br class="markdown_return">Service-type sslvpn<br class="markdown_return">Group usergroupc<br class="markdown_return">Authorization-attribute usi-role network-admin',
      },
      {
        Key: "D",
        Value:
          '配置SSL VPN访问实例ctxa引用SSL VPN网关，指定域名<br class="markdown_return">#<br class="markdown_return">Sslvpn context ctxa<br class="markdown_return">Gateway Cc domain domaina<br class="markdown_return">Port-forward plist<br class="markdown_return">Local-port 23 local-name 127.0.0.1 remote-server 172.31.0.18 remote-port 23<br class="markdown_return">Url-list cc<br class="markdown_return">Heading webresource<br class="markdown_return">Url webserver1 ip url-value 192.168.100.100<br class="markdown_return">Policy-group pgroupa<br class="markdown_return">Resources port-forward plist<br class="markdown_return">Resources url-list CC<br class="markdown_return">Aaa domain CC<br class="markdown_return">Service enable<br class="markdown_return">#创建IP接入地址池和AC接口<br class="markdown_return">Sslvpn ip address-pool ippool 192.168.200.2 192.168.200.100<br class="markdown_return">Interface SSLVPN-AC10<br class="markdown_return">Ip address 192.168.200.1 255.255.252.0<br class="markdown_return">Security-zone name Trust<br class="markdown_return">Import interface SSLVPN-AC10',
      },
    ],
    analysis: "答案：暂无 已选答案 需要实验验证",
    qtype: "1",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">关于独立LAC和客户LAC，下列说法错误的是?',
    answer: "A",
    options: [
      { Key: "A", Value: "客户LAC模式下对用户的验证只能由LNS侧执行" },
      {
        Key: "B",
        Value: "独立LAC模式中，远程系统或分支必须要依赖于Internet接入点",
      },
      { Key: "C", Value: "独立LAC模式下,所有VPN操作对终端用户而言是透明的" },
      { Key: "D", Value: "客户LAC模式不依赖额外的LAC设备，灵活性强" },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">内网侧有多个用户访问外网需求。某一时刻，主机A通过转换后的地址访问外网，nat设备收到外网侧的回程报文时，会如何进行处理? 单选',
    answer: "C",
    options: [
      { Key: "A", Value: "将报文广播给所有主机" },
      { Key: "B", Value: "丢弃报文" },
      { Key: "C", Value: "根据建立的no pat表顶将报文发送至主机A" },
      { Key: "D", Value: "查找路由表，寻找下一跳" },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">接口上同时配需nat servrer和nat outbound .则以下哪些描述是正确的? 单选',
    answer: "B",
    options: [
      { Key: "A", Value: " nat server处理报文的优先级低于nat outbound" },
      { Key: "B", Value: "两者互不影响" },
      { Key: "C", Value: "接口策略无法正常匹配" },
      { Key: "D", Value: " inat server处理报文的优先级高Fnalt outbound" },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return"><p>下列关于H3C入侵防御系统描述错误的有，</p>',
    answer: "A",
    options: [
      {
        Key: "A",
        Value:
          "<p>可以检测报文网络层的内容，以及对网络数据流进行协议分析和重组，并根据检测结果来对报文做出相应的处理。</p>",
      },
      {
        Key: "B",
        Value:
          "<p>可以对多种攻击类型提供防护措施，例如蠕虫、病毒、木马、僵尸网络、间谍软件、广告次件、CGI Common GatewayInteface) 攻击、跨站脚本攻击、注入攻击、目录遍历、信息池露、远程文件包含攻击、溢出攻击、代码执行、担绝服务、扫描工具、后门等。</p>",
      },
      {
        Key: "C",
        Value:
          "<p>实时检测流经设备的网络流量 ，并对入侵活动和攻击性网络流量进行实时拦截。</p>",
      },
      {
        Key: "D",
        Value:
          "<p>对经过设备的流量都可以进行检测，不仅可以防止来自企业外部的攻击，还可以防止发自企业内部的攻击。</p>",
      },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question:
      ' 单选<br class="markdown_return">L.AC发起控制连接时，LAC使用   端口向LNS的   端口发起控制连接建立请求。',
    answer: "B",
    options: [
      { Key: "A", Value: " UDP 1701源端口;任意UDP目的端口" },
      { Key: "B", Value: "任意UDP源端口; UDP 1701目的端口" },
      { Key: "C", Value: " UDP 1701源端口; UDP 1701目的端口" },
      { Key: "D", Value: "任意UDP源端口;任意UDP目的端口" },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">单选\t关于IPv4网络存在的网络安全隐患，下列说法错误的是？',
    answer: "D",
    options: [
      { Key: "A", Value: " 不提供数据完整性保护" },
      { Key: "B", Value: " 不提供认证服务" },
      { Key: "C", Value: " 不提供数据保密性服务" },
      { Key: "D", Value: " 没有重传机制" },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">内网侧属于trust域，外网侧属于untrust域，现内网用户访问外网，进行地址转换配置安全策赂时，下面说法正确的是？',
    answer: "A",
    options: [
      { Key: "A", Value: "需要配置安全策赂，放通trust域到untrust域的安全策略" },
      { Key: "B", Value: "需要配置安全策略，放通untrust域到trust域的安全策略" },
      { Key: "C", Value: "trust型untrust的安全策略中，源地址为地址池地址" },
      { Key: "D", Value: "untrust到trust的安全策略中，目的地址为地址池地址" },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">在IKE协商第一阶段中，以下哪个IKE交换模式不能提供身份保护功能?',
    answer: "D",
    options: [
      { Key: "A", Value: "快速模式" },
      { Key: "B", Value: "主模式" },
      { Key: "C", Value: "新组模式" },
      { Key: "D", Value: "野蛮校式" },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question: '<br class="markdown_return">以下属于公有地址范围的是?',
    answer: "BD",
    options: [
      { Key: "A", Value: "172.16.0.0-172.31.255.255" },
      { Key: "B", Value: " 192.0.0.0-192.167.255.255" },
      { Key: "C", Value: " 10.0.0.0-10.255.255.255" },
      { Key: "D", Value: "192.169.0.0-223.169.255.255" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">以下属于私有地址范围的是?',
    answer: "AC",
    options: [
      { Key: "A", Value: "172.16.0.0-172.31.255.255" },
      { Key: "B", Value: "1.0.0.0-9.255.255.255" },
      { Key: "C", Value: "192.168.0.0-192.168.255.255" },
      { Key: "D", Value: "172.32.0.0-172.191.255.255" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">SSL VPN的配置一般包含哪些部分?',
    answer: "ABCD",
    options: [
      { Key: "A", Value: "服务资源组授权" },
      { Key: "B", Value: "配置SSL VPN网关" },
      { Key: "C", Value: "配置SSL VPN策略组" },
      { Key: "D", Value: "配置SSL VPN访问实例" },
    ],
    analysis: "（A答案教材当中不是这样描述的）",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">下列关于SSL VPN的说法正确的是?',
    answer: "ACD",
    options: [
      { Key: "A", Value: " SSL VPN可以对用户的访问权限进行比较细致的管理" },
      {
        Key: "B",
        Value: "SSL报文不能通过NAT进行正常的传输，需要进行领外的配置",
      },
      { Key: "C", Value: " SSL VPN的使用可以减轻客户端的维护工作" },
      { Key: "D", Value: "SSL使用TCP的443端口进行通信" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">下列关于SSL VPN的Web接入方式的说法正确的是?',
    answer: "AD",
    options: [
      {
        Key: "A",
        Value:
          "通过对返回Web页面中的URL进行改写来实现远程用户可以在公网访问到私网中的\t\tURL",
      },
      { Key: "B", Value: "是一种基于C/S架构的访问模式" },
      { Key: "C", Value: "对各个种类的网络应用都能有很好的支持" },
      {
        Key: "D",
        Value: "不需要额外的VPN客户端。只需使用Web浏览器即可访问VPN资源",
      },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">下列哪些属于SSL记录层的功能?',
    answer: "ABCD",
    options: [
      { Key: "A", Value: "保证数据传输的有序性和可靠性" },
      { Key: "B", Value: "保护传输数据的私密性.对数据进行加密和解密" },
      { Key: "C", Value: "提高数据的传输效率，对数据进行压缩" },
      { Key: "D", Value: "验证传输数据的完整性，计算报文的摘要" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">下列关于H3C防火墙文件过滤功能说法错误的有:',
    answer: "AB",
    options: [
      {
        Key: "A",
        Value:
          "文件类型组可以用来对扩展名进行统一组织和管理。一个文件类型组中可以包含多个\t\t扩展名，且它们之间是与的关系。",
      },
      {
        Key: "B",
        Value:
          "文件过滤是一种根据文件扩展名信息对经设备传输的文件进行过滤的安全防护机制，\t\t使用该功能必须安装License,",
      },
      { Key: "C", Value: "文件过滤规则的动作只包括允许和丢弃。" },
      {
        Key: "D",
        Value:
          "可以根据报文传输的方向(包括上传、下载和双向 )来灵活控制对哪个方向的报文进行\t\t文件过滤。",
      },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">下列对H3C防火墙设备对报文进行数据过滤处理的整体流程描述正确的有:',
    answer: "BCD",
    options: [
      {
        Key: "A",
        Value: "如果报文未与任何数据过滤规则匹配成功。则设备直接允许报文通过。",
      },
      {
        Key: "B",
        Value:
          "如果报文匹配了某个安全策略，且此策略的动作是允许井引用了数据过滤配置文件，\t\t则对报文进行数据过滤处理。",
      },
      {
        Key: "C",
        Value: "如果报文只与一条规则匹配成功 ，则执行此规则中指定的动作。",
      },
      {
        Key: "D",
        Value:
          "如果报文同时与多条规则匹配成功，则执行这些规则中优先级最高的动作，动作优先\t\t级从高到低的顺序为:丢弃>允许，但是对于生成日志动作只要匹配成功的规则中已\t\t配置就会执行。",
      },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">以下关于主动攻击和被动攻击说法正确的是?',
    answer: "ABCD",
    options: [
      {
        Key: "A",
        Value:
          "被动攻击的攻击者在数据传输过程中进行侦听以获取机密信息，而数据的拥有者无法得知攻击者的活动",
      },
      {
        Key: "B",
        Value:
          "主动攻击指对数据进行假冒或篡改，以达到对业务资源进行非授权访问或破坏性攻击的目的",
      },
      {
        Key: "C",
        Value:
          "对于被动攻击可采用加密技术来保护信息的机密性，例如采用HTTPS、SFTP等应用层协议传输数据",
      },
      {
        Key: "D",
        Value: "对于主动攻击可采取数据源验证、完整性验证、防拒绝攻击技术等手段",
      },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">关于H3C防火墙的设备登录方式，下列说法正确的是?',
    answer: "BC",
    options: [
      { Key: "A", Value: "缺省情况下，设备的Telnet服务器功能处于关闭状态" },
      {
        Key: "B",
        Value: "设备支持两种Web登录方式: HTTP登录方式和HTTPS登录方式",
      },
      { Key: "C", Value: "缺省情况下，设备的SSH Server功能处于关闭状态" },
      { Key: "D", Value: "缺省情况下，设备管理接口的IP地址为192.168.1.1/24" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">某公司的组网中，将防火墙作为三层设备，其接口工作在三层模式以下关于防火墙接口的说法中正确的是?',
    answer: "BCD",
    options: [
      {
        Key: "A",
        Value:
          "三层模式的防火墙可以完成包过滤、NAT、ALG、ASPF、攻击防范等功能，且无需在防火墙上配置路由信息",
      },
      {
        Key: "B",
        Value:
          "防火墙的接口既可以工作在三层模式也可以工作在二层模式，对于接口而言，一次只能选择其中一种模式",
      },
      {
        Key: "C",
        Value: "二层模式的防火墙支持安全策略、ASPF状态过滤、攻击防范等功能",
      },
      {
        Key: "D",
        Value:
          "对于防火墙而言，可以同时支持二层模式和三层模式，即一部分接口工作在二层模式，一部分接口工作在三层模式",
      },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">以下关于用户授权说法正确的是',
    answer: "ABCD",
    options: [
      { Key: "A", Value: "只要用户通过授权，那么用户可以访问内部所授权的资源" },
      { Key: "B", Value: "对不同用户赋予不同的权限，限制用户可以使用的服务" },
      {
        Key: "C",
        Value:
          "授权是指用户认证通过后可以访问的资源，主要表现为下发用户权限、访问目录、用户级别等",
      },
      {
        Key: "D",
        Value:
          "管理员授权办公用户才能对服务器中的文件进行访问和打印操作，而其它临时访客不\t具备此权限",
      },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">基于ISP域的AAA实现有不进行AAA、本地AAA和远程AAA,以下说法错误的是',
    answer: "ABC",
    options: [
      { Key: "A", Value: "本地AAA需要配置RADIUS、HWTACACS或LDAP方案" },
      { Key: "B", Value: "不进行AAA无需在防火墙上进行多余配置" },
      { Key: "C", Value: "远程AAA配置本地用户" },
      { Key: "D", Value: "不进行AAA需要在防火墙上配置AAA实现方法为none" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return"><p>ACL规则的匹配顺序有哪些?</p>',
    answer: "BD",
    options: [
      { Key: "A", Value: "<p>IP地址范围大的优先</p>" },
      { Key: "B", Value: "<p>配置顺序</p>" },
      { Key: "C", Value: "<p>MAC地址范围大的优先</p>" },
      { Key: "D", Value: "<p>自动排序</p>" },
    ],
    analysis: "<p>（MAC地址越小优先）</p>",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return"><p>防火墙排错过程中。哪些命令可以查看报文是否到达防火墙?</p>',
    answer: "BCD",
    options: [
      { Key: "A", Value: "<p>Packet capture</p>" },
      { Key: "B", Value: "<p>display session table IPv4</p>" },
      { Key: "C", Value: "<p>Debugsecurity-policy</p>" },
      { Key: "D", Value: "<p>debug ip packetacl</p>" },
    ],
    analysis: "<p>应该是packet-capture 命令才行，单词不对。</p>",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">NGFW防火墙从域间策发展到安全策略，关于这两种访问控制策略说法正确的是?',
    answer: "ACD",
    options: [
      { Key: "A", Value: "配置安全策略前，必须先将对象策略转换为安全策略" },
      { Key: "B", Value: "安全策略功能与包过滤功能不能同时配置" },
      {
        Key: "C",
        Value: "安全策略可以基于用户对报文进行控制，使网络管理更加灵活和可视",
      },
      {
        Key: "D",
        Value:
          "当安全策略与包过滤策略同时配置时，报文与安全策略匹配成功后，不再进行包过滤处理",
      },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">关于nat常见术语，下面说法正确的是?',
    answer: "BD",
    options: [
      { Key: "A", Value: " nat设备一般指防火墙" },
      { Key: "B", Value: "公网一般指的是internet" },
      { Key: "C", Value: " nat地址池指的是私网地址的集合" },
      { Key: "D", Value: "私网指的是局域网，且内部地址从公网路由不可达" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">以下哪个可以利用IPseC-IKE野蛮模式进行解决?',
    answer: "ABC",
    options: [
      { Key: "A", Value: "NAT穿越" },
      { Key: "B", Value: "隧道两端协商慢的" },
      { Key: "C", Value: "发起者源地址不确定" },
      { Key: "D", Value: "协商过程中的安全性" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">通过与PPP模块配合，L2TP可以支持哪些功能？',
    answer: "ABC",
    options: [
      { Key: "A", Value: " 授权" },
      { Key: "B", Value: "认证" },
      { Key: "C", Value: "计费" },
      { Key: "D", Value: " 加密" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return"><p>下列关于SSL VPN的TCP接入方式的说法正确的是?</p>',
    answer: "AB",
    options: [
      {
        Key: "A",
        Value: "<p>用户可以通过TCP接入方式访问任意基于TCP的服务</p>",
      },
      { Key: "B", Value: "<p>是一种基于C/S架构的访问模式</p>" },
      {
        Key: "C",
        Value:
          "<p>TCP接入方式也称为&ldquo;网络扩展&rdquo;方式(错误，是IP接入）</p>",
      },
      {
        Key: "D",
        Value: "<p>不需要在远程主机上安装客户端软件（错误，必须安装）</p>",
      },
    ],
    analysis: "<p>ok</p>",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">下列关于入侵防御处理的整体流程说法正确的有',
    answer: "ABCD",
    options: [
      {
        Key: "A",
        Value:
          "如果报文同时与多个入侵防御特征匹配成功，则根据这些动作中优先级最高的动作进\t行处理。但是，对于黑名单、日志和捕获三个动作只要匹配成功的特征中存在就会执行。",
      },
      { Key: "B", Value: "如果报文与IP黑名单匹配成功，则直接丢弃该报文。" },
      {
        Key: "C",
        Value: "如果报文未与任何入侵防御特征匹配成功，则设备直接允许报文通过。",
      },
      {
        Key: "D",
        Value:
          "如果报文匹配了某条安全策略，且此策略的动作是允许并引用了入侵防御配置文件，\t则设备将对报文进行深度内容检测:首先，识别报文的协议，然后根据协议分析方案进行更精细的分析，并深入提取报文特征。",
      },
      {
        Key: "E",
        Value: "入侵防御处理动作优先级从高到低的顺序为:重置>黑名单>丢奔>允许。",
      },
    ],
    analysis: "(需要自己做实验分析）",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">下列关于H3C防火墙APR功能说法正确的有:',
    answer: "ABCD",
    options: [
      {
        Key: "A",
        Value:
          "在应用页面可以通过端口映射创建自定义的PBAR类型的应用，也可以对预定义应用进行修改。",
      },
      {
        Key: "B",
        Value:
          "NBAR是基于内容特征的应用层协议识别，该功能必须安装License才能使用。",
      },
      {
        Key: "C",
        Value:
          "能够对接口上接收或者发送的某个应用层协议的报文进行数目和速率统计。",
      },
      {
        Key: "D",
        Value:
          " PBAR是根据预定义的、自定义的端口与应用的映射关系识别出应用层协议。",
      },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">关于域间策略到安全策略的转换，下面说法正确的是？',
    answer: "CD",
    options: [
      { Key: "A", Value: "包过滤策略优先级高于安全策略" },
      { Key: "B", Value: "安全策略与对象策略可以共存" },
      { Key: "C", Value: "使用新版本时建议将对象策略转化为域间策略" },
      { Key: "D", Value: "安全策略与域间策略可以共存" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: "下列关于防火墙性能衡量指标的说法错误的是?",
    answer: "ACD",
    options: [
      { Key: "A", Value: " 时延越高，防火墙处理速度越快" },
      {
        Key: "B",
        Value:
          " 吞吐量需要对不同大小的数据包、不同方向的流量等进行测试，最终取平均值",
      },
      {
        Key: "C",
        Value: " 并发连接数越小，一段时间内能够允许同时上网的用户就越多",
      },
      { Key: "D", Value: " 新建连接数越小，抗攻击的能力也越强" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">在配置本地认证方式的L2TP VPN时，需要在LNS侧做什么配置?',
    answer: "ACD",
    options: [
      { Key: "A", Value: " [LNS-huser-vpnuser]12tp enable" },
      { Key: "B", Value: " [LNS-luser-vpmuser]service-type 12tp" },
      {
        Key: "C",
        Value:
          ' [LNS]l2tp-group 2 mode lns<br class="markdown_return">[LNS-12tp2]tunnel name LNS<br class="markdown_return">[LNS-12tp2]allow I2tp virtual-template VT1',
      },
      {
        Key: "D",
        Value:
          ' [LNS]domain system<br class="markdown_return">[LNS-isp-system]authentication ppp local',
      },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return"><p>以下哪些配置授权给用户PPP的登陆权限？</p>',
    answer: "BD",
    options: [
      { Key: "A", Value: "<p>[device-luser-manage-test]service-type ppp</p>" },
      { Key: "B", Value: "<p>[device-luser-network-test]service-type ppp</p>" },
      { Key: "C", Value: "<p>[device]local-user test class mansge</p>" },
      { Key: "D", Value: "<p>[device]local-user test class network</p>" },
    ],
    analysis: "<p>网络接入是network类型</p>",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">关于H3C防火墙的版本升级，下列说法正确的是？',
    answer: "AD",
    options: [
      {
        Key: "A",
        Value: " 从H3C官网获取软件版本，可通过FTP/TFTP将软件版本文件上传到本地",
      },
      { Key: "B", Value: " 版本升级后无需重启设备" },
      {
        Key: "C",
        Value: " 从官网获取的版本一般为bin文件，bin文件解压后为ipe文件",
      },
      {
        Key: "D",
        Value: " 用boot-loader命令来制定设备下次启动时使用的版本文件",
      },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      "以下关于防火墙Keepalive类型的IKE Keepalive功能说法正确的是____。",
    answer: "BC",
    options: [
      { Key: "A", Value: " 只有收到对端的ack回应报文才能确认对端在线" },
      { Key: "B", Value: " 收到对端发送的hello报文，也可以确认对端在线" },
      {
        Key: "C",
        Value: " 收到对端的hello报文，会刷新本端的hello报文发送计数器",
      },
      { Key: "D", Value: " 只有ack报文才能刷新Keepalive计时器" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">H3C安全设备支持的硬件虚拟化的技术有___。',
    answer: "AB",
    options: [
      { Key: "A", Value: " VRF技术" },
      { Key: "B", Value: " Context技术" },
      { Key: "C", Value: " SCF技术" },
      { Key: "D", Value: " SDN技术" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">关于H3C防火墙产品的安全区域，以下说法正确的有',
    answer: "BCD",
    options: [
      { Key: "A", Value: "不同安全域的优先级一定不一样" },
      {
        Key: "B",
        Value:
          "防火墙默认有五个安全区域: Management、Local、 Trust. Untrust、 DMZ",
      },
      { Key: "C", Value: "防火墙自身所有接口都属于Local区域" },
      { Key: "D", Value: "防火墙无安全域优先级的概念" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">关于H3C防火墙的Web管理方式,I下列说法正确的是?',
    answer: "ABD",
    options: [
      { Key: "A", Value: "Web默认HTTPS登录" },
      { Key: "B", Value: "Web登录方式的端口可以修改成其他端口" },
      { Key: "C", Value: "Web默认HTTP登录\t\t错误" },
      { Key: "D", Value: "支持通过ACL限制能够登录Web的源IP地址" },
    ],
    analysis: "（实验验证过）",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">输入display ipsec poliy命令看到如下信息，下列说法正确的有?<br class="markdown_return">IPsec Policy.1<br class="markdown_return">Sequence mumber. 10<br class="markdown_return">Mode: ISAKMP<br class="markdown_return">The policy configuration is incomplete:<br class="markdown_return">Remote- address： not set<br class="markdown_return">No permit rules in the ACL<br class="markdown_return">Traffic Flow Confidentiality: Disabled<br class="markdown_return">Security data flow. 3000<br class="markdown_return">Selector mode: standard<br class="markdown_return">Local address.<br class="markdown_return">Remote address.<br class="markdown_return">Transfomset 1<br class="markdown_return">IKE profile: 1',
    answer: "AC",
    options: [
      { Key: "A", Value: "Remote address未配置" },
      { Key: "B", Value: "这是个手动模式的ipsec policy node" },
      { Key: "C", Value: "这是一个 ISAKMP模式的ipsec policy node" },
      { Key: "D", Value: "ESecurity acL未配置" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return"><p>关于H3C防火墙安全策略匹配规则，以下说法正确的是?</p>',
    answer: "BC",
    options: [
      {
        Key: "A",
        Value:
          "<p>每个过滤条件被匹配成功的条件是：过滤条件的所有匹配项被匹配成功才可以</p>",
      },
      {
        Key: "B",
        Value:
          "<p>一条策略被匹配成功的条件是：策略中已配置的所有过滤条件必须均被匹配成功</p>",
      },
      {
        Key: "C",
        Value:
          "<p>每个过滤条件被匹配成功的条件是：过滤条件的任何一个匹配项被匹配成功即可</p>",
      },
      {
        Key: "D",
        Value:
          "<p>条策略被匹配成功的条件是：策略中已配置的任何一个过滤条件被匹配成功即可</p>",
      },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">以下关于用户认证说法正确的是',
    answer: "ABCD",
    options: [
      { Key: "A", Value: "用户认证是为了防止用户非法入侵" },
      {
        Key: "B",
        Value: "确认访问网络的远程用户的身份，判断访问者是否为合法的网络用户",
      },
      { Key: "C", Value: "认证动作包含核对用户名、密码和证书等" },
      {
        Key: "D",
        Value:
          "用户认证作为访问资源的第一道防线， 是最基本的安全服务，基于AAA技术对用户\t\t做认证是目前最常用的技术",
      },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">关于nat static下面说法正确的是?',
    answer: "BCD",
    options: [
      { Key: "A", Value: "在接口下配置，且需要使能" },
      { Key: "B", Value: "提供一对一映射服务，使用场景较少" },
      { Key: "C", Value: "若有多个映射关系，需要多次配置" },
      {
        Key: "D",
        Value:
          "若NAT设备为防火墙，内网处于Trust域，外网处于Untrust域， 且有双向访问需求，则需要创建Trust域到Untrust的安全策略。",
      },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">OSI参考模型在设计时遵循了哪些基本原则?',
    answer: "ABCD",
    options: [
      { Key: "A", Value: "层次的数目足够多，以避免各个层功能重复" },
      { Key: "B", Value: "各个层之间有清晰的边界，便于理解" },
      { Key: "C", Value: "每个层实现特定的功能，且相互不影响" },
      {
        Key: "D",
        Value: "每个层是服务者又是被服务者，既为上一层服务,又被下一层服务",
      },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">以下关于RADIUS报文结构中Atribute或说法正确的是',
    answer: "ACD",
    options: [
      { Key: "A", Value: " Attribute域的长度不定" },
      { Key: "B", Value: " Attribute域的长度固定" },
      { Key: "C", Value: " Attribute用于携带专门的认证、授权和计费信息" },
      {
        Key: "D",
        Value:
          " Attribute或可包含多个属性，每一个属性都采用(Type、Length、Value)的三元组的结\t\t构来表示",
      },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">安全域的特性方面Comware V7和Comware V5版本相比，有哪些差异?',
    answer: "ABD",
    options: [
      { Key: "A", Value: "同一安全域之间,默认策略是deny的" },
      { Key: "B", Value: " Comware V7的版本，创建安全域时，无域ID的概念" },
      { Key: "C", Value: "同一安全域之间，默认策略是permit的" },
      { Key: "D", Value: " Comware V7的版本,安全域没有优先级、共享等属性。" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return"><p>下面有关GRE和GRE VPN的说法正确的是</p>',
    answer: "BCD",
    options: [
      { Key: "A", Value: "<p>物理接口具有载荷协议的地址和相关配置</p>" },
      {
        Key: "B",
        Value: "<p>GRE是种在任何协议上承载任意一种其他协议的封装协议</p>",
      },
      { Key: "C", Value: "<p>tunnel接口具有承载协议的地址和相关配置</p>" },
      {
        Key: "D",
        Value:
          "<p>GRE VPN采用隧道技术。两个站点的路由器之间通过公共网络彼此的物理接口并依赖物理接口进行实际通信，两个路由器上分别建立一个虚拟接口--tunnel接口，两个tunnel接口之间建立点对点的虚拟连接，就形成一条跨越公共网络的隧道</p>",
      },
    ],
    analysis: "<p>ok</p>",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">以下哪些选项可以防范Smurf攻击?\t多选',
    answer: "AB",
    options: [
      { Key: "A", Value: "检查ICMP请求报文的目的地址是否为广播地址，是则丢弃" },
      { Key: "B", Value: "检查ICMP请求报文的目的地址是否为子网地址，是则丢弃" },
      { Key: "C", Value: "检查ICMP请求报文的源地址是否为子网地址，是则丢弃" },
      { Key: "D", Value: "检查ICMP请求报文的源地址是否为广播地址，是则丢弃" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">防火墙技术的发展趋势体现在以下哪些方面？',
    answer: "ABCD",
    options: [
      { Key: "A", Value: " 安全技术融合" },
      { Key: "B", Value: " 虚拟防火墙" },
      { Key: "C", Value: " 精细应用识别" },
      { Key: "D", Value: " 多因子身份验证" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">以下关于AH、ESP的说法正确的有',
    answer: "BD",
    options: [
      { Key: "A", Value: "AH具有加密特性，ESP不具有加密特性" },
      { Key: "B", Value: "NAT协议会导致AH封装的数据包完整性检查失败" },
      { Key: "C", Value: "AH和ESP的协议号分别是50，51" },
      { Key: "D", Value: "AH和ESP都具有抗重播能力" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: " 多选，防火墙安全策略的优势有哪些?",
    answer: "ABCD",
    options: [
      {
        Key: "A",
        Value: "安全策略 可以基于用户对报文进行控制， 使网络管理更加灵活和可视",
      },
      {
        Key: "B",
        Value:
          "与域间策略相比，安全策略不仅可以通过五元组对报文进行控制，还可以有效区分协议上承载的不同应用",
      },
      { Key: "C", Value: "与对象策略相比，突破了安全域有且只能有一个的限制" },
      {
        Key: "D",
        Value:
          "DPI深度安全提供了一种对数据报文进行一体化检测和多DP业务(如IPS、防病毒等)处理相结合的安全机制",
      },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: ' <br class="markdown_return">下列关于IPsec和IKE的说法正确的是',
    answer: "ABCD",
    options: [
      {
        Key: "A",
        Value:
          'NAT穿越功能删去了IKE协商过程中对UDP端口号的验证过程，同时实现了对VPN隧道中NAT网关设备的发现功能，<br class="markdown_return">即如果发现NAT网关设备，则将在之后的Psec数据传输中使用UDP封装。',
      },
      {
        Key: "B",
        Value:
          "Psec有两种协商方式建立安全联盟，一 种是手工方式(mamua),一种是IKE自动协商(iskmp)方式。",
      },
      {
        Key: "C",
        Value:
          "IKE野蛮模式可以选择根据协商发起端的P地址或者D,来查找对应的身份验证字并最终完成协商。",
      },
      { Key: "D", Value: "IKE的cooike机制在一定程度上保护系统不受DOS攻击。" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">不同的数据流具有不同的会话状态和会话创建机制，以下说法正确的是?',
    answer: "BD",
    options: [
      {
        Key: "A",
        Value: "对于TCP流，发起方和响应方完整交互一次报文后建立稳定会话",
      },
      {
        Key: "B",
        Value:
          "对于UDP/ICMP/Raw IP流，发起方和响应方完整交互一次报文后建立稳定会话",
      },
      {
        Key: "C",
        Value:
          "对于TCP/ICMP/Raw IP流，发起方和响应方完整交互一次报文后建立稳定会话",
      },
      { Key: "D", Value: "对于TCP流，发起方和响应方三次握手后建立稳定会话" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">互联网中常见的网络安全威胁方式分为',
    answer: "AD",
    options: [
      { Key: "A", Value: "主动攻击" },
      { Key: "B", Value: "立体攻击" },
      { Key: "C", Value: "平面攻击" },
      { Key: "D", Value: "被动攻击" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      ' <br class="markdown_return">下列关于SSL VPN的IP接入方式的说法正确的是?',
    answer: "BC",
    options: [
      { Key: "A", Value: " IP接入方式也称为”端口转发”方式" },
      { Key: "B", Value: "需要在远程主机上安装IP接入客户端软件" },
      {
        Key: "C",
        Value:
          "通过在远程主机上安装虚拟网卡，并配置内网IP和可以访问内网的路由实现",
      },
      { Key: "D", Value: "是一种基于B/S架构的访问模式" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">以下关于H3C ACG说法正确的有',
    answer: "AB",
    options: [
      { Key: "A", Value: " ACG产品支持微信认证、短信认证等功能" },
      {
        Key: "B",
        Value:
          " ACG产品支持旁路部署，部署时需要在”系统管理部署方式”处将接收流量的接口打钩，并在交换机上将流量镜像到该接口",
      },
      {
        Key: "C",
        Value: " ACG产品不支持VRF功能，因此无法作为MCE设备和MPLS网络对接",
      },
      {
        Key: "D",
        Value:
          " ACG的DFI主要用来识别应用的静态报文特征，DPI主要用来识别应用的动态流量特征",
      },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      ' <br class="markdown_return">以下关于RADIUS报文结构中Code域说法正确的是',
    answer: "BCD",
    options: [
      { Key: "A", Value: " Codel或的长度为2个字节" },
      { Key: "B", Value: " Code域值为4、5表示计费报文" },
      { Key: "C", Value: " Code或值为1、2、3表示认证报文" },
      { Key: "D", Value: " Codel或用来决定报文类型" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">多选 下列关于 SSL VPN 三种接入方式说法正确的是？',
    answer: "ABCD",
    options: [
      { Key: "A", Value: ' WeB接入的最大好处就是"免客户端"' },
      { Key: "B", Value: "IP接入方式具有良好的跨平台性和可维护性" },
      {
        Key: "C",
        Value: "IP接入可以支持任何基于IP协议的网络应用，组网时不易受限",
      },
      { Key: "D", Value: " TCP接入比较适合访问动态协商通讯端口的网络应用" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return"><p>多选 下图为接入类用户 RADIUS 认证的组网需求，防火墙为 SSL VPN 网关设备，连接公网用户和企业私有网络VPN ，用户通过防火墙可以通过IP接入方式全地访问VPN 内的 Server 。防火墙通过 RADIUS server 采用远程认证和授权方式对用户进行认证和授权。以下有关防火墙上配置思路正确的是</p>',
    answer: "ABCD",
    options: [
      { Key: "A", Value: "<p>确保内外网路由分别可达</p>" },
      { Key: "B", Value: "<p>设备侧完成 SSL VPN 相关配置</p>" },
      {
        Key: "C",
        Value:
          "<p>设备上配置相应的接入类用户组，并在用户 组视图下配置认证方式为 RADIUS 认证</p>",
      },
      { Key: "D", Value: "<p>接口加入安全域，放通相应的安全策略</p>" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">多选\t以下关于防火墙用户说法正确的是',
    answer: "CD",
    options: [
      { Key: "A", Value: " 管理类用户主要有 portal 、 SSL VPN 、 ppP等" },
      { Key: "B", Value: " 接入类用户主要是 ftP、 ssh 、 telnet ，httP" },
      { Key: "C", Value: " 防火墙用户分为管理类和接入类用户" },
      {
        Key: "D",
        Value: " 防火墙的本地用户，是指在本地设备上设置的一组用户属性的集合",
      },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">下列关于H3C防火墙上L2TP配置说法正确的是？',
    answer: "AB",
    options: [
      {
        Key: "A",
        Value:
          " 配置 alloW12tPvirtual - template 时，如果L2TP组号为1，可以不用配置隧道对端名称",
      },
      {
        Key: "B",
        Value:
          "配置 alloW12tPvirtual - template 时，如果L2TP组号不为1，必须配置隧道对端名称",
      },
      {
        Key: "C",
        Value:
          "配置 alloW12tPvirtual - template 时，如果L2TP组号不为1，可以不用配置隧道对端名称",
      },
      {
        Key: "D",
        Value:
          " 配置 alloW12tPvirtual - template 时，如果L2TP组号为1，必须配置隧道对端名称",
      },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">多选\t下面说法正确的是？',
    answer: "ABCD",
    options: [
      { Key: "A", Value: " . nat alg 可以解析应用层报文" },
      {
        Key: "B",
        Value:
          " alg 可以根据端口号识别协议类型并且解析应用层数据，进行完整的 nat 转换口",
      },
      {
        Key: "C",
        Value:
          " . ftP数据连接和控制链接端口号不同，传统 nat 会导致 ftP功能异常",
      },
      { Key: "D", Value: " . nat 只转换IP地址和端口号，不解析应用层数据" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return"><p>多选以下关于IKE协商的说法正确的有</p>',
    answer: "BCD",
    options: [
      {
        Key: "A",
        Value:
          "<p>IKE协商分为两个阶段，阶段一的交换模式为快速模式，阶段一的交换模式为主模式和野蛮模式</p>",
      },
      {
        Key: "B",
        Value:
          "<p>新组模式用于协商新的DH交换组，信息交换用于通告SA的状态和消息</p>",
      },
      { Key: "C", Value: "<p>IKE主模式总共有三个步骤，六条消息</p>" },
      { Key: "D", Value: "<p>IKE野蛮模式使用三条消息来提供完整性保护</p>" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">多选 以下关于用户计费说法正确的是',
    answer: "ACD",
    options: [
      { Key: "A", Value: "记录用户上网时长" },
      { Key: "B", Value: "记录用户上网习惯" },
      { Key: "C", Value: "记录用户上网行为" },
      { Key: "D", Value: "记录用户上网流量" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return"><p>多选下列关于配置H3C入侵防御特征描述错误的有?</p>',
    answer: "AC",
    options: [
      {
        Key: "A",
        Value: "<p>预定义入侵防御特征的内容能被创建、修改和删除.</p>",
      },
      {
        Key: "B",
        Value: "<p>入侵防御特征的生效状态可以在例外特征中修改。</p>",
      },
      {
        Key: "C",
        Value:
          "<p>当入侵防御配置文件中不包含某条入侵防御规则时，可以将此规则设置为规则例外，添加到该入侵防配置文件中，例外征中动作的优先级不富于</p>",
      },
      { Key: "D", Value: "<p>自定义特征的内容能被创建、修改和删除。</p>" },
    ],
    analysis: "<p>ok</p>",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">多选\t以下关于RADIUS认证配置正确的是',
    answer: "BD",
    options: [
      {
        Key: "A",
        Value: " [H3C-radius-name] primary authorization 10.110.1.1 1813",
      },
      { Key: "B", Value: " [H3C] radius scheme rscheme" },
      {
        Key: "C",
        Value: " [H3C-radius-name] primary accounting 10.110.1.1 1812",
      },
      {
        Key: "D",
        Value: " [H3C-radius-name] primary authentication 10.110.1.1 1812",
      },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">防火墙上所有接口都默认属于Local域。',
    answer: "A",
    options: [
      { Key: "A", Value: "正确" },
      { Key: "B", Value: "错误" },
    ],
    analysis: "",
    qtype: "3",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">IPsec IKE野蛮模式主要解决因发起者源地址不确定而无法选择预共享密钥。',
    answer: "A",
    options: [
      { Key: "A", Value: "正确" },
      { Key: "B", Value: "错误" },
    ],
    analysis: "（其实后半句话有些歧义）",
    qtype: "3",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">会话管理的内存分配机制是每次分配一块大内存，当这块大内存中的所有会话老化后才会回收这块内存，所以看到会话增减，内存利用率却没有明显增加。',
    answer: "A",
    options: [
      { Key: "A", Value: "正确" },
      { Key: "B", Value: "错误" },
    ],
    analysis: "",
    qtype: "3",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">NAT最初设计的目的是为了实现任意两个网络之间的互访',
    answer: "B",
    options: [
      { Key: "A", Value: "正确" },
      { Key: "B", Value: "错误" },
    ],
    analysis: "",
    qtype: "3",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">在进行网络地址转换的时候，NAT 设备从地址池挑选地址是随机的。',
    answer: "B",
    options: [
      { Key: "A", Value: "正确" },
      { Key: "B", Value: "错误" },
    ],
    analysis: "",
    qtype: "3",
    correct: "",
  },
  {
    question:
      '双机热备负载分担模式下的两台防火墙，备份设备不处理流量。上述说法是<br class="markdown_return">的。',
    answer: "B",
    options: [
      { Key: "A", Value: "正确" },
      { Key: "B", Value: "错误" },
    ],
    analysis: "",
    qtype: "3",
    correct: "",
  },
  {
    question: '<br class="markdown_return">GRE的协议号为 47；',
    answer: "A",
    options: [
      { Key: "A", Value: "正确" },
      { Key: "B", Value: "错误" },
    ],
    analysis: "",
    qtype: "3",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">会话的内存分配机制是每次分配一大块内存给很多会话，而只要这些会话有一个没老化，则整个大内存都不会被释放，所以看到会话减少，但是内存也没有明显减少，除非会话变化的幅度很大。',
    answer: "A",
    options: [
      { Key: "A", Value: "正确" },
      { Key: "B", Value: "错误" },
    ],
    analysis: "（题目超纲，需要自己去查资料确认答案）",
    qtype: "3",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">NAT设备指的是防火墙，可以增强内部往来安全 ,正确 还是错误？',
    answer: "B",
    options: [
      { Key: "A", Value: "正确" },
      { Key: "B", Value: "错误" },
    ],
    analysis: "",
    qtype: "3",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">在进行网络地址转换的时候，NAT设备从地址池挑选地址是随机的',
    answer: "B",
    options: [
      { Key: "A", Value: "正确" },
      { Key: "B", Value: "错误" },
    ],
    analysis: "",
    qtype: "3",
    correct: "",
  },
  {
    question:
      '  <br class="markdown_return">N.at的所有模式下，需要做nat的报文在经过nat设备时均会生成映射表项，记录映射关系。',
    answer: "A",
    options: [
      { Key: "A", Value: "正确" },
      { Key: "B", Value: "错误" },
    ],
    analysis: "",
    qtype: "3",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return"><p>单选某公司的防火墙设备工作了一段时间后，已经存在大量的会话表项，此时加入另一台防火墙设备，在两台设备上使能双机热备功能后，先运行的防火墙会将已有的会话表项一次性同步到新加入的设备，这个过程称为实时备份。上述说法是的。</p>',
    answer: "B",
    options: [
      { Key: "A", Value: "正确" },
      { Key: "B", Value: "错误" },
    ],
    analysis:
      "<p>实时备份：目前HA支持热备的业务表项包括：NAT端口块表项、AFT端口块表项、会话表项、会话关联表项和各个安全业务模块自身生成的业务表项 </p>",
    qtype: "3",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">到防火墙的报文分为两种，一种到防火墙本地，称为本地报文，另一种由防火墙转发出去，为转发报文。',
    answer: "A",
    options: [
      { Key: "A", Value: "正确" },
      { Key: "B", Value: "错误" },
    ],
    analysis: "",
    qtype: "3",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return"><p>单选 no&ndash;pat模式下nat设备支持icmp、udp、tcP协议报文。</p>',
    answer: "A",
    options: [
      { Key: "A", Value: "正确" },
      { Key: "B", Value: "错误" },
    ],
    analysis: "<p>ok</p>",
    qtype: "3",
    correct: "",
  },
];
