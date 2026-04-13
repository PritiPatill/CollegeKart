import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getSavedColleges } from "../../utils/storage";

const SavedCollegesScreen = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const result = await getSavedColleges();
    setData(result);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />

      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.subtitle}>
          {item.city} • {item.category}
        </Text>

        <Text style={styles.package}>
          🎓 Avg Placement: {item.averagePackage}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.back} onPress={() => navigation.goBack()}>
          ←
        </Text>
        <Text style={styles.headerTitle}>Saved Colleges</Text>
      </View>

      {/* List */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 16 }}
        ListEmptyComponent={
          <Text style={styles.empty}>No saved colleges yet</Text>
        }
      />
    </View>
  );
};

export default SavedCollegesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FB",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    elevation: 3,
  },

  back: {
    fontSize: 20,
    marginRight: 12,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    marginBottom: 16,
    overflow: "hidden",
    elevation: 3,
  },

  image: {
    width: "100%",
    height: 150,
  },

  cardContent: {
    padding: 12,
  },

  title: {
    fontSize: 16,
    fontWeight: "700",
  },

  subtitle: {
    color: "#666",
    marginTop: 4,
  },

  package: {
    marginTop: 6,
    color: "#333",
  },

  empty: {
    textAlign: "center",
    marginTop: 40,
    color: "#888",
  },
});
