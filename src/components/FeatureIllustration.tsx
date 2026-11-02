type Props = { kind: number };

/** Original lightweight product illustrations, drawn for Ayra's feature stories. */
export default function FeatureIllustration({ kind }: Props) {
  const id = `feature-art-${kind}`;
  return <svg className="feature-art" viewBox="0 0 380 260" role="img" aria-label={[
    "A magnifying glass examining a stack of website pages",
    "Search topics grouped around a matching destination page",
    "An article draft with connected content and an editing pencil",
    "An approved change moving from an editor to a website",
  ][kind]}>
    <defs>
      <linearGradient id={`${id}-paper`} x2=".8" y2="1"><stop stopColor="#fff"/><stop offset="1" stopColor="#eeeae3"/></linearGradient>
      <linearGradient id={`${id}-rust`} x2="1" y2="1"><stop stopColor="#e7a17b"/><stop offset="1" stopColor="#a64727"/></linearGradient>
      <radialGradient id={`${id}-halo`}><stop stopColor="#e9d4c0" stopOpacity=".65"/><stop offset="1" stopColor="#f7f5f1" stopOpacity="0"/></radialGradient>
      <filter id={`${id}-shadow`} x="-40%" y="-40%" width="180%" height="200%"><feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#403326" floodOpacity=".10"/></filter>
    </defs>
    <ellipse cx="192" cy="143" rx="180" ry="110" fill={`url(#${id}-halo)`}/>
    <g filter={`url(#${id}-shadow)`}>
    {kind === 0 && <>
      <g transform="translate(76 30) rotate(-12 95 100)"><rect x="0" y="0" width="162" height="190" rx="9" fill="#ded9d0"/><rect x="14" y="9" width="162" height="190" rx="9" fill="#eee9e1"/><rect x="28" y="18" width="162" height="190" rx="9" fill={`url(#${id}-paper)`}/><circle cx="46" cy="36" r="3" fill="#bc5733"/><path d="M58 36h105M47 63h115M47 77h85M47 115h115M47 129h96M47 167h69" stroke="#d0c9be" strokeWidth="5" strokeLinecap="round"/><rect x="45" y="91" width="119" height="9" rx="4" fill="#e9bd9f"/></g>
      <g className="feature-art-float"><circle cx="245" cy="139" r="45" fill="#fff" fillOpacity=".7" stroke="#b75b36" strokeWidth="10"/><circle cx="245" cy="139" r="32" fill="#eec9af" fillOpacity=".3"/><path d="m277 174 33 35" stroke="#272526" strokeWidth="17" strokeLinecap="round"/><path d="m230 140 10 10 22-24" fill="none" stroke="#b75b36" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/></g>
    </>}
    {kind === 1 && <>
      <path d="M100 68Q196 56 234 120M83 137h151M118 207q70 0 116-70" fill="none" stroke="#d2b69f" strokeWidth="2"/>
      {[ [35,45,105],[19,113,122],[52,182,106] ].map(([x,y,w],i)=><g key={x} className={i===1?'feature-art-float':''}><rect x={x} y={y} width={w} height="43" rx="21" fill={i===1?'#f0d8c5':'#fff'}/><circle cx={x+20} cy={y+21} r="5" fill={i===1?'#b75b36':'#b9b3a8'}/><path d={`M${x+35} ${y+21}h${w-53}`} stroke="#a49a8d" strokeWidth="4" strokeLinecap="round"/></g>)}
      <g transform="translate(224 55) rotate(6)"><rect width="121" height="158" rx="9" fill={`url(#${id}-paper)`}/><rect x="15" y="19" width="91" height="50" rx="4" fill={`url(#${id}-rust)`}/><path d="M17 89h85M17 103h68M17 117h78M17 134h42" stroke="#d3ccc1" strokeWidth="4" strokeLinecap="round"/></g><circle cx="233" cy="134" r="17" fill="#292727"/><path d="m226 134 5 5 9-11" fill="none" stroke="#fff" strokeWidth="2.5"/>
    </>}
    {kind === 2 && <>
      <g transform="translate(82 29) rotate(-5 90 100)"><rect width="176" height="204" rx="9" fill={`url(#${id}-paper)`}/><rect x="22" y="22" width="53" height="7" rx="3" fill="#bc5733"/><path d="M22 52h129M22 66h94" stroke="#49413a" strokeWidth="7" strokeLinecap="round"/><path d="M22 91h128M22 104h116M22 117h129M22 164h127M22 177h90" stroke="#d5cec3" strokeWidth="4" strokeLinecap="round"/><rect x="20" y="133" width="134" height="14" rx="3" fill="#ecd1bb"/></g>
      <g className="feature-art-float" transform="translate(273 65) rotate(30)"><rect width="17" height="144" rx="4" fill={`url(#${id}-rust)`}/><path d="m0 144 8.5 23L17 144" fill="#d9be9b"/><path d="m5 158 3.5 9 3.5-9" fill="#302a25"/><rect y="12" width="17" height="5" fill="#f1c19e"/></g>
      <g transform="translate(28 164)"><rect width="77" height="45" rx="9" fill="#fff"/><path d="M21 21c-9-12-19 7-6 8h14m18-8c9-12 19 7 6 8H39M26 25h20" fill="none" stroke="#b75b36" strokeWidth="3" strokeLinecap="round"/></g>
    </>}
    {kind === 3 && <>
      <g transform="translate(29 54) rotate(-5)"><rect width="137" height="154" rx="9" fill={`url(#${id}-paper)`}/><path d="M18 22h98" stroke="#d0c8bc" strokeWidth="4"/><rect x="17" y="43" width="103" height="34" rx="4" fill="#f0d8c5"/><path d="M27 59h78M18 95h93M18 109h81" stroke="#c1b4a4" strokeWidth="4" strokeLinecap="round"/><rect x="17" y="127" width="58" height="13" rx="6" fill="#bc5733"/></g>
      <g transform="translate(219 69) rotate(5)"><rect width="132" height="151" rx="9" fill={`url(#${id}-paper)`}/><path d="M0 23h132" stroke="#ddd5c8"/><circle cx="13" cy="12" r="3" fill="#bc5733"/><rect x="16" y="39" width="101" height="44" rx="4" fill="#e4d7c7"/><path d="M17 101h97M17 114h79M17 127h91" stroke="#cec5b8" strokeWidth="4" strokeLinecap="round"/></g>
      <g className="feature-art-float"><circle cx="190" cy="122" r="31" fill={`url(#${id}-rust)`}/><path d="M175 122h29m-10-10 11 10-11 10" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></g><circle cx="302" cy="67" r="20" fill="#617760"/><path d="m293 67 6 6 12-14" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
    </>}
    </g>
  </svg>;
}
