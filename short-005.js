export default [
  {
    questionNumber: "1",
    question: "H3C SSL VPN通过那些因素综合确定用户可以合法访问的网络资源?",
    options: [
      { Key: "A", Value: " 安全策略" },
      { Key: "B", Value: " 用户身份" },
      { Key: "C", Value: " 主机检查结果" },
      { Key: "D", Value: " 认证方式" },
    ],
    answer: "ABC",
    qtype: "2",
  },
  {
    questionNumber: "2",
    question:
      "数字签名对应于我们生活中的手写签名,但它和手写签名也存在一些差别下列说法中,正确的有",
    options: [
      {
        Key: "A",
        Value:
          " 数字签名中签,和消息是分开的,需要一种方法将签名和消息绑定在一起,而在传统的手写签名中签名是被签名消息的一部分",
      },
      {
        Key: "B",
        Value: " 数字签名和手写签名都具有法律效力,都是重要的认证手段",
      },
      {
        Key: "C",
        Value:
          " 数字签名只有接受者才可能对签名进行验证,而手写签名可以接受任何人的公开验证",
      },
      {
        Key: "D",
        Value: " 数字签名和手写签名样,备独无亡的特性,既无法被修改也无法被复制",
      },
    ],
    answer: "AB",
    qtype: "2",
  },
  {
    questionNumber: "3",
    question: "下列哪些交换模式是在IKE协商的第二阶段存在的?",
    options: [
      { Key: "A", Value: " 主模式" },
      { Key: "B", Value: " 野蛮模式" },
      { Key: "C", Value: " 快速模式" },
      { Key: "D", Value: " 普通模式" },
    ],
    answer: "C",
    qtype: "1",
  },
  {
    questionNumber: "4",
    question: "L2TP协议是承载在UDP协议之上的,数据包的封装过程为",
    options: [
      { Key: "A", Value: " 私有IP->L2TP->UDP->PPP->公有IP" },
      { Key: "B", Value: " 私有IP->PPP->L2TP-> UDP->公有IP" },
      { Key: "C", Value: " 私有IP->PPP->UDP->L2TP->公有IP" },
      { Key: "D", Value: " 私有IP->L2TP->PPP->UDP->公有1P" },
    ],
    answer: "B",
    qtype: "1",
  },
  {
    questionNumber: "5",
    question: "SSL协议支持的块加密算法有",
    options: [
      { Key: "A", Value: " 3DES" },
      { Key: "B", Value: " DES" },
      { Key: "C", Value: " AES" },
      { Key: "D", Value: " RC4" },
    ],
    answer: "ABC",
    qtype: "2",
  },
  {
    questionNumber: "6",
    question: "下列关于GRE穿越NAT的说法正确的是",
    options: [
      {
        Key: "A",
        Value:
          " 对于基于端口或协议的NAT ,即NAPT来说,标准GRE协议报文可以正常穿越,且可以区分相同源地址发起的不同GRE隧道。",
      },
      {
        Key: "B",
        Value:
          " 普通的源(目的地址作转化的NAT ,标准GRE封装协议报文不可以正常穿越。",
      },
      {
        Key: "C",
        Value:
          " 对于基于端口或协议的NAT , 即 NAPT来说,NGRE可以通过Key选项来区分相同源地址发起的不同GRE隧道。",
      },
      {
        Key: "D",
        Value:
          " 对于基于端口或协议的NAT ,即NAPT来说, GRE可以通过Sequence Number选项来区分相同源地址发起的不同GRE隧道",
      },
    ],
    answer: "BC",
    qtype: "2",
  },
  {
    questionNumber: "7",
    question: "对于消息摘要的描述，正确的有",
    options: [
      { Key: "A", Value: " 相同的消息一定会产生相同的摘要" },
      { Key: "B", Value: " 不同的消息不会产生相同的摘要" },
      { Key: "C", Value: " 即使消息相同，定会产生不同的摘要" },
      { Key: "D", Value: " 摘要是随机生成的，所以可能长度发生变化" },
    ],
    answer: "AB",
    qtype: "2",
  },
  {
    questionNumber: "8",
    question: "L2TP建立隧道时使用的消息有",
    options: [
      { Key: "A", Value: " SCCRP" },
      { Key: "B", Value: " SCCRQ" },
      { Key: "C", Value: " ICRQ" },
      { Key: "D", Value: " ICRP" },
    ],
    answer: "AB",
    qtype: "2",
  },
  {
    questionNumber: "9",
    question: "在下列哪种密码应用中,我们是使用公钥加密、私钥解密?",
    options: [
      { Key: "A", Value: " 非对称密码" },
      { Key: "B", Value: " 对称密码" },
      { Key: "C", Value: " 数字签名" },
      { Key: "D", Value: " DH交换" },
    ],
    answer: "A",
    qtype: "1",
  },
  {
    questionNumber: "10",
    question: "关于数字证书的说法,正确的是。",
    options: [
      {
        Key: "A",
        Value:
          " 数字证书就是我们网络身份证,它提供了证明自己身份和识别对方身份的功能",
      },
      { Key: "B", Value: " 数字证书是由CA来颁发的" },
      { Key: "C", Value: " 数字证书将个人私钥和个人身份进行了绑定" },
      { Key: "D", Value: " 数字证书一旦生成,将永久有效" },
    ],
    answer: "AB",
    qtype: "2",
  },
  {
    questionNumber: "11",
    question: "下列关于L2TP的说法正确的是",
    options: [
      { Key: "A", Value: " 用户和LAC之间会进行协商以获取IP地址" },
      {
        Key: "B",
        Value:
          " 在LAC上会根接入用户的PPP验证信息进行验证,以确定是否是L2tp的用户以及用户属于哪个L2TP组，随后LAC会向相应的LNS发起建立隧道的请求。",
      },
      { Key: "C", Value: " 随道建立后,LAC与用户相连接的PCP会变为UP状态" },
      { Key: "D", Value: " CHAP验证只能在用户端和LNS端进行" },
    ],
    answer: "B",
    qtype: "1",
  },
  {
    questionNumber: "12",
    question: "DES是最著名的对称密码算法,其属于分组密码,明文分组的位数为",
    options: [
      { Key: "A", Value: " 64" },
      { Key: "B", Value: " 56" },
      { Key: "C", Value: " 128" },
      { Key: "D", Value: " 256" },
    ],
    answer: "A",
    qtype: "1",
  },
  {
    questionNumber: "13",
    question: "网络通信对安全性的要求包括",
    options: [
      { Key: "A", Value: " 完整性" },
      { Key: "B", Value: " 私密性" },
      { Key: "C", Value: " 可控性" },
      { Key: "D", Value: " 身份验证" },
    ],
    answer: "ABD",
    qtype: "2",
  },
  {
    questionNumber: "14",
    question: "下列关于SSL VPN的说法,正确的是",
    options: [
      { Key: "A", Value: " SSL VPN可以对传输的数据进行加密" },
      { Key: "B", Value: " SSL VPNI支持对客户端身份的验证" },
      { Key: "C", Value: " SSL VPN支持双因子认证" },
      { Key: "D", Value: " SSL VPN可以保证传输数据的完整性" },
    ],
    answer: "ABCD",
    qtype: "2",
  },
  {
    questionNumber: "16",
    question: "工作数字签名算法和哈希函数的关系是",
    options: [
      { Key: "A", Value: " 都是用来签名的算法" },
      { Key: "B", Value: " 都是用来进行加密的算法" },
      {
        Key: "C",
        Value: " 哈希函数济生消息摘要,而数字签名算法对消息摘要进行加密",
      },
      { Key: "D", Value: " 数字签名对消息进行签名,然后由哈希函数产生摘" },
    ],
    answer: "C",
    qtype: "1",
  },
  {
    questionNumber: "17",
    question: "IPsec的优点有",
    options: [
      { Key: "A", Value: " 数据完整性( Data intergrity）" },
      { Key: "B", Value: " 数据机密性(Conidentiality )" },
      { Key: "C", Value: " 身份验证( Data Authentication )" },
      { Key: "D", Value: " 抗DDos （Distributed Deny of Service）" },
    ],
    answer: "ABC",
    qtype: "2",
  },
  {
    questionNumber: "18",
    question: "SSL握手层包括哪些协议?",
    options: [
      { Key: "A", Value: " 告警协议" },
      { Key: "B", Value: " 握手协议" },
      { Key: "C", Value: " 密钥改变协议" },
      { Key: "D", Value: " 会话保持协议" },
    ],
    answer: "ABC",
    qtype: "2",
  },
  {
    questionNumber: "19",
    question: "下列关于加密和解密的说法,正确的是",
    options: [
      {
        Key: "A",
        Value: " 将密文解码为明文的过程称之为解密,它是加密的相反过程",
      },
      {
        Key: "B",
        Value: " 加密和解密是互逆的两个过程,因此加解密的密钥需要相同",
      },
      { Key: "C", Value: " 一般来讲,加密比解密要消耗更多的设备性能" },
      {
        Key: "D",
        Value:
          " 密码算法的安全性不仅和密钥相关,也和加解密算法相关,因此算法不能公开",
      },
    ],
    answer: "A",
    qtype: "1",
  },
  {
    questionNumber: "20",
    question: "SSL协议向() 提供端到端的、有连接的加密传输服务",
    options: [
      { Key: "A", Value: " 传输层" },
      { Key: "B", Value: " 应用层" },
      { Key: "C", Value: " 网络层" },
      { Key: "D", Value: " 数据链路层" },
    ],
    answer: "B",
    qtype: "1",
  },
  {
    questionNumber: "21",
    question: "下列VPN中,能单独提供数据加密特性的有",
    options: [
      { Key: "A", Value: " IPSEC VPN" },
      { Key: "B", Value: " L2TP VPN" },
      { Key: "C", Value: " SSL VPN" },
      { Key: "D", Value: " GRE VPN" },
    ],
    answer: "AC",
    qtype: "2",
  },
  {
    questionNumber: "22",
    question:
      "如下图所示的网络中, RTB对RTA发起IPSec连接,有关NAT穿越描述正确的是",
    options: [
      { Key: "A", Value: " IP Sec隧道两端不启用IKE的情况下亦能实现NAT穿越" },
      {
        Key: "B",
        Value: " 通过将IPsec报文封装在UDP 1701端协议报文中实现IPSec的NAT穿越",
      },
      { Key: "C", Value: " RTA在主模式情况下不能实现NAT穿越" },
      { Key: "D", Value: " NAT网关会修改UDP报文头, IPSec报文的IP头" },
    ],
    answer: "D",
    qtype: "1",
  },
  {
    questionNumber: "23",
    question: "SSL协议支持的流加密算法包括",
    options: [
      { Key: "A", Value: " 3DES" },
      { Key: "B", Value: " DES" },
      { Key: "C", Value: " AES" },
      { Key: "D", Value: " RC4" },
    ],
    answer: "D",
    qtype: "1",
  },
  {
    questionNumber: "24",
    question: "当出现大量VPN需求时，可以引导那些产品？",
    options: [
      { Key: "A", Value: " SecPath系列防火墙" },
      { Key: "B", Value: " SecPath系列VPN" },
      { Key: "C", Value: " H3C IPS" },
      { Key: "D", Value: " SR系列路由器" },
    ],
    answer: "ABC",
    qtype: "2",
  },
  {
    questionNumber: "25",
    question: "下面关于L2TP的描述正确的是？",
    options: [
      { Key: "A", Value: " L2TP隧道传输PPPOE报文" },
      { Key: "B", Value: " 与PPP协议配合，L2TP协议支持隧道认证和报文计费功能" },
      { Key: "C", Value: " 与PPP协议配合，L2TP协议支持IP地址动态分配" },
      { Key: "D", Value: " L2TP协议不支持报文加密" },
    ],
    answer: "BCD",
    qtype: "2",
  },
  {
    questionNumber: "26",
    question: "H3C Secpath防火墙具有那些功能，可以保证网络的安全性",
    options: [
      { Key: "A", Value: " 访问控制" },
      { Key: "B", Value: " NAT转换" },
      { Key: "C", Value: " 攻击防范" },
      { Key: "D", Value: " 黑名单" },
      { Key: "E", Value: " 入侵防御" },
    ],
    answer: "ABCDE",
    qtype: "2",
  },
  {
    questionNumber: "27",
    question: "H3C SecPath防火墙的会话包含以下哪些信息？",
    options: [
      { Key: "A", Value: " 会话发起方和响应方IP地址及端口" },
      { Key: "B", Value: " 会话的创建时间" },
      { Key: "C", Value: " 会话的老化时间" },
      { Key: "D", Value: " 会话当前所处的状态" },
    ],
    answer: "ABCD",
    qtype: "2",
  },
  {
    questionNumber: "28",
    question: "关于H3C NGFW安全区域说法正确的是",
    options: [
      {
        Key: "A",
        Value:
          " 防火墙默认有五个安全区域：Management、Local、Trust、Untrust、DMZ",
      },
      { Key: "B", Value: " 防火墙自身所有接口都属于Local区域" },
      { Key: "C", Value: " 非管理接口必须加入业务安全区域才能转发数据" },
      { Key: "D", Value: " 处于同一区域内的接口数据默认无法互通" },
    ],
    answer: "ABCD",
    qtype: "2",
  },
  {
    questionNumber: "29",
    question: "HWTACACS协议和RADIUS协议的区别",
    options: [
      { Key: "A", Value: " 以上信息记住" },
      { Key: "B", Value: " 以上信息记住" },
      { Key: "C", Value: " 以上信息记住" },
      { Key: "D", Value: " 以上信息记住" },
    ],
    answer: "A",
    qtype: "1",
  },
  {
    questionNumber: "30",
    question:
      "经过IPSec封装后的报文格式如下图所示，参与验证算法生成验证字段的数据报文有哪些？",
    options: [
      { Key: "A", Value: " AH头" },
      { Key: "B", Value: " 新报文头" },
      { Key: "C", Value: " 原始报文" },
      { Key: "D", Value: " 共享秘钥" },
    ],
    answer: "ABCD",
    qtype: "2",
  },
  {
    questionNumber: "31",
    question: "CHAP是三次握手的验证协议，其中第1次握手是完成（）",
    options: [
      { Key: "A", Value: " 主验证方将一段随机报文和用户名传递到被验证方" },
      { Key: "B", Value: " 被验证方直接将用户名和令传递给验证方" },
      {
        Key: "C",
        Value:
          " 被验证方生成段随机报文，用自己的令对这段随机报文进行加密，然后与自己的用户名一起传递给被验证方",
      },
      { Key: "D", Value: " 验证方将用户名和密码传递到被验证方" },
    ],
    answer: "A",
    qtype: "1",
  },
  {
    questionNumber: "32",
    question:
      "假如Alice和Bob使用DH算法来进行秘钥协商，Maliory作为中间人来窃听他们之间的通信，则以下说法中正确的是？",
    options: [
      {
        Key: "A",
        Value:
          " 中间人Maliory是通过侦听Alice和Bob协商的共享秘钥来实现攻击目的的",
      },
      { Key: "B", Value: " DH算法天生就容易遭受中间人攻击" },
      {
        Key: "C",
        Value:
          " 中间人Maliory在发起中间人攻击时，需要分别和Alice和Bob协商出不同的共享秘钥",
      },
      { Key: "D", Value: " DH算法的安全性是基于“素因子分解难题”的" },
    ],
    answer: "BC",
    qtype: "2",
  },
  {
    questionNumber: "33",
    question: "ACG带宽管理通道匹配规则正确的是？",
    options: [
      {
        Key: "A",
        Value:
          " 在透明模式下部署QoS时，需要将线路绑定在物理接口上，绑定在桥接口上无法生效。",
      },
      {
        Key: "B",
        Value:
          " 当父节点带宽充足，而需要保障的通道带宽未达到时，其他通道可以借用此部分空余带宽，即低优先级抢到上限后，中优先级才能抢。",
      },
      {
        Key: "C",
        Value:
          " 当存在N个相同优先级抢占时，按照均分处理，每个通道平分1/N的带宽。",
      },
      {
        Key: "D",
        Value:
          " QoS按照树形结构匹配，只要某节点存在叶子节点的情况，就会继续向下进行查找，一旦出现不匹配的情况，此处将会匹配父节点的默认通道进行QoS。",
      },
      { Key: "E", Value: " 所有子节点的带宽之和必须小于父节点的带宽。" },
    ],
    answer: "ACDE",
    qtype: "2",
  },
  {
    questionNumber: "34",
    question:
      "H3C ACG的带宽管理功能，可以对通过设备的流量实现基于   ？进行精细化的管理和控制。",
    options: [
      { Key: "A", Value: " 用户／用户组" },
      { Key: "B", Value: " 源／目的IP地址" },
      { Key: "C", Value: " MAC地址" },
      { Key: "D", Value: " 服务" },
      { Key: "E", Value: " 时间" },
      { Key: "F", Value: " 应用/应用组" },
    ],
    answer: "ABDEF",
    qtype: "2",
  },
  {
    questionNumber: "35",
    question: "与IPSec VPN相比，SSL VPN具有哪些优点？",
    options: [
      { Key: "A", Value: " SSL VPN客户端　免安装、免维户，易于使用" },
      { Key: "B", Value: " SSL VPN可以根据远端主机的安全状态实现动态授权" },
      { Key: "C", Value: " SSL VPN有很好的网络连通性" },
      { Key: "D", Value: " SSL VPN可以拥有高粒度的访问控制" },
    ],
    answer: "ABCD",
    qtype: "2",
  },
  {
    questionNumber: "36",
    question:
      "在IKE协商模式中，哪种模式适合用于分支机构采用ADSL拨号与总部建立IPSec连接\nA. 野蛮模式\nB. 主模式\nC. 传输模式\nD. 隧道模式\n\n正确答案: A\n\n\n问题 37\nH3C防火墙的安全域有优先级概念，上述说法是否正确。\nA. 正确\nB. 错误\n正确答案:B\n\n 问题 38\nH3C防火墙中，以下哪些接口必须加入到区域中才能转发数据？",
    options: [
      { Key: "A", Value: " 野蛮模式" },
      { Key: "B", Value: " 主模式" },
      { Key: "C", Value: " 传输模式" },
      { Key: "D", Value: " 隧道模式" },
      { Key: "A", Value: " 正确" },
      { Key: "B", Value: " 错误" },
      { Key: "A", Value: " Virtual-Template" },
      { Key: "B", Value: " 物理接口" },
      { Key: "C", Value: " Loopback" },
      { Key: "D", Value: " Dialer" },
      { Key: "E", Value: " Vlan-interface" },
      { Key: "F", Value: " Tunnel" },
    ],
    answer: "ABDEF",
    qtype: "2",
  },
  {
    questionNumber: "39",
    question: "关于H3C防火墙URL过滤功能，下列说法正确的有",
    options: [
      { Key: "A", Value: " URL是互联网上标准资源的地址" },
      {
        Key: "B",
        Value:
          " URL格式为：“protocol://host[ : port/path/[;parametersJ[?guery］#fragment ，其中［:parameters][?query］#fragment称为URL",
      },
      {
        Key: "C",
        Value:
          " URL过滤功能是指对用户访问的URL进行控制，即允许或禁止用户访问Web资源，达到规范用户上网行为的目的",
      },
      {
        Key: "D",
        Value:
          " URL过滤规则支持文本匹配和正则表达式匹配两种方式，文本匹配仅能使用指定的字符串对主机进行精确匹配。正则表达式匹配可以使用正则表达式对主机名和URL字段进行模糊匹配",
      },
    ],
    answer: "ACD",
    qtype: "2",
  },
  {
    questionNumber: "40",
    question: "ACG1000的DFI主要用来识别应用的静态报文特征",
    options: [
      { Key: "A", Value: " 正确" },
      { Key: "B", Value: " 错误" },
    ],
    answer: "B",
    qtype: "1",
  },
  {
    questionNumber: "41",
    question: "NAT转换技术包括",
    options: [
      { Key: "A", Value: " 基于NAT方式，即地址一对一的转换" },
      { Key: "B", Value: " NAPT方式，即通过转换端口实现地址复用" },
      { Key: "C", Value: " Easy IP方式，即直接使用公网接口做NAT" },
      { Key: "D", Value: " NAT Server，寄映射内部服务器" },
    ],
    answer: "ABCD",
    qtype: "2",
  },
  {
    questionNumber: "42",
    question: "关于H3C防火墙报文转发流程， 下列说法正确的是",
    options: [
      {
        Key: "A",
        Value: " 当报文命中会活表或关联表后，则直接查找二三层转发表项后转发",
      },
      {
        Key: "B",
        Value:
          " 若报文命中安全策略的动作为丢弃，则直接丢弃报文， 不需要创建会话表项",
      },
      { Key: "C", Value: " 对接收的报文首先判断是否匹配当前会话表或关联表" },
      { Key: "D", Value: " 对接收的报文首先判因是否命中安全策略" },
    ],
    answer: "ABC",
    qtype: "2",
  },
  {
    questionNumber: "43",
    question:
      "H3C防火墙要么工作在二层模式，要么工作在三层模式，不能同时工作在二层和三层，以上说法正确吗？",
    options: [
      { Key: "A", Value: " 正确" },
      { Key: "B", Value: " 错误" },
    ],
    answer: "B",
    qtype: "1",
  },
  {
    questionNumber: "44",
    question:
      "以下关于防火墙用户说法正确的是？\nA. 接入类用户主要是portal、sslvpn、ppp等\nB. 可以通过用户组来实现用户的统一管理\nC. 防火墙用户分为管理类和接入类用户\nD. 管理类用户主要有ftp、ssh、telnet、http\n正确答案:ABCD\n\n问题 45\nH3C防火墙特征库升级，支持以下几种方式",
    options: [
      { Key: "A", Value: " 接入类用户主要是portal、sslvpn、ppp等" },
      { Key: "B", Value: " 可以通过用户组来实现用户的统一管理" },
      { Key: "C", Value: " 防火墙用户分为管理类和接入类用户" },
      { Key: "D", Value: " 管理类用户主要有ftp、ssh、telnet、http" },
      { Key: "A", Value: " 手动离线升级" },
      { Key: "B", Value: " 特征库回滚" },
      { Key: "C", Value: " 定期自动在线升级" },
      { Key: "D", Value: " 立即自动在线升级" },
    ],
    answer: "ABCD",
    qtype: "2",
  },
  {
    questionNumber: "46",
    question:
      "在检测到针对服务器的SYN Flood攻击行为后，防火墙应该可以支持选择多种应对攻击的防范措施，主要包括连接限制技术和连接代理技术，其中属于连接限制技术的是\nA. 单位时间内客户端发起的新建连接请求数超过指定阈值，则认为服务器遭受了SYS Flood攻击\nB. 通过对正常TCP新建连接的协商报文进行处理，修改报文的序列号并使其携带认证信息，再通过验证客户端回应的协商报文中携带的信息进行报文有效性确认。\nC. 客户端发起的TCP半开连接请求超过指定阈值，则以为服务器遭受了SYS Flood攻击\nD. 通过在新建连接的协商报文中携带认证信息，在通过验证客户端回应的协商报文中携带的信息来进行信\n息分析。\n正确答案: AC\n BD应该属于连接代理技术，他们使用认证信息\n\n\n问题 47\nH3C防火墙安全策略规则可以基于以下哪些参数进行匹配？",
    options: [
      {
        Key: "A",
        Value:
          " 单位时间内客户端发起的新建连接请求数超过指定阈值，则认为服务器遭受了SYS Flood攻击",
      },
      {
        Key: "B",
        Value:
          " 通过对正常TCP新建连接的协商报文进行处理，修改报文的序列号并使其携带认证信息，再通过验证客户端回应的协商报文中携带的信息进行报文有效性确认。",
      },
      {
        Key: "C",
        Value:
          " 客户端发起的TCP半开连接请求超过指定阈值，则以为服务器遭受了SYS Flood攻击",
      },
      {
        Key: "D",
        Value:
          " 通过在新建连接的协商报文中携带认证信息，在通过验证客户端回应的协商报文中携带的信息来进行信",
      },
      { Key: "A", Value: " 目的IP地址" },
      { Key: "B", Value: " 应用/应用组" },
      { Key: "C", Value: " 服务" },
      { Key: "D", Value: " 用户/用户组" },
      { Key: "E", Value: " 目的安全域" },
      { Key: "F", Value: " 源安全域" },
      { Key: "G", Value: " 源IP地址" },
      { Key: "H", Value: " VRF" },
    ],
    answer: "ABCDEFGH",
    qtype: "2",
  },
  {
    questionNumber: "48",
    question: "H3C IPS功能可以对业务流量进行以下那些缺省动作。",
    options: [
      { Key: "A", Value: " 黑名单" },
      { Key: "B", Value: " 丢弃" },
      { Key: "C", Value: " 允许" },
      { Key: "D", Value: " 抓包" },
      { Key: "E", Value: " 生成日志" },
      { Key: "F", Value: " 重置" },
    ],
    answer: "ABC",
    qtype: "2",
  },
  {
    questionNumber: "49",
    question: "以下哪些配置可以实现telnet用户的AAA认证",
    options: [
      { Key: "A", Value: " [Device-line-console0]authentication-mode scheme" },
      { Key: "B", Value: " [Device-line-vty0-63]authentication-mode scheme" },
      { Key: "C", Value: " [Device-line-vty0-63]authentication-mode none" },
      { Key: "D", Value: " [Device-line-vty0-63]authentication-mode local" },
    ],
    answer: "B",
    qtype: "1",
  },
  {
    questionNumber: "50",
    question:
      "NAT ALG技术可以解决所有多通道应用之间端到端的通信问题。以上说法是否正确",
    options: [
      { Key: "A", Value: " 正确" },
      { Key: "B", Value: " 错误" },
    ],
    answer: "B",
    qtype: "1",
  },
  {
    questionNumber: "51",
    question:
      "在防火前上使用命令display nat all有如下信息：\n基于以上信息可以得出结论是：",
    options: [
      { Key: "A", Value: " 接口的动态NAT没有配置ACL限制" },
      { Key: "B", Value: " NAT地址池1中有4个地址" },
      { Key: "C", Value: " NAT地址池中有2个地址" },
      { Key: "D", Value: " 当前设备上有1个地址池" },
    ],
    answer: "C",
    qtype: "1",
  },
  {
    questionNumber: "52",
    question: "互联网中常见的网络安全威胁方式分为",
    options: [
      { Key: "A", Value: " 主动攻击" },
      { Key: "B", Value: " 平面攻击" },
      { Key: "C", Value: " 物理攻击" },
      { Key: "D", Value: " 立体攻击" },
    ],
    answer: "AC",
    qtype: "2",
  },
  {
    questionNumber: "53",
    question: "H3C ACG产品日志信息可以输出到不同的目的地，下列说法正确的是 ？",
    options: [
      {
        Key: "A",
        Value: " 最大可以配置3个日志服务器，同时发送3份日志，实现互为备份",
      },
      {
        Key: "B",
        Value:
          " 和第三方日志服务器配合时，建议启用日志加密功能，防止在传输过程中泄露信息",
      },
      { Key: "C", Value: " 默认情况下，系统将日志记录在本地数据库" },
      {
        Key: "D",
        Value:
          " 系统可以将日志发送给日志服务器，推荐使用userlog方式，效率更高。",
      },
    ],
    answer: "ABCD",
    qtype: "2",
  },
  {
    questionNumber: "54",
    question:
      "在防火墙上配置动态NAT使用命令display nat session verbose有如下信息。\n\n\n\n从设备输出可确定的是：",
    options: [
      { Key: "A", Value: " 设备上配置的是NO-PAT方式的动态NAT" },
      { Key: "B", Value: " 动态NAT的配置下发在G1/0/0口上" },
      { Key: "C", Value: " 192.168.0.3可以ping通2.2.2.2" },
      { Key: "D", Value: " 地址池中只有1个地址" },
    ],
    answer: "A",
    qtype: "1",
  },
  {
    questionNumber: "55",
    question: "以下哪些配置授权给用户SSL VPN的登陆权限？",
    options: [
      { Key: "A", Value: " [device-luser-manage-test]service-type sslvpn" },
      { Key: "B", Value: " [device-luser-network-test]service-type sslvpn" },
      { Key: "C", Value: " [device]local-user test class mansge" },
      { Key: "D", Value: " [device]local-user test class network" },
    ],
    answer: "BD",
    qtype: "2",
  },
  {
    questionNumber: "56",
    question:
      "地址转换技术只能用于将私网地址转换为公网地址，以上说法是否正确？",
    options: [
      { Key: "A", Value: " 正确" },
      { Key: "B", Value: " 错误" },
    ],
    answer: "B",
    qtype: "1",
  },
  {
    questionNumber: "57",
    question:
      "IKEv1主模式第一阶段协商的第一和第二个报文的作用是身份验证，从而保证了后续报文传递的合法性，以上说法是否正确？",
    options: [
      { Key: "A", Value: " 正确" },
      { Key: "B", Value: " 错误" },
    ],
    answer: "B",
    qtype: "1",
  },
  {
    questionNumber: "58",
    question:
      "H3C防火墙安全策略规则中，若引用DPI业务时，规则的动作需配置为允许，以上说法是否正确？",
    options: [
      { Key: "A", Value: " 正确" },
      { Key: "B", Value: " 错误" },
    ],
    answer: "A",
    qtype: "1",
  },
  {
    questionNumber: "59",
    question:
      "利用SN Cookie技术可以防范SYN Flood 攻击，关于技术原理的描述，以下说法正确的是。",
    options: [
      {
        Key: "A",
        Value:
          " .如果防火墙确认客户端的ACK消息合法，则模拟客户端向服务器发送一个SYN消息进行连接请求，同时分配TCB资源记录此连接请求的描述信息。",
      },
      {
        Key: "B",
        Value:
          " 防火墙的SYN Cookie技术利用ACK报文携带的认证信息，对握手协商的ACK报文进行认证，从而避免了防火过早分配TCB资源",
      },
      {
        Key: "C",
        Value:
          " 客户端发送的SYN消息经过防火墙时，防火墙截取该消息，并模拟服务器向客户端回应SYN ACK消息，",
      },
      {
        Key: "D",
        Value:
          " 客户端收到SYN/ACK报文后向服务器发送ACK消息进行确认，防火墙截取这个消息后，提取该消息中的ACK序列号，并再次使用客户端信息与加密索引计算cookie，如果计算结果与ACK序列号相符，就可以确认发起连接请求的是一个真实客户端",
      },
    ],
    answer: "D",
    qtype: "1",
  },
  {
    questionNumber: "60",
    question: "以下关于IKE的说法正确的有",
    options: [
      { Key: "A", Value: " 具有完善的向前安全性" },
      { Key: "B", Value: " 可以穿越NAT" },
      { Key: "C", Value: " 使用UDP 51端口" },
      { Key: "D", Value: " 使用diffie-Hellma交换" },
    ],
    answer: "ABD",
    qtype: "2",
  },
  {
    questionNumber: "61",
    question:
      "在H3C ACG上配置用户策略时，新建用户并将PC的Mac地址绑定，完成配置后发现PC能够重定向到认证页面但是无法联网，以下分析中正确的是？",
    options: [
      {
        Key: "A",
        Value:
          " 由于ACG设备需要与PC二层互联才能学习到PC的Mac地址，所以ACG与PC中间可能有三层设备",
      },
      {
        Key: "B",
        Value: " ACG支持夸三层学习Mac功能，可能是netconf参数配置错误",
      },
      {
        Key: "C",
        Value: " PC能够重定向到认证页面，说明设备的路由器和Ipv4策略没问题",
      },
      {
        Key: "D",
        Value:
          " 由于绑定的Mac地址必须与PC的Mac地址一致，所以可能是因为ACG上Mac地址配置错误",
      },
    ],
    answer: "ACD",
    qtype: "2",
  },
  {
    questionNumber: "62",
    question: "以下关于RADIUS认证说法正确的是？",
    options: [
      {
        Key: "A",
        Value:
          " RADIUS最初仅是针对拨号用户的AAA协议，后来随着用户接入方式的多样化发展，RADIUS也被应用于多种接入方式",
      },
      {
        Key: "B",
        Value: " 常应用在即要求较高安全性、又允许远程用户访问的各种网络环境中",
      },
      {
        Key: "C",
        Value: " RADIUS认证是一种分布式的客户端/服务器结构的信息交互协议",
      },
      {
        Key: "D",
        Value: " 基于TCP传输，端口号1812、1813分别作为认证/授权、计费端口",
      },
    ],
    answer: "ABC",
    qtype: "2",
  },
  {
    questionNumber: "63",
    question: "以下关于动态NAT说法正确的是？",
    options: [
      { Key: "A", Value: " 动态NAT必须要指定地址池地址" },
      {
        Key: "B",
        Value: " PAT模式中一个公网地址可以同时提供给多个私网地址使用",
      },
      {
        Key: "C",
        Value: " 动态NAT的配置中，必须要配置ACL来指定可以进行NAT转换的地址",
      },
      { Key: "D", Value: " 所有模式的动态NAT都支持复用公网地址" },
    ],
    answer: "C",
    qtype: "1",
  },
  {
    questionNumber: "64",
    question: "关于H3C防火墙的命令视图，以下说法正确的是",
    options: [
      {
        Key: "A",
        Value: " 在接口视图下可以通过port link-mode命令切换二三层模式",
      },
      { Key: "B", Value: " 配置路由应在系统视图下" },
      { Key: "C", Value: " 用户登录设备后，直接进入用户视图" },
      { Key: "D", Value: " 在用户视图下输入system view命令进入系统视图" },
    ],
    answer: "ABD",
    qtype: "2",
  },
  {
    questionNumber: "65",
    question: "编号3001的ACL对应的类型是",
    options: [
      { Key: "A", Value: " 二层ACL" },
      { Key: "B", Value: " 七层ACL" },
      { Key: "C", Value: " 基本ACL" },
      { Key: "D", Value: " 高级ACL" },
    ],
    answer: "D",
    qtype: "1",
  },
  {
    questionNumber: "66",
    question: "以下关于easy IP方式NAT配置不生效排查方法，正确的是",
    options: [
      { Key: "A", Value: " 检查地址池是否正确" },
      { Key: "B", Value: " 检查路由是否正常" },
      { Key: "C", Value: " 检查NAT配置的接口是否下发正确" },
      { Key: "D", Value: " 检查安全策略是否放通" },
    ],
    answer: "BCD",
    qtype: "2",
  },
  {
    questionNumber: "67",
    question: "GRE协议栈如图所示，以下说法正确的是？",
    options: [
      { Key: "A", Value: " 协议B是封装协议" },
      { Key: "B", Value: " 协议B是承载协议" },
      { Key: "C", Value: " 协议A是封装协议" },
      { Key: "D", Value: " 协议A是承载协议" },
    ],
    answer: "D",
    qtype: "1",
  },
  {
    questionNumber: "68",
    question:
      "下列关于L2TP的说法正确的是\nA. 在LAC上会根据接入用户的PPP验证信息进行验证,以确定是否是L2TP的用户以及用户属于哪一个L2tp\n组，随后LAC会向相应的LNS发起建立隧道的请求",
    options: [
      {
        Key: "A",
        Value:
          " 在LAC上会根据接入用户的PPP验证信息进行验证,以确定是否是L2TP的用户以及用户属于哪一个L2tp",
      },
      { Key: "B", Value: " 用户和LAC之间会进行协商以获取IP地址" },
      { Key: "C", Value: " 隧道建立后,LAC与用户相连接口的IPCP会变为UP状态" },
      { Key: "D", Value: " CHAP验证只用在用户端和LNS端进行" },
    ],
    answer: "A",
    qtype: "1",
  },
  {
    questionNumber: "69",
    question:
      "H3C ACG透明模式部署，在配置带宽管理时，需要将线路绑定在物理接口上，绑定在桥接口上无法生效",
    options: [
      { Key: "A", Value: " 错误" },
      { Key: "B", Value: " 正确" },
    ],
    answer: "B",
    qtype: "1",
  },
  {
    questionNumber: "70",
    question: "IKE野蛮模式下，IKE协商发起者发送第一个消息中包含",
    options: [
      { Key: "A", Value: " DIffe-Hellman公共值" },
      { Key: "B", Value: " 散列算法" },
      { Key: "C", Value: " 验证方法" },
      { Key: "D", Value: " 加密算法" },
    ],
    answer: "ABCD",
    qtype: "2",
  },
  {
    questionNumber: "71",
    question: "以下关于HWTACACS认证说法正确的是",
    options: [
      { Key: "A", Value: " 采用UDP传输，网络传输效率更高。" },
      {
        Key: "B",
        Value:
          " 该协议与PADIUS协议类似，采用客户端/服务器模式实现NAS与HWTACACS服务器之间的通信。",
      },
      {
        Key: "C",
        Value: " 主要用于PPP和VPDN接入用户及终端用户的认证、授权和计费。",
      },
      {
        Key: "D",
        Value:
          " HWTACACS（HW Terminal Access Controller Access Control System,HW终端访问控制器控制系统协议）",
      },
    ],
    answer: "BCD",
    qtype: "2",
  },
  {
    questionNumber: "72",
    question: "有关GRE的特点描述正确有。",
    options: [
      { Key: "A", Value: " GRE不提供数据加密、身份验证等安全功能。" },
      { Key: "B", Value: " GRE协议不支持封装组播报文。" },
      { Key: "C", Value: " GRE隧道支持动态路由协议。" },
      {
        Key: "D",
        Value: " GRE VPN要求在隧道两端上静态配置隧道接口，不利于大规模部署。",
      },
    ],
    answer: "ACD",
    qtype: "2",
  },
  {
    questionNumber: "73",
    question:
      "包过滤ACL进行如下配置:\nAcl basic 2000 match-order config\nrule permit source1.1.1.0  0.0.0.255\nrule deny source 1.1.1.1  0",
    options: [
      { Key: "A", Value: " 源地址1.1.1.20目的地址3.3.3.20的报文被丢弃" },
      { Key: "B", Value: " 源地址1.1.1.1目的地址3.3.3.3的报文被丢弃" },
      { Key: "C", Value: " 源地址1.1.1.20目的地址3.3.3.3的报文允许通过" },
      { Key: "D", Value: " 源地址1.1.1.1目的地址3.3.3.3的报文允许通过" },
    ],
    answer: "CD",
    qtype: "2",
  },
  {
    questionNumber: "74",
    question: "以下属于NAT技术的优点的是",
    options: [
      { Key: "A", Value: " 在网络发生变化时避免重新编址" },
      { Key: "B", Value: " 在地址重复时提供解决方案" },
      { Key: "C", Value: " 隐藏内部服务器的真实IP地址，提高安全性" },
      { Key: "D", Value: " 增加连接英特网的灵活性" },
      { Key: "E", Value: " 节省合法的注册地址" },
    ],
    answer: "ABCDE",
    qtype: "2",
  },
  {
    questionNumber: "75",
    question: "SSL协议的通讯实体在层次划分上分为以下哪几个层次?",
    options: [
      { Key: "A", Value: " 应用层" },
      { Key: "B", Value: " 会话层" },
      { Key: "C", Value: " 握手层" },
      { Key: "D", Value: " 记录层" },
    ],
    answer: "CD",
    qtype: "2",
  },
  {
    questionNumber: "76",
    question:
      "如何防范Smurf攻击? 多选题\nA. 检查ICMP请求报文的目的地址是否为子网地址，是则丢弃\nB. 检查ICMP请求报文的源地址是否为子网地址，是则丢弃\nC. 检查ICMP请求报文的目的地址是否为广播地址，是则丢弃\nD. 检查ICMP请求报文的源地址是否为广播地址，是则丢弃\n正确答案:    AC  \n章节: 章节3\n\n 问题 77\n下述攻击手段中，不属于DOS攻击的是",
    options: [
      {
        Key: "A",
        Value: " 检查ICMP请求报文的目的地址是否为子网地址，是则丢弃",
      },
      { Key: "B", Value: " 检查ICMP请求报文的源地址是否为子网地址，是则丢弃" },
      {
        Key: "C",
        Value: " 检查ICMP请求报文的目的地址是否为广播地址，是则丢弃",
      },
      { Key: "D", Value: " 检查ICMP请求报文的源地址是否为广播地址，是则丢弃" },
      { Key: "A", Value: " Fraggle" },
      { Key: "B", Value: " Land攻击" },
      { Key: "C", Value: " 跨站攻击" },
      { Key: "D", Value: " Smurf攻击" },
    ],
    answer: "C",
    qtype: "1",
  },
  {
    questionNumber: "78",
    question: "关于H3C防火墙的特征库功能说法正确的有",
    options: [
      { Key: "A", Value: " 不支持特征库回滚" },
      { Key: "B", Value: " 升级特征库需要license授权" },
      { Key: "C", Value: " 支持自定义特征" },
      { Key: "D", Value: " 不支持自动更新特征库" },
    ],
    answer: "BC",
    qtype: "2",
  },
  {
    questionNumber: "79",
    question:
      "关于H3C防火墙License,以下说法正确的是\nA. 正式License过期后不能卸载、压缩License存储区可以释放License存储空间。执行压缩操作时.系统会自动将已经过期的或者卸载的License信息删除，并修改DID.\nB. 设备出现硬件故障后,可以将临时License迁移至其他设备继续使用。\nC. 激活License时，必须提供设备的DID文件\nD. License的有效期分为永久( Permanent )和绝对时间(Date restricted)两种，根据发布渠道不同分为临时的(Trial和正式的( Formal)\n正确答案:CD\n\n问题 80\n以下属于网络安全威胁的有",
    options: [
      {
        Key: "A",
        Value:
          " 正式License过期后不能卸载、压缩License存储区可以释放License存储空间。执行压缩操作时.系统会自动将已经过期的或者卸载的License信息删除，并修改DID.",
      },
      {
        Key: "B",
        Value: " 设备出现硬件故障后,可以将临时License迁移至其他设备继续使用。",
      },
      { Key: "C", Value: " 激活License时，必须提供设备的DID文件" },
      {
        Key: "D",
        Value:
          " License的有效期分为永久( Permanent )和绝对时间(Date restricted)两种，根据发布渠道不同分为临时的(Trial和正式的( Formal)",
      },
      { Key: "A", Value: " IP地址欺骗" },
      { Key: "B", Value: " DoS/DDOS攻击" },
      { Key: "C", Value: " 扫描攻击" },
      { Key: "D", Value: " 畸形报文攻击" },
    ],
    answer: "ABCD",
    qtype: "2",
  },
  {
    questionNumber: "81",
    question: "H3C防火墙在接口上应用包过滤，方向可以选择Inbound和Outbound",
    options: [
      { Key: "A", Value: " 错误" },
      { Key: "B", Value: " 正确" },
    ],
    answer: "B",
    qtype: "1",
  },
  {
    questionNumber: "82",
    question:
      "在以下L2TP组网中，假设LAC与LNS都已在公网上. 如果庭道建立失败，那么可能的原因有",
    options: [
      { Key: "A", Value: " LNS端没有设置可以接收该感道对端的L2TP组。" },
      { Key: "B", Value: " LNS端设置的用户名与密码有误。" },
      { Key: "C", Value: " 隧道验证不通过。" },
      { Key: "D", Value: " 在LAC端。LNS地址设置不正确。" },
    ],
    answer: "ABCD",
    qtype: "2",
  },
  {
    questionNumber: "84",
    question:
      "创建安全域后，需要给安全域添加成员。下列哪些可以作为成员加入安全域",
    options: [
      { Key: "A", Value: " 二层接口和VLAN" },
      { Key: "B", Value: " 三层以太网子接口" },
      { Key: "C", Value: " 三层逻辑接口" },
      { Key: "D", Value: " 三层以太网接口" },
    ],
    answer: "ABCD",
    qtype: "2",
  },
  {
    questionNumber: "85",
    question:
      "利用Sste Reset技术可以防范SYN Food攻击.关于技术原理的描述，以下说法正确的是",
    options: [
      {
        Key: "A",
        Value:
          " 一般而言，应用服务器不会主动对客户端发起恶意连接，因此服务器响应客户端的报文可以不需要经过防火墙的检查。防火墙仅需要对客户端发往应用服务器的报文进行实时监控。服务器响应客户端的报文可以根据实际需要选择是否经过防火墙，因此Safe Reset能够支持更灵活的组网方式。",
      },
      {
        Key: "B",
        Value:
          " 客户端收到SYN/ACK后.按照协议规定向服务器回应RST消息。防火墙中途截取这个消息后，提取消息中的序列号。并对该序列号进行Cookie校验。成功通过校验的连接被认为是可信的连接，防火墙会分配TCB资源记录此连接的描述信息，而不可信连接的后续报文会被防火墙丢弃。",
      },
      {
        Key: "C",
        Value:
          " 由于防火墙仅通过对客户端向服务器首次发起连接的报文进行认证，就能够完成对客户端到服务器的连接检验而服务器向客户端回应的报文即使不经过防火墙也不会影响正常的业务处理，因此Safe Reset技术也称为单向代理技术。",
      },
      {
        Key: "D",
        Value:
          " 客户端发送的SYN消息经过防火墙时，防火墙截取该消息，并模拟服务器向客户端回应SYN/ACK消息，其中，SYN/ACK消息中的ACK序列号与客户端期望的值一致，同时携带Cookie值，此Cookie值是对加密索引与本次连接的客户端信息(包括P地址、端口号)进行加空运算的结果。",
      },
    ],
    answer: "ABC",
    qtype: "2",
  },
  {
    questionNumber: "86",
    question: "下列关于衡量防火墙的性能指标说法正确的有",
    options: [
      {
        Key: "A",
        Value: " 并发连接数是指每秒钟防火墙能够处理的新建连接的数量",
      },
      { Key: "B", Value: " 时延是数据包进入防火墙到从防火墙输出的时间间隔" },
      { Key: "C", Value: " 新建连接数是指每秒钟防火墙能够同时处理的连接总数" },
      {
        Key: "D",
        Value: " 吞吐量需要对不同大小的数据包。不同方向的流量等进行测试",
      },
    ],
    answer: "BD",
    qtype: "2",
  },
  {
    questionNumber: "87",
    question: "H3C防火墙防火墙版本升级过程中说法正确的有",
    options: [
      {
        Key: "A",
        Value:
          " boot-loader file命令里必须带system参数，表示指定该软件包为系统软件包",
      },
      { Key: "B", Value: " 可以通过FTP/TFTP将软件版本文件上传到本地" },
      {
        Key: "C",
        Value: " 执行boot-loader命令来指定设备下次启动时使用的版本文件",
      },
      { Key: "D", Value: " 从H3C官网http://www.h3c.com/cn/获取软件版本" },
    ],
    answer: "BCD",
    qtype: "2",
  },
  {
    questionNumber: "88",
    question: "H3C防火墙设备中，访问控制列表ACL主要应用于",
    options: [
      {
        Key: "A",
        Value: " 策略路由，依据用户制定的策略进行路由转发(如ACL规则等)",
      },
      { Key: "B", Value: " IPSec中，用来规定触发建立IPSec的条件" },
      { Key: "C", Value: " NAT中，限制哪些地址需要被转换" },
      { Key: "D", Value: " QoS中，对数据流量进行分类" },
    ],
    answer: "ABCD",
    qtype: "2",
  },
  {
    questionNumber: "89",
    question: "以下哪些配置可以实现SSH用的管理员权限?",
    options: [
      { Key: "A", Value: " [Device-luser-network-test] service-type ssh" },
      { Key: "B", Value: " [Device] local-user test class network" },
      { Key: "C", Value: " [Device-luser-manage-test] service-type ssh" },
      { Key: "D", Value: " [Device] local-user test class manage" },
    ],
    answer: "CD",
    qtype: "2",
  },
  {
    questionNumber: "90",
    question: "如下NAT命令及其作用对应关系正确的是?",
    options: [
      { Key: "A", Value: " display nat session显示NAT会话" },
      { Key: "B", Value: " display nat entry显示地址条目" },
      { Key: "C", Value: " display nat显示所有NAT配置" },
      { Key: "D", Value: " display nat table显示地址表" },
    ],
    answer: "A",
    qtype: "1",
  },
  {
    questionNumber: "91",
    question: "以下属于动态NAT的是",
    options: [
      { Key: "A", Value: " NAT Server" },
      { Key: "B", Value: " PAT方式的NAT" },
      { Key: "C", Value: " Easy IP" },
      { Key: "D", Value: " NO-PAT方式的NAT" },
    ],
    answer: "BCD",
    qtype: "2",
  },
  {
    questionNumber: "92",
    question: "以下技术是设计用于解决IPV4地址短缺的是",
    options: [
      { Key: "A", Value: " CIDR" },
      { Key: "B", Value: " MPLS" },
      { Key: "C", Value: " VLSM" },
      { Key: "D", Value: " NAT" },
    ],
    answer: "CD",
    qtype: "2",
  },
  {
    questionNumber: "93",
    question: "目前SSL协议支持的块加密算法有哪些？",
    options: [
      { Key: "A", Value: " RC4" },
      { Key: "B", Value: " 3DES" },
      { Key: "C", Value: " DES" },
      { Key: "D", Value: " AES" },
    ],
    answer: "BCD",
    qtype: "2",
  },
  {
    questionNumber: "94",
    question: "IKE主模式报文交互（）次？",
    options: [
      { Key: "A", Value: " 3" },
      { Key: "B", Value: " 4" },
      { Key: "C", Value: " 5" },
      { Key: "D", Value: " 6" },
    ],
    answer: "D",
    qtype: "1",
  },
  {
    questionNumber: "95",
    question: "IKE野蛮模式报文交互（）次？",
    options: [
      { Key: "A", Value: " 3" },
      { Key: "B", Value: " 4" },
      { Key: "C", Value: " 5" },
      { Key: "D", Value: " 6" },
    ],
    answer: "A",
    qtype: "1",
  },
  {
    questionNumber: "96",
    question: "以下不属于传输层安全风险的是？",
    options: [
      { Key: "A", Value: " TCP欺骗" },
      { Key: "B", Value: " UDP拒绝攻击" },
      { Key: "C", Value: " 端口扫描" },
      { Key: "D", Value: " 地址扫描" },
    ],
    answer: "D",
    qtype: "1",
  },
  {
    questionNumber: "97",
    question: "H3C防火墙串口的默认波特率为9600，上述正确的是？",
    options: [
      { Key: "A", Value: " 正确" },
      { Key: "B", Value: " 错误" },
    ],
    answer: "A",
    qtype: "1",
  },
  {
    questionNumber: "98",
    question: "H3C防火墙支持记录日志信息,以下关于日志功能说法正确的是?",
    options: [
      {
        Key: "A",
        Value:
          " Flow日志可以封装成UDP报文直接发送到日志主机，也可以发送到信息中心封装成系统日志",
      },
      {
        Key: "B",
        Value:
          " 系统日志、操作日志、安全策略日志以及攻击防范日志都采用Syslog方式以文本格式进行输出",
      },
      {
        Key: "C",
        Value: " NAT日志一般都采用Syslog日志格式直接发送给日志服务器",
      },
      {
        Key: "D",
        Value: " 系统日志传输格式为ASCII码，相比Flow日志的二进制格式传输效率低",
      },
    ],
    answer: "ABD",
    qtype: "2",
  },
  {
    questionNumber: "99",
    question: "关于防火墙系统中缺省域描述正确的是",
    options: [
      { Key: "A", Value: " 系统缺省存在的system域可以被刪除" },
      { Key: "B", Value: " 系统缺省存在的system域只能被修改，不能被删除" },
      {
        Key: "C",
        Value:
          " 一个ISP域被配置为缺省的Isp域后，将不能够被删除，必须首先使用命令undo domain defauit enable将其修改为非缺省ISP域，然后才可以被刑除。",
      },
      {
        Key: "D",
        Value:
          " 一个Isp域被配置为缺省的ISP域后，可以直按通过命令undo domain name的方式进行删除",
      },
    ],
    answer: "BC",
    qtype: "2",
  },
  {
    questionNumber: "100",
    question: "AAA可以通过多种协议来实现，远端认证可通过以下哪些协议实现？",
    options: [
      { Key: "A", Value: " RADIUS协议" },
      { Key: "B", Value: " HWTACACS协议" },
      { Key: "C", Value: " LDAP协议" },
      { Key: "D", Value: " AH协议" },
    ],
    answer: "ABC",
    qtype: "2",
  },
];
