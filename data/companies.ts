// 职位列表
const positions = [
  "前端开发工程师",
  "后端开发工程师",
  "全栈开发工程师",
  "iOS开发工程师",
  "Android开发工程师",
  "算法工程师",
  "数据分析师",
  "产品经理",
  "UI设计师",
  "运维工程师",
  "测试工程师",
  "人工智能工程师",
  "网络安全工程师",
  "嵌入式开发工程师",
  "项目经理",
  "技术支持",
  "销售代表",
  "市场专员",
  "人力资源专员",
  "财务分析师",
]

// 大厂公司列表
export const bigCompanies = [
  { name: "腾讯", type: "社招", url: "https://hr.tencent.com" },
  { name: "阿里巴巴", type: "校招", url: "https://job.alibaba.com" },
  { name: "百度", type: "社招", url: "https://talent.baidu.com" },
  { name: "字节跳动", type: "校招", url: "https://job.bytedance.com" },
  { name: "华为", type: "社招", url: "https://career.huawei.com" },
  { name: "京东", type: "校招", url: "https://campus.jd.com" },
  { name: "小米", type: "社招", url: "https://hr.xiaomi.com" },
  { name: "美团", type: "校招", url: "https://zhaopin.meituan.com" },
  { name: "快手", type: "社招", url: "https://school.kuaishou.com" },
  { name: "拼多多", type: "校招", url: "https://hr.pinduoduo.com" },
  { name: "苏宁", type: "社招", url: "https://hr.suning.com" },
  { name: "中国移动", type: "校招", url: "https://job.10086.cn" },
  { name: "中国联通", type: "社招", url: "https://www.chinaunicom.com.cn/46/menu01/528/column06" },
  { name: "中国电信", type: "校招", url: "https://job.chinatelecom.com.cn/wt/TELE/web/index#/" },
  { name: "招商银行", type: "社招", url: "https://career.cmbchina.com/home" },
  { name: "工商银行", type: "校招", url: "https://job.icbc.com.cn/pc/index.html#/main/school/home/post" },
  { name: "中兴", type: "社招", url: "https://job.zte.com.cn/cn/" },
  { name: "海尔", type: "校招", url: "https://www.haier.com/careers" },
  { name: "美的集团", type: "社招", url: "https://www.midea.com/careers" },
  { name: "比亚迪", type: "校招", url: "https://career.byd.com" },
  { name: "网易", type: "社招", url: "https://hr.163.com" },
  { name: "哔哩哔哩", type: "校招", url: "https://jobs.bilibili.com" },
  { name: "小红书", type: "社招", url: "https://hr.xiaohongshu.com" },
  { name: "滴滴", type: "校招", url: "https://talent.didiglobal.com" },
  { name: "搜狗", type: "社招", url: "https://www.sogou.com/docs/jobs/jobs_tech_04.htm" },
  { name: "OPPO", type: "校招", url: "https://career.oppo.com" },
  { name: "Vivo", type: "社招", url: "https://hr.vivo.com/home" },
  { name: "360", type: "校招", url: "https://hr.360.cn/hr/" },
  { name: "中国外运", type: "社招", url: "https://sinotrans.zhiye.com/custom/social?hideAll=true&ky=&c1=&c2=&c=" },
  { name: "新东方教育集团", type: "校招", url: "https://zhaopin.xdf.cn/campus/jobs" },
]

// 中小企业公司列表
export const smallCompanies = [
  { name: "豪威科技集团", type: "社招", url: "http://www.hivac.cn/" },
  { name: "浙江精工钢结构", type: "校招", url: "http://www.600496.com/" },
  { name: "天立电机", type: "社招", url: "https://www.job5156.com/comp/zp-815822.html" },
  { name: "重庆中邦药业", type: "校招", url: "http://www.7ahr.com/Company/ListCompany-ehlu51.html" },
  { name: "安徽金辉电子", type: "社招", url: "https://www.qcc.com/firm/dee09a3d66f5d63f902cfae11b62cf76.html" },
  { name: "物元青岛半导体公司", type: "校招", url: "https://www.yingjiesheng.com/job-007-398-306.html" },
  { name: "博鼎集团", type: "社招", url: "http://www.dlypt.net/about" },
  { name: "博创精工科技", type: "校招", url: "https://bozhon3.zhiye.com/campus" },
  { name: "腾盾科创", type: "社招", url: "https://www.tengden.com/" },
  { name: "江苏图南合金股份有限公司", type: "校招", url: "http://www.toland-alloy.com/job.html" },
  { name: "四川九洲投资控股集团有限公司", type: "社招", url: "https://www.jezetek.cc/" },
  { name: "烽火通信科技", type: "校招", url: "https://www.fiberhome.com/joinus.html" },
  { name: "深圳市创梦天地科技有限公司", type: "社招", url: "https://www.idreamsky.com/" },
  { name: "深圳市合元科技有限公司", type: "社招", url: "https://kiem9mgc6h.jobs.feishu.cn/index" },
  { name: "武汉光庭信息技术股份有限公司", type: "社招", url: "https://kotei.zhiye.com/campus/" },
  { name: "MiniMax公司", type: "社招", url: "https://vrfi1sk8a0.jobs.feishu.cn/index" },
  { name: "宇视科技", type: "社招", url: "https://talent.uniview.com/index.html" },
  { name: "石家庄邢森染料有限公司", type: "社招", url: "http://shinedyes.com/" },
  { name: "远大阀门集团有限公司", type: "社招", url: "http://www.100famen.com/index/product/brand/3.html" },
]

