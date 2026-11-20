
import { PatternFactory } from "../factory/patternFactory.js";
import type { ItemPattern, Pattern, PostSlot, PatternGroup, kindOfPatterns} from "../model/pattern.js"
import type { PostListItem } from "../model/public-post-summary.js";

export function ComposeLayout(post:PostListItem[], excludeSpecial:boolean){
// Composition state belongs to this layout, never to a previous route/render.
let navUsed = 4;
let logoUsed = 4;
let logoInserted = false;
let usedPattern: Pattern[] = [];

function validaPatterns(qntPosts: number): { patternName: Pattern; area: ItemPattern[], role: kindOfPatterns } {
  if (!excludeSpecial) {
    if (navUsed >= 3) {
      navUsed = 0;
      // Leave one article for the first logo group, even with a short feed.
      return PatternFactory(usedPattern.slice(-2), "NAV", logoInserted ? qntPosts : qntPosts - 1);
    }
    if (logoUsed >= 3) {
      logoUsed = 0;
      logoInserted = true;
      return PatternFactory(usedPattern.slice(-2), "LOGO", qntPosts);
    }
    navUsed++;
    logoUsed++;
  }
  return PatternFactory(usedPattern.slice(-2), "POST", qntPosts);
}

let  remainPosts: PostListItem[] = post;
let patternGroup:PatternGroup[] =[]

while(remainPosts.length > 0){


    //retorno da factory, recebo o nome do patern e o record com as areas
    const resultFactory = validaPatterns(remainPosts.length)

    //insiro o pattern no historico
    usedPattern = [...usedPattern, resultFactory.patternName]
    const specialArea = resultFactory.role !== "POST"
      ? resultFactory.area.find(a => a.role.includes(resultFactory.role))
      : undefined;

    const postAreas = resultFactory.area.filter(
      a => a.role.includes("POST") 
    );
    const slicedPosts = remainPosts.slice(0, postAreas.length);

    const marrigedPosdPattern: PostSlot[] = slicedPosts.map((p, index) => ({
        area: postAreas[index]?.area || "box-1",
        content: { kind: "post", data: p },
    }));

    type variant = "box" | "standard" | "extends";
   const logoVariants: Record<number,variant> = {
  1: "box",
  2: "standard",
  3: "extends",
  4: "extends",
};

    if (specialArea) {
       
        marrigedPosdPattern.push({
        area: specialArea.area,
        content: resultFactory.role === "LOGO"
        ? { 
          kind: "logo", 
          variant: logoVariants[specialArea.colunm] ?? "standard",
        }
        : { kind: "nav" },
    });
    }
    patternGroup= [...patternGroup,{patternName:resultFactory.patternName, slots:[...marrigedPosdPattern]}]

    remainPosts = remainPosts.slice(postAreas.length);


    }
    return patternGroup
}