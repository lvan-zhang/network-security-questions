export default [
  {
    "question": "下列攻击手段中，不属于单包攻击的是（）",
    "answer": "A",
    "options": [
      { "Key": "A", "Value": "UDPflood 攻击" },
      { "Key": "B", "Value": "WinNuke" },
      { "Key": "C", "Value": "Land攻击" },
      { "Key": "D", "Value": "Smurf攻击" }
    ],
    "analysis": "单包攻击是指攻击者利用一种或少数几种特定的网络报文对目标系统进行攻击，这些报文通常被构造得非常简单，以达到快速发送和消耗目标资源的目的。在所给的选项中，只有UDPflood 攻击（选项A）不属于单包攻击。UDPflood攻击是一种利用UDP协议向目标系统大量发送UDP数据包的攻击方式，旨在消耗目标系统的网络带宽和处理能力，但它并不限于单个数据包的发送。相比之下，WinNuke、Land攻击和Smurf攻击都属于单包攻击的范畴。WinNuke是一种利用特定的TCP/IP协议漏洞对Windows操作系统进行攻击的方式；Land攻击是一种利用伪造的源IP地址和目标IP地址相同的IP数据报文对目标系统进行攻击；Smurf攻击是一种利用网络广播地址向大量目标发送ICMP回显请求报文的攻击方式。因此，答案为A。"
  },
  {
    "question": "<br class=\"markdown_return\">L2TP数据报文以（）报文的形式发送，注册得端口号为（）",
    "answer": "A",
    "options": [
      { "Key": "A", "Value": "UDP1701" },
      { "Key": "B", "Value": "TCP 1701" },
      { "Key": "C", "Value": "UDP1700" },
      { "Key": "D", "Value": "TCP1700" }
    ],
    "analysis": "L2TP（Layer 2 Tunneling Protocol）是一种用于虚拟专用网络（VPN）的通信协议。在L2TP中，数据报文以UDP报文的形式发送。因此，正确的注册端口号是UDP 1701。选项A中的UDP1701是正确的选择。TCP 1701是错误的，因为L2TP使用UDP而不是TCP。选项C和选项D的端口号分别是UDP1700和TCP1700，与L2TP协议不匹配。因此，答案为A。"
  },  
  {
    "question": "<br class=\"markdown_return\">假设某企业总部和分支之间原采用物理专线连接的方式构建Intranet 网络；现欲将总部和分支都接入Intranet ，在总部和分支间启用VPN 隧道，并保证数据在网络上传输的私密性，可选择()VPN 技术",
    "answer": "B",
    "options": [
      { "Key": "A", "Value": "PPTP" },
      { "Key": "B", "Value": "IPsec" },
      { "Key": "C", "Value": "GRE" },
      { "Key": "D", "Value": "L2tp" }
    ],
    "analysis": "在总部和分支间启用VPN隧道，需要确保数据的私密性。IPsec（Internet Protocol Security）是一种常用的VPN技术，能够提供数据加密、数据完整性验证和身份认证等安全机制，因此适合保障数据在网络上传输的私密性。PPTP（Point-to-Point Tunneling Protocol）虽然也是一种VPN技术，但安全性相对较低，容易受到攻击。GRE（Generic Routing Encapsulation）和L2tp（Layer 2 Tunneling Protocol）虽然可以建立隧道，但并不提供数据加密等安全保护措施。因此，答案为B。"
  },  
  {
    "question": "<br class=\"markdown_return\">防火墙具有隐私内网网络结构，防止外部攻击源对内部服务器的攻击行为，称之为（）",
    "answer": "C",
    "options": [
      { "Key": "A", "Value": "攻击防范" },
      { "Key": "B", "Value": "包过滤" },
      { "Key": "C", "Value": "NAT" },
      { "Key": "D", "Value": "地址过滤" }
    ],
    "analysis": "防火墙在具有隐私内网网络结构时，通过对内部服务器进行网络地址转换（NAT）来防止外部攻击源对内部服务器的攻击行为。NAT技术通过修改数据包的源IP地址和目标IP地址，使得外部攻击源无法直接访问内部服务器，从而保护了内部服务器的安全性。攻击防范、包过滤和地址过滤都是防火墙的安全功能，但它们并不涉及将内部服务器隐藏在隐私内网网络结构中的操作，因此不符合题目描述的情况。因此，答案为C。"
  },
  {
    "question": "<br class=\"markdown_return\">下列关于应用审计配置说法错误的是",
    "answer": "C",
    "options": [
      { "Key": "A", "Value": "URL 审计分为预定义URL 和自定义URL 两部分" },
      { "Key": "B", "Value": "旁路部署时做全部应用的升级，镜像流量不需做处理动作" },
      {
        "Key": "C",
        "Value": "日志级别默认为“不记录” 仍然可以在日志查询里查到相关日志信息",
      },
      { "Key": "D", "Value": "在“审计行为内容” 里可以配置某个 APP做的相应动作" }
    ],
    "analysis": "关于应用审计配置，说法错误的是C。实际上，日志级别默认为“不记录”时，在日志查询里是无法查到相关日志信息的，因为这意味着系统不会记录任何日志信息。而选项C中的描述与此相反，因此是错误的。选项A提到了URL审计的分类，选项B提到了旁路部署时的处理动作，选项D提到了在“审计行为内容”里配置某个APP的动作，它们的描述与应用审计配置相关，且没有明显错误。因此，答案为C。"
  },
  {
    "question": "<br class=\"markdown_return\">下列哪一种防火墙运行时速度最慢，并且运行在 OSI模型中的最高层",
    "answer": "C",
    "options": [
      { "Key": "A", "Value": "包过滤防火墙" },
      { "Key": "B", "Value": "状态防火墙" },
      { "Key": "C", "Value": "应用代理防火墙" },
      { "Key": "D", "Value": "SMB防火墙" }
    ],
    "analysis": "应用代理防火墙运行时速度最慢，并且运行在OSI模型中的最高层。应用代理防火墙通过深度检查应用层数据包，对数据进行解析和重组，因此速度相对较慢。与之相比，包过滤防火墙和状态防火墙运行在较低的网络层，对数据包的处理速度通常较快。而SMB防火墙专门针对SMB（Server Message Block）协议进行过滤，速度可能介于包过滤防火墙和应用代理防火墙之间。因此，答案为C。"
  }
  ,
  {
    "question": "<br class=\"markdown_return\">下列关于对于 NGFW防火墙的功能描述，不正确的是",
    "answer": "A",
    "options": [
      { "Key": "A", "Value": "防火墙能够防网页被篡改" },
      { "Key": "B", "Value": "防火墙能够限制网络访问" },
      { "Key": "C", "Value": "防火墙能够产生审计日志" },
      { "Key": "D", "Value": "防火墙能够执行安全策略" }
    ],
    "analysis": "NGFW防火墙（Next-Generation Firewall）具有强大的安全功能，但不能直接防止网页被篡改。其主要功能包括限制网络访问、产生审计日志和执行安全策略。防止网页被篡改通常需要其他安全措施，例如使用内容安全策略或者端点安全方案。因此，描述A不正确。"
  }
  ,
  {
    "question": "<br class=\"markdown_return\">在UDP端口扫描中，对主机端口是否开放的判断依据是",
    "answer": "A",
    "options": [
      { "Key": "A", "Value": "根据被扫描主机开放端口放回的信息判断" },
      { "Key": "B", "Value": "根据被扫描主机关闭端口返回的信息判断" },
      { "Key": "C", "Value": "既不根据A也不根据B" },
      { "Key": "D", "Value": "综合考虑A和B的情况进行判断" }
    ],
    "analysis": "在UDP端口扫描中，对主机端口是否开放的判断依据是根据被扫描主机开放端口返回的信息。UDP是一种无连接的传输协议，因此在进行UDP端口扫描时，通常是发送UDP数据包到目标端口，根据目标主机返回的响应（如果有）来判断端口是否开放。如果收到了响应，说明该端口是开放的；如果没有收到响应，说明该端口可能是关闭的。因此，答案为A。"
  }
  ,
  {
    "question": "<br class=\"markdown_return\">如果在IP网络中使用 GRE 协议在承载IPX协议，则报文的封装过程为",
    "answer": "C",
    "options": [
      { "Key": "A", "Value": "链路层协议->IPX>GRE>IP" },
      { "Key": "B", "Value": "链路层协议->GRE>IPX>IP" },
      { "Key": "C", "Value": "链路层协议->IP>GRE>IPX" },
      { "Key": "D", "Value": "链路层协议->GRE>IP>IPX" }
    ],
    "analysis": "在IP网络中使用GRE协议承载IPX协议时，报文的封装过程为：链路层协议（如以太网）-> IP -> GRE -> IPX。GRE协议用于在IP网络中封装其他协议的数据，因此首先将IPX协议的数据封装在IP包中，然后再在IP包中添加GRE头部，形成GRE封装的IP包。最终，该封装的IP包作为载荷数据通过IP网络传输。因此，答案为C。"
  }
  ,
  {
    "question": "<br class=\"markdown_return\">防火墙缺省存在local、trust、DMZ、Management、untrust，并上述缺省安全域不能被删除，以上说法是",
    "answer": "B",
    "options": [
      { "Key": "A", "Value": "错误" },
      { "Key": "B", "Value": "正确" }
    ],
    "analysis": "防火墙缺省存在local、trust、DMZ、Management、untrust等安全域，并且通常情况下这些缺省安全域不能被删除。这些安全域的存在有助于防火墙的安全策略的制定和实施，以及网络的安全管理。因此，以上说法是正确的，答案为B。"
  }
  ,
  {
    "question": "<br class=\"markdown_return\">下列那一项没有涉及到密码技术",
    "answer": "C",
    "options": [
      { "Key": "A", "Value": "SSH" },
      { "Key": "B", "Value": "SSL" },
      { "Key": "C", "Value": "GRE" },
      { "Key": "D", "Value": "IPSec/IKE" }
    ],
    "analysis": "在所给的选项中，GRE（Generic Routing Encapsulation）是一种隧道协议，通常用于在 IP 网络中封装其他协议的数据，但它并不涉及密码技术。而SSH（Secure Shell）、SSL（Secure Sockets Layer）和IPSec/IKE（Internet Protocol Security/Internet Key Exchange）都是涉及密码技术的安全协议，用于加密通信或者进行安全身份验证。因此，选项C没有涉及到密码技术，是正确答案。"
  }
  ,
  {
    "question": "<br class=\"markdown_return\">H3C 负载均衡交换机提供了全面的健康检测算法，负载均衡调度算法以及会话保持功能，可以根据应用场景进行灵活的选择，从而达到最优的负载均衡效果，下面关于H3C负载均衡交换机描述不正确的是:",
    "answer": "B",
    "options": [
      {
        "Key": "A",
        "Value": "可以提供基于源地址/端口，HTTP头信息，SSLID，HTTPCookie 信息的会话保持"
      },
      { "Key": "B", "Value": "负戴均衡调度功能和会话保持功能不能同时启动" },
      {
        "Key": "C",
        "Value": "可以提供基于ICMP，TCP，HTTP，VFTP，QSSL92DNS 等健康检测算法；"
      },
      {
        "Key": "D",
        "Value": "可以提供基于轮询，最小连接，最小响应时间，加权方式，源/目的地址 Hash 等负载均衡调度算法。 "
      }
    ],
    "analysis": "关于H3C负载均衡交换机的描述，不正确的是B。实际上，H3C负载均衡交换机的负载均衡调度功能和会话保持功能是可以同时启动的。负载均衡调度功能用于决定请求应该被分配到哪个服务器，而会话保持功能则用于确保用户的会话在多次请求之间保持在同一台服务器上。因此，描述B是不正确的。"
  }
  ,
  {
    "question": "<br class=\"markdown_return\"><p>以下哪些防火墙不支持SSL VPN功能?</p>",
    "answer": "A",
    "options": [
      { "Key": "A", "Value": " F1000-S" },
      { "Key": "B", "Value": "U200-A" },
      { "Key": "C", "Value": "V100-S" },
      { "Key": "D", "Value": "V100-E" }
    ],
    "analysis": "SSL VPN（Secure Sockets Layer Virtual Private Network）是一种通过SSL/TLS协议提供远程访问的安全连接方式。在所提供的选项中，防火墙型号 F1000-S 不支持SSL VPN功能，因为其型号中不包含SSL VPN功能的标识。而其他选项中的防火墙型号 U200-A、V100-S 和 V100-E 可能支持SSL VPN功能，因为型号中包含了额外的标识，可能指示了其支持的功能或特性。因此，答案为 A。"
  }
  ,
  {
    "question": "<br class=\"markdown_return\">通过哪个工具可以简化IPSec VPN的配置?",
    "answer": "A",
    "options": [
      { "Key": "A", "Value": "VPN Manager" },
      { "Key": "B", "Value": "VMS" },
      { "Key": "C", "Value": "SMS" },
      { "Key": "D", "Value": "XLOG" }
    ],
    "analysis": "通过 VPN Manager 工具可以简化 IPSec VPN 的配置。VPN Manager 是一种管理工具，专门用于管理和配置 VPN（Virtual Private Network）连接。它提供了图形化界面和简化的配置选项，使得用户可以更加轻松地设置和管理 IPSec VPN 连接。因此，答案为 A。"
  }
  ,
  {
    "question": "<br class=\"markdown_return\">以下哪个场景不存在VPN 的需求？",
    "answer": "A",
    "options": [
      { "Key": "A", "Value": "大型企业园区互联" },
      { "Key": "B", "Value": "出差员工移动办公" },
      { "Key": "C", "Value": "超市/门店/卖场的联网" },
      { "Key": "D", "Value": "加油站/收费站的联网" }
    ],
    "analysis": "VPN通常用于在不同地点或者网络之间建立安全的连接，因此在出差员工移动办公、超市/门店/卖场的联网以及加油站/收费站的联网等场景中都存在VPN的需求，用于保障数据传输的安全性和隐私性。而在大型企业园区互联的场景中，通常存在着独立的内部网络和专线连接，可能并不需要使用VPN来建立连接，因此不存在VPN的需求。因此，以上选项中不存在VPN需求的场景是A，大型企业园区互联。"
  }
  ,
  {
    "question": "<br class=\"markdown_return\">下面哪个不是VPN技术中用到的加密算法",
    "answer": "D",
    "options": [
      { "Key": "A", "Value": "DES" },
      { "Key": "B", "Value": "3DES" },
      { "Key": "C", "Value": "AES" },
      { "Key": "D", "Value": "RIP/RIP2" }
    ],
    "analysis": "在VPN技术中，常用的加密算法有DES、3DES和AES，它们用于加密VPN通信中的数据。而RIP/RIP2是一种路由协议，不是用于加密VPN通信的加密算法。因此，选项D中的RIP/RIP2不是VPN技术中用到的加密算法，是不正确的。"
  }
  ,
  {
    "question": "<br class=\"markdown_return\">关于VPN，下述哪个说法是不正确的?",
    "answer": "B",
    "options": [
      { "Key": "A", "Value": "包转发是VPN 网关的关键性能指标；" },
      { "Key": "B", "Value": "接口数是VPN 网关的关键性能指标；" },
      { "Key": "C", "Value": "加密吞吐量是VPN 网关的关键性能指标；" },
      { "Key": "D", "Value": "最大并发隧道数是VPN 网关的关键性能指标。" }
    ],
    "analysis": "接口数不是VPN网关的关键性能指标。VPN网关的关键性能指标通常包括包转发性能、加密吞吐量和最大并发隧道数，这些指标更直接地反映了VPN网关在处理VPN连接时的性能表现。因此，说法B是不正确的。"
  }
  ,
  {
    "question": "<br class=\"markdown_return\">下述哪个是H3C专有的VPN技术",
    "answer": "C",
    "options": [
      { "Key": "A", "Value": "IPSec VPN" },
      { "Key": "B", "Value": "GRE VPN" },
      { "Key": "C", "Value": "动态 VPN" },
      { "Key": "D", "Value": "MPLS VPN" }
    ],
    "analysis": "H3C专有的VPN技术包括动态VPN。IPSec VPN是一种通用的VPN技术，通常由各个厂商实现并支持，而GRE VPN是基于GRE协议的VPN技术。MPLS VPN是一种基于MPLS技术的VPN实现。而动态VPN是H3C特有的技术，旨在为用户提供更加灵活和高效的VPN解决方案。因此，选项C中的动态VPN是H3C专有的VPN技术。"
  }
  ,
  {
    "question": "<br class=\"markdown_return\">下面哪个说法是错误的？",
    "answer": "A",
    "options": [
      {
        "Key": "A",
        "Value": "VPN 可以专线线路的备份，但是缺点在于组网复杂，而且价格昂贵"
      },
      {
        "Key": "B",
        "Value": "相对于PSTN拨号接入，VPN 接入方式可以提供更高的性能，而且安全性高"
      },
      {
        "Key": "C",
        "Value": "防火墙的一个功能特性是防止某些基于2层/3层网络协议的网络层攻击"
      },
      {
        "Key": "D",
        "Value": "防火墙可以提供路由交换、地址转换( NAT )、身份认证等多种功能"
      }
    ],
    "analysis": "说法A是错误的。VPN可以通过使用专线线路的备份来提高网络的冗余性和可靠性，但并不一定会导致组网复杂或价格昂贵。相反，VPN技术通常可以降低企业的通信成本，特别是对于跨地域通信需求较多的企业而言。因此，说法A不准确。"
  }
  ,
  {
    "question": "<br class=\"markdown_return\">SSL VPN 是解决远程用户访问敏感公司数据最简单最安全的解决技术。要使用SSL VPN ，需安装哪个软件?",
    "answer": "B",
    "options": [
      { "Key": "A", "Value": "客户端软件" },
      { "Key": "B", "Value": "浏览器" },
      { "Key": "C", "Value": "防火墙" },
      { "Key": "D", "Value": "防病毒" }
    ],
    "analysis": "要使用SSL VPN，只需使用标准的Web浏览器，如Chrome、Firefox或Internet Explorer等，而不需要安装任何额外的客户端软件。SSL VPN利用浏览器的SSL/TLS协议来实现安全的远程访问，因此用户只需在浏览器中输入VPN的网址，通过SSL VPN门户登录，即可安全地访问公司内部网络资源。因此，正确答案是B，需安装浏览器。"
  }
  ,
  {
    "question": "<br class=\"markdown_return\">SSL VPN 支持哪些接入方式?",
    "answer": "D",
    "options": [
      { "Key": "A", "Value": "Web" },
      { "Key": "B", "Value": "TCP" },
      { "Key": "C", "Value": "IP" },
      { "Key": "D", "Value": "以上都是" }
    ],
    "analysis": "SSL VPN支持多种接入方式，包括Web接入方式、TCP接入方式和IP接入方式。Web接入方式是最常见的方式，通过浏览器访问SSL VPN门户进行访问；TCP接入方式通常用于特定的应用程序，如Telnet、SSH等；IP接入方式则是直接基于IP协议的方式进行访问。因此，选项D“以上都是”是正确的。"
  }
  ,
  {
    "question": "<br class=\"markdown_return\">SSL VPN 主要可以解决:",
    "answer": "D",
    "options": [
      { "Key": "A", "Value": "适应各种网络条件下的安全接入" },
      { "Key": "B", "Value": "无法忍受VPN 客户端损坏和网关配置修改后不能访问" },
      { "Key": "C", "Value": "细粒度访问控制" },
      { "Key": "D", "Value": "以上全是" }
    ],
    "analysis": "SSL VPN主要可以解决多种问题，包括：\n- 适应各种网络条件下的安全接入，因为SSL VPN可以通过基于Web的方式实现远程访问，适应不同网络环境下的使用需求；\n- 无法忍受VPN客户端损坏和网关配置修改后不能访问的情况，因为SSL VPN不需要安装额外的客户端软件，只需要使用标准的Web浏览器即可访问；\n- 细粒度访问控制，SSL VPN可以提供基于用户、角色和资源的精细访问控制，确保用户只能访问到其具有权限的资源。\n因此，以上全是SSL VPN 主要可以解决的问题。"
  }
  ,
  {
    "question": "<br class=\"markdown_return\">以下属于块加密算法的是:",
    "answer": "C",
    "options": [
      { "Key": "A", "Value": "SHA-1" },
      { "Key": "B", "Value": "MD5" },
      { "Key": "C", "Value": "DES" },
      { "Key": "D", "Value": "RC4" }
    ],
    "analysis": "块加密算法是一种加密方式，它将明文数据分成固定大小的数据块，然后对每个数据块进行加密。DES（Data Encryption Standard）是一种块加密算法，它将64位的数据块加密成64位的密文数据块。相比之下，MD5（Message Digest Algorithm 5）、SHA-1（Secure Hash Algorithm 1）和RC4是哈希算法或流加密算法，并不是块加密算法。\n因此，选项C中的DES属于块加密算法。"
  }
  ,
  {
    "question": "<br class=\"markdown_return\">在 L2TP报文协商过程中，进行IP地址分配工作是在以下哪个阶段？",
    "answer": "D",
    "options": [
      { "Key": "A", "Value": "Establish (链路建立)阶段" },
      { "Key": "B", "Value": "LCP协商阶段" },
      { "Key": "C", "Value": "CHAP或 PAP验证阶段" },
      { "Key": "D", "Value": "网络协商（NCP） 阶段" }
    ],
    "analysis": "在L2TP报文协商过程中，进行IP地址分配工作是在网络协商（NCP）阶段。在这个阶段，L2TP隧道已经建立，LCP协商也已完成，接下来进行的是网络控制协议（NCP）的协商，其中包括IP地址分配等网络参数的协商工作。因此，正确答案是选项D。"
  }
  ,
  {
    "question": "<br class=\"markdown_return\">AH 和 ESP的协议号分别是:",
    "answer": "A",
    "options": [
      { "Key": "A", "Value": " 51，50" },
      { "Key": "B", "Value": " 50，51" },
      { "Key": "C", "Value": " 17，47" },
      { "Key": "D", "Value": " 47，17" }
    ],
    "analysis": "AH（认证头）的协议号是50，ESP（封装安全载荷）的协议号是51。AH用于对IP包进行认证，而ESP用于对IP包进行加密。因此，正确的协议号分别是51和50，对应选项A。"
  }
  ,
  {
    "question": "<br class=\"markdown_return\">IPSec 的加密和认证过程中所使用的密钥可以由()协议来自动生成和分发",
    "answer": "B",
    "options": [
      { "Key": "A", "Value": " ESP" },
      { "Key": "B", "Value": "IKE" },
      { "Key": "C", "Value": " SPI" },
      { "Key": "D", "Value": " AH" }
    ],
    "analysis": "IPSec的加密和认证过程中所使用的密钥可以由IKE（Internet Key Exchange）协议来自动生成和分发。IKE是IPSec的一部分，它负责在IPSec安全关联中进行身份认证、密钥协商和密钥管理等功能。通过IKE协议，IPSec的两个对端可以安全地交换密钥，并建立安全通信的连接。因此，正确的选项是B。"
  }
  ,
  {
    "question": "<br class=\"markdown_return\">在 L2TP组网中，LNS 侧对用户的验证方式有三种，代理验证、 强制验证和LCP重协商。 其中优先级最高的是",
    "answer": "C",
    "options": [
      { "Key": "A", "Value": " 代理验证" },
      { "Key": "B", "Value": " 强制CHAP验证" },
      { "Key": "C", "Value": " LCP重协商" },
      { "Key": "D", "Value": " 都相同 " }
    ],
    "analysis": "在L2TP组网中，LNS侧对用户的验证方式有三种：代理验证、强制验证和LCP重协商。这些验证方式的优先级不同。\n代理验证是一种最基本的验证方式，它仅在L2TP通道的建立过程中进行验证，但不会在通道建立后进行进一步验证。\n强制验证要求用户在建立L2TP通道时进行验证，如果用户未能通过验证，L2TP通道将不会建立。\nLCP重协商是一种更高级的验证方式，它在L2TP通道建立后，会定期发送LCP（Link Control Protocol）帧进行验证，以确保通道的状态和连接的可靠性。\n因此，优先级最高的验证方式是LCP重协商，它能够在通道建立后持续进行验证，以保证通道的稳定性和可靠性。"
  }
  ,
  {
    "question": "<br class=\"markdown_return\">下列关于 L2TP的说法正确的有:",
    "answer": "D",
    "options": [
      {
        "Key": "A",
        "Value": " 用户的远程系统可以通过一个远程接入方式接入到运营商的LAC 中，由LAC 对LNS发起L2TP隧道并建立会话"
      },
      {
        "Key": "B",
        "Value": "当用户的远程系统使用VPDN客户端软件对LNS发起L2TP隧道并建立会话时，隧道直接建立在客户端和LNS 之间，此时L2TP系统不存在LAC"
      },
      {
        "Key": "C",
        "Value": " L2TP隧道存在于一对LAC与LNS 之间。一个隧道内包括一个控制连接( Control Connection）一个隧道内只支持一个会话"
      },
      {
        "Key": "D",
        "Value": " L2TP是面向连接的，可以为其传送的信息提供一定的可靠性。LAC维护远程系统对其发起的呼叫状态和信息。一对LAC 和LNS 也同时维护在两者之间的相应信息和状态 "
      }
    ],
    "analysis": "选项A错误，因为L2TP隧道是在远程系统（LNS）和接入网关（LAC）之间建立的，并不是由远程系统对LNS发起隧道。\n选项B错误，因为L2TP隧道通常是在远程系统和接入网关之间建立的，不存在直接在客户端和LNS之间建立隧道的情况。\n选项C错误，因为一个L2TP隧道内可以同时支持多个会话，不仅限于一个会话。\n因此，正确的说法是选项D，它描述了L2TP的面向连接特性以及LAC和LNS之间相互维护信息和状态的情况。"
  }
  
  ,
  {
    "question": "<br class=\"markdown_return\">GRE 协议的协议号是：",
    "answer": "C",
    "options": [
      { "Key": "A", "Value": "50" },
      { "Key": "B", "Value": "51" },
      { "Key": "C", "Value": "47" },
      { "Key": "D", "Value": "48" }
    ],
    "analysis": "GRE（Generic Routing Encapsulation）协议的协议号是47。GRE协议用于在IP网络中封装其他协议的数据包，以实现虚拟私有网络（VPN）等功能。协议号是用于识别IP数据包中所封装的协议类型的字段，而GRE协议的协议号是固定的，为47。因此，选项C是正确的。"
  }
  ,
  {
    "question": "<br class=\"markdown_return\"><p>L2TP会话的建立是通过()完成的</p>",
    "answer": "D",
    "options": [
      { "Key": "A", "Value": "<p>TCP报文的 3 次握手</p>" },
      { "Key": "B", "Value": "<p>UDP报文的 3 次握手</p>" },
      { "Key": "C", "Value": "<p>TCP报文的 4 次握手</p>" },
      { "Key": "D", "Value": "<p>UDP报文的 4 次握手</p>" }
    ],
    "analysis": "<p>L2TP会话的建立是通过UDP报文的 4 次握手完成的。</p>"
  }
  ,
  {
    "question": "<br class=\"markdown_return\">下面有关L2TP配置说法正确的有:",
    "answer": "C",
    "options": [
      {
        "Key": "A",
        "Value": "可以配置完整的用户名或者特定的域名作为触发 L2TP发起连接的条件"
      },
      {
        "Key": "B",
        "Value": "当使用IPpool 命令给对端分配地址时，应确保IPpool 地址池里的地址和虚模板接口地址在同一网段内"
      },
      {
        "Key": "C",
        "Value": "当 L2TP group组号为 0，且不指定通道对端名 remote-name 时，发起 L2TP连接时，忽略对端用户名"
      },
      {
        "Key": "D",
        "Value": "L2TP默认配置情况下启用了隧道验证，且验证密码为空"
      }
    ],
    "analysis": "选项A错误，L2TP配置中通常不会使用完整的用户名或特定域名作为触发L2TP发起连接的条件，而是使用预先配置的L2TP组号。\n选项B错误，与L2TP配置无关，IP地址池和虚拟模板接口地址的网段可以不同。\n选项D错误，L2TP默认配置情况下是不启用隧道验证的，验证密码也不为空。\n因此，正确答案是选项C，当L2TP组号为0且不指定通道对端名时，发起L2TP连接时会忽略对端用户名。"
  }
  ,
  {
    "question": "ACL（访问控制列表）的类型包括有（）",
    "answer": "BCD",
    "options": [
      { "Key": "A", "Value": "七层ACL" },
      { "Key": "B", "Value": "二层ACL" },
      { "Key": "C", "Value": "高级ACL" },
      { "Key": "D", "Value": "基本ACL" }
    ],
    "analysis": "ACL（访问控制列表）是用于控制网络数据包进出路由器接口的一种方法。其类型包括：\n- 二层ACL：基于数据链路层信息（如MAC地址）进行过滤。\n- 高级ACL：基于网络层信息（如IP地址、协议类型）进行过滤。\n- 基本ACL：一种简单的ACL类型，通常只能根据源IP地址进行过滤。\n因此，正确答案是BCD。"
  }
  ,
  {
    "question": "以下关于HWTACACS协议与RADIUS协议说法正确的是()",
    "answer": "BD",
    "options": [
      { "Key": "A", "Value": "<p>HWTACACS 对报文主体全部进行加密</p>" },
      { "Key": "B", "Value": "<p>HWTACACS 采用TCP传输，RADIUS用UDP</p>" },
      {
        "Key": "C",
        "Value": "<p>HWTACACS和RADIUS都支持对设备的配置命令进行授权使用</p>"
      },
      { "Key": "D", "Value": "<p>RADIUS只对认证报文中的密码字段进行加密</p>" }
    ],
    "analysis": "<p>A选项表述有问题，应该是除了HWTACACS报文头，对报文主体全部进行加密。</p>"
  }
  ,
  {
    "question": "H3C NGFW的特征库包括以下哪些？",
    "answer": "ACD",
    "options": [
      { "Key": "A", "Value": "<p>URL分类特征库</p>" },
      { "Key": "B", "Value": "<p>ARP特征库</p>" },
      { "Key": "C", "Value": "<p>防病毒特征库</p>" },
      { "Key": "D", "Value": "<p>IPS特征</p>" }
    ],
    "analysis": "<p>特征库是NGFW识别网络流量和威胁的重要组成部分。选项A描述了URL分类特征库，用于识别和过滤网络流量中的URL。选项B描述的ARP特征库与NGFW的特征库无关。选项C描述了防病毒特征库，用于检测和阻止网络中的恶意软件。选项D描述的是IPS特征，用于检测和防御网络中的入侵行为。</p>"
  }
  ,
  {
    "question": "<br class=\"markdown_return\">IPsec 的优点有",
    "answer": "BCD",
    "options": [
      { "Key": "A", "Value": "抗DDoS（disributedDeny of sevice）" },
      { "Key": "B", "Value": "身份验证（data authentication）" },
      { "Key": "C", "Value": "参数完整性（dataIntegrity）" },
      { "Key": "D", "Value": "数据机密性（Confidenttiality） " }
    ],
    "analysis": "IPsec是一种网络协议套件，提供了数据传输的安全性。选项A描述的抗DDoS功能不是IPsec的主要优点，而是一种针对分布式拒绝服务攻击的防御措施，不属于IPsec协议的特性。选项B描述的身份验证、选项C描述的参数完整性、以及选项D描述的数据机密性是IPsec协议的核心优点，它们分别确保了数据传输的身份验证、完整性和机密性。因此，选项A是不正确的。"
  }
  ,
  {
    "question": "<br class=\"markdown_return\">安全联盟security association，通过以下哪些元素来唯一标识？",
    "answer": "ABD",
    "options": [
      { "Key": "A", "Value": "IP目的地址" },
      { "Key": "B", "Value": "安全协议号" },
      { "Key": "C", "Value": "IP源地址" },
      { "Key": "D", "Value": "安全参数索引（SPI） " }
    ],
    "analysis": "安全联盟（SA）是在IPsec中用于标识安全通信的一种机制。安全联盟通过以下元素来唯一标识：\n- IP目的地址（选项A）：指定通信的目的地。\n- 安全协议号（选项B）：确定使用的安全协议，例如AH或ESP。\n- 安全参数索引（SPI）（选项D）：用于在通信双方之间唯一标识安全联盟的标识符。\nIP源地址（选项C）通常不是用于标识安全联盟的元素，因此不属于安全联盟的唯一标识元素。因此，正确选项为ABD。"
  }
  ,
  {
    "question": "<br class=\"markdown_return\"><p>H3C 防火墙缺省的安全域包括</p>",
    "answer": "ABCDE",
    "options": [
      { "Key": "A", "Value": "<p>DMZ</p>" },
      { "Key": "B", "Value": "<p>Management</p>" },
      { "Key": "C", "Value": "<p>untrust</p>" },
      { "Key": "D", "Value": "<p>local</p>" },
      { "Key": "E", "Value": "trust" }
    ],
    "analysis": "<p>H3C 防火墙的缺省安全域包括：</p>\n- DMZ：用于放置公共服务器，如Web服务器、邮件服务器等，与外部网络隔离。\n- Management：用于管理防火墙设备的安全域。\n- untrust：用于连接到不可信网络的安全域。\n- local：用于本地流量的安全域。\n- trust：用于信任的内部网络的安全域。\n因此，缺省的安全域包括ABCDE。"
  }
  ,
  {
    "question": "<br class=\"markdown_return\">NAT 的实现方式包括",
    "answer": "ABCD",
    "options": [
      { "Key": "A", "Value": " easyIP方式" },
      { "Key": "B", "Value": "Nat server方式" },
      { "Key": "C", "Value": "PAT方式" },
      { "Key": "D", "Value": "No-pat方式" }
    ],
    "analysis": "NAT（Network Address Translation）的实现方式包括：\n- easyIP方式：将内部网络的私有IP地址映射到公网IP地址的一种方式。\n- Nat server方式：在NAT设备上配置NAT地址池，将内部私有IP地址映射到公网IP地址。\n- PAT（Port Address Translation）方式：通过修改源IP地址和源端口或目标IP地址和目标端口来实现多个内部IP地址与一个公网IP地址之间的映射。\n- No-pat方式：与PAT方式相对应，表示不使用端口地址转换。"
  }
  ,
  {
    "question": "<br class=\"markdown_return\">用户AAA授权方式包括什么？",
    "answer": "BCD",
    "options": [
      { "Key": "A", "Value": "管理员授权" },
      { "Key": "B", "Value": "远端授权" },
      { "Key": "C", "Value": "本地授权" },
      { "Key": "D", "Value": "不授权" }
    ],
    "analysis": "用户AAA（认证、授权、审计）授权方式包括：\n- 远端授权：远程服务器对用户进行授权。\n- 本地授权：本地设备对用户进行授权。\n- 不授权：不对用户进行授权，可能限制其访问权限。"
  }
  ,
  {
    "question": "<br class=\"markdown_return\">Pat方式的nat主要对数据包的（）信息进行转换",
    "answer": "BC",
    "options": [
      { "Key": "A", "Value": "应用层" },
      { "Key": "B", "Value": "传输层" },
      { "Key": "C", "Value": "网络层" },
      { "Key": "D", "Value": "数据链路层" }
    ],
    "analysis": "Pat（端口地址转换）方式的NAT主要对数据包的传输层和网络层信息进行转换。传输层信息包括TCP/UDP端口号，而网络层信息包括IP地址。"
  }
  ,
  {
    "question": "<br class=\"markdown_return\">IPSec 协议支持哪些封装模式",
    "answer": "AD",
    "options": [
      { "Key": "A", "Value": "隧道模式" },
      { "Key": "B", "Value": "交换模式" },
      { "Key": "C", "Value": "路由模式" },
      { "Key": "D", "Value": "传输模式" }
    ],
    "analysis": "IPSec协议支持隧道模式（Tunnel Mode）和传输模式（Transport Mode）。隧道模式用于对整个IP数据报进行封装，适用于网关到网关的安全通信；传输模式仅对IP数据报的数据部分进行封装，适用于主机到主机的安全通信。交换模式和路由模式不是IPSec的封装模式。"
  }
  ,
  {
    "question": "<br class=\"markdown_return\">下面关于H3C ACG的说话正确的有",
    "answer": "AB",
    "options": [
      { "Key": "A", "Value": "ACG产品支持微信认证，短信认证等功能" },
      {
        "Key": "B",
        "Value":
          "ACG产品支持旁路部署，在系统管理部署方式处将接收流量的接口打钩，并将流量镜像到该接口"
      },
      {
        "Key": "C",
        "Value": "ACG产品不支持VRG功能，因此无法可作为MCE设备和MPLS网络对接"
      },
      {
        "Key": "D",
        "Value": "ACG的DFI主要用来是被应用的静态报文特征，DPI主要用来识别应用的动态流量特征"
      }
    ],
    "analysis": "选项A和B是关于H3C ACG的正确说法。ACG产品支持微信认证、短信认证等多种认证功能，同时也支持旁路部署，通过在系统管理部署方式中选择接收流量的接口并进行镜像，可以实现旁路部署的功能。选项C中提到ACG产品不支持VRG功能，这是错误的说法，ACG产品确实支持VRG功能，可以作为MCE设备和MPLS网络对接。选项D是关于ACG的DFI和DPI功能的描述，与问题无关。"
  }
  ,
  {
    "question": "<br class=\"markdown_return\"><p>关于 H3C 防火墙的安全域，以下说法正确的有</p>",
    "answer": "ACD",
    "options": [
      { "Key": "A", "Value": "<p>防火墙无安全区域优先级的概念</p>" },
      { "Key": "B", "Value": "<p>不同安全区域优先级一定不一样</p>" },
      { "Key": "C", "Value": "<p>防火墙自身所有接口都属于 local 区域</p>" },
      {
        "Key": "D",
        "Value": "<p>防火墙有五个安全区域，management、 local、 trust、Untrust、DMZ</p>"
      }
    ],
    "analysis": "<p>选项A、C和D是关于 H3C 防火墙安全域的正确说法。防火墙的安全域不涉及优先级概念，因此选项A正确。防火墙的所有接口都默认属于 local 区域，因此选项C正确。防火墙的缺省安全域包括 management、local、trust、Untrust 和 DMZ，因此选项D正确。选项B中的说法不一定正确，因为不同安全区域的优先级可能不同，但并非一定不一样。</p>"
  }
  ,
  {
    "question": "<br class=\"markdown_return\">一般来说，以下哪些功能是由NGFW防火墙来实现的",
    "answer": "ABD",
    "options": [
      { "Key": "A", "Value": "监控网络中回话状态" },
      { "Key": "B", "Value": "隔离内网与外网" },
      { "Key": "C", "Value": "防止内网被篡改" },
      { "Key": "D", "Value": "隔离可信任网络和不可信网络" }
    ],
    "analysis": "<p>NGFW防火墙通常用于实现以下功能：</p><p>A. 监控网络中回话状态：NGFW能够监视网络中的会话状态，包括连接的建立、终止和数据传输状态。</p><p>B. 隔离内网与外网：NGFW可以设置访问控制策略，对内网与外网之间的通信进行隔离，防止未经授权的访问。</p><p>C. 防止内网被篡改：虽然NGFW通常也提供防火墙功能，但防止内网被篡改通常更多依赖于其他安全措施，如入侵检测系统（IDS）和入侵防御系统（IPS）。</p><p>D. 隔离可信任网络和不可信网络：NGFW可以根据安全策略对可信任网络和不可信任网络进行隔离，从而防止不受信任的网络访问受保护的资源。</p>"
  }
  ,
  {
    "question": "<br class=\"markdown_return\">关于H3C 防火墙，下列说法正确的是",
    "answer": "BC",
    "options": [
      { "Key": "A", "Value": "防火墙的安全策略只能在 WeB页面下配置." },
      { "Key": "B", "Value": "防火境的默认登录IP地址是 192.168.0.1" },
      { "Key": "C", "Value": "防火墙通过 WEB登录的默认用户名/密码是:admin/admin" },
      { "Key": "D", "Value": "防火墙只能通过命令行方式升级版本 " }
    ],
    "analysis": "<p>以下说法正确：</p><p>B. 防火墙的默认登录IP地址是 192.168.0.1。默认情况下，H3C防火墙的管理接口IP地址为192.168.0.1。</p><p>C. 防火墙通过WEB登录的默认用户名/密码是：admin/admin。默认情况下，H3C防火墙的Web登录用户名和密码都是admin。</p>"
  }
  ,
  {
    "question": "<br class=\"markdown_return\">防火墙的工作模式包括",
    "answer": "BCD",
    "options": [
      { "Key": "A", "Value": "交叉模式" },
      { "Key": "B", "Value": "混合模式" },
      { "Key": "C", "Value": "路由模式" },
      { "Key": "D", "Value": "透明模式" }
    ],
    "analysis": "<p>防火墙的工作模式包括：</p><p>B. 混合模式：混合了路由模式和透明模式的特点，可以实现路由功能和透明代理功能。</p><p>C. 路由模式：防火墙工作在网络层，具有路由功能。</p><p>D. 透明模式：防火墙工作在数据链路层，对外表现为透明，不需要重新配置网络设备。</p>"
  }
  ,
  {
    "question": "<br class=\"markdown_return\">H3C SecPath 防火墙的默认域间访问控制策略是",
    "answer": "CD",
    "options": [
      { "Key": "A", "Value": " 所有区域都可以访问local 区域" },
      { "Key": "B", "Value": "属于同一个安全域的各个接口之间的报文可以互访" },
      { "Key": "C", "Value": "未划分到安全域的接口之间的报文会被丢弃" },
      { "Key": "D", "Value": "安全域间的报文默认丢弃，包括同域之间" }
    ],
    "analysis": "<p>H3C SecPath 防火墙的默认域间访问控制策略：</p><p>C. 未划分到安全域的接口之间的报文会被丢弃。</p><p>D. 安全域间的报文默认丢弃，包括同域之间。</p>"
  }
  ,
  {
    "question": "<br class=\"markdown_return\"><p>H3C NGFW的DPI功能说法正确的有</p>",
    "answer": "ABD",
    "options": [
      { "Key": "A", "Value": "<p>APR功能可以实现对报文所属应用程序的识别</p>" },
      {
        "Key": "B",
        "Value": "<p>如果报文与黑名单匹配成功，则会直接丢弃，不进行其他检测口</p>"
      },
      { "Key": "C", "Value": "<p>无法深度识别到报文所属的应用程序口</p>" },
      { "Key": "D", "Value": "<p>业务流匹配安全策略后会进行DPI的检测</p>" }
    ],
    "analysis": "<p>选项A正确，因为APR功能（应用程序识别）可以实现对报文所属应用程序的准确识别。选项B正确，当报文与黑名单匹配成功时，NGFW会直接丢弃该报文，不进行其他检测，以提高安全性。选项C错误，因为DPI功能可以深度识别报文所属的应用程序，因此可以对报文进行深度检测。选项D正确，业务流匹配安全策略后，NGFW会对流量进行DPI检测以进一步确认其内容和用途。</p>"
  }
  ,
  {
    "question": "<br class=\"markdown_return\">IPSec 是在IETF 制定的保证在IP网络上传送数据的安全保密性的三层安全协议体。IPSec 协议族包含",
    "answer": "BC",
    "options": [
      { "Key": "A", "Value": "PPP" },
      { "Key": "B", "Value": "ESP" },
      { "Key": "C", "Value": "AH" },
      { "Key": "D", "Value": "PKL" }
    ],
    "analysis": "<p>IPSec协议族包含AH（认证头）和ESP（封装安全载荷）协议，用于提供数据的完整性验证和机密性保护。</p>"
  }
  ,
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
  },
  {
    "question": "<br class=\"markdown_return\">IPSec 支持哪些秘钥协商模式？",
    "answer": "BD",
    "options": [
      { "Key": "A", "Value": "DPD 方式" },
      { "Key": "B", "Value": "IKE 自动协商方式" },
      { "Key": "C", "Value": "模板方式" },
      { "Key": "D", "Value": "手工配置方式" }
    ],
    "analysis": "<p>IPSec支持的秘钥协商模式包括IKE自动协商方式和手工配置方式，而DPD方式和模板方式不是IPSec支持的秘钥协商模式。</p>"
  }
  ,
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
  },
];
