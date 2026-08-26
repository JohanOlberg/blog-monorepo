
import { ComposeLayout } from "../compose/composeLayout";
import { usePosts } from "../hooks/usePostsList";
import type { PatternGroup } from "../model/pattern";
import styles from "./BoxListContainer.module.css";




export function BoxListContainer() {
  const {data:posts} = usePosts()
  let content:PatternGroup[]  = []
  
  if(posts){content = ComposeLayout(posts)}
  
  
  return (
    <div className={styles["box-grid"]}>
      
    {content?.map((con, indexCon)=>(
      <div key={indexCon} className={`${styles.patterns} ${styles[con.patternName]}` }>
        {con.slots.map((post, indexPost) => {
          if(post.content.kind ==="post"){
          return(
            
            <div key={indexPost} className={styles[`${post.area}--area`]} style={{"--bg-category":post.content.data.category.color}as React.CSSProperties}>{`${post.content.data.title}`}</div>
          )}
          if(post.content.kind ==="logo"){
          return(
            
            <div key={indexPost} className={styles[`${post.area}--area`]} style={{"--bg-category":"#ff6622"}as React.CSSProperties}>{`${post.content.variant}`}logo</div>
          )}
        if(post.content.kind ==="nav"){
          return(
            
            <div key={indexPost} className={styles[`${post.area}--area`]} style={{"--bg-category":"#ff6622"}as React.CSSProperties}>{`${post.content}`}nav</div>
          )}
        })}
                
           
      </div>

    ))
    }
        

    </div>
  );
  
}
