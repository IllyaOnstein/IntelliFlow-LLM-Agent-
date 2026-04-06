import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-3xl max-h-[80vh] overflow-y-auto bg-[#131313]/95 backdrop-blur-2xl border border-outline-variant/20 rounded-3xl p-10 shadow-2xl"
          >
            <button onClick={onClose} className="absolute top-4 right-4 p-2 text-on-surface-variant hover:text-white">
              <X className="w-5 h-5" />
            </button>
            <div className="prose prose-invert prose-sm max-w-none">
              <h1 className="text-3xl font-black text-white mb-4">IntelliFlow 隐私政策 (Privacy Policy)</h1>
              <p className="text-on-surface-variant"><strong>最后更新日期：2026年 4月</strong></p>
              <p>欢迎来到 IntelliFlow。我们深知在企业级 AI 自动化工作流中，数据隐私与合规是业务的第一生命线。本隐私政策旨在极其透明地向您说明，在使用 IntelliFlow 平台及其相关服务时，我们如何收集、使用、存储和保护您的信息。</p>
              <hr className="border-outline-variant/20 my-6" />
              <h2>1. 我们收集的信息</h2>
              <p>为了向您提供高可靠的自动化 Agent 工作流服务，我们会收集以下极小化的必要数据：</p>
              <ul>
                <li><strong>账户与通讯信息</strong>：当您申请内测或注册账户时，收集的机构邮箱、公司名称及联系人信息。</li>
                <li><strong>工作流配置数据</strong>：您在 DAG 画布中创建的节点拓扑逻辑、规则映射以及非敏感的提示词（Prompt）模板。</li>
                <li><strong>运行日志与遥测数据</strong>：为保障 100% SLA，系统会自动收集 API 延迟、Token 消耗熵值（Token Entropy）及系统报错日志。</li>
              </ul>
              <h2>2. 数据的“零信任”处理机制 (Zero-Trust Data Processing)</h2>
              <p>IntelliFlow 采用严格的<strong>“阅后即焚 (Ephemeral Storage)”</strong>架构处理您的业务数据：</p>
              <ul>
                <li><strong>瞬时内存处理</strong>：您上传用于节点测试或业务运行的原始文件（如 PDF 扫描件、发票、报名表等），系统仅在内存中进行 OCR 剥离与特征提取。</li>
                <li><strong>拒绝留存</strong>：一旦当前工作流节点执行完毕并输出结构化 JSON，系统将<strong>立即物理销毁</strong>所有的原始证明附件，数据库中绝不留存您的任何业务明文数据。</li>
                <li><strong>沙箱隔离</strong>：我们从底层物理分离了系统指令区与外部用户数据流，确保数据在严格的沙箱环境中处理，阻断数据横向越权。</li>
              </ul>
              <h2>3. 大语言模型 (LLM) 与第三方服务</h2>
              <ul>
                <li><strong>模型路由</strong>：IntelliFlow 的推理引擎需要调用远端大语言模型 API。我们承诺，所有默认接入的商业 API 均已签署严格的企业级保密协议（NDA）。</li>
                <li><strong>拒绝训练</strong>：<strong>您的任何输入数据、业务文件及 API 返回结果，绝对不会被我们或第三方底层模型供应商用于二次模型训练。</strong></li>
                <li><strong>BYOK 模式</strong>：对于启用“自带密钥 (Bring Your Own Key)”的企业版客户，数据仅在客户自身的云端 VPC 内闭环流转，IntelliFlow 仅提供纯粹的计算调度，不接触任何核心数据。</li>
              </ul>
              <h2>4. 您的数据权利</h2>
              <p>您对自己的数据拥有绝对的控制权。您随时可以：</p>
              <ul>
                <li>导出您的所有工作流模板（DAG 配置文件）。</li>
                <li>在控制面板一键彻底注销账户并擦除所有元数据。</li>
                <li>申请获取您的系统操作审计日志（Audit Logs）。</li>
              </ul>
              <h2>5. 联系我们</h2>
              <p>如果您对本隐私政策或安全架构有任何疑问，请随时通过以下方式与我们的架构师团队联系：</p>
              <p><strong>合规专线：privacy@intelliflow.ai</strong></p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
