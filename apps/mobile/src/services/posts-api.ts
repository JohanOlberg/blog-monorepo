
export async function getPostBySlug(slug:string){
       
            const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/public/posts/${slug}`)
            if(!response.ok)
                throw new Error(`HTTP Error ${response.status}`);
            const post = await response.json()    
            return post
      
    }

export async function getPosts(){
  
 
    const response = await  fetch(`${process.env.EXPO_PUBLIC_API_URL}/public/posts`);
    if (!response.ok) {
      
      throw new Error(`HTTP Error ${response.status}`);
    }
    const posts = await response.json();
    return posts
}