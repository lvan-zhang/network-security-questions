module.exports = `
问题 1
H3C SSL VPN通过那些因素综合确定用户可以合法访问的网络资源?
A. 安全策略
B. 用户身份
C. 主机检查结果
D. 认证方式
正确答案: ABC

问题 2
数字签名对应于我们生活中的手写签名,但它和手写签名也存在一些差别下列说法中,正确的有
A. 数字签名中签,和消息是分开的,需要一种方法将签名和消息绑定在一起,而在传统的手写签名中签名是被签名消息的一部分
B. 数字签名和手写签名都具有法律效力,都是重要的认证手段
C. 数字签名只有接受者才可能对签名进行验证,而手写签名可以接受任何人的公开验证
D. 数字签名和手写签名样,备独无亡的特性,既无法被修改也无法被复制
正确答案: AB

问题 3
下列哪些交换模式是在IKE协商的第二阶段存在的?
A. 主模式
B. 野蛮模式
C. 快速模式
D. 普通模式
正确答案: C

 问题 4
L2TP协议是承载在UDP协议之上的,数据包的封装过程为
A. 私有IP->L2TP->UDP->PPP->公有IP
B. 私有IP->PPP->L2TP-> UDP->公有IP
C. 私有IP->PPP->UDP->L2TP->公有IP
D. 私有IP->L2TP->PPP->UDP->公有1P
正确答案: B

问题 5
SSL协议支持的块加密算法有
A. 3DES
B. DES
C. AES
D. RC4
正确答案: ABC
 
问题 6
下列关于GRE穿越NAT的说法正确的是
A. 对于基于端口或协议的NAT ,即NAPT来说,标准GRE协议报文可以正常穿越,且可以区分相同源地址发起的不同GRE隧道。
B. 普通的源(目的地址作转化的NAT ,标准GRE封装协议报文不可以正常穿越。
C. 对于基于端口或协议的NAT , 即 NAPT来说,NGRE可以通过Key选项来区分相同源地址发起的不同GRE隧道。
D. 对于基于端口或协议的NAT ,即NAPT来说, GRE可以通过Sequence Number选项来区分相同源地址发起的不同GRE隧道
正确答案: BC（如果是多选就选BC，如果是单选就选C）

 问题 7
对于消息摘要的描述，正确的有
A. 相同的消息一定会产生相同的摘要
B. 不同的消息不会产生相同的摘要
C. 即使消息相同，定会产生不同的摘要
D. 摘要是随机生成的，所以可能长度发生变化
正确答案: AB
章节: 章节3

 问题 8
L2TP建立隧道时使用的消息有
A. SCCRP
B. SCCRQ
C. ICRQ
D. ICRP
正确答案: AB

问题 9
在下列哪种密码应用中,我们是使用公钥加密、私钥解密?
A. 非对称密码
B. 对称密码
C. 数字签名
D. DH交换
正确答案: A


问题 10
关于数字证书的说法,正确的是。
A. 数字证书就是我们网络身份证,它提供了证明自己身份和识别对方身份的功能
B. 数字证书是由CA来颁发的
C. 数字证书将个人私钥和个人身份进行了绑定
D. 数字证书一旦生成,将永久有效
正确答案: AB

问题 11
下列关于L2TP的说法正确的是
A. 用户和LAC之间会进行协商以获取IP地址
B. 在LAC上会根接入用户的PPP验证信息进行验证,以确定是否是L2tp的用户以及用户属于哪个L2TP组，随后LAC会向相应的LNS发起建立隧道的请求。
C. 随道建立后,LAC与用户相连接的PCP会变为UP状态
D. CHAP验证只能在用户端和LNS端进行
正确答案: B


问题 12
DES是最著名的对称密码算法,其属于分组密码,明文分组的位数为
A. 64
B. 56
C. 128
D. 256
正确答案: A 


问题 13
网络通信对安全性的要求包括
A. 完整性
B. 私密性
C. 可控性
D. 身份验证
正确答案: ABD   （其实我觉得C也是对的，但教材没有讲）

问题 14
下列关于SSL VPN的说法,正确的是
A. SSL VPN可以对传输的数据进行加密
B. SSL VPNI支持对客户端身份的验证
C. SSL VPN支持双因子认证
D. SSL VPN可以保证传输数据的完整性
正确答案: ABCD

问题15
下列关于证书机构的说法中,正确的是
A. 证书注册中心(RA )负责证书的生成工作
B. 数字证书的生成和维护过程中一般需要证书授权中心和证书注册中心两个机构
C. 证书授权中心(CA )负责证书的生成工作
D. 证书授权中心按照层次结构进行
正确答案: BCD
章节: 章节3

 问题 16
工作数字签名算法和哈希函数的关系是
A. 都是用来签名的算法
B. 都是用来进行加密的算法
C. 哈希函数济生消息摘要,而数字签名算法对消息摘要进行加密
D. 数字签名对消息进行签名,然后由哈希函数产生摘
正确答案: C


问题 17
IPsec的优点有
A. 数据完整性( Data intergrity）
B. 数据机密性(Conidentiality ) 
C. 身份验证( Data Authentication ) 
D. 抗DDos （Distributed Deny of Service）
正确答案: ABC

问题 18
SSL握手层包括哪些协议?
A. 告警协议
B. 握手协议
C. 密钥改变协议
D. 会话保持协议
正确答案: ABC


问题 19
下列关于加密和解密的说法,正确的是
A. 将密文解码为明文的过程称之为解密,它是加密的相反过程
B. 加密和解密是互逆的两个过程,因此加解密的密钥需要相同
C. 一般来讲,加密比解密要消耗更多的设备性能
D. 密码算法的安全性不仅和密钥相关,也和加解密算法相关,因此算法不能公开
正确答案: A

问题 20
SSL协议向() 提供端到端的、有连接的加密传输服务
A. 传输层
B. 应用层
C. 网络层
D. 数据链路层
正确答案: B

问题 21
下列VPN中,能单独提供数据加密特性的有
A. IPSEC VPN
B. L2TP VPN 
C. SSL VPN 
D. GRE VPN
正确答案: AC


问题 22
如下图所示的网络中, RTB对RTA发起IPSec连接,有关NAT穿越描述正确的是

A. IP Sec隧道两端不启用IKE的情况下亦能实现NAT穿越
B. 通过将IPsec报文封装在UDP 1701端协议报文中实现IPSec的NAT穿越
C. RTA在主模式情况下不能实现NAT穿越
D. NAT网关会修改UDP报文头, IPSec报文的IP头
正确答案: D   (以前主模式不支持穿越，但现在是支持的）


问题 23
SSL协议支持的流加密算法包括
A. 3DES
B. DES
C. AES
D. RC4
正确答案: D

问题 24
当出现大量VPN需求时，可以引导那些产品？
A. SecPath系列防火墙
B. SecPath系列VPN
C. H3C IPS
D. SR系列路由器
正确答案: ABC

问题 25
下面关于L2TP的描述正确的是？
A. L2TP隧道传输PPPOE报文
B. 与PPP协议配合，L2TP协议支持隧道认证和报文计费功能
C. 与PPP协议配合，L2TP协议支持IP地址动态分配
D. L2TP协议不支持报文加密
正确答案: BCD

问题 26
H3C Secpath防火墙具有那些功能，可以保证网络的安全性
A. 访问控制
B. NAT转换
C. 攻击防范
D. 黑名单
E. 入侵防御
正确答案: ABCDE
 


注意区分防火墙的基本功能和所有功能


问题 27
H3C SecPath防火墙的会话包含以下哪些信息？
A. 会话发起方和响应方IP地址及端口
B. 会话的创建时间
C. 会话的老化时间
D. 会话当前所处的状态
正确答案: ABCD
章节: 章节3

 问题 28
关于H3C NGFW安全区域说法正确的是
A. 防火墙默认有五个安全区域：Management、Local、Trust、Untrust、DMZ
B. 防火墙自身所有接口都属于Local区域
C. 非管理接口必须加入业务安全区域才能转发数据
D. 处于同一区域内的接口数据默认无法互通
正确答案: ABCD

:
问题 29
HWTACACS协议和RADIUS协议的区别

A. 以上信息记住
B. 以上信息记住
C. 以上信息记住
D. 以上信息记住
正确答案: A 未知

问题 30
经过IPSec封装后的报文格式如下图所示，参与验证算法生成验证字段的数据报文有哪些？
A. AH头
B. 新报文头
C. 原始报文
D. 共享秘钥
正确答案: ABCD
 

  强调：（AH的整体VPN报文和秘钥一起参与验证计算，所以不支持NAT穿越）


问题 31
CHAP是三次握手的验证协议，其中第1次握手是完成（）
A. 主验证方将一段随机报文和用户名传递到被验证方
B. 被验证方直接将用户名和令传递给验证方
C. 被验证方生成段随机报文，用自己的令对这段随机报文进行加密，然后与自己的用户名一起传递给被验证方
D. 验证方将用户名和密码传递到被验证方
正确答案: A

问题 32
假如Alice和Bob使用DH算法来进行秘钥协商，Maliory作为中间人来窃听他们之间的通信，则以下说法中正确的是？
A. 中间人Maliory是通过侦听Alice和Bob协商的共享秘钥来实现攻击目的的
B. DH算法天生就容易遭受中间人攻击
C. 中间人Maliory在发起中间人攻击时，需要分别和Alice和Bob协商出不同的共享秘钥
D. DH算法的安全性是基于“素因子分解难题”的
正确答案: BC

问题 33
ACG带宽管理通道匹配规则正确的是？
A. 在透明模式下部署QoS时，需要将线路绑定在物理接口上，绑定在桥接口上无法生效。
B. 当父节点带宽充足，而需要保障的通道带宽未达到时，其他通道可以借用此部分空余带宽，即低优先级抢到上限后，中优先级才能抢。
C. 当存在N个相同优先级抢占时，按照均分处理，每个通道平分1/N的带宽。
D. QoS按照树形结构匹配，只要某节点存在叶子节点的情况，就会继续向下进行查找，一旦出现不匹配的情况，此处将会匹配父节点的默认通道进行QoS。
E. 所有子节点的带宽之和必须小于父节点的带宽。
正确答案: ACDE



问题 34
H3C ACG的带宽管理功能，可以对通过设备的流量实现基于   ？进行精细化的管理和控制。
A. 用户／用户组
B. 源／目的IP地址
C. MAC地址
D. 服务
E. 时间
F. 应用/应用组
正确答案: ABDEF
 
	

问题 35
与IPSec VPN相比，SSL VPN具有哪些优点？
A. SSL VPN客户端　免安装、免维户，易于使用
B. SSL VPN可以根据远端主机的安全状态实现动态授权
C. SSL VPN有很好的网络连通性
D. SSL VPN可以拥有高粒度的访问控制
正确答案: ABCD

问题 36
在IKE协商模式中，哪种模式适合用于分支机构采用ADSL拨号与总部建立IPSec连接
A. 野蛮模式
B. 主模式
C. 传输模式
D. 隧道模式

正确答案: A


问题 37
H3C防火墙的安全域有优先级概念，上述说法是否正确。
A. 正确
B. 错误
正确答案:B

 问题 38
H3C防火墙中，以下哪些接口必须加入到区域中才能转发数据？
A. Virtual-Template
B. 物理接口
C. Loopback
D. Dialer
E. Vlan-interface
F. Tunnel
正确答案: ABDEF
章节: 章节3

 问题 39
关于H3C防火墙URL过滤功能，下列说法正确的有
A. URL是互联网上标准资源的地址
B. URL格式为：“protocol://host[ : port/path/[;parametersJ[?guery］#fragment ，其中［:parameters][?query］#fragment称为URL
C. URL过滤功能是指对用户访问的URL进行控制，即允许或禁止用户访问Web资源，达到规范用户上网行为的目的
D. URL过滤规则支持文本匹配和正则表达式匹配两种方式，文本匹配仅能使用指定的字符串对主机进行精确匹配。正则表达式匹配可以使用正则表达式对主机名和URL字段进行模糊匹配
正确答案: ACD




问题 40
ACG1000的DFI主要用来识别应用的静态报文特征
A. 正确
B. 错误
正确答案: B

 DPI主要用来识别应用的动态流量特征

问题 41
NAT转换技术包括
A. 基于NAT方式，即地址一对一的转换
B. NAPT方式，即通过转换端口实现地址复用
C. Easy IP方式，即直接使用公网接口做NAT
D. NAT Server，寄映射内部服务器
正确答案: ABCD

问题 42
关于H3C防火墙报文转发流程， 下列说法正确的是
A. 当报文命中会活表或关联表后，则直接查找二三层转发表项后转发
B. 若报文命中安全策略的动作为丢弃，则直接丢弃报文， 不需要创建会话表项
C. 对接收的报文首先判断是否匹配当前会话表或关联表
D. 对接收的报文首先判因是否命中安全策略
正确答案: ABC
章节: 章节3


问题 43
H3C防火墙要么工作在二层模式，要么工作在三层模式，不能同时工作在二层和三层，以上说法正确吗？
A. 正确
B. 错误
正确答案: B

问题 44
以下关于防火墙用户说法正确的是？
A. 接入类用户主要是portal、sslvpn、ppp等
B. 可以通过用户组来实现用户的统一管理
C. 防火墙用户分为管理类和接入类用户
D. 管理类用户主要有ftp、ssh、telnet、http
正确答案:ABCD

问题 45
H3C防火墙特征库升级，支持以下几种方式
A. 手动离线升级
B. 特征库回滚
C. 定期自动在线升级
D. 立即自动在线升级
正确答案: ABCD

问题 46
在检测到针对服务器的SYN Flood攻击行为后，防火墙应该可以支持选择多种应对攻击的防范措施，主要包括连接限制技术和连接代理技术，其中属于连接限制技术的是
A. 单位时间内客户端发起的新建连接请求数超过指定阈值，则认为服务器遭受了SYS Flood攻击
B. 通过对正常TCP新建连接的协商报文进行处理，修改报文的序列号并使其携带认证信息，再通过验证客户端回应的协商报文中携带的信息进行报文有效性确认。
C. 客户端发起的TCP半开连接请求超过指定阈值，则以为服务器遭受了SYS Flood攻击
D. 通过在新建连接的协商报文中携带认证信息，在通过验证客户端回应的协商报文中携带的信息来进行信
息分析。
正确答案: AC
 BD应该属于连接代理技术，他们使用认证信息


问题 47
H3C防火墙安全策略规则可以基于以下哪些参数进行匹配？
A. 目的IP地址
B. 应用/应用组
C. 服务
D. 用户/用户组
E. 目的安全域
F. 源安全域
G. 源IP地址
H. VRF
正确答案: ABCDEFGH

问题 48
H3C IPS功能可以对业务流量进行以下那些缺省动作。
A. 黑名单
B. 丢弃
C. 允许
D. 抓包
E. 生成日志
F. 重置
正确答案: ABC F


问题 49
以下哪些配置可以实现telnet用户的AAA认证
A. [Device-line-console0]authentication-mode scheme
B. [Device-line-vty0-63]authentication-mode scheme
C. [Device-line-vty0-63]authentication-mode none
D. [Device-line-vty0-63]authentication-mode local
正确答案: B

问题 50
NAT ALG技术可以解决所有多通道应用之间端到端的通信问题。以上说法是否正确
A. 正确
B. 错误
正确答案: B

问题 51
在防火前上使用命令display nat all有如下信息：
基于以上信息可以得出结论是：
A. 接口的动态NAT没有配置ACL限制
B. NAT地址池1中有4个地址
C. NAT地址池中有2个地址
D. 当前设备上有1个地址池
正确答案: C   (A和D不确认，注意看题目的提示）


问题 52
互联网中常见的网络安全威胁方式分为
A. 主动攻击
B. 平面攻击
C. 物理攻击
D. 立体攻击
正确答案: AC

问题 53
H3C ACG产品日志信息可以输出到不同的目的地，下列说法正确的是 ？
A. 最大可以配置3个日志服务器，同时发送3份日志，实现互为备份
B. 和第三方日志服务器配合时，建议启用日志加密功能，防止在传输过程中泄露信息
C. 默认情况下，系统将日志记录在本地数据库
D. 系统可以将日志发送给日志服务器，推荐使用userlog方式，效率更高。
正确答案: ABCD

问题 54
在防火墙上配置动态NAT使用命令display nat session verbose有如下信息。



从设备输出可确定的是：
A. 设备上配置的是NO-PAT方式的动态NAT
B. 动态NAT的配置下发在G1/0/0口上
C. 192.168.0.3可以ping通2.2.2.2
D. 地址池中只有1个地址
正确答案: A



问题 55
以下哪些配置授权给用户SSL VPN的登陆权限？
A. [device-luser-manage-test]service-type sslvpn
B. [device-luser-network-test]service-type sslvpn
C. [device]local-user test class mansge
D. [device]local-user test class network
正确答案: BD

问题 56
地址转换技术只能用于将私网地址转换为公网地址，以上说法是否正确？
A. 正确
B. 错误
正确答案: B

问题 57
IKEv1主模式第一阶段协商的第一和第二个报文的作用是身份验证，从而保证了后续报文传递的合法性，以上说法是否正确？
A. 正确
B. 错误
正确答案: B

问题 58
H3C防火墙安全策略规则中，若引用DPI业务时，规则的动作需配置为允许，以上说法是否正确？
A. 正确
B. 错误
正确答案: A

问题 59
利用SN Cookie技术可以防范SYN Flood 攻击，关于技术原理的描述，以下说法正确的是。
A. .如果防火墙确认客户端的ACK消息合法，则模拟客户端向服务器发送一个SYN消息进行连接请求，同时分配TCB资源记录此连接请求的描述信息。
B. 防火墙的SYN Cookie技术利用ACK报文携带的认证信息，对握手协商的ACK报文进行认证，从而避免了防火过早分配TCB资源
C. 客户端发送的SYN消息经过防火墙时，防火墙截取该消息，并模拟服务器向客户端回应SYN ACK消息，
D. 客户端收到SYN/ACK报文后向服务器发送ACK消息进行确认，防火墙截取这个消息后，提取该消息中的ACK序列号，并再次使用客户端信息与加密索引计算cookie，如果计算结果与ACK序列号相符，就可以确认发起连接请求的是一个真实客户端
正确答案: D

问题 60
以下关于IKE的说法正确的有
A. 具有完善的向前安全性
B. 可以穿越NAT
C. 使用UDP 51端口
D. 使用diffie-Hellma交换
正确答案: ABD


问题 61
在H3C ACG上配置用户策略时，新建用户并将PC的Mac地址绑定，完成配置后发现PC能够重定向到认证页面但是无法联网，以下分析中正确的是？
A. 由于ACG设备需要与PC二层互联才能学习到PC的Mac地址，所以ACG与PC中间可能有三层设备
B. ACG支持夸三层学习Mac功能，可能是netconf参数配置错误
C. PC能够重定向到认证页面，说明设备的路由器和Ipv4策略没问题
D. 由于绑定的Mac地址必须与PC的Mac地址一致，所以可能是因为ACG上Mac地址配置错误
正确答案: ACD

问题 62
以下关于RADIUS认证说法正确的是？
A. RADIUS最初仅是针对拨号用户的AAA协议，后来随着用户接入方式的多样化发展，RADIUS也被应用于多种接入方式
B. 常应用在即要求较高安全性、又允许远程用户访问的各种网络环境中
C. RADIUS认证是一种分布式的客户端/服务器结构的信息交互协议
D. 基于TCP传输，端口号1812、1813分别作为认证/授权、计费端口
正确答案: ABC

 
问题 63
以下关于动态NAT说法正确的是？
A. 动态NAT必须要指定地址池地址
B. PAT模式中一个公网地址可以同时提供给多个私网地址使用
C. 动态NAT的配置中，必须要配置ACL来指定可以进行NAT转换的地址
D. 所有模式的动态NAT都支持复用公网地址
正确答案: C


 问题 64
关于H3C防火墙的命令视图，以下说法正确的是
A. 在接口视图下可以通过port link-mode命令切换二三层模式
B. 配置路由应在系统视图下
C. 用户登录设备后，直接进入用户视图
D. 在用户视图下输入system view命令进入系统视图
正确答案: ABD   (防火墙需要账号密码）
章节: 章节3

问题 65
编号3001的ACL对应的类型是
A. 二层ACL
B. 七层ACL
C. 基本ACL
D. 高级ACL
正确答案: D

问题 66
以下关于easy IP方式NAT配置不生效排查方法，正确的是
A. 检查地址池是否正确
B. 检查路由是否正常
C. 检查NAT配置的接口是否下发正确
D. 检查安全策略是否放通
正确答案: BCD

问题 67
GRE协议栈如图所示，以下说法正确的是？

A. 协议B是封装协议
B. 协议B是承载协议
C. 协议A是封装协议
D. 协议A是承载协议
正确答案: D
 协议A 是承载协议，GRE是封装协议



问题 68
下列关于L2TP的说法正确的是
A. 在LAC上会根据接入用户的PPP验证信息进行验证,以确定是否是L2TP的用户以及用户属于哪一个L2tp
组，随后LAC会向相应的LNS发起建立隧道的请求
B. 用户和LAC之间会进行协商以获取IP地址
C. 隧道建立后,LAC与用户相连接口的IPCP会变为UP状态
D. CHAP验证只用在用户端和LNS端进行
正确答案: A


 问题 69
H3C ACG透明模式部署，在配置带宽管理时，需要将线路绑定在物理接口上，绑定在桥接口上无法生效 
A. 错误
B. 正确
正确答案: B


问题 70
IKE野蛮模式下，IKE协商发起者发送第一个消息中包含 
A. DIffe-Hellman公共值
B. 散列算法
C. 验证方法
D. 加密算法
正确答案: ABCD
章节: 章节3

 问题 71
以下关于HWTACACS认证说法正确的是 
A. 采用UDP传输，网络传输效率更高。
B. 该协议与PADIUS协议类似，采用客户端/服务器模式实现NAS与HWTACACS服务器之间的通信。
C. 主要用于PPP和VPDN接入用户及终端用户的认证、授权和计费。
D. HWTACACS（HW Terminal Access Controller Access Control System,HW终端访问控制器控制系统协议）
正确答案: BCD


问题 72
有关GRE的特点描述正确有。
A. GRE不提供数据加密、身份验证等安全功能。
B. GRE协议不支持封装组播报文。
C. GRE隧道支持动态路由协议。
D. GRE VPN要求在隧道两端上静态配置隧道接口，不利于大规模部署。
正确答案: ACD

问题 73
包过滤ACL进行如下配置:
Acl basic 2000 match-order config
rule permit source1.1.1.0  0.0.0.255
rule deny source 1.1.1.1  0		
A. 源地址1.1.1.20目的地址3.3.3.20的报文被丢弃
B. 源地址1.1.1.1目的地址3.3.3.3的报文被丢弃
C. 源地址1.1.1.20目的地址3.3.3.3的报文允许通过
D. 源地址1.1.1.1目的地址3.3.3.3的报文允许通过
正确答案: CD



相似的题目
包过滤ACL进行如下配置:
Acl basic 2000 match-order auto
rule permit source1.1.1.0  0.0.0.255
rule deny source 1.1.1.1  0		
A. 源地址1.1.1.20目的地址3.3.3.20的报文被丢弃
B. 源地址1.1.1.1目的地址3.3.3.3的报文被丢弃
C. 源地址1.1.1.20目的地址3.3.3.3的报文允许通过
D. 源地址1.1.1.1目的地址3.3.3.3的报文允许通过
正确答案:AB



问题 74
以下属于NAT技术的优点的是
A. 在网络发生变化时避免重新编址
B. 在地址重复时提供解决方案
C. 隐藏内部服务器的真实IP地址，提高安全性
D. 增加连接英特网的灵活性
E. 节省合法的注册地址
正确答案: ABCDE
 


问题 75
SSL协议的通讯实体在层次划分上分为以下哪几个层次?
A. 应用层
B. 会话层
C. 握手层
D. 记录层
正确答案: CD
章节: 章节3



 问题 76
如何防范Smurf攻击? 多选题
A. 检查ICMP请求报文的目的地址是否为子网地址，是则丢弃
B. 检查ICMP请求报文的源地址是否为子网地址，是则丢弃
C. 检查ICMP请求报文的目的地址是否为广播地址，是则丢弃
D. 检查ICMP请求报文的源地址是否为广播地址，是则丢弃
正确答案:    AC  
章节: 章节3

 问题 77
下述攻击手段中，不属于DOS攻击的是
A. Fraggle
B. Land攻击
C. 跨站攻击
D. Smurf攻击
正确答案: C

问题 78
关于H3C防火墙的特征库功能说法正确的有
A. 不支持特征库回滚
B. 升级特征库需要license授权
C. 支持自定义特征
D. 不支持自动更新特征库
正确答案: BC

问题 79
关于H3C防火墙License,以下说法正确的是
A. 正式License过期后不能卸载、压缩License存储区可以释放License存储空间。执行压缩操作时.系统会自动将已经过期的或者卸载的License信息删除，并修改DID.
B. 设备出现硬件故障后,可以将临时License迁移至其他设备继续使用。
C. 激活License时，必须提供设备的DID文件
D. License的有效期分为永久( Permanent )和绝对时间(Date restricted)两种，根据发布渠道不同分为临时的(Trial和正式的( Formal)
正确答案:CD

问题 80
以下属于网络安全威胁的有
A. IP地址欺骗
B. DoS/DDOS攻击
C. 扫描攻击
D. 畸形报文攻击
正确答案: ABCD

问题 81
H3C防火墙在接口上应用包过滤，方向可以选择Inbound和Outbound
A. 错误
B. 正确
正确答案: B

问题 82
在以下L2TP组网中，假设LAC与LNS都已在公网上. 如果庭道建立失败，那么可能的原因有
A. LNS端没有设置可以接收该感道对端的L2TP组。
B. LNS端设置的用户名与密码有误。
C. 隧道验证不通过。
D. 在LAC端。LNS地址设置不正确。
正确答案: ABCD

问题83
在H3C ACG上配置日志服务器后，发现管理平台上无法接收到任何日志，以下分析正确的有
A. 管理平台日志接收端目可能被操作系统其他软件占用。
B. 出于日志显考虑，系统在设计时，启用日志服务器功能后,还需要配置日志过滤，选择日志级别，否则低级别的日志不会发送
C. 可以在管理平台上使用Wireshark抓包工具，确认日志是否已经发送过来。
D. ACG默认使用30514端发送日志，可能中间存在防火墙，未放通端口。
正确答案: ABCD

问题 84
创建安全域后，需要给安全域添加成员。下列哪些可以作为成员加入安全域
A. 二层接口和VLAN
B. 三层以太网子接口
C. 三层逻辑接口
D. 三层以太网接口
正确答案: ABCD

问题 85
利用Sste Reset技术可以防范SYN Food攻击.关于技术原理的描述，以下说法正确的是
A. 一般而言，应用服务器不会主动对客户端发起恶意连接，因此服务器响应客户端的报文可以不需要经过防火墙的检查。防火墙仅需要对客户端发往应用服务器的报文进行实时监控。服务器响应客户端的报文可以根据实际需要选择是否经过防火墙，因此Safe Reset能够支持更灵活的组网方式。
B. 客户端收到SYN/ACK后.按照协议规定向服务器回应RST消息。防火墙中途截取这个消息后，提取消息中的序列号。并对该序列号进行Cookie校验。成功通过校验的连接被认为是可信的连接，防火墙会分配TCB资源记录此连接的描述信息，而不可信连接的后续报文会被防火墙丢弃。
C. 由于防火墙仅通过对客户端向服务器首次发起连接的报文进行认证，就能够完成对客户端到服务器的连接检验而服务器向客户端回应的报文即使不经过防火墙也不会影响正常的业务处理，因此Safe Reset技术也称为单向代理技术。
D. 客户端发送的SYN消息经过防火墙时，防火墙截取该消息，并模拟服务器向客户端回应SYN/ACK消息，其中，SYN/ACK消息中的ACK序列号与客户端期望的值一致，同时携带Cookie值，此Cookie值是对加密索引与本次连接的客户端信息(包括P地址、端口号)进行加空运算的结果。
正确答案: ABC

问题 86
下列关于衡量防火墙的性能指标说法正确的有
A. 并发连接数是指每秒钟防火墙能够处理的新建连接的数量
B. 时延是数据包进入防火墙到从防火墙输出的时间间隔
C. 新建连接数是指每秒钟防火墙能够同时处理的连接总数
D. 吞吐量需要对不同大小的数据包。不同方向的流量等进行测试
正确答案: BD

问题 87
H3C防火墙防火墙版本升级过程中说法正确的有
A. boot-loader file命令里必须带system参数，表示指定该软件包为系统软件包
B. 可以通过FTP/TFTP将软件版本文件上传到本地
C. 执行boot-loader命令来指定设备下次启动时使用的版本文件
D. 从H3C官网http://www.h3c.com/cn/获取软件版本
正确答案: BCD

问题 88
H3C防火墙设备中，访问控制列表ACL主要应用于
A. 策略路由，依据用户制定的策略进行路由转发(如ACL规则等)
B. IPSec中，用来规定触发建立IPSec的条件
C. NAT中，限制哪些地址需要被转换
D. QoS中，对数据流量进行分类
正确答案: ABCD

问题 89
以下哪些配置可以实现SSH用的管理员权限?
A. [Device-luser-network-test] service-type ssh
B. [Device] local-user test class network
C. [Device-luser-manage-test] service-type ssh
D. [Device] local-user test class manage
正确答案: CD



问题 90
如下NAT命令及其作用对应关系正确的是?
A. display nat session显示NAT会话
B. display nat entry显示地址条目
C. display nat显示所有NAT配置
D. display nat table显示地址表
正确答案: A

 display nat session命令用来显示NAT会话，即经过NAT地址转换处理的会话。
display nat all命令用来显示所有的NAT配置信息。C 错
BD命令没有找到


问题 91
以下属于动态NAT的是
A. NAT Server
B. PAT方式的NAT
C. Easy IP
D. NO-PAT方式的NAT
正确答案: BCD

 

问题 92
以下技术是设计用于解决IPV4地址短缺的是
A. CIDR
B. MPLS
C. VLSM
D. NAT
正确答案: CD

问题 93
目前SSL协议支持的块加密算法有哪些？
A. RC4
B. 3DES
C. DES
D. AES
正确答案: BCD
章节: (无)

 问题 94
IKE主模式报文交互（）次？
A. 3
B. 4
C. 5
D. 6
正确答案: D
 

问题 95
IKE野蛮模式报文交互（）次？
A. 3
B. 4
C. 5
D. 6
正确答案: A
 

问题 96
以下不属于传输层安全风险的是？
A. TCP欺骗
B. UDP拒绝攻击
C. 端口扫描
D. 地址扫描
正确答案: D


问题 97
H3C防火墙串口的默认波特率为9600，上述正确的是？
A. 正确
B. 错误
正确答案: A


问题 98
H3C防火墙支持记录日志信息,以下关于日志功能说法正确的是?
A. Flow日志可以封装成UDP报文直接发送到日志主机，也可以发送到信息中心封装成系统日志
B. 系统日志、操作日志、安全策略日志以及攻击防范日志都采用Syslog方式以文本格式进行输出
C. NAT日志一般都采用Syslog日志格式直接发送给日志服务器
D. 系统日志传输格式为ASCII码，相比Flow日志的二进制格式传输效率低
正确答案: ABD


问题 99
关于防火墙系统中缺省域描述正确的是
A. 系统缺省存在的system域可以被刪除
B. 系统缺省存在的system域只能被修改，不能被删除
C. 一个ISP域被配置为缺省的Isp域后，将不能够被删除，必须首先使用命令undo domain defauit enable将其修改为非缺省ISP域，然后才可以被刑除。
D. 一个Isp域被配置为缺省的ISP域后，可以直按通过命令undo domain name的方式进行删除
正确答案: BC

问题 100
AAA可以通过多种协议来实现，远端认证可通过以下哪些协议实现？
A. RADIUS协议
B. HWTACACS协议
C. LDAP协议
D. AH协议
正确答案: ABC
`;
