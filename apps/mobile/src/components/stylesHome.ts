
import { StyleSheet, Platform } from "react-native";
import { LAYOUT } from "@/constants/layout";
import { Layout } from "lucide-react-native";

export const colors = {
  background: "#08090D",
  surface: "#151821",
  text: "#FFFFFF",
  muted: "#A9A9B5",

  cyan: "#35B8EA",
  pink: "#EB49AD",
  green: "#91BF37",
  yellow: "#FFBF08",
  purple: "#B9A3F9",

  headerStart: "#063E4B",
  headerMiddle: "#29303E",
  headerEnd: "#63204F",
};

export const styles = StyleSheet.create({
  // ===== SCREEN =====
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    paddingHorizontal: 12,
    paddingBottom: 28,


    
  },

  // ===== HEADER =====
  header: {
    
    paddingTop: 18,
    paddingHorizontal: 18,
    paddingBottom: 16,

    borderTopLeftRadius:LAYOUT.HEADER_RADIUS,
    borderTopRightRadius:LAYOUT.HEADER_RADIUS,
    borderBottomLeftRadius: LAYOUT.HEADER_RADIUS,
    borderBottomRightRadius: LAYOUT.HEADER_RADIUS,
    zIndex: 10,
    overflow: "hidden",
  },

/*Landscape orientation*/
 headerLandscape: {
    flexDirection:"row",
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 8,
    paddingHorizontal: 12,
},
headerTopLandscape: {
  marginBottom: 0,
},

navigationLandscape: {
  marginBottom: 0,
},
navigationItemLandscape: {
  flex: 0,
  paddingHorizontal: 15,
},
searchContainerLandscape: {
  flex: 1,
  minWidth: 0,
},
navigationBrandContainer:{
    display:"none"
},

  headerTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  brandContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  logo: {
    width: 48,
    height: 48,
    resizeMode: "contain",
  },

  brandTextContainer: {
    justifyContent: "center",
  },

  brandTitle: {
    fontSize: 25,
    fontWeight: "500",
    color: colors.text,
    letterSpacing: 0.5,
  },

  brandSubtitle: {
    fontSize: 12,
    color: "#D1CED7",
    marginTop: 2,
  },

  headerSearchIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#FFFFFF40",
    alignItems: "center",
    justifyContent: "center",
  },

  // ===== NAVIGATION =====
  navigation: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },

  navigationItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    minHeight: 48,
  },

  navigationText: {
    color: "#F0EDF3",
    fontSize: 12,
    fontWeight: "500",
  },

  navigationDivider: {
    width: 1,
    height: 36,
    backgroundColor: "#FFFFFF25",
  },

  // ===== SEARCH =====
  searchContainer: {
    height: 52,
    borderRadius: 28,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 18,
    paddingRight: 5,
    borderWidth: 1,
    borderColor: "#FFFFFF35",
    backgroundColor: "#101A27A6",
  },

  searchInput: {
    flex: 1,
    height: "100%",
    fontSize: 15,
    color: colors.text,
  },

  searchButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF12",
    borderWidth: 1,
    borderColor: "#FFFFFF20",
  },

  // ===== POST LIST =====
  postList: {
    paddingTop: 10,
    gap: 10,
  },

  // ===== POST CARD =====
  postCard: {
    width: "100%",
    minHeight: 205,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 18,
    justifyContent: "space-between",
    overflow: "hidden",
  },

  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    marginBottom: 12,
  },

  postCategory: {
    borderWidth: 1,
    borderColor: "#151515",
    borderRadius: 24,
    paddingHorizontal: 13,
    paddingVertical: 7,
    alignSelf: "flex-start",
  },

  postCategoryText: {
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1,
    color: "#111111",
    textTransform: "uppercase",
    fontFamily: Platform.select({
      ios: "Menlo",
      android: "monospace",
    }),
  },

  postDate: {
    fontSize: 11,
    color: "#343434",
    fontFamily: Platform.select({
      ios: "Menlo",
      android: "monospace",
    }),
  },

  postBody: {
    flex: 1,
  },

  postTitle: {
    fontSize: 29,
    lineHeight: 33,
    fontWeight: "700",
    color: "#080808",
    letterSpacing: -0.8,
    marginBottom: 10,
    fontFamily: Platform.select({
      ios: "Georgia",
      android: "serif",
    }),
  },

  postDescription: {
    fontSize: 15,
    lineHeight: 21,
    color: "#333333",
  },

  postFooter: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginTop: 18,
  },

  postAuthor: {
    fontSize: 15,
    fontWeight: "700",
    color: "#080808",
    fontFamily: Platform.select({
      ios: "Georgia",
      android: "serif",
    }),
  },

  postArrowButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: "#161616",
    alignItems: "center",
    justifyContent: "center",
  },

  postArrowText: {
    fontSize: 24,
    color: "#080808",
    fontWeight: "400",
  },
});