// 大学生就业招聘平台列表
export const graduateServices = [
  {
    name: "中国航天人才网",
    type: "统招",
    url: "https://www.spacetalent.com.cn/zhiweicx.html",
    description: "国家航天事业单位招聘平台",
  },
  {
    name: "中国电建招聘平台",
    type: "统招",
    url: "https://zhaopin.powerchina.cn/xyzp",
    description: "电力建设行业重点企业招聘",
  },
  {
    name: "中国南方电网",
    type: "统招",
    url: "https://zhaopin.powerchina.cn/xyzp",
    description: "电网系统重点企业招聘",
  },
  {
    name: "中国兵器校园招聘平台",
    type: "统招",
    url: "https://zhaopin.nhrdc.cn/campus/jobs.jsp",
    description: "军工行业重点单位招聘",
  },
  {
    name: "中央和国家机关所属事业单位",
    type: "统招",
    url: "https://www.mohrss.gov.cn/SYrlzyhshbzb/fwyd/SYkaoshizhaopin/zyhgjjgsydwgkzp/",
    description: "国家机关事业单位招聘信息",
  },
  {
    name: "人力资源社会保障部事业单位招聘平台",
    type: "统招",
    url: "https://www.sydwgkzp.cn/mohrss/index.html#/login",
    description: "全国事业单位公开招聘服务平台",
  },
  {
    name: "全国大学生创业服务网",
    type: "创业服务",
    url: "https://cy.ncss.cn/",
    description: "专注大学生创业指导与服务",
  },
  {
    name: "研究生招生信息网",
    type: "升学服务",
    url: "https://yz.chsi.com.cn/",
    description: "权威的研究生招生信息发布平台",
  },
  {
    name: "全国高校毕业生毕业去向登记系统",
    type: "就业统计",
    url: "https://dj.ncss.cn/",
    description: "毕业生去向信息统计平台",
  },
  {
    name: "国际组织实习任职平台",
    type: "国际就业",
    url: "https://gj.ncss.cn/",
    description: "国际组织实习与就业机会",
  },
  {
    name: "新疆籍毕业生就业创业信息平台",
    type: "区域就业",
    url: "https://xj.ncss.cn/",
    description: "服务新疆籍毕业生就业创业",
  },
  {
    name: "应届生求职网",
    type: "校招",
    url: "https://www.yingjiesheng.com/",
    description: "专注于应届生求职信息的综合平台",
  },
  {
    name: "中华英才网",
    type: "全招",
    url: "http://www.chinahr.com/",
    description: "提供全面的招聘信息和职业发展服务",
  },
  {
    name: "智联招聘",
    type: "全招",
    url: "https://www.zhaopin.com/",
    description: "全国性综合招聘平台",
  },
  {
    name: "前程无忧",
    type: "全招",
    url: "https://www.51job.com/",
    description: "提供多样化的招聘信息和职业规划服务",
  },
]

// 城市列表
export const locations = [
  "北京市",
  "上海市",
  "广州市",
  "深圳市",
  "杭州市",
  "成都市",
  "武汉市",
  "南京市",
  "西安市",
  "苏州市",
]

// 生成职位数据
export const generateJobs = () => {
  const jobs = []

  // 生成大厂职位
  for (const company of bigCompanies) {
    const position = positions[Math.floor(Math.random() * positions.length)]
    const location = locations[Math.floor(Math.random() * locations.length)]
    const types = ["校招", "社招", "全招"]
    const type = types[Math.floor(Math.random() * types.length)]

    jobs.push({
      title: position,
      company: company.name,
      type: type,
      location: location,
      education: "本科及以上",
      date: "2025-03-10",
      url: company.url,
      category: "大厂",
    })
  }

  // 生成中小企业职位
  for (const company of smallCompanies) {
    const position = positions[Math.floor(Math.random() * positions.length)]
    const location = locations[Math.floor(Math.random() * locations.length)]
    const types = ["校招", "社招", "全招"]
    const type = types[Math.floor(Math.random() * types.length)]

    jobs.push({
      title: position,
      company: company.name,
      type: type,
      location: location,
      education: "本科及以上",
      date: "2025-03-10",
      url: company.url,
      category: "中小企业",
    })
  }

  return jobs
}

export const jobs = generateJobs()

