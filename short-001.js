export default [
  {
    question: "下列攻击手段中，不属于单包攻击的是（）",
    answer: "A",
    options: [
      { Key: "A", Value: "UDPflood 攻击" },
      { Key: "B", Value: "WinNuke" },
      { Key: "C", Value: "Land攻击" },
      { Key: "D", Value: "Smurf攻击" },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">L2TP数据报文以（）报文的形式发送，注册得端口号为（）',
    answer: "A",
    options: [
      { Key: "A", Value: "UDP1701" },
      { Key: "B", Value: "TCP 1701" },
      { Key: "C", Value: "UDP1700" },
      { Key: "D", Value: "TCP1700" },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">假设某企业总部和分支之间原采用物理专线连接的方式构建Intranet 网络；现欲将总部和分支都接入Intranet ，在总部和分支间启用VPN 隧道，并保证数据在网络上传输的私密性，可选择()VPN 技术',
    answer: "B",
    options: [
      { Key: "A", Value: "PPTP" },
      { Key: "B", Value: "IPsec" },
      { Key: "C", Value: "GRE" },
      { Key: "D", Value: "L2tp" },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">防火墙具有隐私内网网络结构，防止外部攻击源对内部服务器的攻击行为，称之为（）',
    answer: "C",
    options: [
      { Key: "A", Value: "攻击防范" },
      { Key: "B", Value: "包过滤" },
      { Key: "C", Value: "NAT" },
      { Key: "D", Value: "地址过滤 " },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question: '<br class="markdown_return">下列关于应用审计配置说法错误的是',
    answer: "C",
    options: [
      { Key: "A", Value: "URL 审计分为预定义URL 和自定义URL 两部分" },
      { Key: "B", Value: "旁路部署时做全部应用的升级，镜像流量不需做处理动作" },
      {
        Key: "C",
        Value: "日志级别默认为“不记录” 仍然可以在日志查询里查到相关日志信息",
      },
      { Key: "D", Value: "在“审计行为内容” 里可以配置某个 APP做的相应动作" },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">下列哪一种防火墙运行时速度最慢，并且运行在 OSI模型中的最高层',
    answer: "C",
    options: [
      { Key: "A", Value: " 包过滤防火墙" },
      { Key: "B", Value: "状态防火墙" },
      { Key: "C", Value: "应用代理防火墙" },
      { Key: "D", Value: "SMB防火墙" },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">下列关于对于 NGFW防火墙的功能描述，不正确的是',
    answer: "A",
    options: [
      { Key: "A", Value: "防火墙能够防网页被篡改" },
      { Key: "B", Value: "防火墙能够限制网络访问" },
      { Key: "C", Value: "防火墙能够产生审计日志" },
      { Key: "D", Value: "防火墙能够执行安全策略" },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">在UDP端口扫描中，对主机端口是否开放的判断依据是',
    answer: "A",
    options: [
      { Key: "A", Value: "根据被扫描主机开放端口放回的信息判断" },
      { Key: "B", Value: "根据被扫描主机关闭端口返回的信息判断" },
      { Key: "C", Value: "既不根据A也不根据B" },
      { Key: "D", Value: "综合考虑A和B的情况进行判断" },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">如果在IP网络中使用 GRE 协议在承载IPX协议，则报文的封装过程为',
    answer: "C",
    options: [
      { Key: "A", Value: "链路层协议->IPX>GRE>IP" },
      { Key: "B", Value: "链路层协议->GRE>IPX>IP" },
      { Key: "C", Value: "链路层协议->IP>GRE>IPX" },
      { Key: "D", Value: "链路层协议->GRE>IP>IPX " },
    ],
    analysis: "链路层--承载协议--封装协议--载荷协议--载荷数据",
    qtype: "1",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">防火墙缺省存在local、trust、DMZ、Management、untrust，并上述缺省安全域不能被删除，以上说法是',
    answer: "B",
    options: [
      { Key: "A", Value: " 错误" },
      { Key: "B", Value: " 正确" },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question: '<br class="markdown_return">下列那一项没有涉及到密码技术',
    answer: "C",
    options: [
      { Key: "A", Value: "SSH" },
      { Key: "B", Value: "SSL" },
      { Key: "C", Value: "GRE" },
      { Key: "D", Value: "IPSec/IKE " },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">H3C 负载均衡交换机提供了全面的健康检测算法，负载均衡调度算法以及会话保持功能，可以根据应用场景进行灵活的选择，从而达到最优的负载均衡效果，下面关于H3C负载均衡交换机描述不正确的是:',
    answer: "B",
    options: [
      {
        Key: "A",
        Value:
          "可以提供基于源地址/端口，HTTP头信息，SSLID，HTTPCookie 信息的会话保持",
      },
      { Key: "B", Value: "负戴均衡调度功能和会话保持功能不能同时启动" },
      {
        Key: "C",
        Value: "可以提供基于ICMP，TCP，HTTP，VFTP，QSSL92DNS 等健康检测算法；",
      },
      {
        Key: "D",
        Value:
          "可以提供基于轮询，最小连接，最小响应时间，加权方式，源/目的地址 Hash 等负载均衡调度算法。 ",
      },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return"><p>以下哪些防火墙不支持SSL VPN功能?</p>',
    answer: "A",
    options: [
      { Key: "A", Value: " F1000-S" },
      { Key: "B", Value: "U200-A" },
      { Key: "C", Value: "V100-S" },
      { Key: "D", Value: "V100-E " },
    ],
    analysis: "<p>ok</p>",
    qtype: "1",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">通过哪个工具可以简化IPSec VPN的配置?',
    answer: "A",
    options: [
      { Key: "A", Value: "VPN Manager" },
      { Key: "B", Value: "VMS" },
      { Key: "C", Value: "SMS" },
      { Key: "D", Value: "XLOG" },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question: '<br class="markdown_return">以下哪个场景不存在VPN 的需求？',
    answer: "A",
    options: [
      { Key: "A", Value: "大型企业园区互联" },
      { Key: "B", Value: "出差员工移动办公" },
      { Key: "C", Value: "超市/门店/卖场的联网" },
      { Key: "D", Value: "加油站/收费站的联网" },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question: '<br class="markdown_return">下面哪个不是VPN技术中用到的加密算法',
    answer: "D",
    options: [
      { Key: "A", Value: "DES" },
      { Key: "B", Value: "3DES" },
      { Key: "C", Value: "AES" },
      { Key: "D", Value: "RIP/RIP2 " },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question: '<br class="markdown_return">关于VPN，下述哪个说法是不正确的?',
    answer: "B",
    options: [
      { Key: "A", Value: "包转发是VPN 网关的关键性能指标；" },
      { Key: "B", Value: "接口数是VPN 网关的关键性能指标；" },
      { Key: "C", Value: "加密吞吐量是VPN 网关的关键性能指标；" },
      { Key: "D", Value: "最大并发隧道数是VPN 网关的关键性能指标。" },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question: '<br class="markdown_return">下述哪个是H3C专有的VPN技术',
    answer: "C",
    options: [
      { Key: "A", Value: "IPSec VPN" },
      { Key: "B", Value: "GRE VPN" },
      { Key: "C", Value: "动态 VPN" },
      { Key: "D", Value: "MPLS VPN " },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question: '<br class="markdown_return">下面哪个说法是错误的？',
    answer: "A",
    options: [
      {
        Key: "A",
        Value: "VPN 可以专线线路的备份，但是缺点在于组网复杂，而且价格昂贵",
      },
      {
        Key: "B",
        Value:
          "相对于PSTN拨号接入，VPN 接入方式可以提供更高的性能，而且安全性高",
      },
      {
        Key: "C",
        Value: "防火墙的一个功能特性是防止某些基于2层/3层网络协议的网络层攻击",
      },
      {
        Key: "D",
        Value: "防火墙可以提供路由交换、地址转换( NAT )、身份认证等多种功能 ",
      },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">SSL VPN 是解决远程用户访问敏感公司数据最简单最安全的解决技术。要使用SSL VPN ，需安装哪个软件?',
    answer: "B",
    options: [
      { Key: "A", Value: "客户端软件" },
      { Key: "B", Value: "浏览器" },
      { Key: "C", Value: "防火墙" },
      { Key: "D", Value: "防病毒" },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question: '<br class="markdown_return">SSL VPN 支持哪些接入方式?',
    answer: "D",
    options: [
      { Key: "A", Value: "Web" },
      { Key: "B", Value: "TCP" },
      { Key: "C", Value: "IP" },
      { Key: "D", Value: "以上都是" },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question: '<br class="markdown_return">SSL VPN 主要可以解决:',
    answer: "D",
    options: [
      { Key: "A", Value: "适应各种网络条件下的安全接入" },
      { Key: "B", Value: "无法忍受VPN 客户端损坏和网关配置修改后不能访问" },
      { Key: "C", Value: "细粒度访问控制" },
      { Key: "D", Value: "以上全是" },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question: '<br class="markdown_return">以下属于块加密算法的是:',
    answer: "C",
    options: [
      { Key: "A", Value: "SHA-1" },
      { Key: "B", Value: "MD5" },
      { Key: "C", Value: "DES" },
      { Key: "D", Value: "RC4" },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">在 L2TP报文协商过程中，进行IP地址分配工作是在以下哪个阶段？',
    answer: "D",
    options: [
      { Key: "A", Value: "Establish (链路建立)阶段" },
      { Key: "B", Value: "LCP协商阶段" },
      { Key: "C", Value: "CHAP或 PAP验证阶段" },
      { Key: "D", Value: "网络协商（NCP） 阶段" },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question: '<br class="markdown_return">AH 和 ESP的协议号分别是:',
    answer: "A",
    options: [
      { Key: "A", Value: " 51，50" },
      { Key: "B", Value: " 50，51" },
      { Key: "C", Value: " 17，47" },
      { Key: "D", Value: " 47，17" },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">IPSec 的加密和认证过程中所使用的密钥可以由()协议来自动生成和分发',
    answer: "B",
    options: [
      { Key: "A", Value: " ESP" },
      { Key: "B", Value: "IKE" },
      { Key: "C", Value: " SPI" },
      { Key: "D", Value: " AH" },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">在 L2TP组网中，LNS 侧对用户的验证方式有三种，代理验证、 强制验证和LCP重协商。 其中优先级最高的是',
    answer: "C",
    options: [
      { Key: "A", Value: " 代理验证" },
      { Key: "B", Value: " 强制CHAP验证" },
      { Key: "C", Value: " LCP重协商" },
      { Key: "D", Value: " 都相同 " },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question: '<br class="markdown_return">下列关于 L2TP的说法正确的有:',
    answer: "D",
    options: [
      {
        Key: "A",
        Value:
          " 用户的远程系统可以通过一个远程接入方式接入到运营商的LAC 中，由LAC 对LNS发起L2TP隧道并建立会话",
      },
      {
        Key: "B",
        Value:
          "当用户的远程系统使用VPDN客户端软件对LNS发起L2TP隧道并建立会话时，隧道直接建立在客户端和LNS 之间，此时L2TP系统不存在LAC",
      },
      {
        Key: "C",
        Value:
          " L2TP隧道存在于一对LAC与LNS 之间。一个隧道内包括一个控制连接( Control Connection）一个隧道内只支持一个会话",
      },
      {
        Key: "D",
        Value:
          " L2TP是面向连接的，可以为其传送的信息提供一定的可靠性。LAC维护远程系统对其发起的呼叫状态和信息。一对LAC 和LNS 也同时维护在两者之间的相应信息和状态 ",
      },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question: '<br class="markdown_return">GRE 协议的协议号是：',
    answer: "C",
    options: [
      { Key: "A", Value: "50" },
      { Key: "B", Value: "51" },
      { Key: "C", Value: "47" },
      { Key: "D", Value: "48" },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question: '<br class="markdown_return"><p>L2TP会话的建立是通过()完成的</p>',
    answer: "D",
    options: [
      { Key: "A", Value: "<p>TCP报文的 3 次握手</p>" },
      { Key: "B", Value: "<p>UDP报文的 3 次握手</p>" },
      { Key: "C", Value: "<p>TCP报文的 4 次握手</p>" },
      { Key: "D", Value: "<p>UDP报文的 4 次握手</p>" },
    ],
    analysis: "<p>OK</p>",
    qtype: "1",
    correct: "",
  },
  {
    question: '<br class="markdown_return">下面有关L2TP配置说法正确的有:',
    answer: "C",
    options: [
      {
        Key: "A",
        Value: "可以配置完整的用户名或者特定的域名作为触发 L2TP发起连接的条件",
      },
      {
        Key: "B",
        Value:
          "当使用IPpool 命令给对端分配地址时，应确保IPpool 地址池里的地址和虚模板接口地址在同一网段内",
      },
      {
        Key: "C",
        Value:
          "当 L2TP group组号为 0，且不指定通道对端名 remote-name 时，发起 L2TP连接时，忽略对端用户名",
      },
      { Key: "D", Value: "L2TP默认配置情况下启用了隧道验证，且验证密码为空" },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question: "ACL（访问控制列表）的类型包括有（）",
    answer: "BCD",
    options: [
      { Key: "A", Value: "七层ACL" },
      { Key: "B", Value: "二层ACL" },
      { Key: "C", Value: "高级ACL" },
      { Key: "D", Value: "基本ACL " },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: "以下关于HWTACACS协议与RADIUS协议说法正确的是()",
    answer: "BD",
    options: [
      { Key: "A", Value: "<p>HWTACACS 对报文主体全部进行加密</p>" },
      { Key: "B", Value: "<p>HWTACACS 采用TCP传输，RADIUS用UDP</p>" },
      {
        Key: "C",
        Value: "<p>HWTACACS和RADIUS都支持对设备的配置命令进行授权使用</p>",
      },
      { Key: "D", Value: "<p>RADIUS只对认证报文中的密码字段进行加密</p>" },
    ],
    analysis:
      "<p>A选项表述有问题，应该是除了HWTACACS报文头，对报文主体全部进行加密。</p>",
    qtype: "2",
    correct: [],
  },
  {
    question: "H3C NGFW的特征库包括以下哪些？",
    answer: "ACD",
    options: [
      { Key: "A", Value: "<p>URL分类特征库</p>" },
      { Key: "B", Value: "<p>ARP特征库</p>" },
      { Key: "C", Value: "<p>防病毒特征库</p>" },
      { Key: "D", Value: "<p>IPS特征</p>" },
    ],
    analysis:
      "<p>B选项没有ARP特征库说法，除非写成APR特征库或者ACG应用特征库</p>",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">IPsec 的优点有',
    answer: "BCD",
    options: [
      { Key: "A", Value: "抗DDoS（disributedDeny of sevice）" },
      { Key: "B", Value: "身份验证（data authentication）" },
      { Key: "C", Value: "参数完整性（dataIntegrity）" },
      { Key: "D", Value: "数据机密性（Confidenttiality） " },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">安全联盟security association，通过以下哪些元素来唯一标识？',
    answer: "ABD",
    options: [
      { Key: "A", Value: "IP目的地址" },
      { Key: "B", Value: "安全协议号" },
      { Key: "C", Value: "IP源地址" },
      { Key: "D", Value: "安全参数索引（SPI） " },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return"><p>H3C 防火墙缺省的安全域包括</p>',
    answer: "ABCDE",
    options: [
      { Key: "A", Value: "<p>DMZ</p>" },
      { Key: "B", Value: "<p>Management</p>" },
      { Key: "C", Value: "<p>untrust</p>" },
      { Key: "D", Value: "<p>local</p>" },
      { Key: "E", Value: "trust" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">NAT 的实现方式包括',
    answer: "ABCD",
    options: [
      { Key: "A", Value: " easyIP方式" },
      { Key: "B", Value: "Nat server方式" },
      { Key: "C", Value: "PAT方式" },
      { Key: "D", Value: "No-pat方式" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">用户AAA授权方式包括什么？',
    answer: "BCD",
    options: [
      { Key: "A", Value: " 管理员授权" },
      { Key: "B", Value: " 远端授权" },
      { Key: "C", Value: " 本地授权" },
      { Key: "D", Value: " 不授权" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">Pat方式的nat主要对数据包的（）信息进行转换',
    answer: "BC",
    options: [
      { Key: "A", Value: "应用层" },
      { Key: "B", Value: "传输层" },
      { Key: "C", Value: "网络层" },
      { Key: "D", Value: "数据链路层" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">IPSec 协议支持哪些封装模式',
    answer: "AD",
    options: [
      { Key: "A", Value: "隧道模式" },
      { Key: "B", Value: "交换模式" },
      { Key: "C", Value: "路由模式" },
      { Key: "D", Value: "传输模式" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">下面关于H3C ACG的说话正确的有',
    answer: "AB",
    options: [
      { Key: "A", Value: "ACG产品支持微信认证，短信认证等功能" },
      {
        Key: "B",
        Value:
          "ACG产品支持旁路部署，在系统管理部署方式处将接收流量的接口打钩，并将流量镜像到该接口",
      },
      {
        Key: "C",
        Value: "ACG产品不支持VRG功能，因此无法可作为MCE设备和MPLS网络对接",
      },
      {
        Key: "D",
        Value:
          "ACG的DFI主要用来是被应用的静态报文特征，DPI主要用来识别应用的动态流量特征",
      },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return"><p>关于 H3C 防火墙的安全域，以下说法正确的有</p>',
    answer: "ACD",
    options: [
      { Key: "A", Value: "<p>防火墙无安全区域优先级的概念</p>" },
      { Key: "B", Value: "<p>不同安全区域优先级一定不一样</p>" },
      { Key: "C", Value: "<p>防火墙自身所有接口都属于 local 区域</p>" },
      {
        Key: "D",
        Value:
          "<p>防火墙有五个安全区域，management、 local、 trust、Untrust、DMZ</p>",
      },
    ],
    analysis: "<p>OK</p>",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">一般来说，以下哪些功能是由NGFW防火墙来实现的',
    answer: "ABD",
    options: [
      { Key: "A", Value: "监控网络中回话状态" },
      { Key: "B", Value: "隔离内网与外网" },
      { Key: "C", Value: "防止内网被篡改" },
      { Key: "D", Value: "隔离可信任网络和不可信网络" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">关于H3C 防火墙，下列说法正确的是',
    answer: "BC",
    options: [
      { Key: "A", Value: "防火墙的安全策略只能在 WeB页面下配置." },
      { Key: "B", Value: "防火境的默认登录IP地址是 192.168.0.1" },
      { Key: "C", Value: "防火墙通过 WEB登录的默认用户名/密码是:admin/admin" },
      { Key: "D", Value: "防火墙只能通过命令行方式升级版本 " },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">防火墙的工作模式包括',
    answer: "BCD",
    options: [
      { Key: "A", Value: "交叉模式" },
      { Key: "B", Value: "混合模式" },
      { Key: "C", Value: "路由模式" },
      { Key: "D", Value: "透明模式" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">H3C SecPath 防火墙的默认域间访问控制策略是',
    answer: "CD",
    options: [
      { Key: "A", Value: " 所有区域都可以访问local 区域" },
      { Key: "B", Value: "属于同一个安全域的各个接口之间的报文可以互访" },
      { Key: "C", Value: "未划分到安全域的接口之间的报文会被丢弃" },
      { Key: "D", Value: "安全域间的报文默认丢弃，包括同域之间" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return"><p>H3C NGFW的DPI功能说法正确的有</p>',
    answer: "ABD",
    options: [
      { Key: "A", Value: "<p>APR功能可以实现对报文所属应用程序的识别</p>" },
      {
        Key: "B",
        Value:
          "<p>如果报文与黑名单匹配成功，则会直接丢弃，不进行其他检测口</p>",
      },
      { Key: "C", Value: "<p>无法深度识别到报文所属的应用程序口</p>" },
      { Key: "D", Value: "<p>业务流匹配安全策略后会进行DPI的检测</p>" },
    ],
    analysis: "<p>ok</p>",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">IPSec 是在IETF 制定的保证在IP网络上传送数据的安全保密性的三层安全协议体。IPSec 协议族包含',
    answer: "BC",
    options: [
      { Key: "A", Value: "PPP" },
      { Key: "B", Value: "ESP" },
      { Key: "C", Value: "AH" },
      { Key: "D", Value: "PKL" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">下面列举那些不属于AAA认证',
    answer: "BD",
    options: [
      { Key: "A", Value: " 授权（authorzation）" },
      { Key: "B", Value: "控制（ACL）" },
      { Key: "C", Value: "认证（authentication）" },
      { Key: "D", Value: "接入（Access） " },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">IPSec 支持哪些秘钥协商模式？',
    answer: "BD",
    options: [
      { Key: "A", Value: "DPD 方式" },
      { Key: "B", Value: "IKE 自动协商方式" },
      { Key: "C", Value: "模板方式" },
      { Key: "D", Value: "手工配置方式" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">根据防火墙的技术演进特征，可以分为',
    answer: "ABC",
    options: [
      { Key: "A", Value: "包过滤防火墙" },
      { Key: "B", Value: "状态防火墙" },
      { Key: "C", Value: "应用代理防火墙" },
      { Key: "D", Value: "电信级防火墙" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return"><p>负载均衡支持的算法包括：轮询，加权轮询，最少连接，加权最少连接，随机，加权随机，原地址HASH 等算法。</p>',
    answer: "ACD",
    options: [
      { Key: "A", Value: "<p>最少连接</p>" },
      { Key: "B", Value: "<p>预测模式</p>" },
      { Key: "C", Value: "<p>轮询</p>" },
      { Key: "D", Value: "<p>目标地址散列</p>" },
    ],
    analysis: "<p>ok</p>",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">H3C 目前已经推出一系列高性能负载均衡交换机，可以应用在网络的各个节点，下面哪些交换机系列支持负载均衡功能?',
    answer: "ABC",
    options: [
      { Key: "A", Value: "S9500E" },
      { Key: "B", Value: "S7500E" },
      { Key: "C", Value: " S12500" },
      { Key: "D", Value: " S5800" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">关于VPN，下述哪个说法是正确的?',
    answer: "CD",
    options: [
      { Key: "A", Value: "包转发率不是VPN 网关的关键性能指标；" },
      { Key: "B", Value: "接口数是VPN 网关的关键性能指标；" },
      { Key: "C", Value: "加密吞吐量是VPN 网关的关键性能指标；" },
      { Key: "D", Value: "最大并发隧道数是VPN 网关的关键性能指标。" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">下面那个用户可能存在VPN应用需求?',
    answer: "BCD",
    options: [
      {
        Key: "A",
        Value:
          "某大型网吧，提供高达千兆的Internet 接入以及多达台的主机，需要对上网用户进行有效的计费，对用户上网行为进行有效的管理；",
      },
      {
        Key: "B",
        Value:
          "大型制造企业，内部建设覆盖整个厂区的局域网，有统一的Intemet 出口，企业内部已经启动ERP，系统，应用完善，每天有大量的销售人员出差；",
      },
      {
        Key: "C",
        Value:
          "大型连锁机构，某品牌汽车 4S 店，总部设在上海，在全国省会额以上城市都有连锁店面，每天销售数据和财务信息需要向总部汇总；",
      },
      {
        Key: "D",
        Value:
          "某省级政府机构，在全省县级以及县级以上分布有专属分支机构，已经通过，线相互连接，正在考虑一种经济有效的方式实现专线线路备份。",
      },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">SSL VPN 同IPSec相比的优势是',
    answer: "ABC",
    options: [
      { Key: "A", Value: "采用B/S 架构，不需要进行客户端的安装和维护；" },
      {
        Key: "B",
        Value: "可以进一步控制VPN 内数据的访问，进行细粒度访问控制；",
      },
      { Key: "C", Value: "可以定制登录界面，实现个性化配置；" },
      { Key: "D", Value: "实现数据加密" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">VPN Manager 的两大核心作用是？',
    answer: "AB",
    options: [
      { Key: "A", Value: "VPN 部署" },
      { Key: "B", Value: "VPN 监控" },
      { Key: "C", Value: "VPN 备份" },
      { Key: "D", Value: "VPN 加速" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return"><p>VPN 组网和专线相比的优点包括以下哪几个?</p>',
    answer: "ABC",
    options: [
      { Key: "A", Value: "<p>性价比高</p>" },
      { Key: "B", Value: "<p>组网灵活</p>" },
      { Key: "C", Value: "<p>扩范性好</p>" },
      { Key: "D", Value: "<p>性能优异</p>" },
    ],
    analysis: "<p>ok</p>",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">下面哪些是 H3C SecPath 系列VPN 产品的功能特点?',
    answer: "BCD",
    options: [
      { Key: "A", Value: " 支持和 RSA 公司动态口令卡的集成，保证口令安全" },
      { Key: "B", Value: " 支持IPSecVPN 的 NAT 穿越，可以灵活组网" },
      { Key: "C", Value: " 支持DVPN (动态VPN )技术，降低配置难度" },
      { Key: "D", Value: "VPN mananger 实现VPN 业务集中管理" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return"><p>下述哪些是典型的VPN 部署模式?</p>',
    answer: "ABC",
    options: [
      { Key: "A", Value: "<p>分支机构与总部连接</p>" },
      { Key: "B", Value: "<p>移动用户接入总部网络</p>" },
      { Key: "C", Value: "<p>作为域线路的备份线路</p>" },
      { Key: "D", Value: "<p>局域网內建立加密通道</p>" },
    ],
    analysis: "<p>ok</p>",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">H3C SecPath 系列VPN产品有哪2款？',
    answer: "AB",
    options: [
      { Key: "A", Value: "V100-S" },
      { Key: "B", Value: "V1000-A" },
      { Key: "C", Value: "V2000" },
      { Key: "D", Value: "V3000" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">H3C SecPath 系列防火墙和VPN 产品中，哪款不支持 SSL VPN 功能?',
    answer: "ABC",
    options: [
      { Key: "A", Value: " F1000-A" },
      { Key: "B", Value: " F1000-S" },
      { Key: "C", Value: " F100-S" },
      { Key: "D", Value: " F100-E" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return"><p>SecPath SSL VPN 系列网关是 H3C 公司开发的新一代专业安全产品，具有丰富的功能，如:</p>',
    answer: "ACD",
    options: [
      {
        Key: "A",
        Value:
          "<p>完善的防火墙功能，支持外部攻击防范、 内网安全、 流里监控、 邮件过滤、 网页过滤、 应用层过滤等功能</p>",
      },
      { Key: "B", Value: "<p>强大的路由能力</p>" },
      { Key: "C", Value: "<p>提供多种智能分析和管理手段</p>" },
      { Key: "D", Value: "<p>支持丰富的 QoS 特性</p>" },
    ],
    analysis: "<p>无强大的路由能力</p>",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">衡量VPN 的性能，主要有以下哪些指标?',
    answer: "ABCD",
    options: [
      { Key: "A", Value: "最大并发连接数" },
      { Key: "B", Value: "加密性能" },
      { Key: "C", Value: "每秒新建连接数" },
      { Key: "D", Value: "最大并发隧道数" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">H3C 可提供的VPN 解决方案包括哪些?',
    answer: "ABC",
    options: [
      { Key: "A", Value: "IPSec VPN 决案" },
      { Key: "B", Value: "DVPN 解决方案" },
      { Key: "C", Value: "SSL VPN 解决方案" },
      { Key: "D", Value: "思科VPN " },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">SSL VPN 的安全性体现在',
    answer: "ABCD",
    options: [
      { Key: "A", Value: "传输加密" },
      { Key: "B", Value: "身份认证" },
      { Key: "C", Value: "权限管理" },
      { Key: "D", Value: "防病毒 " },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">L2TP建立隧道时使用的消息有',
    answer: "AB",
    options: [
      { Key: "A", Value: "SCCRQ ( Session.Contol-connecting-Request)" },
      { Key: "B", Value: "SCCRP (Session-Control-Connecting-Reply )" },
      { Key: "C", Value: "ICRP (Incoming-Call-Reply)" },
      { Key: "D", Value: "IORO (Incoming-Call-Request )" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">关于 AH、ESP的传输和隧道模式，下列描述正确的:',
    answer: "ABCD",
    options: [
      {
        Key: "A",
        Value: "在传输模式下，AH 协议验证IP报文的数据部分和IP报头中的不变部分",
      },
      {
        Key: "B",
        Value:
          "在隧道模式下，AH 协议验证全部的原始IP报文和封装后新IP头中的不变部分",
      },
      {
        Key: "C",
        Value: "在传输模式下，ESP协议对IP报文的有效数据进行加密(可附加验证)",
      },
      {
        Key: "D",
        Value: "在隧道模式下，ESP协议对整个原始IP报文进行加密（可附加验证） ",
      },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">关于IPSec 和IKE 的配置，下列描述错误的是:',
    answer: "CD",
    options: [
      { Key: "A", Value: "IKE 的密钥协商模式包括主模式和野蛮模式" },
      { Key: "B", Value: "IKE 认证方式包括预共享密钥和证书认证" },
      { Key: "C", Value: " NAT 穿越功能只能与野蛮模式配合使用" },
      { Key: "D", Value: " 配置IPSec 安全策略只能使用策略模板方式" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: "关于IPSec 和IKE ，下列说法中正确的是:",
    answer: "ABCD",
    options: [
      {
        Key: "A",
        Value:
          "IPSec 有两种协商方式建立安全联盟，一种手工方式(manual)一种IKE 自动协商(IsakmP)方式",
      },
      {
        Key: "B",
        Value:
          "IKE 野蛮模式可以选择根据协商发起端的IP地址或者ID，来查找对应的身份验证字并最终完成协商",
      },
      {
        Key: "C",
        Value:
          "NAT 穿越功能删去了IKE 协商过程中对UDR 端口号的验证过程，同时实现了对VPN 隧道中INAT 网关设备发现功能，即如果发现了 NAT 网设备，则将在完后的IPSee 数据传输中使用UDP封装",
      },
      { Key: "D", Value: "IKE 的 cookie 机制在一定程度上保护系统不受DOS 攻击" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">GRE VPN 配置任务包括。',
    answer: "ABCD",
    options: [
      { Key: "A", Value: " 创建虚拟 Tunnel 接口" },
      { Key: "B", Value: " 指定 Tunnel 接口的源端" },
      { Key: "C", Value: " 指定 Tunnel 接口的目的端" },
      { Key: "D", Value: " 设置 Tunnel 口的网络地址 " },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">以下关于L2TP的描述正确的是:',
    answer: "BCD",
    options: [
      { Key: "A", Value: " L2TP隧道传输 PPPoE 报文" },
      { Key: "B", Value: "与 PPP协议配合，L2TP协议支持隧道认证和报文计费功能" },
      { Key: "C", Value: "与 PPP协议配合，L2TP协议支持IP地址动态分配" },
      { Key: "D", Value: " L2TP协议不支持报文加密 " },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">L2TP建立会话时使用的消息有；',
    answer: "CD",
    options: [
      { Key: "A", Value: "SCCRQ ( Session-Control-Connecting-Request )" },
      { Key: "B", Value: "SCCRP(Session-Control-Connecting-Reply )" },
      { Key: "C", Value: "ICRQ (Incoming-Call-Request )" },
      { Key: "D", Value: "ICRP (Incoming-Call-Reply )" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">L2TP建立过程中PPP链路协商不成功，可能的导致原因包括:',
    answer: "ABCD",
    options: [
      { Key: "A", Value: "LAC 端设置的用户名或者密码有误" },
      { Key: "B", Value: "LNS 端没有设相应的用户" },
      { Key: "C", Value: "LNS 端没有设置地址池" },
      { Key: "D", Value: "LAC 和 LNS 端配置的密码验证类型不一致" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">L2TP协议主要操作包括:',
    answer: "ABCDEF",
    options: [
      { Key: "A", Value: "建立控制连接" },
      { Key: "B", Value: "建立会话" },
      { Key: "C", Value: "转发 PPP帧" },
      { Key: "D", Value: "Keepalive" },
      { Key: "E", Value: "关闭会话" },
      { Key: "F", Value: "关闭控制连接" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">H3C SecPath SSL VPN 提供的 FCP资源包括哪些?',
    answer: "ABCDE",
    options: [
      { Key: "A", Value: "远程访问服务" },
      { Key: "B", Value: "桌面共享" },
      { Key: "C", Value: "电子邮件" },
      { Key: "D", Value: "Notes 服务" },
      { Key: "E", Value: "TCP服务 " },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">H3C SecPath SSL VPN 产品所支持的主机检查内容包括',
    answer: "ABCD",
    options: [
      { Key: "A", Value: "操作系统类型、 版本和补丁" },
      { Key: "B", Value: "浏览器类型和版本" },
      { Key: "C", Value: "防火墙软件的类型、 版本和补丁" },
      { Key: "D", Value: "杀毒软件的类型版本和病毒库版本" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">一个完整的 SSL VPN 全握手过程包括:',
    answer: "ABCDE",
    options: [
      { Key: "A", Value: "协商 SSL 协议版" },
      { Key: "B", Value: "协商加密套" },
      { Key: "C", Value: "协商密钥参数" },
      { Key: "D", Value: "通信双方的身份" },
      { Key: "E", Value: "建立 SSL 连接" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">下列VPN 中，能单独提供数据加密持性的有:',
    answer: "BC",
    options: [
      { Key: "A", Value: "L2TPVPN" },
      { Key: "B", Value: "IPSecVPN" },
      { Key: "C", Value: "SSL VPN" },
      { Key: "D", Value: "GREVPN " },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">下列关于 SSL VPN 的说法，正确的是:',
    answer: "ABCD",
    options: [
      { Key: "A", Value: "SSL VPN 支持对客户端身份的验证" },
      { Key: "B", Value: "SSL VPN 支持双因子认证" },
      { Key: "C", Value: "SSL VPN 可以保证传输数据的完整性" },
      { Key: "D", Value: "SSL VPN 可以对传输的数据进行加密 " },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: "在 SSL VPN 技术中，下列哪些算法可以保证数据传输的完整性?",
    answer: "BC",
    options: [
      { Key: "A", Value: "<p>DES</p>" },
      { Key: "B", Value: "<p>MD5</p>" },
      { Key: "C", Value: "<p>SHA-1</p>" },
      { Key: "D", Value: "<p>3DES</p>" },
    ],
    analysis: "<p>ok</p>",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">H3C SSL VPN 的权限管理体系分为:',
    answer: "AC",
    options: [
      { Key: "A", Value: " 静态授权" },
      { Key: "B", Value: " 远程授权" },
      { Key: "C", Value: " 动态授权" },
      { Key: "D", Value: " 本地授权 " },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">为了实现对用户的访问控制，SSL VPN 需要对用户的身份进行验证，H3C SecPathVPN 产品支持的认证方式包括:',
    answer: "ABCD",
    options: [
      { Key: "A", Value: " 本地认证" },
      { Key: "B", Value: " Radius 认证" },
      { Key: "C", Value: " Ldap认证" },
      { Key: "D", Value: " AD 认证" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return"><p>关于 H3C SSL VPN 的 TCP接入方式，下列说法正确的是:</p>',
    answer: "AD",
    options: [
      {
        Key: "A",
        Value: "<p>TCP接入比较适合使用固定IP地址和端口的 TCP应用</p>",
      },
      { Key: "B", Value: "<p>TCP接入可以支持任何协议的网络应用</p>" },
      { Key: "C", Value: "<p>TCP接入只能访问 WEB类资源 testpau</p>" },
      {
        Key: "D",
        Value: "<p>TCP接入需要在客户端自动下载，安装一个VPN 客户端程序</p>",
      },
    ],
    analysis: "<p>TCP接入可以支持任何协议的网络应用，不支持UDP的应用。</p>",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">H3C SSL VPN 产品的主要功能包括:',
    answer: "ABCDE",
    options: [
      { Key: "A", Value: " 远程接入" },
      { Key: "B", Value: " 身份认证" },
      { Key: "C", Value: " 联机检查" },
      { Key: "D", Value: " 权限管理" },
      { Key: "E", Value: " 缓存清除 " },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">SSL VPN 有哪些接入方式?',
    answer: "ABD",
    options: [
      { Key: "A", Value: "WEB接入" },
      { Key: "B", Value: "TCP接入" },
      { Key: "C", Value: "UDP接入" },
      { Key: "D", Value: "IP接入 " },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">网络安全的研究内容包括',
    answer: "ABCD",
    options: [
      { Key: "A", Value: " 软件安全" },
      { Key: "B", Value: " 内容安全" },
      { Key: "C", Value: " 互联网与电信安全" },
      { Key: "D", Value: " 工业网络安全" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      "NAT的NAT static方式可以实现公网地址的复用，有效解决ipv4 地址短缺的，上述说法是（） ",
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
      '<br class="markdown_return">防范SYN Flood 攻击的常见手段是连接限制技术和连接代理技术，其中连接代理技术是指对TCP连接速率进行检测，通过设置检查阈值来发现并阻断攻击流量，上述说法是',
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
      '<br class="markdown_return">对于H3C防火墙来说，如果不将物理接口添加到某一安全域中，则该接口不能正常收发报文',
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
      '<br class="markdown_return">H3C 负载均衡交换机目前可以支持四层负载均衡，但不支持七层负载均衡',
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
      '<br class="markdown_return">F100-E 固定4个GE 接口，一个扩展槽，支持SSL VPN模块。',
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
      '<br class="markdown_return">基本NAT方式是指直接使用接口的公网IP地址作为转换后的源地址进行转换,上述说法是',
    answer: "B",
    options: [
      { Key: "A", Value: "正确" },
      { Key: "B", Value: "错误" },
    ],
    analysis: "",
    qtype: "3",
    correct: "",
  },
];
