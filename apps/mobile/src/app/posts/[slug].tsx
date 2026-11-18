import type{ PostListItem } from "@/model/public-post";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, Pressable, ScrollView, Share, StyleSheet, Text, useWindowDimensions } from "react-native";
import RenderHtml from '@native-html/render';
import { getPostBySlug } from "@/services/posts-api";
import { SafeAreaView  } from 'react-native-safe-area-context';
import { Header } from "@/components/Header";
import * as Haptics from 'expo-haptics';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function PostDetailScreen(){
const [loading, setLoading] = useState(false)
const [search, setSearch] = useState("");
const [error, setError] = useState<string | null>(null)
const [post, setPost] = useState<PostListItem | null>(null)
const {slug} = useLocalSearchParams<{slug:string}>()

useEffect(()=>{storeCategory(post?.category.title ?? "")})

useEffect(()=>{
    let ignore = false
    async function getPostBySlugResponse(slug:string){
        try{
            setError(null)
            setLoading(true)
            const response = await getPostBySlug(slug)
            if(!ignore)
            setPost(response) 
            
        }
        catch(erro){
        const mensageErro =
            erro instanceof Error
            ? erro.message
            : String(erro);
        setError(mensageErro)
        }
        finally{
            if(!ignore)
            setLoading(false)
        }
    }
    getPostBySlugResponse(slug)
    return ()=>{ignore=true}
    
},[slug])
const { width } = useWindowDimensions();

async function storeCategory(category:string){
  try{
    await AsyncStorage.setItem('lastCategory', category)
  }catch(error){

  }
}




const sharePost = async ()=> {
    try{
        const result = await Share.share({message:`http://192.168.0.9:3000/posts/${post?.slug}` })
     Haptics.notificationAsync(
                Haptics.NotificationFeedbackType.Warning
              )

    } catch (error: any) {
      Alert.alert(error.message);
    }
    
}

    return(
        <SafeAreaView >
            <Header
        search={search}
        onSearchChange={setSearch}
      />
        <ScrollView >
            <Text style={styles.slulg}>{post?.slug}</Text>
            <Text style={styles.slulg}>{post?.title}</Text>
            <Text style={styles.slulg}>{post?.author.name}</Text>
            <Text style={styles.slulg}>{post?.category.title}</Text>
            
             <RenderHtml 
                contentWidth={width}
                source={{html:post?.content ?? ""}}
                baseStyle={baseStyle}
            />
          <Pressable style={styles.scroll} onPress={()=>{sharePost()}}>
            <Text style={{ fontSize: 24, fontWeight: "bold", color:"#fff" }}>Share</Text>
          </Pressable>  
        </ScrollView>
        </SafeAreaView >
    )
}


const styles = StyleSheet.create({
    slulg:{color:'#fff'},
    scroll:{paddingBottom:10}
})
const baseStyle = {
  fontSize: 16,
  color: '#9dafc1',
};

/*exemplos de estilzacao no RenderHtml*/
const idsStyles = {
  'main-header': {
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
}
const tagsStyles = {
  h1: { color: '#2c3e50', marginBottom: 5 },
  a: { color: '#3498db', textDecorationLine: 'none' },
};

const classesStyles = {
  'card-destaque': {
    backgroundColor: '#e8f4fd',
    padding: 12,
    borderRadius: 6,
    marginTop: 10,
  },
};