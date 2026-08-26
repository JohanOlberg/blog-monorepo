
import { PatternFactory } from "../factory/patternFactory.js";
import type { ItemPattern, Pattern, PostSlot, PatternGroup, kindOfPatterns} from "../model/pattern.js"
import type { PostListItem } from "../model/public-post-summary.js";

let navUsed: number = 3
let logoUsed: number = 3

let usedPattern: Pattern[] = []
// na PatternFactory, no return:
function validaPatterns(qntPosts: number): { patternName: Pattern; area: ItemPattern[], role: kindOfPatterns } {
 
  if (navUsed >= 3) {
    navUsed = 0;
    return PatternFactory(usedPattern.slice(-2), "NAV", qntPosts);
  }
  if (logoUsed >= 3) {
    logoUsed = 0;
    return PatternFactory(usedPattern.slice(-2), "LOGO", qntPosts);
  }
  navUsed++;
  logoUsed++;
  return PatternFactory(usedPattern.slice(-2), "POST", qntPosts);
}

export function ComposeLayout(post:PostListItem[]){
let usedPosts: PostListItem[] = []
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

    if (specialArea) {
        marrigedPosdPattern.push({
        area: specialArea.area,
        content: resultFactory.role === "LOGO"
        ? { kind: "logo", variant: "compact" }
        : { kind: "nav" },
    });
    }
    patternGroup= [...patternGroup,{patternName:resultFactory.patternName, slots:[...marrigedPosdPattern]}]

    usedPosts = [...usedPosts, ...slicedPosts];
    remainPosts = remainPosts.slice(postAreas.length);


    }
    return patternGroup
}