export type Pattern = 
|"pattern-a"
|"pattern-b"
|"pattern-c"
|"pattern-d"
|"pattern-e"
|"pattern-f"
|"pattern-g"
|"pattern-h"

type Area = "box-1"|"box-2"|"box-3"|"box-4"
export type kindOfPatterns = "POST"|"NAV"|"LOGO"

export interface ItemPattern {
  area: Area;
  colunm: number;
  row: number;
  role:kindOfPatterns[]
}


export type LayoutType =
  | "IMG_LEFT"
  | "IMG_RIGHT"
  | "IMG_LEFT_ALT"
  | "IMG_RIGHT_ALT";

export const pattnersAreas: Record<LayoutType, string> = {
  IMG_LEFT: `
    "img img joke joke"
    "img img desc action"
  `,

  IMG_RIGHT: `
    "joke joke img img"
    "desc action img img"
  `,

  IMG_LEFT_ALT: `
    "img img joke joke"
    "img img action desc"
  `,

  IMG_RIGHT_ALT: `
    "joke joke img img"
    "action desc img img"
  `,
};


export const patternFirstLineComposition: Record<Pattern, ItemPattern[]> = {
  "pattern-a": [
                {area:"box-1", colunm:1, row:1, role:["POST"]}, 
                {area:"box-1", colunm:2, row:1, role:["POST"]}, 
                {area:"box-1", colunm:3, row:1, role:["POST"]},
                {area:"box-1", colunm:4, row:1, role:["POST"]}, 
  ],
  "pattern-b": [
                {area:"box-1", colunm:1, row:1, role:["POST"]}, 
                {area:"box-1", colunm:2, row:1, role:["POST"]}, 
                {area:"box-2", colunm:3, row:1, role:["POST"]},
                {area:"box-2", colunm:4, row:1, role:["POST"]}, 
  ],
  "pattern-c": [
                {area:"box-1", colunm:1, row:1, role:["POST"]}, 
                {area:"box-2", colunm:2, row:1, role:["POST"]}, 
                {area:"box-2", colunm:3, row:1, role:["POST"]},
                {area:"box-2", colunm:4, row:1, role:["POST"]}, 
  ],
  "pattern-d": [
                {area:"box-1", colunm:1, row:1, role:["POST"]}, 
                {area:"box-1", colunm:2, row:1, role:["POST"]}, 
                {area:"box-1", colunm:3, row:1, role:["POST"]},
                {area:"box-2", colunm:4, row:1, role:["POST"]}, 
  ],
  "pattern-e": [
                {area:"box-1", colunm:1, row:1, role:["POST"]}, 
                {area:"box-2", colunm:2, row:1, role:["POST"]}, 
                {area:"box-3", colunm:3, row:1, role:["POST"]},
                {area:"box-4", colunm:4, row:1, role:["POST"]}, 
  ],
  "pattern-f": [
                {area:"box-1", colunm:1, row:1, role:["POST"]}, 
                {area:"box-2", colunm:2, row:1, role:["POST"]}, 
                {area:"box-2", colunm:3, row:1, role:["POST"]},
                {area:"box-3", colunm:4, row:1, role:["POST"]}, 
  ],
  
  "pattern-g": [
                {area:"box-1", colunm:1, row:1, role:["POST"]}, 
                {area:"box-1", colunm:2, row:1, role:["POST"]}, 
                {area:"box-2", colunm:3, row:1, role:["POST"]},
                {area:"box-3", colunm:4, row:1, role:["POST"]}, 
  ],
  "pattern-h": [
  { area: "box-1", colunm: 1, row: 1, role: ["POST"] },
  { area: "box-2", colunm: 2, row: 1, role: ["POST"] },
  { area: "box-3", colunm: 3, row: 1, role: ["POST"] },
  { area: "box-3", colunm: 4, row: 1, role: ["POST"] },
],
}
