import { LinearGradient } from "expo-linear-gradient";
import { colors, styles } from "./stylesHome";
import { Image, Keyboard, Pressable, Text, TextInput, View } from "react-native";
import {
  Search,
  Info,
  LayoutGrid,
  Clock3,
  ArrowRight,
} from "lucide-react-native";
import { useResponsiveLayout } from "@/hooks/useResponsiveLayout";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";


export function Header({
    
  search,
  onSearchChange,
}: {
  search: string;
  onSearchChange: (value: string) => void;
}){
    
    const { isPortrait } = useResponsiveLayout();

    
  return (
    <LinearGradient
      colors={[
        colors.headerStart,
        colors.headerMiddle,
        colors.headerEnd,
      ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[styles.header, !isPortrait && styles.headerLandscape]}
    >
      {/* LOGO */}
      <View style={[styles.headerTop, !isPortrait && styles.navigationLandscape]}>
        <View style={styles.brandContainer}>
          {/* Substitua pelo caminho real do seu logo */}
          <Image
            source={require("../../assets/logo/logosmall.webp")}
            style={styles.logo}
          />

          <View style={[styles.brandTextContainer, !isPortrait && styles.navigationBrandContainer]}>
            <Text style={styles.brandTitle}>
              ArchType
            </Text>

            <Text style={styles.brandSubtitle}>
              Ideas for a brighter internet
            </Text>
          </View>
        </View>
      </View>

      {/* NAVEGAÇÃO */}
      <View style={[styles.navigation, !isPortrait && styles.navigationLandscape]}>
        <Pressable style={[styles.navigationItem, !isPortrait && styles.navigationItemLandscape]}>
          <Info size={22} color="#F0EDF3" />
          <Text style={styles.navigationText}>
            About
          </Text>
        </Pressable>

        <View style={styles.navigationDivider} />

        <Pressable style={[styles.navigationItem, !isPortrait && styles.navigationItemLandscape]}>
          <LayoutGrid size={22} color="#F0EDF3" />
          <Text style={styles.navigationText}>
            Categories
          </Text>
        </Pressable>

        <View style={styles.navigationDivider} />

        <Pressable style={[styles.navigationItem, !isPortrait && styles.navigationItemLandscape]}>
          <Clock3 size={22} color="#F0EDF3" />
          <Text style={styles.navigationText}>
            Latest
          </Text>
        </Pressable>
      </View>

      {/* SEARCH */}
      <View style={[styles.searchContainer, !isPortrait && styles.searchContainerLandscape] }>
        { }
        <TextInput
          style={styles.searchInput}
          placeholder={"Search articles..."}
          placeholderTextColor="#A9A9B5"
          value={search}
          onChangeText={onSearchChange}
          returnKeyType="search"
        />

        <Pressable
          style={styles.searchButton}
          onPress={() => Keyboard.dismiss()}
        >
          <Search size={20} color="#FFFFFF" />
        </Pressable>
      </View>
    </LinearGradient>
  );
}