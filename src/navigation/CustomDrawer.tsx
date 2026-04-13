import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import auth from "@react-native-firebase/auth";

export default function CustomDrawer({ navigation }) {
  const user = auth().currentUser;

  const handleLogout = async () => {
    await auth().signOut();
    navigation.replace("Login");
  };

  return (
    <DrawerContentScrollView contentContainerStyle={styles.container}>
      {/* PROFILE HEADER */}
      <View style={styles.profileSection}>
        <Image
          source={{
            uri: user?.photoURL || "https://i.pravatar.cc/150?img=12",
          }}
          style={styles.avatar}
        />

        <Text style={styles.username}>{user?.displayName || "Student"}</Text>

        <Text style={styles.email}>{user?.email || "student@email.com"}</Text>
      </View>

      {/* MENU */}
      <View style={styles.menuContainer}>
        <MenuItem
          title="🏠 Home"
          onPress={() => navigation.navigate("HomeTabs")}
        />

        {/* <MenuItem
          title="👤 Profile"
          onPress={() => navigation.navigate("Profile")}
        /> */}

        <MenuItem
          title="❤️ Saved Colleges"
          onPress={() => navigation.navigate("SavedColleges")}
        />

        <MenuItem title="🚪 Logout" onPress={handleLogout} />
      </View>
    </DrawerContentScrollView>
  );
}

function MenuItem({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <Text style={styles.menuText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  profileSection: {
    padding: 20,
    backgroundColor: "#4F46E5",
    alignItems: "center",
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },

  username: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  email: {
    color: "#E0E7FF",
    fontSize: 13,
  },

  menuContainer: {
    paddingTop: 20,
  },

  menuItem: {
    padding: 18,
  },

  menuText: {
    fontSize: 16,
  },
});
