import { useCallback, useEffect } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  BackgroundVariant,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useLanguage } from '../contexts/LanguageContext';

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#ffb4a8' } },
  { id: 'e2-3', source: '2', target: '3', animated: true, style: { stroke: '#ffb4a8' } },
];

export default function ReactFlowDemo() {
  const { t } = useLanguage();
  
  const initialNodes = [
    { id: '1', position: { x: 50, y: 50 }, data: { label: t('flow.node1') }, className: 'bg-surface-container-high border-outline-variant text-on-surface rounded-md p-4 shadow-lg' },
    { id: '2', position: { x: 300, y: 50 }, data: { label: t('flow.node2') }, className: 'bg-primary-container border-primary text-on-primary-container rounded-md p-4 shadow-[0_0_15px_rgba(139,0,0,0.5)]' },
    { id: '3', position: { x: 550, y: 50 }, data: { label: t('flow.node3') }, className: 'bg-surface-container-high border-outline-variant text-on-surface rounded-md p-4 shadow-lg' },
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === '1') {
          node.data = { ...node.data, label: t('flow.node1') };
        } else if (node.id === '2') {
          node.data = { ...node.data, label: t('flow.node2') };
        } else if (node.id === '3') {
          node.data = { ...node.data, label: t('flow.node3') };
        }
        return node;
      })
    );
  }, [t, setNodes]);

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge({ ...params, animated: true, style: { stroke: '#ffb4a8' } }, eds)),
    [setEdges],
  );

  return (
    <section className="py-20 bg-surface-container-lowest relative" id="workflow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-on-surface mb-4">{t('flow.title')}</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            {t('flow.desc')}
          </p>
        </div>
        
        <div className="h-[500px] w-full rounded-xl border border-surface-container-high overflow-hidden bg-surface-container-low shadow-2xl">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
            className="bg-surface-container-lowest"
          >
            <Controls className="bg-surface-container-high border-outline-variant fill-on-surface" />
            <MiniMap 
              nodeColor={(node) => {
                switch (node.id) {
                  case '2': return '#8b0000';
                  default: return '#2a2a2a';
                }
              }}
              maskColor="rgba(14, 14, 14, 0.7)"
              className="bg-surface-container-low border-outline-variant"
            />
            <Background variant={BackgroundVariant.Dots} gap={12} size={1} color="#353535" />
          </ReactFlow>
        </div>
      </div>
    </section>
  );
}
