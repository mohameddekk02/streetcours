'use client';

import React, { useState } from 'react';
import { Send, Sparkles, Bot, User, Lightbulb, BookOpen, RefreshCw, Layers } from 'lucide-react';
import { CahierMargin } from '@/components/ui/CahierMargin';
import { Cachet } from '@/components/ui/Cachet';
import { MathText } from '@/components/ui/MathText';

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  hintLevel?: number;
}

export default function SocraticTutorPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'm-1',
      sender: 'ai',
      text: 'Bonjour Ali ! Je suis votre tuteur socratique StreetCours. Je ne vous donnerai pas la solution directement, mais je vais vous aider à la construire pas-à-pas. Sur quelle notion ou quel sujet d’annale souhaitez-vous travailler aujourd’hui ?',
      timestamp: '10:00',
    },
    {
      id: 'm-2',
      sender: 'user',
      text: 'Je bloque sur le calcul de l’intégrale $I = \\int_1^e x \\cdot \\ln(x) \\, dx$ du sujet Bac S 2024. Comment démarrer ?',
      timestamp: '10:01',
    },
    {
      id: 'm-3',
      sender: 'ai',
      text: 'Excellente question. Regardons ensemble : sous l’intégrale, vous avez le produit d’un polynôme $x$ et d’un logarithme $\\ln(x)$. Connaissez-vous la règle mnémonique ALPES pour déterminer quelle fonction dériver ($u$) et quelle fonction primitiver ($v\'$) ?',
      timestamp: '10:02',
      hintLevel: 1,
    },
  ]);

  const [inputText, setInputText] = useState('');

  const quickPrompts = [
    'Rappelle-moi la règle ALPES pour l’IPP',
    'Comment justifier la continuité pour le TVI ?',
    'Quelle est la 2ème loi de Newton ?',
    'Aide-moi à structurer une dissertation en philo',
  ];

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg: Message = {
      id: `m-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText('');

    // Simulate Socratic AI response
    setTimeout(() => {
      let aiReply = "C'est une très bonne intuition. Que se passe-t-il si vous appliquez cette formule à la fonction ?";
      if (text.toLowerCase().includes('alpes')) {
        aiReply = "ALPES signifie : Arcsin, Logarithme, Polynôme, Exponentielle, Sinus/Cosinus. Le terme apparaissant en premier dans cette liste doit être choisi pour $u(x)$ ! Dans notre cas, Logarithme (L) précède Polynôme (P). Que posez-vous donc pour $u(x)$ et $v'(x)$ ?";
      } else if (text.toLowerCase().includes('tvi') || text.toLowerCase().includes('continuité')) {
        aiReply = "Pour le Théorème des Valeurs Intermédiaires (TVI), il faut 3 conditions strictes : 1) La fonction $f$ doit être continue sur $[a, b]$, 2) strictement monotone (croissante ou décroissante), et 3) la valeur $k$ doit être comprise entre $f(a)$ et $f(b)$. Avez-vous vérifié le signe de la dérivée ?";
      }

      const aiMsg: Message = {
        id: `m-${Date.now() + 1}`,
        sender: 'ai',
        text: aiReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        hintLevel: 2,
      };

      setMessages((prev) => [...prev, aiMsg]);
    }, 800);
  };


  return (
    <CahierMargin className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-outline-variant">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/30 border border-secondary/40 text-secondary text-xs font-mono font-bold">
            <Sparkles className="w-4 h-4" />
            Intelligence Artificielle Pédagogique
          </div>
          <h1 className="font-headline text-2xl sm:text-3xl font-black text-primary mt-1">
            Tuteur Socratique StreetCours
          </h1>
          <p className="font-body text-xs sm:text-sm text-on-surface-variant">
            Spécialisé dans les programmes officiels du Baccalauréat et Brevet de Djibouti.
          </p>
        </div>
      </div>

      {/* Quick Suggestion Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        <span className="font-mono text-[11px] font-bold text-on-surface-variant whitespace-nowrap">
          Suggestions :
        </span>
        {quickPrompts.map((prompt, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(prompt)}
            className="px-3 py-1.5 rounded-full bg-surface-container-low hover:bg-surface-container-high border border-outline-variant font-body text-xs text-primary whitespace-nowrap transition-all hover:border-primary shadow-sm"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Chat Container */}
      <div className="bg-surface-container-lowest border-2 border-outline-variant rounded-2xl paper-shadow overflow-hidden flex flex-col h-[520px]">
        {/* Chat Messages Log */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${
                msg.sender === 'user' ? 'flex-row-reverse' : ''
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                  msg.sender === 'user'
                    ? 'bg-primary text-on-primary'
                    : 'bg-secondary text-on-secondary'
                }`}
              >
                {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`max-w-[82%] rounded-2xl p-4 space-y-1 ${
                  msg.sender === 'user'
                    ? 'bg-primary text-on-primary rounded-tr-none'
                    : 'bg-surface-container-low border border-outline-variant/60 text-on-surface rounded-tl-none'
                }`}
              >
                <div className="flex items-center justify-between gap-4 mb-1">
                  <span
                    className={`font-mono text-[10px] font-bold ${
                      msg.sender === 'user' ? 'text-on-primary/80' : 'text-primary'
                    }`}
                  >
                    {msg.sender === 'user' ? 'Vous (Candidat)' : 'Tuteur Socratique'}
                  </span>
                  <span
                    className={`font-mono text-[9px] ${
                      msg.sender === 'user' ? 'text-on-primary/70' : 'text-on-surface-variant'
                    }`}
                  >
                    {msg.timestamp}
                  </span>
                </div>
                <MathText
                  content={msg.text}
                  className="font-body text-sm leading-relaxed whitespace-pre-wrap"
                  as="div"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Chat Input Bar */}
        <div className="p-4 bg-surface-container-low border-t border-outline-variant flex items-center gap-3">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Posez votre question ou proposez votre étape de calcul..."
            className="flex-1 px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest font-body text-sm text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
          />
          <button
            onClick={() => handleSend()}
            disabled={!inputText.trim()}
            className="px-5 py-3 rounded-xl bg-primary text-on-primary font-mono text-xs font-bold hover:bg-primary-container disabled:opacity-50 transition-all flex items-center gap-1.5 shadow-sm"
          >
            <span>Envoyer</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </CahierMargin>
  );
}
