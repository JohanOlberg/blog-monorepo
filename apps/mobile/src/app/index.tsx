
import {type PostListOutput} from '../../../blog/src/features/post/list/model/public-post-summary'
import { useState, useEffect, useCallback } from 'react';
import { Text,FlatList, ActivityIndicator, Linking} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PostListItem } from '@/components/PostListItem';
import { getPosts } from '@/services/posts-api';
import { Header } from '@/components/Header';
import { colors, styles } from "../components/stylesHome";
import { LAYOUT } from '@/constants/layout';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from "expo-router";


export default function HomeScreen() {
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState("");
  const [error, setError] = useState<string | null>(null)
  const [posts, setPosts] = useState<PostListOutput[] | []>([])

  useFocusEffect(
    useCallback(()=>{
      getItemStored()
      
    },[])
  )
  
  useEffect(()=>{
    
    
    getPostsResponse()
    
  },[])

  async function getItemStored(){
    const result = await  AsyncStorage.getItem("lastCategory"); 
    console.log(result)
  }


async function getPostsResponse(){
  try{
    setError(null)
    setLoading(true)
    const response:PostListOutput[] = await getPosts()
    
    setPosts(response)
  }
  catch(erro){
    const mensageErro =
      erro instanceof Error
        ? erro.message
        : String(erro);
    setError(mensageErro)
  }
  finally{
    setLoading(false)
  }  
}

const LinkingReactSite = async ()=>{
  await Linking.openURL("https://reactnative.dev")  
}

  return (
    <SafeAreaView style={styles.container} >
      
    <Header
        search={search}
        onSearchChange={setSearch}
      />
    
    {loading && <ActivityIndicator size={'large'} animating color={'#d9079d'}/>}
    {error && <Text >Sometinhings wrong happens {error}</Text>}
    
        <FlatList  
        style={{
          marginTop: -LAYOUT.HEADER_OVERLAP,
          paddingTop: LAYOUT.HEADER_OVERLAP,
          zIndex: 0,
        }}
            data={posts}
            renderItem={({item})=> (
              <PostListItem
                author={item.author.name}
                category={item.category.title}
                categoryColor={item.category.color}
                description={item.description}
                slug={item.slug}
                title={item.title}
                publishedAt={item.publishedAt}
                id={item.id}
              />
            )}
            keyExtractor={item => item.slug}
            
            contentContainerStyle={[
              styles.content,
              styles.postList,
            ]} 
            ListEmptyComponent={
              <Text
                style={{
                  color: colors.muted,
                  textAlign: "center",
                  marginTop: 32,
                }}
              >
                No articles found.
              </Text>
            }
            showsVerticalScrollIndicator={false}
        />
    
         
    </SafeAreaView>

  );
}

