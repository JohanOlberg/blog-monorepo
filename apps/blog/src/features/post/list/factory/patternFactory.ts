import { patternComposition, type kindOfPatterns, type Pattern } from "../model/pattern.js"

export function PatternFactory(patternHistory: Pattern[], role: kindOfPatterns, qntPost: number) {

  const allPatterns = Object.keys(patternComposition)  as Pattern[];

  
  // primeiro filtra por quem TEM o role pedido
const patternsWithRole = allPatterns
.filter(pattern => 
     role === "POST" 
    ?  patternComposition[pattern].every(item => item.role.includes(role))
    :  patternComposition[pattern].some(item => item.role.includes(role))
  )
  .filter(pattern =>
    qntPost > 4 ||
    patternComposition[pattern]
      .filter(item => item.role.includes("POST"))
      .length <= qntPost
  );
  
  let availablePatterns = patternsWithRole.filter(pattern => !patternHistory.includes(pattern));


  if (patternsWithRole.length === 0) {
  const fallbackPatterns = allPatterns.filter(pattern =>
    patternComposition[pattern].every(item => item.role.includes("POST")) &&
    (qntPost > 4 || patternComposition[pattern].filter(item => item.role.includes("POST")).length <= qntPost)
  );
  const randomIndex = Math.floor(Math.random() * fallbackPatterns.length);
  const selectedPattern = fallbackPatterns[randomIndex];
  return { patternName: selectedPattern, area: patternComposition[selectedPattern], role: "POST" as kindOfPatterns };
}

  if (availablePatterns.length === 0) {
    const lastPattern = patternHistory.at(-1); ;
    const filtered = patternsWithRole.filter(k => k !== lastPattern);
    
    availablePatterns = filtered.length > 0 
    ? filtered 
    : patternsWithRole;
  }

  const randomIndex = Math.floor(Math.random() * availablePatterns.length);
  const selectedPattern = availablePatterns[randomIndex];

  return { patternName: selectedPattern, area: patternComposition[selectedPattern], role };
}