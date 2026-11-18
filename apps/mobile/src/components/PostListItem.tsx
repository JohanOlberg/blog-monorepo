import { Animated, Pressable, Text, useAnimatedValue, View } from "react-native";
import { useRouter } from "expo-router";
import { setParams } from "expo-router/build/global-state/router.js";
import { styles } from "../components/stylesHome";
import { ArrowRight } from "lucide-react-native";


type postListItemProps = {
    title: string;
      id: number;
      slug: string;
      description: string;
      category: string;
      categoryColor: string;
      author: string;
      publishedAt: string ;
}


export function PostListItem({title, id, slug, description, category,categoryColor, author, publishedAt}:postListItemProps){
  const router = useRouter()
  const animation = useAnimatedValue(0)

  const scale = animation.interpolate({
    inputRange:[0,1],
    outputRange:[1,0.9]
  })

  const opacity = animation.interpolate({
    inputRange:[0,1],
    outputRange:[1,0.9]
  })

  const animateScale = (value:number)=>{
    Animated.spring(animation,{
      toValue: value,
      useNativeDriver: true,
      speed: 15,
      bounciness: 8,
    }).start()
  }

    return(
    <Animated.View style={[{transform: [{ scale: scale }]},{opacity}]}>
      <Pressable
      
       style={[styles.postCard,
          { backgroundColor: categoryColor },]}
        onPressIn={() => animateScale(1)}
        onPressOut={() => animateScale(0)}
        onPress={()=>{
         router.push(
            {
            pathname: '/posts/[slug]',
            params: { slug: slug }
          }
        )
          
        }}
      >
      
        <View style={[styles.postHeader]}>
        <View style={styles.postCategory}>
          <Text style={styles.postCategoryText}>
            {category}
          </Text>
        </View>

        <Text style={styles.postDate}>
          {publishedAt}
        </Text>
      </View>

      <View style={styles.postBody}>
        <Text style={styles.postTitle}>
          {title}
        </Text>

        <Text style={styles.postDescription}>
          {description}
        </Text>
      </View>

      <View style={styles.postFooter}>
        <Text style={styles.postAuthor}>
          By {author}
        </Text>

        <View style={styles.postArrowButton}>
          <ArrowRight size={22} color="#080808" />
        </View>
      </View>
      
    </Pressable></Animated.View>
    )
}
    
    