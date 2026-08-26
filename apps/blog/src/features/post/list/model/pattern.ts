import type { PostListItem } from "./public-post-summary";

export type Pattern = 
|"pattern-a"
|"pattern-b"
|"pattern-c"
|"pattern-d"
|"pattern-e"
|"pattern-f"
|"pattern-g"
|"pattern-h"
|"pattern-i"
|"pattern-j"
|"pattern-k"
|"pattern-l"
|"pattern-m"
|"pattern-n"
|"pattern-o"
|"pattern-p"
|"pattern-q"
|"pattern-r"
|"pattern-s"

type SlotContent =
  | { kind: "post"; data: PostListItem }
  | { kind: "logo"; variant: "compact" | "detailed" } // compact = 1 box, detailed = 2+ box
  | { kind: "nav" }

export type PostSlot = {
  area: string
  content: SlotContent  // exige um campo "content", não "post"
}
export type PatternGroup = { patternName: Pattern, slots: PostSlot[] }


 export type kindOfPatterns = "POST"|"NAV"|"LOGO"

export interface ItemPattern {
  area: string;
  colunm: number;
  row: number;
  role:kindOfPatterns[]
}

export const patternComposition: Record<Pattern, ItemPattern[]> = {


"pattern-a": [{area:"box-1", colunm:2, row:1, role:["POST"]}, 
              {area:"box-2", colunm:1, row:1, role:["POST"]}, 
              {area:"box-3", colunm:1, row:1, role:["POST"]}],

"pattern-b": [{area:"box-1", colunm:1, row:1, role:["POST"]}, 
              {area:"box-2", colunm:2, row:1, role:["POST"]}, 
              {area:"box-3", colunm:1, row:1, role:["POST"]}],    

"pattern-c": [{area:"box-1", colunm:1, row:1, role:["POST"]}, 
              {area:"box-2", colunm:1, row:1, role:["POST"]}, 
              {area:"box-3", colunm:2, row:1, role:["POST"]}],  

"pattern-d": [{area:"box-1", colunm:2, row:1, role:["NAV"]}, 
              {area:"box-2", colunm:1, row:1, role:["POST"]}, 
              {area:"box-3", colunm:1, row:1, role:["POST"]}],

"pattern-e": [{area:"box-1", colunm:1, row:1, role:["POST"]}, 
              {area:"box-2", colunm:2, row:1, role:["NAV"]}, 
              {area:"box-3", colunm:1, row:1, role:["POST"]}],    

"pattern-f": [{area:"box-1", colunm:1, row:1, role:["POST"]}, 
              {area:"box-2", colunm:1, row:1, role:["POST"]}, 
              {area:"box-3", colunm:2, row:1, role:["NAV"]}], 
              
"pattern-g": [{area:"box-1", colunm:2, row:1, role:["LOGO"]}, 
              {area:"box-2", colunm:1, row:1, role:["POST"]}, 
              {area:"box-3", colunm:1, row:1, role:["POST"]}],

"pattern-h": [{area:"box-1", colunm:1, row:1, role:["POST"]}, 
              {area:"box-2", colunm:2, row:1, role:["LOGO"]}, 
              {area:"box-3", colunm:1, row:1, role:["POST"]}],    

"pattern-i": [{area:"box-1", colunm:1, row:1, role:["POST"]}, 
              {area:"box-2", colunm:1, row:1, role:["POST"]}, 
              {area:"box-3", colunm:2, row:1, role:["LOGO"]}],

"pattern-j": [{area:"box-1", colunm:2, row:1, role:["POST"]}, 
              {area:"box-2", colunm:2, row:1, role:["POST"]}],                      

"pattern-k": [{area:"box-1", colunm:3, row:1, role:["NAV"]}, 
              {area:"box-2", colunm:1, row:1, role:["POST"]}],    
              
"pattern-l": [{area:"box-1", colunm:1, row:1, role:["POST"]}, 
              {area:"box-2", colunm:3, row:1, role:["NAV"]}], 

"pattern-m": [{area:"box-1", colunm:1, row:1, role:["LOGO"]}, 
              {area:"box-2", colunm:3, row:1, role:["POST"]}],   
              
"pattern-n": [{area:"box-1", colunm:3, row:1, role:["POST"]}, 
              {area:"box-2", colunm:1, row:1, role:["LOGO"]}],

"pattern-o": [{area:"box-1", colunm:4, row:1, role:["NAV"]}],

"pattern-p": [{area:"box-1", colunm:1, row:1, role:["POST"]}, 
              {area:"box-2", colunm:1, row:1, role:["POST"]}, 
              {area:"box-3", colunm:1, row:1, role:["POST"]}, 
              {area:"box-4", colunm:1, row:1, role:["POST"]}],              

"pattern-q": [{area:"box-1", colunm:2, row:1, role:["POST",]}, 
              {area:"box-2", colunm:2, row:1, role:["NAV"]}], 

"pattern-r": [{area:"box-1", colunm:2, row:1, role:["LOGO",]}, 
              {area:"box-2", colunm:2, row:1, role:["POST"]}], 

"pattern-s": [{area:"box-1", colunm:4, row:1, role:["POST"]}],

}
