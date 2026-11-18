{ isLoading ? <p>Loading</p>
      : qtdPosts === 0 &&
         (
         <>
         <NotFoundResults
          category={null}
          quantity={0}
          search={null}
         />
         
        <FewResults 
          imageSrc={notResult.image}
          imageAlt={notResult.altImg}
          actionLabel={notResult.action}
          description={notResult.alt}
          joke={notResult.joke}
          key={1}
        />
        </>
        )}
         
        {qtdPosts > 0 && (
          content?.map((con, indexCon)=>(
            <>
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
            </>
        )))}
        {/* 3. ADICIONAL: Se tiver posts, mas forem MENOS que 5, o FewResults aparece LOGO ABAIXO dos posts */}
    {qtdPosts > 0 && qtdPosts < 5 && (
      <FewResults 
          imageSrc={fewResult.image}
          imageAlt={fewResult.altImg}
          actionLabel={fewResult.action}
          description={fewResult.alt}
          joke={fewResult.joke}
          key={1}
        />
    )}
        