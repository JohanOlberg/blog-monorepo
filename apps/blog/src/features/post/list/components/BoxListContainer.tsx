

import { ComposeLayout } from "../compose/composeLayout";
import { usePosts } from "../hooks/usePostsList";
import type { PatternGroup } from "../model/pattern";
import styles from "./BoxListContainer.module.css";
import {LogoBox} from "./LogoBox"
import { NavBox } from "../../../navigation/components/NavBox";
import { PostCard } from "./PostCard";
import { useSearchParams } from "react-router-dom";
import { SearchInfoBox } from "./SearchInfoBox";
import { NotFoundResults } from "./NotFoundResults";
import type React from "react";





export function BoxListContainer() {
  const [searchParams] = useSearchParams();
  let content:PatternGroup[]  = []
  

const search = searchParams.get("search")
const category = searchParams.get("category") || null
const sort = searchParams.get("sort")
let isFiltered = false

if(search||category||sort){
  isFiltered = true
  console.log(isFiltered)
}

  const {data:posts} = usePosts({search,category,sort})
  let qtdPosts  = 0
  type CategoryInfo = {
    title: string | null;
    color: string | null;
  };
  let categoryInfo: CategoryInfo[] = [];


  if (posts?.length) {
    content = ComposeLayout(posts, isFiltered)
    qtdPosts = posts.length 
    categoryInfo = posts.length
  ? posts.map(post => ({
      title: post.category.title,
      color: post.category.color,
    }))
  : [{
      title: category,
      color: null,
    }];

  }
  
  
  return (
    <div className={styles["box-grid"]}>
      {isFiltered ? (
        
        <div className={`${styles.patterns} ${styles[`pattern-b`]}` } style={{"flex-shrink":0} as React.CSSProperties}>

          <div  className={styles[`box-1--area`]}><LogoBox size={`box`} /></div>
          <div className={`${styles[`box-2--area`]} ${styles.box}`}  style={{"--bg-category":"#ff6622"}as React.CSSProperties}><NavBox/></div>
          <div  className={`${styles[`box-3--area`]} ${styles.box}`} style={{"--bg-category":"#ff6688"}as React.CSSProperties}>
            <SearchInfoBox
            resultsCount={qtdPosts}
            category={categoryInfo}
            search={search}
            sort={sort}
            
            />
          </div> 
        </div>
      ):null
      
      }
      { qtdPosts === 0 ?
         (<NotFoundResults/>)
         :
         (content?.map((con, indexCon)=>(
          <div key={indexCon} className={`${styles.patterns} ${styles[con.patternName]}` }>
            {con.slots.map((post, indexPost) => {
              if(post.content.kind ==="post"){
              return(
                
                  <div key={indexPost} className={`${styles[`${post.area}--area`]} ${styles.box}`} style={{"--bg-category":post.content.data.category.color}as React.CSSProperties}>
                    
                  <PostCard 
                    slug={`${post.content.data.slug}`}
                    title={`${post.content.data.title}`}
                    description={`${post.content.data.description}`}
                    author={`${post.content.data.author.name}`}
                    publishedAt={`${post.content.data.publishedAt}`}
                    category={{
                      title: post.content.data.category.title,
                      color: post.content.data.category.color,
                    }}
                              />  
                              </div>
              )}
              if (post.content.kind === "logo") {
                return (
                  <div key={indexPost} className={styles[`${post.area}--area`]}>
                    
                    <LogoBox size={`${post.content.variant}`} />
                  </div>
                  
                );
              }
            if(post.content.kind ==="nav"){
              return(
                
                <div key={indexPost} className={`${styles[`${post.area}--area`]} ${styles.box}`}  style={{"--bg-category":"#ff6622"}as React.CSSProperties}><NavBox/></div>
              )}
            })}
                    
              
          </div>

        )))
        
      }
        

    </div>
  );
  
}
