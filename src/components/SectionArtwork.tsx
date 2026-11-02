/** Distinct visual stories for each lower-page section. */
export default function SectionArtwork({kind}:{kind:string}) {
const ink="#343333",rust="#b75b36",muted="#d7d0c5";
return <svg viewBox="0 0 380 230" className="section-artwork" role="img" aria-label={kind === "cms" ? "Browser session connecting an approved draft to a website" : kind.startsWith("team") ? "People sharing responsibility for connected work" : "Editorial illustration for an SEO guide"}>
{kind === "cms" ? <>
<rect x="30" y="35" width="220" height="148" rx="10" fill="#eeebe5"/><rect x="38" y="62" width="204" height="112" rx="4" fill="#fff"/><circle cx="46" cy="49" r="3" fill={rust}/><circle cx="57" cy="49" r="3" fill={muted}/><rect x="76" y="44" width="142" height="10" rx="5" fill="#fff"/><rect x="54" y="79" width="39" height="78" rx="3" fill="#f4f1eb"/><path d="M107 90h105M107 105h80M107 120h97" stroke={muted} strokeWidth="5" strokeLinecap="round"/><rect x="107" y="139" width="62" height="15" rx="7" fill={rust}/><path d="M250 114h49m-9-9 10 9-10 9" stroke={rust} strokeWidth="3" fill="none"/><circle cx="322" cy="114" r="28" fill="#e5ece2"/><path d="m309 114 9 9 17-20" stroke="#64785e" strokeWidth="4" fill="none" strokeLinecap="round"/><text x="42" y="207" fill={ink} fontSize="11">Your Browser</text><text x="282" y="165" fill={ink} fontSize="11">Reviewed Draft</text>
</> : kind.startsWith("team") ? <>
{kind === "team0" ? <>
<rect x="48" y="32" width="284" height="166" rx="9" fill="#f0ece5"/><path d="M64 61h252" stroke="#d7d0c5" strokeWidth="2"/>
{[69,154,239].map((x,i)=><g key={x}><rect x={x} y="76" width="71" height={i===1?90:65} rx="5" fill="#fff"/><rect x={x+10} y="88" width="30" height="5" rx="2" fill={i===1?rust:muted}/><path d={`M${x+10} 105h49M${x+10} 116h35`} stroke={muted} strokeWidth="3" strokeLinecap="round"/><circle cx={x+53} cy={i===1?149:130} r="8" fill={i===1?'#d79873':'#d8ddd2'}/></g>)}<text x="69" y="51" fill={ink} fontSize="10">Shared Workboard</text>
</> : kind === "team1" ? <>
<rect x="94" y="36" width="220" height="145" rx="10" fill="#e4ded4" transform="rotate(7 204 108)"/><rect x="63" y="57" width="235" height="142" rx="10" fill="#fff"/><path d="M83 83h86" stroke={ink} strokeWidth="5" strokeLinecap="round"/>{[108,139,170].map((y,i)=><g key={y}><circle cx="89" cy={y} r="9" fill={['#d79873','#a8b39d','#b8ada2'][i]}/><path d={`M109 ${y-3}h88M109 ${y+5}h57`} stroke={muted} strokeWidth="3" strokeLinecap="round"/><rect x="228" y={y-7} width="47" height="13" rx="6" fill={i===0?'#efd9c8':'#edf0e9'}/></g>)}<text x="83" y="224" fill={ink} fontSize="10">Separate Sites. Clear Client Work.</text>
</> : <>
<rect x="38" y="47" width="132" height="148" rx="6" fill="#fff"/><path d="M56 72h81M56 86h63" stroke={ink} strokeWidth="5" strokeLinecap="round"/><path d="M56 109h93M56 121h81M56 133h88M56 157h60" stroke={muted} strokeWidth="3" strokeLinecap="round"/><path d="M181 122h33m-9-9 9 9-9 9" fill="none" stroke={rust} strokeWidth="3"/><rect x="230" y="66" width="112" height="112" rx="7" fill="#e9ede5"/><path d="m261 105-12 13 12 13m48-26 12 13-12 13m-23-34-13 43" fill="none" stroke="#6d7c63" strokeWidth="4" strokeLinecap="round"/><text x="51" y="219" fill={ink} fontSize="10">Editorial Brief</text><text x="241" y="201" fill={ink} fontSize="10">Web Handoff</text>
</>}
</> : kind === "guide0" ? <>
<circle cx="190" cy="115" r="80" fill="#e6e2d9"/><path d="M143 70h94v112h-94z" fill="#fff"/>{[92,119,146].map(y=><g key={y}><path d={`m156 ${y} 5 5 9-11`} stroke={rust} strokeWidth="3" fill="none"/><path d={`M181 ${y}h40`} stroke={muted} strokeWidth="4"/></g>)}
</> : kind === "guide1" ? <>
<circle cx="190" cy="115" r="67" fill="#e1e7dc"/><path d="M112 134q78-108 156 0M112 96q78 108 156 0" fill="none" stroke="#8d9b83" strokeWidth="2"/><ellipse cx="190" cy="115" rx="36" ry="79" fill="none" stroke="#8d9b83" strokeWidth="2"/><circle cx="190" cy="115" r="24" fill="#fff"/><path d="m179 116 8 8 15-19" stroke="#64785e" strokeWidth="3" fill="none"/><circle cx="267" cy="130" r="7" fill={rust}/>
</> : <>
<path d="M80 72h80v40H80zM224 65h80v40h-80zM150 151h80v40h-80z" fill="#fff"/><path d="M160 92h30v79m0-86h34" stroke={rust} strokeWidth="3" fill="none"/><circle cx="190" cy="92" r="10" fill={rust}/><path d="M95 86h48M95 98h30M239 79h48M239 91h30M165 165h48M165 177h30" stroke={muted} strokeWidth="4" strokeLinecap="round"/>
</>}
</svg>;
}
