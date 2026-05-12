import { useEffect, useRef, useState } from "react";
import { TREATMENT_STAGES } from "../data/mock";

// Animated Hybrid Japanese (Johkasou) STP scheme — based on Trek Enviro process
const ProcessFlowAnimation = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setVisible(true)),
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // 7 stages laid out horizontally
  const positions = [120, 280, 440, 600, 760, 920, 1080];

  return (
    <div
      ref={ref}
      className="relative bg-gradient-to-br from-[#E3F2FD] via-white to-[#F1F8E9] rounded-2xl border border-slate-100 p-6 md:p-10 overflow-hidden"
    >
      <style>{`
        @keyframes flowDash { to { stroke-dashoffset: -32; } }
        .flow-line { stroke-dasharray: 8 8; animation: flowDash 1.6s linear infinite; }
        @keyframes bubbleUp { 0%{transform:translateY(0);opacity:.2}50%{opacity:.95}100%{transform:translateY(-32px);opacity:0} }
        .bubble { animation: bubbleUp 2.6s ease-in-out infinite; transform-origin: center; }
        @keyframes drop { 0%{transform:translateY(-10px);opacity:0}50%{opacity:1}100%{transform:translateY(0);opacity:1} }
        .pop { animation: drop .8s ease-out forwards; }
      `}</style>

      <div className="text-center mb-6">
        <span className="section-eyebrow">Treatment Process</span>
        <h3 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mt-3">
          ADVANCED MBBR(Anaerobic + Aerobic) — <span className="brand-gradient-text">animated scheme</span>
        </h3>
        <p className="text-slate-600 mt-2 text-sm max-w-2xl mx-auto">
          Multi-stage decentralized treatment combining anaerobic digestion, MBBR aerobic biology, sedimentation, and disinfection in a single packaged FRP unit.
        </p>
      </div>

      <div className="overflow-x-auto">
        <svg viewBox="0 0 1200 320" className="w-full min-w-[1000px] h-[320px]">
          <defs>
            <linearGradient id="waterGrad" x1="0" x2="1">
              <stop offset="0%" stopColor="#1E88E5" />
              <stop offset="100%" stopColor="#4CAF50" />
            </linearGradient>
            <linearGradient id="tankFill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#1E88E5" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#0B4A7F" stopOpacity="0.35" />
            </linearGradient>
          </defs>

          {/* Inlet pipe */}
          <line
            x1="20"
            y1="160"
            x2={positions[0] - 38}
            y2="160"
            stroke="url(#waterGrad)"
            strokeWidth="4"
            strokeLinecap="round"
            className={visible ? "flow-line" : ""}
          />
          {/* Stage connectors */}
          {positions.slice(0, -1).map((x, i) => (
            <line
              key={i}
              x1={x + 38}
              y1="160"
              x2={positions[i + 1] - 38}
              y2="160"
              stroke="url(#waterGrad)"
              strokeWidth="4"
              strokeLinecap="round"
              className={visible ? "flow-line" : ""}
            />
          ))}
          {/* Outlet pipe */}
          <line
            x1={positions[positions.length - 1] + 38}
            y1="160"
            x2="1180"
            y2="160"
            stroke="url(#waterGrad)"
            strokeWidth="4"
            strokeLinecap="round"
            className={visible ? "flow-line" : ""}
          />

          {/* Stage tanks */}
          {positions.map((x, i) => {
            const stage = TREATMENT_STAGES[i];
            const isAerobic = stage?.name.includes("MBBR");
            return (
              <g key={i}>
                {/* Tank body */}
                <rect x={x - 38} y={120} width={76} height={80} rx={10} fill="#fff" stroke="#0B4A7F" strokeWidth={2} />
                <rect x={x - 34} y={140} width={68} height={56} rx={6} fill="url(#tankFill)" />
                {/* Aerobic bubbles */}
                {isAerobic && visible && (
                  <g>
                    {[0, 1, 2, 3].map((k) => (
                      <circle
                        key={k}
                        cx={x - 22 + k * 12}
                        cy={188}
                        r={3}
                        fill="#1E88E5"
                        className="bubble"
                        style={{ animationDelay: `${k * 0.35}s` }}
                      />
                    ))}
                  </g>
                )}
                {/* Stage number circle */}
                <circle cx={x} cy={120} r={14} fill="#0B4A7F" />
                <text x={x} y={125} textAnchor="middle" fontFamily="Oswald" fontWeight="700" fontSize="13" fill="#fff">
                  {i + 1}
                </text>
                {/* Connector dot */}
                <circle cx={x} cy={160} r={6} fill="#fff" stroke="#0B4A7F" strokeWidth={2} />
                {/* Labels */}
                <text x={x} y={236} textAnchor="middle" fontFamily="Oswald" fontWeight="600" fontSize="12" fill="#0B4A7F">
                  {stage?.name.length > 20 ? stage.name.slice(0, 20) + "…" : stage?.name}
                </text>
                <text x={x} y={254} textAnchor="middle" fontFamily="Poppins" fontSize="10" fill="#64748b">
                  {stage?.sub}
                </text>
              </g>
            );
          })}

          {/* Inlet label */}
          <text x="20" y="148" fontFamily="Oswald" fontWeight="600" fontSize="12" fill="#0B4A7F">
            Sewage In
          </text>
          {/* Reuse droplet */}
          <g className={visible ? "pop" : ""}>
            <circle cx="1180" cy="160" r="14" fill="#4CAF50" />
            <text x="1180" y="148" textAnchor="end" fontFamily="Oswald" fontWeight="600" fontSize="12" fill="#4CAF50">
              Reuse
            </text>
          </g>
        </svg>
      </div>

      <div className="mt-6 grid sm:grid-cols-3 gap-3 text-center text-xs text-slate-600">
        <div className="bg-white rounded-md py-2 border border-slate-100">
          <span className="font-semibold text-[#0B4A7F]">100% FRP</span> packaged construction
        </div>
        <div className="bg-white rounded-md py-2 border border-slate-100">
          <span className="font-semibold text-[#0B4A7F]">Anaerobic + Aerobic</span> multi-stage treatment
        </div>
        <div className="bg-white rounded-md py-2 border border-slate-100">
          <span className="font-semibold text-[#4CAF50]">CPCB</span> compliant effluent for safe reuse
        </div>
      </div>
    </div>
  );
};

export default ProcessFlowAnimation;
