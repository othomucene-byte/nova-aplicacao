import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4">
      {/* miniLovable Autonomous React Component for Nova Aplicação */}
      <main className="max-w-6xl mx-auto space-y-6">
        <header className="border-b border-slate-800 pb-4">
          <h1 className="text-2xl font-bold text-white">Nova Aplicação</h1>
          <p className="text-sm text-slate-400 mt-1">E-commerce artesanal especializado na venda de caril, pastas de curry e especiarias indianas e asiáticas.</p>
        </header>
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-sm">
          <p className="text-sm text-slate-300">Aplicação React ativa com renderização em tempo real.</p>
        </div>
      </main>
    </div>
  );
}
