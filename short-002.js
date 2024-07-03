export default [
  {
    question:
      '<br class="markdown_return">下列关于流与会话的说法哪个是正确的？',
    answer: "C",
    options: [
      {
        Key: "A",
        Value:
          "会话是一个单方向的概念，根据报文所携带的三元组或者五元组唯一标识",
      },
      { Key: "B", Value: "流是个双向的概念，一个流通常关联两个方向的会话" },
      {
        Key: "C",
        Value: "对于FTP协议，数据通道会话老化之前控制通道会话不能老化",
      },
      { Key: "D", Value: "防火墙对组播或者广播报文同样建立会话" },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">No pat模式下 ，地址池中只有一个外网地址1.1.1.1.可以分配给一个内网用户使用，当该用户停止访向外网后，如果另一个用户想要访问互联网，下面哪项是正确的 ？',
    answer: "B",
    options: [
      { Key: "A", Value: "利用外网地址1.1.1.1，可以正常访问互联网" },
      { Key: "B", Value: " 需要一定时间间隔后才可以正常访问互联网" },
      { Key: "C", Value: "不可以访问互联网" },
      { Key: "D", Value: "由于外网地址被占用，利用接口地址可以正常访问互联网" },
    ],
    analysis: "（等待表项老化，释放地址即可使用）",
    qtype: "1",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">Nat设备接口入方向下，对于报文处理流程，以下哪些描述是正确的？',
    answer: "A",
    options: [
      { Key: "A", Value: " nat在安全策路之前，即先匹配nat，再匹配安全策略" },
      { Key: "B", Value: " 随机匹配nat和安全策略" },
      { Key: "C", Value: "根据nat策略和安全策略的优先级来处理" },
      { Key: "D", Value: "安全策路在nat之前，即先匹配安全策略，再匹配nat" },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">IKE主模式下经理三个阶段，在（   ）阶段验证对方身份',
    answer: "C",
    options: [
      { Key: "A", Value: " 策略协议" },
      { Key: "B", Value: "DH交换" },
      { Key: "C", Value: " ID交换及验证" },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question: '<br class="markdown_return">下面哪项不是L2TP的优点',
    answer: "C",
    options: [
      { Key: "A", Value: "节约拨号费用" },
      { Key: "B", Value: "接入方式灵活" },
      { Key: "C", Value: "能对传输层的数据进行加密" },
      { Key: "D", Value: "提供多种访问控制方式" },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">用户认证时，防火墙將按照先启顺序选择认证域。正确顺序为',
    answer: "B",
    options: [
      {
        Key: "A",
        Value: "用户名中指定的ISP域--＞系统缺省的ISP域--＞接入模块指定的认证域",
      },
      {
        Key: "B",
        Value: "接入模块指定的认证域--＞用户名中指定ISP域--＞系統缺省的ISP域",
      },
      {
        Key: "C",
        Value:
          "接入模块指定的认证域---＞系统缺省的ISP域--＞用户名中指定的ISP域",
      },
      {
        Key: "D",
        Value:
          "用户名中指定的ISP域--＞-接入模块指定的认证域--＞系統缺省的ISP域",
      },
    ],
    analysis: "（B或者D，无法实验证实）",
    qtype: "1",
    correct: "",
  },
  {
    question: '<br class="markdown_return">AAA认证不包括？',
    answer: "B",
    options: [
      { Key: "A", Value: " 计费" },
      { Key: "B", Value: " 接入" },
      { Key: "C", Value: " 授权" },
      { Key: "D", Value: " 认证" },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">关于会话老化时间，以下说法错误的是？',
    answer: "B",
    options: [
      {
        Key: "A",
        Value: " 当会话数目过多时，建议将协议状态和应用层老化时间设置短点",
      },
      {
        Key: "B",
        Value: " 配置各协议状态的会话老化时间，只对新建立的会话有效",
      },
      {
        Key: "C",
        Value: " 如果某些业务确实需要较长的时间，可以考虑配置长连接解决",
      },
      {
        Key: "D",
        Value:
          ' 应用层协议的会话老化时间，<br class="markdown_return">只对已经建立并处于READY/ESTABLISHED状态的会话有效',
      },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">以下那条命令可以查看H3C防火墙快速转发的会话统计功能？',
    answer: "C",
    options: [
      { Key: "A", Value: "  reset session table ipv4" },
      { Key: "B", Value: "  session statisticsE.nable" },
      { Key: "C", Value: "D.isplay session table ipv4 verbose" },
      { Key: "D", Value: "D.isplay session table ipv4 " },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question: '<br class="markdown_return">配置NAT时下面哪些是必须的？',
    answer: "A",
    options: [
      { Key: "A", Value: " 地址转换" },
      { Key: "B", Value: " 地址池" },
      { Key: "C", Value: " 静态路由" },
      { Key: "D", Value: "ACL" },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">如果vpn网络需要运行动态路由协议并提供私网数据加密，通常采用什么技术手段实现？',
    answer: "D",
    options: [
      { Key: "A", Value: " L2TP+IPSEC" },
      { Key: "B", Value: " IPSEC" },
      { Key: "C", Value: " L2TP" },
      { Key: "D", Value: " GRE+IPSEC" },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">下面哪一个协议工作在TCP/IP协议栈的传输层以下?',
    answer: "A",
    options: [
      { Key: "A", Value: "ARP" },
      { Key: "B", Value: "SSL" },
      { Key: "C", Value: "HTTPS" },
      { Key: "D", Value: "SSH" },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">内部服务器模式下在放通安全策略时，目的地址应该是？',
    answer: "A",
    options: [
      { Key: "A", Value: " 内网服务器地址" },
      { Key: "B", Value: " 接口地址" },
      { Key: "C", Value: " 地址池地址" },
      { Key: "D", Value: " global地址" },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">如需要通过VPN隧道在协议A的网络上传输协议B的数据包，我们将协议B称为什么协议？',
    answer: "C",
    options: [
      { Key: "A", Value: " 封装协议" },
      { Key: "B", Value: " 隧道协议" },
      { Key: "C", Value: " 载荷协议" },
      { Key: "D", Value: " 承载协议" },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">下列关于H3C防火墙URL过滤实现流程说法错误的有? 单选题',
    answer: "C",
    options: [
      {
        Key: "A",
        Value:
          "如果报文与设备上URL过滤配置文件中的过滤规则匹配成功，则首先判断此URL过滤规则是否属于URL过滤的黑/白名单规则。如果属于URL过滤白名单，规则则直接允许此报文通过，如果属于URL过滤的黑名单规则则直接将此报文阻断。白名单的优先级高于黑名单的优先级。",
      },
      {
        Key: "B",
        Value:
          "如果报文匹配了某个安全策略，且此策略的动作是允许并引用了URL过滤配置文件，则设备提取报文中的URL字段进行URL过滤规则匹配。",
      },
      {
        Key: "C",
        Value:
          "如果此URL过滤规则既不属于URL过滤白名单规则也不属于URL过滤黑名单规则，则设备将进步判断该规则是否同时属于多个URL过滤分类。如果此URL过滤规则同时属于多个URL过滤分类.则根据严重级别最高的URL过滤分类的动作对此报文进行处理。如果此URL过滤规则只属于一个 URL过滤分类，则根据该规则所属的URL过滤分类的动作对此报文进行处理。",
      },
      {
        Key: "D",
        Value:
          "如果报文未匹配上任何一条URL过滤配置文件中的过滤规则，则将进-步判断URL过滤配置文件中是否开启了URL过滤分类云端查询功能。如果分类云端查询功能已开启.则将报文中的URL发向云端URL过滤分类服务器进行查询。云端URL过滤分类服务器响应该请求，并向设备发送查询结果，该结果中包含了URL过滤规则及其所属的分类名称，设备根据该结果执行相应的分类处理动作。如果云端返回的分类在设备上没有与其对应的分类动作或者云端URL查询失败，则设备将丢奔此报文。",
      },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">关于H3C防火墙的License ,下列说法正确的是?',
    answer: "D",
    options: [
      { Key: "A", Value: "攻击防范功能需要取得License授权后才能使用" },
      { Key: "B", Value: "License不需要在H3C官网注册" },
      {
        Key: "C",
        Value:
          "临时License授权的特性可以使用一段时间(比如1~3个月)，并且可以迁移",
      },
      {
        Key: "D",
        Value: "可以使用license activation-file install命令用来安装激活文件",
      },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">H3C防火墙配置成二层模式时数据依靠？？？进行转发。',
    answer: "C",
    options: [
      { Key: "A", Value: "HASH表" },
      { Key: "B", Value: "路由表" },
      { Key: "C", Value: "MAC地址表" },
      { Key: "D", Value: "FIB表" },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question: '<br class="markdown_return">以下关于RADIUS认证说法错误的是',
    answer: "E",
    options: [
      { Key: "A", Value: "TLV结构，利于扩展" },
      {
        Key: "B",
        Value: "常应用在既要求较高安全性、又允许远程用户访问的各种网络环境中",
      },
      {
        Key: "C",
        Value: "RADIUS认证是是一种分布式的、客户端/服务器结构的信息交互协议",
      },
      {
        Key: "D",
        Value:
          "RADIUS最初仅是针对拨号用户的AAA协议，后来随着用户接入方式的多样化发展，\t\tRADIUS也适应多种用户接入方式",
      },
      {
        Key: "E",
        Value: "基于UDP传输，端口号1812、1813均可作为认证/授权、计费端口",
      },
    ],
    analysis: "（1812指定为认证授权，1813指定为计费，不能变）",
    qtype: "1",
    correct: "",
  },
  {
    question: '<br class="markdown_return">关于网络地址转换，下面说法正确的是?',
    answer: "A",
    options: [
      {
        Key: "A",
        Value:
          "若接口上配置了nat策略，则默认所有从该接口发出的流量都会进行地址转换",
      },
      { Key: "B", Value: "nat策略需要在全局模式下启用" },
      { Key: "C", Value: "地址池的起始地址不能相同" },
      { Key: "D", Value: "acl为必配项，用于筛选接口下需要进行nat的流量" },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">| 地址转换时，配置动态nat，未配置动态nat的模式,则此时的动态nat模式为?',
    answer: "B",
    options: [
      { Key: "A", Value: "默认模式为空" },
      { Key: "B", Value: "pat" },
      { Key: "C", Value: "no pat" },
      { Key: "D", Value: "easy ip" },
    ],
    analysis: "本题单选题（D也对啊，有异议）",
    qtype: "1",
    correct: "",
  },
  {
    question: '<br class="markdown_return">以下关于动态NAT的说法正确的是',
    answer: "B",
    options: [
      { Key: "A", Value: "动态NAT必须要指定地址池地址" },
      {
        Key: "B",
        Value: "PAT模式中一个公网地址可以同时提供给多个私网地址使用",
      },
      {
        Key: "C",
        Value: "动态NAT的配置中，必须要配置ACL来指定可以进行NAT转换的地址",
      },
      { Key: "D", Value: "所有模式的动态NAT都支持复用公网地址" },
    ],
    analysis: "",
    qtype: "1",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">如图所示.分支机构( 192.168.10.0)与总部之间( 192.168.20.0 )通过IPsec隧道传输数据，在路由器的接口1/0/1上配置IPsec策略，当接口止又|被配置了nat outbound策略后，用户发现应该走隧道的流量并没有走隧道，下列哪种主要配置既能最合理的保证正常的地址转换又可以完美解决这一？<br class="markdown_return"><img src="https://up.zaixiankaoshi.com/e.question/112450/b705aad2cde679333e8c246d1d13e7a5"><br class="markdown_return"><img src="https://up.zaixiankaoshi.com/e.question/112450/c1fc994a9605f30158cd928de7506d03">',
    answer: "D",
    options: [
      { Key: "A", Value: "A" },
      { Key: "B", Value: "B" },
      { Key: "C", Value: "C" },
      { Key: "D", Value: "D" },
    ],
    analysis: "实验证明是D",
    qtype: "1",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">I.KE协商过程中，野蛮模式需要交互？？个消息报文',
    answer: "A",
    options: [
      { Key: "A", Value: "3" },
      { Key: "B", Value: "4" },
      { Key: "C", Value: "6" },
      { Key: "D", Value: "？？" },
    ],
    analysis: "三个",
    qtype: "1",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">如下图所示: FW1作为某公司总部的网关设备. FW2作为分公司的网关设备。要求在总部和分公司之间建立GRE over IPse VPN隧道从，而保证公司总部与分公司之间通信数据的完整性和安全性，下列哪个配置是正确的?<br class="markdown_return"><img src="https://up.zaixiankaoshi.com/e.question/112450/bd57425b1d782b5c10a85719deb54a48"><br class="markdown_return"><img src="https://up.zaixiankaoshi.com/e.question/112450/2c601856641e4fe627f0a37570bc3f14">',
    answer: "A",
    options: [
      { Key: "A", Value: "A" },
      { Key: "B", Value: "B" },
      { Key: "C", Value: "C" },
      { Key: "D", Value: "D" },
    ],
    analysis:
      '不完整，分析技巧如下<br class="markdown_return">窍门 ：1）  ACL命中的流量为 GRE封装之后的源目地址<br class="markdown_return">2）IPSEC 策略安装的位置必须是物理出接口',
    qtype: "1",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">若设备的接口地址是通过dhcp或是pppoe动态获取.则应该配置哪种nat模式?',
    answer: "B",
    options: [
      { Key: "A", Value: "nopat" },
      { Key: "B", Value: " easy ip" },
      { Key: "C", Value: "nat server" },
      { Key: "D", Value: "nat static" },
    ],
    analysis: "（家庭上网环境、动态IP地址，一律easy ip技术）",
    qtype: "1",
    correct: "",
  },
  {
    question: '<br class="markdown_return">下列哪些功能可以有H3C防火墙实现？',
    answer: "ABCD",
    options: [
      { Key: "A", Value: " 产生审计日志" },
      { Key: "B", Value: " 执行安全策略" },
      { Key: "C", Value: " 隔离可信任网络和不可信任网络" },
      { Key: "D", Value: " 监控网络中的会话状态" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">衡量防火墙的性能指标包括下列哪些选项？',
    answer: "ABC",
    options: [
      { Key: "A", Value: " 新建连接数" },
      { Key: "B", Value: " 并发连接数" },
      { Key: "C", Value: " 吞吐量" },
      { Key: "D", Value: " 使用带宽" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">以下属于LDAP用户属性的是？',
    answer: "ACD",
    options: [
      { Key: "A", Value: "用户DN查询的起始节点 ( search-base-dn )" },
      { Key: "B", Value: "用户DN查询的格式( search-format )" },
      { Key: "C", Value: "用户名称属性 ( user-name-attribute )" },
      { Key: "D", Value: "用户名称格式( user-name-format )" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">防火墙业务正常，但是查看防火墙web页面安全策略为空，可能是以下哪些原因导致的？',
    answer: "ABCD",
    options: [
      { Key: "A", Value: "使用命令行配置了packet-filter" },
      { Key: "B", Value: "命令行配置的策略跟web下配置的策略不一致" },
      { Key: "C", Value: "在新版本下使用域间策略" },
      { Key: "D", Value: "web界面与命令行混配" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return"><p>关于ACL包过滤的应用，下列哪些说法是正确的?</p>',
    answer: "ACD",
    options: [
      { Key: "A", Value: "<p>只有将ACL应用在接口上才能实现包过滤的功能</p>" },
      {
        Key: "B",
        Value: "<p>防火墙ACL包过滤在接口上应用的方向只能是 outbound方向</p>",
      },
      {
        Key: "C",
        Value: "<p>防火墙ACL包过滤在接口上应用的方向只能是inbound方向</p>",
      },
      { Key: "D", Value: "<p>防火墙产品默认关闭了包过滤规则</p>" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return"><p>关于防火墙转发流程，以下错误的是？</p>',
    answer: "BC",
    options: [
      { Key: "A", Value: "<p>首先判断是否匹配当前会话表或关联表</p>" },
      { Key: "B", Value: "<p>首先判断是否匹配当前安全策略</p>" },
      { Key: "C", Value: "<p>若未匹配到安全策略，则丢弃报文</p>" },
      { Key: "D", Value: "<p>若未匹配到安全策略，则按默认策略进行处理</p>" },
    ],
    analysis: "<p>ok</p>",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">以下哪些场景是经过一次地址转换即可满足需求的？',
    answer: "ABC",
    options: [
      { Key: "A", Value: " 公网访问内网资源" },
      { Key: "B", Value: " 内网用户访问公网" },
      { Key: "C", Value: " 内外网有固定互访需求" },
      { Key: "D", Value: "地址重要的VPN实例互访" },
    ],
    analysis: "(D答案有异议）",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">下列关于NAT穿越功能说法正确的是？',
    answer: "BD",
    options: [
      { Key: "A", Value: "刪去了IKE协商过程中对UDP端口号的验证过程" },
      { Key: "B", Value: "实现了对VPN 隧道中 NAT网关设备的发现功能" },
      { Key: "C", Value: "配置NAT穿越功能后，AH可以穿越NAT" },
      { Key: "D", Value: "避免了 NAT网关对 IPsec报文进行篡改" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">关于SSL VPN组网模式说法正确的是？',
    answer: "ABD",
    options: [
      { Key: "A", Value: " 直连模式组网网关可以对访问流量进行全面的控制" },
      { Key: "B", Value: " 直连模式组网网关可能成为网络的单点故障源" },
      { Key: "C", Value: "旁路模式组网网关的处理能力会限制内网访问外网的性能" },
      { Key: "D", Value: "旁路模式组网不能全面的保护网络" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">下面关于安全联盟（SA）的说法正确的是',
    answer: "ACD",
    options: [
      {
        Key: "A",
        Value: " 由SPI、 IP目的地址以及安全协议标识符三元組唯一标识",
      },
      { Key: "B", Value: " IPsec SA是双向的" },
      { Key: "C", Value: "SA可通过手工配置和自动协商两种方式建立" },
      { Key: "D", Value: "IKE不仅用于IPsec， 它是一个通用的交换协议" },
    ],
    analysis: "（D答案优点怪怪的，IKE可以独立运行这是真的）",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">下面哪个说法是正确的',
    answer: "AC",
    options: [
      {
        Key: "A",
        Value: "AH在传输模式中呆护整个原始IP包，在隧道模式中保护整个新IP包",
      },
      {
        Key: "B",
        Value: "AH在传输模式中保护整个原始IP包，在隧道模式中保护IP包的上层协议",
      },
      {
        Key: "C",
        Value: "ESP在传输模式中保护IP包的上层协议，在隧道模式中保护整个IP包",
      },
      {
        Key: "D",
        Value: "ESP在传输模式中验证IP头后的数据包，在隧道模式中保护整个IP包",
      },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">在防火墙上配置了 GRE VPN•现输入命令<br class="markdown_return">Display interface tunnel 0 ：显示如下信息，下列说法正确的是？<br class="markdown_return">&lt;H3C>DisplayInterface tunnel 0<br class="markdown_return">Tunnel0<br class="markdown_return">Current state:UP<br class="markdown_return">Line protocol state:UPDescription: Tunnel0Interface<br class="markdown_return">Bandwidth: 64kbpsMaximum TransmitUnit: 1476Internet<br class="markdown_return">AddressIs 10.1.2.1/24 Primary Tunnel source 192.13.2.1，destination 192.13.2.2 Tunnel keepaliveDisabled Tunnel TTL 255<br class="markdown_return">Tunnel protocol/transport GRE/IPGRE keyDisabled<br class="markdown_return">Checksumming of GRE packetsDisabled<br class="markdown_return">Output queue -Urgent queuing: Size/Length/Discards 0/100/0 Output queue - Protocol queuing: Size/Length/Discards 0/500/0 Output queue -<br class="markdown_return">FIFO queuing: Size/Length/Discards 0/75/0 Last<br class="markdown_return">Clearing of<br class="markdown_return">Counters: Never<br class="markdown_return">Last 300 secondsInput rate: 0Bytes/sec，0Bits/sec，0 packets/sec Last 300 seconds output rate: 0<br class="markdown_return">Bytes/sec，0Bits/sec，0 packets/secInput: 5 packets，420Bytes，0Drops<br class="markdown_return">Output: 8 packets，672Bytes，0Dropsf',
    answer: "BC",
    options: [
      { Key: "A", Value: "本端 tunnel 口地址为 192.13.2.1" },
      { Key: "B", Value: "Tunne 接口当前状态为开启" },
      { Key: "C", Value: "隧道对端物理接口地址为 192.13.2.2" },
      { Key: "D", Value: "Tunnel 口己设置 GRE 类型隧道接口的密钥" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">近日，某企业服务区大面积感染勒索百度，重要数据被加密，采取以下哪些措施可以防止此类事件发生？',
    answer: "ABCDE",
    options: [
      { Key: "A", Value: " 在互联网处理设备上配置IPS、AV策略" },
      {
        Key: "B",
        Value: "位了保证特征库的及时升级，在相关设备上配置定期自动升级功能",
      },
      { Key: "C", Value: " 对于重要的数据文件，采取定期的本地备份" },
      {
        Key: "D",
        Value:
          "由于勒索病毒通过23/135/137/139/445/3389等端口传播，可以在网络边界防火墙上阻断外界对于这些端口的访问",
      },
      { Key: "E", Value: " 及时省会操作系统到最新版本" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">以下关于NGFW防火墙对SYS Flood攻击的防范，正确的是？',
    answer: "CD",
    options: [
      { Key: "A", Value: "连接限制技术包括SYNCookie和Safe Reset两种方法" },
      {
        Key: "B",
        Value: "连接代理技术包括TCP半开连接数限制和TCP新建连接速率限制两种方法",
      },
      {
        Key: "C",
        Value: "TCP半开连接数限制和TCP新建连接速率限制都是基于统计意义上的方法",
      },
      {
        Key: "D",
        Value: "SYNCokie技术的实现机制是防火墙在客户端与服务器之间做连接代理",
      },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">套接字是支持TCP/P的网络通信的基本操作单元，一个套接字由相关五元组构成。下列元素中哪些是五元组的组成部分',
    answer: "ABD",
    options: [
      { Key: "A", Value: " 目的地址" },
      { Key: "B", Value: " 源端口" },
      { Key: "C", Value: " 载荷" },
      { Key: "D", Value: " 协议" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">下列哪些攻击手段是H3C防火墙可以防御的？',
    answer: "ABC",
    options: [
      { Key: "A", Value: " 跨站脚本攻击" },
      { Key: "B", Value: " Smurf攻击" },
      { Key: "C", Value: " WinNuke攻击" },
      { Key: "D", Value: " 后门攻击" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">防火墙基于域的用户管理，以下说法正确的是',
    answer: "ABD",
    options: [
      {
        Key: "A",
        Value:
          " 为便于对不同接入方式的用户进行区分管理，提供更为精细且有差异化的认证、授权、计费服务，AAA將用户划分为：Login用戶、Portal接入用户、PPP接入用户",
      },
      { Key: "B", Value: "防火墙对用户的管理是基于ISP域的" },
      { Key: "C", Value: "防火墙根据用户登入的接口决定用户所属的域" },
      { Key: "D", Value: "用户所属的ISP域是由用户登录时提供的用户名决定的" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">RADIUS服务器通常要维护Users、Clients、D.ictionary三个数据库，以下说法正确的有',
    answer: "AB",
    options: [
      {
        Key: "A",
        Value: "Dictionary：用于存储RADIUS 协议中的属性和属性值含义的信息",
      },
      {
        Key: "B",
        Value:
          "Users：用于存储用户信息（如用户名、口令以及使用的协议、IP 地址等配置信息）",
      },
      {
        Key: "C",
        Value:
          "D.ictionary：用于存储RADIUS 客户端的信息（如NAS 的共享密钥、IP 地址等）",
      },
      {
        Key: "D",
        Value: "C.lients：用于存储RADIUS 协议中的属性和属性值含义的信息",
      },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">网络层常见的安全风险有哪些？',
    answer: "CD",
    options: [
      { Key: "A", Value: " .\tMAC欺骗" },
      { Key: "B", Value: " .\tWEB攻击" },
      { Key: "C", Value: "地址扫描" },
      { Key: "D", Value: "Smurf攻击" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">下列哪些是防火墙所具备的基本功能？',
    answer: "ABCD",
    options: [
      { Key: "A", Value: " 攻击防范" },
      { Key: "B", Value: " NAT" },
      { Key: "C", Value: " 路由交换" },
      { Key: "D", Value: " 双机热备" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">防火墙按照检测技术可以分为哪几种？',
    answer: "ABD",
    options: [
      { Key: "A", Value: " 包过滤防火墙" },
      { Key: "B", Value: " 应用代理防" },
      { Key: "C", Value: " 网络防火墙" },
      { Key: "D", Value: " 状态检测防火墙" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">用户AAA认证方式包括？',
    answer: "ABD",
    options: [
      { Key: "A", Value: "远端认证" },
      { Key: "B", Value: " 不认证" },
      { Key: "C", Value: " 授权认证" },
      { Key: "D", Value: " 本地认证" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return"><p>以下哪些类型的成员可以加入到安全域中？</p>',
    answer: "ABCD",
    options: [
      { Key: "A", Value: "<p>IP子网</p>" },
      { Key: "B", Value: "<p>三层接口</p>" },
      { Key: "C", Value: "<p>VLAN</p>" },
      { Key: "D", Value: "<p>二层接口</p>" },
    ],
    analysis:
      "<p>老防火墙还可以把ip子网、vlan也加入到安全域中，但是NGFW的不行。</p>",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">关于pat模式，下面说法正确的是？',
    answer: "AB",
    options: [
      { Key: "A", Value: " 地址转换时会建立pat表项，记录IP地址的映射关系" },
      { Key: "B", Value: " 该模式下，一个NAT地址可以分配给多个内网地址使用" },
      { Key: "C", Value: " 支持TCP、UDP、不支持ICMP报文" },
      { Key: "D", Value: " NAT设备只对报文头部的IP地址进行转换，不转换端口号" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">下面那些不属于三层vpn技术?',
    answer: "AC",
    options: [
      { Key: "A", Value: "PPTP" },
      { Key: "B", Value: "MPLS VPN" },
      { Key: "C", Value: "L2TP" },
      { Key: "D", Value: "GRE" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">下面关于GRE协议的描述正确的是？',
    answer: "ACD",
    options: [
      {
        Key: "A",
        Value:
          " GRE提供了将一种协议的报文封装在另外一种协议报文中的机制，使报文能够在异种网络中传输，异种报文传输的隧道成为tunnel",
      },
      { Key: "B", Value: " GER是二层协议" },
      { Key: "C", Value: " GRE协议实际上是一种承载协议" },
      {
        Key: "D",
        Value:
          " GRE是对某些网络协议（如：IP、IPX等）的数据报文进行封装，使这项被封装的数据报文能够在另外一种网络协议（如：IP）中传输",
      },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">以下属于块加密算法的是:',
    answer: "CD",
    options: [
      { Key: "A", Value: " RSA" },
      { Key: "B", Value: " RC" },
      { Key: "C", Value: "DES" },
      { Key: "D", Value: "AES" },
    ],
    analysis: "（块加密就是对称加密算法--3DES也是）",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">某客户在H3C防火墙上配置了URL过滤功能，没有实现过滤可能原因:',
    answer: "ACD",
    options: [
      { Key: "A", Value: " 过滤规则URL填写错误" },
      { Key: "B", Value: " License到期" },
      { Key: "C", Value: " 没有在安全策略中添加" },
      { Key: "D", Value: " 配置没有激活" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">以下关于防火墙双机热备的说法正确的是?',
    answer: "ABC",
    options: [
      {
        Key: "A",
        Value: " 负载分担模式下，两台设备均为主设备，都处理业务流量",
      },
      {
        Key: "B",
        Value: " 根据组网情况，双机热备有两种工作模式：主备模式和负载分担模式",
      },
      { Key: "C", Value: " 双机热备的实现机制是会话同步" },
      {
        Key: "D",
        Value:
          " 防火墙双机热备流量切换只有两种方式：一是通过VRRP实现流量切换，二是通过动态路由实现流量切换",
      },
    ],
    analysis:
      '（D答案有异议，堆叠技术也可以）<br class="markdown_return">说明/参考: ★ 详见第二章P38,2.3.5章节',
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">关于Internet上常见的网络安全威胁，下列说法正确的是？',
    answer: "ABD",
    options: [
      {
        Key: "A",
        Value:
          " 主要的DOS/DDOS攻击有Smurf、land、syn flood、udp flood和ICMP flood等",
      },
      { Key: "B", Value: " 主要的畸形报文攻击有ping of death、teardrop等" },
      {
        Key: "C",
        Value:
          " DOS/DDOS攻击的攻击者通过寻找进入目标网络的入口来阻止合法用户访问网络资源",
      },
      {
        Key: "D",
        Value:
          " 成功的DOS/DDOS攻击一定会导致服务器性能急剧下降，造成正常客户的访问失败",
      },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">以下哪些情况会主动将快速转发表项置为无效？',
    answer: "ABCD",
    options: [
      { Key: "A", Value: " 转发表项的删除" },
      { Key: "B", Value: " 接口地址的ARP发生变化" },
      { Key: "C", Value: "转发表项的更新" },
      { Key: "D", Value: " 接口的物理down" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">关于内部服务器模式，下面说法正确的是？',
    answer: "BCD",
    options: [
      {
        Key: "A",
        Value:
          " 内部服务器模式下，需配置global地址与服务器地址一一对应，且端口必须一一相同",
      },
      {
        Key: "B",
        Value:
          " 若公司门户网站需要提供外部访问，则需要用到NAT技术中的内部服务器模式",
      },
      { Key: "C", Value: "  NAT转换可以屏蔽服务器地址，提供网络安全性" },
      { Key: "D", Value: " 配置简单，在接口下发NAT配置即可" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">I.KE的配置任务包括？',
    answer: "ABCD",
    options: [
      { Key: "A", Value: " 配置IKE 提议" },
      { Key: "B", Value: " 配置IKE profile" },
      { Key: "C", Value: " 配置IKE keychain" },
      { Key: "D", Value: " 配置本端和对端身份信息" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">下列关于SSL VPN的IP接入方式的说法正确的是?',
    answer: "AC",
    options: [
      {
        Key: "A",
        Value:
          "通过在远程主机上安装虚拟网卡，并配置内网IP和可以访间内网的路由实现",
      },
      { Key: "B", Value: "是一种基于B/S架构的访问模式" },
      { Key: "C", Value: "需要在远程主机上安装IP接入客户端软件" },
      { Key: "D", Value: 'IP接入方式也称为” 端口转发"方式' },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">下列关于L2TP会话的说法中正确的是？',
    answer: "AC",
    options: [
      { Key: "A", Value: "会话建立后才可以为用户转发数据" },
      { Key: "B", Value: "会话与隧道一一对应" },
      { Key: "C", Value: "同一个隧道中可以建立多个会话，用Session ID加以区分" },
      { Key: "D", Value: "用户断开连接时，先关闭隧道，再关闭会话" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">与L2TP VPN相比，SSL VPN具有哪些优点?',
    answer: "ABCD",
    options: [
      { Key: "A", Value: "不需要额外的拨号上网费用" },
      { Key: "B", Value: "可以提供对数据的加密，保证数据传输的安全性" },
      { Key: "C", Value: "可以提供高细粒度的访问控制" },
      { Key: "D", Value: "拥有基于应用资源的访问控制策略" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">I.KE野蛮模式交换时IKE协商发起者发送的第一个消息 ，其中包括?',
    answer: "ABCDE",
    options: [
      { Key: "A", Value: "验证方法" },
      { Key: "B", Value: "散列算法" },
      { Key: "C", Value: "加密算法" },
      { Key: "D", Value: "进行DH操作的组信息以及DH公共值" },
      { Key: "E", Value: "身份信息" },
      { Key: "F", Value: "验证载荷" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">I.nternet网络上常见的安全威胁包括下列哪些内容?',
    answer: "ABCD",
    options: [
      { Key: "A", Value: "ARP攻击" },
      { Key: "B", Value: "未授权资源访问" },
      { Key: "C", Value: "拒绝服务攻击" },
      { Key: "D", Value: "非法资源访问" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">如何合理防范MAC泛洪攻击?',
    answer: "CD",
    options: [
      { Key: "A", Value: "开启交换机动态MAC学习功能" },
      { Key: "B", Value: "关闭交换机的层转发功能" },
      { Key: "C", Value: "配置静态MAC转发表" },
      { Key: "D", Value: "配置端口的MAC学习条目限制" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">硬件防火墙都基于专用的硬件平台，下列关于防火墙硬件平台的说法正确的是?',
    answer: "ABCD",
    options: [
      {
        Key: "A",
        Value:
          "NP是专门为网络设备处理网络流量而设计的处理器，以解决x86架构性能不足和ASIC架构不够灵活的",
      },
      {
        Key: "B",
        Value:
          "多核架构采用多核处理器，在同一个芯片上集成了多个独立物理核心，每个核心都具有独立的逻辑结构",
      },
      {
        Key: "C",
        Value:
          "X86平台使用的是共享总线的一种架构，参与的网卡数量越多，获得的速率就越低，实际上不能应用在干兆防火墙上",
      },
      {
        Key: "D",
        Value:
          "ASIC架构的芯片功能比较单一，ASIC灵活性和打展性也比较差，不能完成邮件过滤、病毒防护等比较复杂的功能",
      },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">想象下，你是某个公司的老板，手头上有一台H3C防火墙,为了让员工“全身心”投入工作，这台防火墙可以怎么帮助你?',
    answer: "ABCD",
    options: [
      { Key: "A", Value: "微信只能发文字和语音，没法“斗图”" },
      { Key: "B", Value: "看看哪些人经常逛招聘网站" },
      { Key: "C", Value: "上班期间，-打开视频网站，浏览器就弹出自己的头像" },
      { Key: "D", Value: "打游戏高Ping，但视频会议流畅的很" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">关于以下命令说法正确的是<br class="markdown_return">[Device-isp-test] authentication default radius-scheme rd local',
    answer: "BC",
    options: [
      { Key: "A", Value: "Radius方案的名称为rd local" },
      { Key: "B", Value: "Local为备选认证方法" },
      { Key: "C", Value: "配置的isp域的名字是test" },
      { Key: "D", Value: "缺省认证方法是radius-scheme rd local" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">以下哪些配置可以实现Portal用户的登录权限?',
    answer: "BD",
    options: [
      { Key: "A", Value: "[Device-luser-manage-test] service-type portal" },
      { Key: "B", Value: "[Device-luser-network-test] service-type portal" },
      { Key: "C", Value: "[Device] local-user test class manage" },
      { Key: "D", Value: "[Device] local-user test class network" },
    ],
    analysis: "(门户接入，属于network类）",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">以下关于RADIUS认证说法正确的是',
    answer: "ABC",
    options: [
      {
        Key: "A",
        Value:
          "RADIUS最初仅是针对拨号用户的AAA协议，后来随着用户接入方式的多样化发展，\t\tRADIUS也适应多种用户接入方式",
      },
      {
        Key: "B",
        Value: "常应用在既要求较高安全性、又允许远程用户访问的各种网络环境中",
      },
      {
        Key: "C",
        Value: "RADIUS认证是一种分布式的、 客户端/服务器结构的信息交互协议",
      },
      {
        Key: "D",
        Value: "基于TCP传输，端口号1812、1813分别作为认证/授权、计费端口",
      },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">P.ortal认证通常也称为Web认证，即通过Web页面接受用户输入的用户名和密码,对用户进行身份认证，以达到对用户访问进行控制的目的。<br class="markdown_return">图中利用防火墙作为Portal Web服务器和Portal认证服务器实现用户Portali认证,防火墙上的配置如下:<br class="markdown_return"><img src="https://up.zaixiankaoshi.com/e.question/112450/0a9e64fe211ec8363fb1dbaff293d269"><br class="markdown_return"><img src="https://up.zaixiankaoshi.com/e.question/112450/004370c013252340bad9d8cea22e7015"><br class="markdown_return">正确的是：？',
    answer: "BCD",
    options: [
      {
        Key: "A",
        Value:
          "Portal Web服务器的URL为http://192.168.0.100:2331/portal，不可配置为开启Portal\t\t认证的接口的IP地址",
      },
      {
        Key: "B",
        Value: "本地Portal Web服升器的HTTP服务侦听的TCP端口号为2331",
      },
      { Key: "C", Value: "防火墙上的缺省域为dm1" },
      {
        Key: "D",
        Value: "配置本地Portal Web服务器提供的缺省认证页面文件为abc.zip",
      },
    ],
    analysis:
      "（A答案前半句正确，后半句话没看懂，去教材配置界面参考分析看看，而且单词也错了）",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">下列关于H3C防火墙会话加速功能说法正确的是?',
    answer: "ABD",
    options: [
      {
        Key: "A",
        Value:
          "启用会话加速功能时，双向代理方式的TCP Proxy功能对受保护IP表项相关信息的统计不准确",
      },
      {
        Key: "B",
        Value:
          "启用会话加速功能时，会话的半连接数统计不准确，无法根据半连接数阈值进行SYN Flood攻击检测",
      },
      { Key: "C", Value: "启用会话加速功能时，可以对非首包进行报文异常检测" },
      {
        Key: "D",
        Value:
          "会话加速和双机热备功能同时启用时，会话加速功能无效，并且会导致设备处理性能的下降",
      },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">根据IP层协议的不同，以下关于流的说法正确的是?',
    answer: "BCD",
    options: [
      { Key: "A", Value: "ICMP流:通过源IP、目的IP、协议三元组唯标识" },
      {
        Key: "B",
        Value:
          "RAW IP流:不属于上述协议的，通过源IP、目的IP、协议三元组唯一标识",
      },
      {
        Key: "C",
        Value: "TCP流:通过源IP、源端口、协议、目的IP、目的端口五元组唯-标识",
      },
      {
        Key: "D",
        Value: "UDP流:通过源IP、源端口、协议、目的IP、目的端口五元组唯标识",
      },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">在设备上开启debug信息时，以下哪些说法是正确的?',
    answer: "ABCD",
    options: [
      { Key: "A", Value: "有vpn-instance的需要在ACL里加vpn-instance" },
      { Key: "B", Value: "debug完成后需要关闭debug开关" },
      { Key: "C", Value: "防止不必要的debug信息开启" },
      { Key: "D", Value: "尽量写明精确的ACL，精确到源目地址和协议" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">内网到外网的出接口做了nat配置.则下面说法正确的是?',
    answer: "AB",
    options: [
      {
        Key: "A",
        Value:
          "内网访问外网流量到达nat设备(防火墙)先匹配安全策略，再匹配nat策略",
      },
      { Key: "B", Value: "动态nat策略均在接口模式下下发" },
      {
        Key: "C",
        Value:
          "pat模式与no pat模式配置相同，区别在于全局下发配置时，不需要跟no pat",
      },
      {
        Key: "D",
        Value:
          "内网访问外网流量到达nat设备(防火墙)先匹配nat策略，再匹配安全策略",
      },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">某公司有几百名员工需要访问因特网，下面哪种技术可以合理满足需求?',
    answer: "AD",
    options: [
      { Key: "A", Value: "easy ip" },
      { Key: "B", Value: "nat static" },
      { Key: "C", Value: "nopat" },
      { Key: "D", Value: "pat" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">如下图所示拓扑中作为LAC的PC无法拨通LNS，提示：没有应答，打开debyg l2tp control，输出如下debug信息<br class="markdown_return"><img src="https://up.zaixiankaoshi.com/e.question/112450/a1208c633fabfa8a04aa3487b573c177"><br class="markdown_return"><img src="https://up.zaixiankaoshi.com/e.question/112450/e0333e71cb1c2de21b8aa70eccd24fcc">',
    answer: "ACD",
    options: [
      { Key: "A", Value: "A" },
      { Key: "B", Value: "B" },
      { Key: "C", Value: "C" },
      { Key: "D", Value: "D" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">如下图所示拓扑中作为LAC的PC可以拨通LNS ,但是无法获取地址，下列分析正确的是?<br class="markdown_return"><img src="https://up.zaixiankaoshi.com/e.question/112450/b02225d46b828ee22066f14828f6f4bd">',
    answer: "ABCD",
    options: [
      {
        Key: "A",
        Value: '检查是否在VT下使用”remote address pool"来给对方分配地址。',
      },
      { Key: "B", Value: "检查地址池配置是否正确。" },
      { Key: "C", Value: "L2TP建立成功后，便开始PPP协商。" },
      { Key: "D", Value: "PC的地址通过IPCP协商来获取。" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">H3C SSL VPN通过哪些因素综合确定用户可以合法访问的网络资源?',
    answer: "ACD",
    options: [
      { Key: "A", Value: "主机检查结果" },
      { Key: "B", Value: "认证方式" },
      { Key: "C", Value: "用户身份" },
      { Key: "D", Value: "安全策略" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">下面关于加密的实现层次说法正确的是',
    answer: "ABCD",
    options: [
      { Key: "A", Value: "IPsec是网络层加密" },
      { Key: "B", Value: "在链路两端直接加入加密盒是数据链路层加密" },
      { Key: "C", Value: "邮件加密、SSH. 文件加密是应用层加密" },
      { Key: "D", Value: "SSL是传输层加密" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">下列关于H3C防火墙防病毒处理的整体流程说法正确的有:',
    answer: "BCD",
    options: [
      {
        Key: "A",
        Value:
          "设备将报文同时与特征库中的病毒特征和MD5规则进行匹配，同时匹配成功则认为该报文携带病毒，井进行下一步处理。",
      },
      {
        Key: "B",
        Value:
          "如果病毒报文符合应用例外，则执行应用例外的防病毒动作，否则执行所属应用层协议的防病毒动作。",
      },
      {
        Key: "C",
        Value:
          "如果报文匹配了某个安全策略，且此策略的动作是允许并引用了防病毒策略，则设备将继续识别此报文的应用层协议。",
      },
      {
        Key: "D",
        Value:
          "如果报文的应用层协议为防病毒功能所支持， 则设备使用病毒特征库中的病毒特征对此报文进行匹配，否则不对其进行防病毒处理。",
      },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">H3C防火墙防病毒动作是指对符合病毒特征的报文做出的处理，包括如下几种类型:',
    answer: "ABC",
    options: [
      { Key: "A", Value: "阻断:禁止病毒报文通过，同时生成病毒日志。" },
      { Key: "B", Value: "允许:允许病毒报文通过。" },
      { Key: "C", Value: "告警:允许病毒报文通过，同时生成病毒日志。" },
      {
        Key: "D",
        Value:
          "重置:通过发送TCP的reset报文或UDP的ICMP端口不可达报文断开TCP或UDP连接。",
      },
    ],
    analysis: "(D答案好像也对，教材当中叫做重定向，处理细节教材当中没有描述）",
    qtype: "2",
    correct: [],
  },
  {
    question: '<br class="markdown_return">以下关于H3C ACG说法正确的有',
    answer: "AB",
    options: [
      {
        Key: "A",
        Value:
          "ACG产品支持旁路部署，部署时需要在“系统管理-部署方式”处将接收流量的接口打钩, \t并在交换机上将流量镜像到该接口",
      },
      { Key: "B", Value: "ACG产品支持微信认证、短信认证等功能" },
      {
        Key: "C",
        Value:
          "ACG的DFI主要用来识别应用的静态报文特征，DPI主要用来识别应用的动态流量特\t\t征",
      },
      {
        Key: "D",
        Value: "ACG产品不支持VRF功能，因此无法作为MCE设备和MPLS网络对接",
      },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      '<br class="markdown_return">H3C防火墙安全策略的发展主要经历哪三个阶段?',
    answer: "BCD",
    options: [
      { Key: "A", Value: "基于三元组的域间策略" },
      { Key: "B", Value: "基于ACL的或间策略阶段" },
      { Key: "C", Value: "NGFW的一体化安全策略" },
      { Key: "D", Value: "融合UTM的对象策略" },
    ],
    analysis: "",
    qtype: "2",
    correct: [],
  },
  {
    question:
      "安全策略之间是存在顺序的，设备缺省按照规则的创建顺序对报文进行匹配，先创建的先匹配。",
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
      '<br class="markdown_return">动态NAT的三种模式均解决了公网地址匮乏的，这也是NAT技术的优点之一。',
    answer: "B",
    options: [
      { Key: "A", Value: "正确" },
      { Key: "B", Value: "错误" },
    ],
    analysis: "No-pat模式没有解决",
    qtype: "3",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">SSL协议面向传输层提供端到端的、有连接的加密传输服务。',
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
      '<br class="markdown_return">升级H3C防火墙特征库时，不需要重启设备就能生效。上述说法是？？',
    answer: "A",
    options: [
      { Key: "A", Value: "正确" },
      { Key: "B", Value: "错误" },
    ],
    analysis: "百度上有人说不需要，没条件做实验证实",
    qtype: "3",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">如果把TCP SYN包的源地址和目标地址都设置成某一个受害者的P地址，将导致受害者向它自己的地址发送SYN-ACK消息，结果这个地址又发回ACK消息并创建一个空连接，每一个这样的连接都将保留直到超时。这就造成SYNFlood攻击。上述说法是_的',
    answer: "B",
    options: [
      { Key: "A", Value: "正确" },
      { Key: "B", Value: "错误" },
    ],
    analysis: "这个是Land攻击",
    qtype: "3",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">通过web/telnet/SSH登录设备，都需要在防火墙上放通从客户端到设备本地的安全策略。上述说法是：',
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
      '<br class="markdown_return">防范WinNuke攻击的方法是检查UDP报文，如果报文的目的端口号为139，且UDP的紧急标志被置位，而且携带了紧急数据区，则丢弃。上述说法是',
    answer: "B",
    options: [
      { Key: "A", Value: "正确" },
      { Key: "B", Value: "错误" },
    ],
    analysis: "（TCP连接）",
    qtype: "3",
    correct: "",
  },
  {
    question:
      "关联表是一个三元组表项，使用IP地址、端口、和协议作为Key . Matchmode字段表示报文匹配关联表的Local Key还是Global Key",
    answer: "A",
    options: [
      { Key: "A", Value: "正确" },
      { Key: "B", Value: "错误" },
    ],
    analysis: "答案未知，超出教材外",
    qtype: "3",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">通过在交换机上配置静态条目，绑定到正确的出接口，可以避免MAC欺骗攻击风险，上述说法是？？',
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
      '<br class="markdown_return">防火墙的接口既可以工作在三层模式也可以工作在二层模式，但是同一台防火墙的所有端口只能处于同一种模式，该说法？',
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
      '<br class="markdown_return">动态NAT中easy ip模式下外网接口的地址同一时间只能给一个内网IP使用。',
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
      '<br class="markdown_return">H3C防火墙入侵防御功能需要安装License文件，Licsnse到期后无法升级特征库，入侵防御功能不可用。正确还是错误？',
    answer: "B",
    options: [
      { Key: "A", Value: "正确" },
      { Key: "B", Value: "错误" },
    ],
    analysis: "（只是不能升级，但还能继续用旧的特征库）",
    qtype: "3",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">在一个ISP域中，RADIUS授权方法和RADIUS认证方法无需引用相同的RADIUS方案，也可以生效。',
    answer: "A",
    options: [
      { Key: "A", Value: "正确" },
      { Key: "B", Value: "错误" },
    ],
    analysis: "实验命令是可以的，最终效果没测试过。个人倾向于A答案",
    qtype: "3",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">安全域是防火墙区别域路由器的基本特征之一，接口只有加入业务安全区域才能转发数据。',
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
      '<br class="markdown_return">I.Psec有两种工作模式，分别是传输模式和隧道模式。',
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
      '<br class="markdown_return">防范ARP欺骗的最好方法就是将IP和MAC静态绑定,把主机和网关都做IP和MAC绑定。 上述说法是的。',
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
      '<br class="markdown_return">安全策略加速功能失效，规则匹配的过程和建立连接的时间会变长，同时也会占用系统大量的CPU资源。',
    answer: "A",
    options: [
      { Key: "A", Value: "正确" },
      { Key: "B", Value: "错误" },
    ],
    analysis: "（教材里面有原话）",
    qtype: "3",
    correct: "",
  },
  {
    question:
      '<br class="markdown_return">在H3C防火墙上配置入侵防御，单击&lt;提交>按钮，激活入侵防御配置文件的配置内容时此功能会暂时中断DP业务的处理',
    answer: "A",
    options: [
      { Key: "A", Value: "正确" },
      { Key: "B", Value: "错误" },
    ],
    analysis: "（教材有原话）",
    qtype: "3",
    correct: "",
  },
];
