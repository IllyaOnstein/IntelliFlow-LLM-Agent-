import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Rocket, Brain, Puzzle, GraduationCap, ShieldCheck, 
  Play, FileText, Database, Lock, 
  Cpu, Network, Users, Zap, AlertTriangle, Menu, X,
  FileSpreadsheet, FileSearch, ArrowRight, Activity, Globe, ArrowLeft
} from 'lucide-react';

export default function Docs() {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('getting-started');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = [
    { id: 'getting-started', icon: Rocket, titleZh: '快速入门', titleEn: 'Getting Started' },
    { id: 'core-concepts', icon: Brain, titleZh: '核心概念', titleEn: 'Core Concepts' },
    { id: 'operator-reference', icon: Puzzle, titleZh: '算子参考手册', titleEn: 'Operator Reference' },
    { id: 'use-cases', icon: GraduationCap, titleZh: '最佳实践与场景', titleEn: 'Use Cases' },
    { id: 'advanced', icon: ShieldCheck, titleZh: '进阶与企业合规', titleEn: 'Advanced & Enterprise' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -80% 0px' }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const isZh = language === 'zh';

  return (
    <div className="min-h-screen pt-24 pb-20 bg-background relative">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-[#8b0000]/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-primary/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex items-start gap-12">
        
        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden fixed bottom-6 right-6 z-50 p-4 bg-primary-container text-white rounded-full shadow-[0_0_20px_rgba(139,0,0,0.4)]"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Sidebar Navigation */}
        <aside className={`
          fixed lg:sticky top-24 left-0 h-[calc(100vh-8rem)] w-72 flex-shrink-0 
          bg-[#131313]/95 lg:bg-transparent backdrop-blur-xl lg:backdrop-blur-none
          border-r border-outline-variant/10 lg:border-none z-40
          transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          overflow-y-auto custom-scrollbar p-6 lg:p-0
        `}>
          <div className="mb-8 lg:hidden flex items-center gap-2 text-primary">
            <Activity className="w-6 h-6 stroke-[3]" />
            <span className="font-headline font-bold tracking-tight">IntelliFlow Docs</span>
          </div>

          <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-on-surface-variant hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            {isZh ? '返回官网首页' : 'Back to Home'}
          </Link>

          <nav className="space-y-2">
            {sections.map((section) => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollTo(section.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                    isActive 
                      ? 'bg-[#8b0000]/10 text-primary border border-[#8b0000]/20 shadow-[inset_0_0_20px_rgba(139,0,0,0.05)]' 
                      : 'text-on-surface-variant hover:text-white hover:bg-surface-container-low'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-primary' : 'text-on-surface-variant'}`} />
                  {isZh ? section.titleZh : section.titleEn}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 max-w-4xl w-full">
          
          {/* Section 1: Getting Started */}
          <section id="getting-started" className="scroll-mt-32 mb-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <Rocket className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                {isZh ? '快速入门' : 'Getting Started'}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-headline font-black text-white mb-8 tracking-tight">
              {isZh ? '什么是 IntelliFlow？' : 'What is IntelliFlow?'}
            </h1>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-6">
              {isZh 
                ? 'IntelliFlow 相当于一个“帮你自动建流水线的数字包工头”。作为一款突破大语言模型（LLM）黑盒限制的自适应Agent 工作流引擎，用户完全无需编写任何代码。' 
                : 'IntelliFlow is like a "digital contractor that automatically builds pipelines for you". As an adaptive Agent workflow engine that breaks through the black-box limitations of Large Language Models (LLMs), users don\'t need to write any code.'}
            </p>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-12">
              {isZh
                ? '只需提供“错误示范（原始文件）”和“正确结果（目标基准）”，再配上一段人类意图提示词，系统即可瞬间“顿悟”，逆向拆解出数据提取、级别判定等中间步骤，最终生成一条可视化的自动化流水线。'
                : 'Simply provide a "bad example (raw file)" and a "correct result (target benchmark)", along with a human intent prompt, and the system will instantly "comprehend", reverse-engineering intermediate steps like data extraction and level determination to ultimately generate a visual automated pipeline.'}
            </p>

            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Zap className="w-6 h-6 text-tertiary" />
              {isZh ? '五分钟跑通第一个工作流' : 'Run your first workflow in 5 minutes'}
            </h2>
            <p className="text-on-surface-variant mb-6">
              {isZh ? '这是带您体验“顿悟时刻（Aha Moment）”的最佳路径：' : 'This is the best path to experience the "Aha Moment":'}
            </p>

            <div className="space-y-6 mb-12">
              <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/10 hover:border-primary/30 transition-colors">
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-xs">1</span>
                  {isZh ? '意图输入' : 'Intent Input'}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {isZh 
                    ? '在极具科技感的双文件拖拽入口中，上传您的“错乱原文件”与“期望输出的Excel 基准”，并输入如“提取所有国家级奖项并计算总分”的提示词。' 
                    : 'In the highly technical dual-file drag-and-drop portal, upload your "messy raw file" and "expected Excel benchmark", and enter a prompt like "Extract all national-level awards and calculate the total score".'}
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/10 hover:border-primary/30 transition-colors">
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-xs">2</span>
                  {isZh ? '流水线生成' : 'Pipeline Generation'}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {isZh 
                    ? '底层的逆向推导算法会自动将黑盒逻辑白盒化，在暗黑主题的画布中为您生成经典的节点连线图（DAG）。' 
                    : 'The underlying reverse-engineering algorithm automatically white-boxes the black-box logic, generating a classic Directed Acyclic Graph (DAG) for you in the dark-themed canvas.'}
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/10 hover:border-primary/30 transition-colors">
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-xs">3</span>
                  {isZh ? '上传与执行' : 'Upload & Execute'}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {isZh 
                    ? '在左侧资产库的资源目录中，上传一份待处理的全新学生资料（如Raw_Students_Q1.xlsx），点击测试运行。您将看到数据从左至右流经各个算子，最终由右侧的导出接收器输出为您所需的标准汇总报表。' 
                    : 'In the resource directory of the left asset library, upload a new student profile to be processed (e.g., Raw_Students_Q1.xlsx) and click test run. You will see data flow from left to right through various operators, ultimately outputting your required standard summary report via the export receiver on the right.'}
                </p>
              </div>
            </div>

            {/* GIF Placeholder */}
            <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden border border-[#8b0000]/30 bg-[#131313] my-8 group cursor-pointer shadow-[0_0_40px_-10px_rgba(139,0,0,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-[#8b0000]/20 backdrop-blur-md z-10 flex flex-col items-center justify-center transition-all duration-500 group-hover:backdrop-blur-sm group-hover:bg-black/40">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-xl border border-primary/40 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(139,0,0,0.6)]">
                  <Play className="w-8 h-8 text-primary ml-1" />
                </div>
                <p className="mt-6 text-sm font-bold tracking-widest uppercase text-white/90 group-hover:opacity-0 transition-opacity duration-500">
                  {isZh ? '点击播放：从 Prompt 到 DAG 的生成过程' : 'Click to play: Prompt to DAG generation'}
                </p>
              </div>
              <div className="absolute inset-0 opacity-40 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <Network className="w-48 h-48 text-primary animate-pulse opacity-50" />
              </div>
              {/* Decorative UI elements inside placeholder */}
              <div className="absolute top-4 left-4 flex gap-2 z-0">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
            </div>
          </section>

          {/* Section 2: Core Concepts */}
          <section id="core-concepts" className="scroll-mt-32 mb-24">
            <h2 className="text-3xl font-headline font-bold text-white mb-8 pb-4 border-b border-outline-variant/20 flex items-center gap-3">
              <Brain className="w-8 h-8 text-primary" />
              {isZh ? '核心概念' : 'Core Concepts'}
            </h2>
            
            <div className="space-y-10">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">{isZh ? '节点与算子 (Nodes & Operators)' : 'Nodes & Operators'}</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {isZh 
                    ? 'IntelliFlow 采用极其严密的异构节点双模驱动（Hybrid Node Architecture）。系统算子清晰划分为两类：包含多模态OCR、格式转换的传统确定性算法节点，以及负责语义理解的非确定性AI 节点。我们秉持“AI 负责模糊认知，代码负责精确执行”的工程理念，彻底杜绝大模型盲目算错分的业务幻觉。' 
                    : 'IntelliFlow employs an extremely rigorous Hybrid Node Architecture. System operators are clearly divided into two categories: traditional deterministic algorithm nodes including multimodal OCR and format conversion, and non-deterministic AI nodes responsible for semantic understanding. We uphold the engineering philosophy of "AI handles fuzzy cognition, code handles precise execution", completely eliminating business hallucinations where large models blindly miscalculate scores.'}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-4">{isZh ? '有向无环图 (DAG 画布)' : 'Directed Acyclic Graph (DAG Canvas)'}</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {isZh 
                    ? '传统大模型应用是“输入到输出”的黑盒。本系统创新性地将大模型的内部“思维链（CoT）”外化为前端可交互的节点连线图。每个节点就是思维链上的一个微观步骤。面对几十页混合材料，DAG 工作流强制将全局任务解耦为原子化节点任务，每个工位仅获取最小必要上下文，保障特征提取的100% 召回率。' 
                    : 'Traditional LLM applications are "input-to-output" black boxes. This system innovatively externalizes the LLM\'s internal "Chain of Thought (CoT)" into an interactive node connection graph on the frontend. Each node is a micro-step on the chain of thought. Faced with dozens of pages of mixed materials, the DAG workflow forces the global task to be decoupled into atomic node tasks. Each station only obtains the minimum necessary context, ensuring a 100% recall rate for feature extraction.'}
                </p>
              </div>

              <div className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-tertiary" />
                  {isZh ? '工作空间与社区 (Workspaces & Community)' : 'Workspaces & Community'}
                </h3>
                <p className="text-on-surface-variant mb-4">
                  {isZh ? '我们采用“前店后厂”的双轨生态：' : 'We adopt a dual-track ecosystem of "front shop and back factory":'}
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <Lock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-white block mb-1">{isZh ? '私域枢纽（后厂）' : 'Private Hub (Back Factory)'}</strong>
                      <span className="text-on-surface-variant text-sm leading-relaxed">
                        {isZh 
                          ? '支持“黑盒分发模式”。管理员分享模板后，成员只能一键克隆并上传文件运行，无法窥探内部算分逻辑和Prompt，极大满足教务处对“评分标准防篡改”的安全需求。' 
                          : 'Supports "black-box distribution mode". After administrators share templates, members can only one-click clone and upload files to run, unable to pry into internal scoring logic and Prompts, greatly satisfying the security needs of academic affairs offices for "tamper-proof scoring standards".'}
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Globe className="w-5 h-5 text-tertiary flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-white block mb-1">{isZh ? '公共广场（前店）' : 'Public Plaza (Front Shop)'}</strong>
                      <span className="text-on-surface-variant text-sm leading-relaxed">
                        {isZh 
                          ? '采用极客瀑布流UI。展示UGC 工作流，被克隆即可获得官方“算力悬赏（Credit Bounties）”，形成繁荣的模板交易生态。' 
                          : 'Adopts a geeky waterfall UI. Showcases UGC workflows; being cloned earns official "Credit Bounties", forming a prosperous template trading ecosystem.'}
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3: Operator Reference */}
          <section id="operator-reference" className="scroll-mt-32 mb-24">
            <h2 className="text-3xl font-headline font-bold text-white mb-8 pb-4 border-b border-outline-variant/20 flex items-center gap-3">
              <Puzzle className="w-8 h-8 text-primary" />
              {isZh ? '算子参考手册' : 'Operator Reference'}
            </h2>
            <p className="text-on-surface-variant mb-8">
              {isZh ? '本手册罗列了构成智能工厂的各类型原子化算子：' : 'This manual lists the various types of atomic operators that make up the smart factory:'}
            </p>

            <div className="grid gap-6">
              {/* Group 1 */}
              <div className="glass-panel bg-surface-container-low/50 border border-outline-variant/20 p-6 rounded-2xl">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Database className="w-5 h-5 text-blue-400" />
                  {isZh ? '📦 数据采集与解析组' : '📦 Data Collection & Parsing Group'}
                </h3>
                <div className="space-y-4">
                  <div className="bg-[#131313] p-4 rounded-xl border border-outline-variant/10">
                    <strong className="text-white block mb-2">{isZh ? '多模态OCR / PDF 路由器' : 'Multimodal OCR / PDF Router'}</strong>
                    <p className="text-sm text-on-surface-variant">
                      {isZh 
                        ? '输入为极度复杂的扫描件，底层调用强大视觉多模态大模型，输出剥离后的原始文本和元数据流。' 
                        : 'Input is extremely complex scanned documents, underlying calls to powerful visual multimodal large models, outputting stripped raw text and metadata streams.'}
                    </p>
                  </div>
                  <div className="bg-[#131313] p-4 rounded-xl border border-outline-variant/10">
                    <strong className="text-white block mb-2">{isZh ? 'EXCEL 阅读器' : 'EXCEL Reader'}</strong>
                    <p className="text-sm text-on-surface-variant">
                      {isZh ? '针对.xlsx文件进行原生预处理与表头提取。' : 'Native preprocessing and header extraction for .xlsx files.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Group 2 */}
              <div className="glass-panel bg-surface-container-low/50 border border-primary/20 p-6 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] rounded-full"></div>
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 relative z-10">
                  <Cpu className="w-5 h-5 text-primary" />
                  {isZh ? '🧠 人工智能推理组' : '🧠 AI Inference Group'}
                </h3>
                <div className="space-y-4 relative z-10">
                  <div className="bg-[#131313] p-4 rounded-xl border border-outline-variant/10">
                    <strong className="text-white block mb-2">{isZh ? '分类器 / 摘要器' : 'Classifier / Summarizer'}</strong>
                    <p className="text-sm text-on-surface-variant">
                      {isZh 
                        ? '输入上游清洗好的文本片段，内置动态路由分发机制，输出结构化的定级标签或特征实体（例如：判断该奖项置信度达 94.3%）。' 
                        : 'Inputs upstream cleaned text snippets, built-in dynamic routing distribution mechanism, outputs structured grading labels or feature entities (e.g., determining the award confidence reaches 94.3%).'}
                    </p>
                  </div>
                  <div className="bg-[#2a0808]/50 p-4 rounded-xl border border-[#8b0000]/30">
                    <strong className="text-primary block mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" />
                      {isZh ? '⚠️ 异常熔断机制' : '⚠️ Anomaly Circuit Breaker'}
                    </strong>
                    <p className="text-sm text-on-surface-variant">
                      {isZh 
                        ? '如果置信度过低，将自动触发“置信度闸门”，打入异常池等待人工定点拦截与干预。' 
                        : 'If confidence is too low, it automatically triggers the "Confidence Gate", entering the anomaly pool waiting for targeted manual interception and intervention.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Group 3 */}
              <div className="glass-panel bg-surface-container-low/50 border border-outline-variant/20 p-6 rounded-2xl">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <FileSpreadsheet className="w-5 h-5 text-green-400" />
                  {isZh ? '⚙️ 导出与网关组' : '⚙️ Export & Gateway Group'}
                </h3>
                <div className="bg-[#131313] p-4 rounded-xl border border-outline-variant/10">
                  <strong className="text-white block mb-2">{isZh ? '报告撰写员 (Report Writer)' : 'Report Writer'}</strong>
                  <p className="text-sm text-on-surface-variant">
                    {isZh 
                      ? '工作流末端节点。通过右侧列映射规则面板，将上游解构的JSON 数据精准注入目标数据库表或输出文件（如映射至Column: B）。' 
                      : 'The terminal node of the workflow. Through the right column mapping rule panel, it accurately injects upstream deconstructed JSON data into target database tables or output files (e.g., mapping to Column: B).'}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Use Cases */}
          <section id="use-cases" className="scroll-mt-32 mb-24">
            <h2 className="text-3xl font-headline font-bold text-white mb-8 pb-4 border-b border-outline-variant/20 flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-primary" />
              {isZh ? '最佳实践与场景指南' : 'Use Cases'}
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-surface-container border border-outline-variant/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {isZh ? '案例一：高校奖学金量化规则解析' : 'Case 1: Scholarship Rule Parsing'}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {isZh 
                    ? '辅导员仅需将错综复杂的学生申报材料（Excel 报名表、Word 事迹、PDF 证书）投入自动化批量中心。一键应用“加分量化模板”，系统自动提取学号、识别奖项级别、剔除重复项并计算得分，彻底解放教务文书查验压力。' 
                    : 'Counselors only need to drop intricate student application materials (Excel forms, Word deeds, PDF certificates) into the automated batch center. One-click apply the "Bonus Quantification Template", and the system automatically extracts student IDs, identifies award levels, removes duplicates, and calculates scores, completely liberating the pressure of academic document verification.'}
                </p>
              </div>

              <div className="bg-surface-container border border-outline-variant/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                <div className="w-10 h-10 rounded-lg bg-tertiary/20 flex items-center justify-center mb-4">
                  <FileSearch className="w-5 h-5 text-tertiary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {isZh ? '案例二：财务发票与企业级RPA' : 'Case 2: Financial Invoices & RPA'}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {isZh 
                    ? '在中后期千亿级RPA 市场，针对企业财务与法务合同要素提取。利用高速队列管道，系统可对数百份格式各异的发票并发执行监控，极大提升大型组织审核吞吐量。' 
                    : 'In the mid-to-late stage hundred-billion-level RPA market, targeting enterprise financial and legal contract element extraction. Utilizing high-speed queue pipelines, the system can concurrently execute monitoring on hundreds of invoices in various formats, greatly increasing the audit throughput of large organizations.'}
                </p>
              </div>
            </div>

            <div className="bg-[#131313] border border-outline-variant/20 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
              <h3 className="text-xl font-bold text-white mb-4">{isZh ? '提示词工程指南 (Prompt Engineering)' : 'Prompt Engineering Guide'}</h3>
              <p className="text-on-surface-variant mb-4">
                {isZh 
                  ? '建议使用强逻辑约束的提示词。明确的实体抽取和目标动作，能帮助底层逆向算法更精确地拆解出分类器与运算器节点。' 
                  : 'It is recommended to use prompts with strong logical constraints. Clear entity extraction and target actions can help the underlying reverse algorithm more accurately dismantle classifier and calculator nodes.'}
              </p>
              <div className="bg-black/50 p-4 rounded-xl border border-outline-variant/10 font-mono text-sm text-[#e3beb8]">
                <span className="text-primary">"</span>
                Extract all national level awards and calculate total scores into the archival ledger.
                <span className="text-primary">"</span>
              </div>
            </div>
          </section>

          {/* Section 5: Advanced & Enterprise */}
          <section id="advanced" className="scroll-mt-32 mb-24">
            <h2 className="text-3xl font-headline font-bold text-white mb-8 pb-4 border-b border-outline-variant/20 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-primary" />
              {isZh ? '进阶、计费与企业合规' : 'Advanced & Enterprise'}
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <Lock className="w-5 h-5 text-on-surface-variant" />
                  {isZh ? 'API 密钥与 BYOK 模式' : 'API Keys & BYOK Mode'}
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {isZh 
                    ? '业务人员无需管理复杂API。但对于大型机构，我们支持BYOK（Bring Your Own Key）机制。用户可在平台直接绑定自己的模型Key，免除平台算力消耗，实现私有化闭环。' 
                    : 'Business personnel do not need to manage complex APIs. But for large institutions, we support the BYOK (Bring Your Own Key) mechanism. Users can directly bind their own model Keys on the platform, exempting platform compute consumption and achieving a privatized closed loop.'}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-on-surface-variant" />
                  {isZh ? '算力计费规则 (Credits & Billing)' : 'Credits & Billing Rules'}
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {isZh 
                    ? '系统采用基于Credit 的闭环消耗计费模式。客户按照执行频次消耗定额点数。由于核心模型推理采用云端API 按量付费，边际成本趋近于零，保障了极高的商业毛利率。中小机构亦提供开箱即用的SaaS 订阅席位费模式。' 
                    : 'The system adopts a closed-loop consumption billing mode based on Credits. Customers consume a fixed quota of points according to execution frequency. Since core model inference uses cloud API pay-as-you-go, the marginal cost approaches zero, ensuring extremely high commercial gross margins. Small and medium-sized institutions are also provided with an out-of-the-box SaaS subscription seat fee model.'}
                </p>
              </div>

              <div className="bg-surface-container-low border border-primary/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 text-primary">
                  {isZh ? '数据隐私与沙箱安全（合规生命线）' : 'Data Privacy & Sandbox Security (Compliance Lifeline)'}
                </h3>
                <ul className="space-y-4">
                  <li>
                    <strong className="text-white block mb-1">{isZh ? '防Prompt 注入攻击' : 'Anti-Prompt Injection Attack'}</strong>
                    <span className="text-on-surface-variant text-sm">
                      {isZh 
                        ? '建立严格的文本清洗沙箱，从底层物理分离系统指令与外部用户数据流，防止恶意篡改加分逻辑。' 
                        : 'Establish a strict text cleaning sandbox, physically separating system instructions from external user data flows at the bottom level to prevent malicious tampering with scoring logic.'}
                    </span>
                  </li>
                  <li>
                    <strong className="text-white block mb-1">{isZh ? '数据驻留与国产化' : 'Data Residency & Localization'}</strong>
                    <span className="text-on-surface-variant text-sm">
                      {isZh 
                        ? '支持API 灵活路由，强制重定向敏感数据至合规的国内大模型。企业版全面支持“阅后即焚”，数据库绝不留存用户原始证明附件，物理层阻断泄露风险。' 
                        : 'Supports flexible API routing, forcibly redirecting sensitive data to compliant domestic large models. The Enterprise Edition fully supports "burn after reading", the database never retains users\' original proof attachments, blocking leakage risks at the physical layer.'}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
