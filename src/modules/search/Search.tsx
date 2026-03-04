import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const colleges = [
  {
    id: "1",
    name: "ABC Institute of Technology",
    location: "Pune",
    course: "Engineering",
    placement: "6 LPA",
    fees: "1.2L/year",
    image: "https://images.unsplash.com/photo-1562774053-701939374585",
  },
  {
    id: "2",
    name: "XYZ Business School",
    location: "Mumbai",
    course: "MBA",
    placement: "8 LPA",
    fees: "2.5L/year",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754",
  },
];

const SearchScreen = () => {
  const [query, setQuery] = useState("");

  const filtered = colleges.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase()),
  );

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Colleges</Text>

      {/* Search Bar */}
      <View style={styles.searchBox}>
        <Icon name="search" size={22} color="#888" />
        <TextInput
          placeholder="Search college, course, location..."
          style={styles.input}
          value={query}
          onChangeText={setQuery}
        />
      </View>

      {/* Filter Chips */}
      <View style={styles.filters}>
        {["Engineering", "MBA", "Medical"].map((item, index) => (
          <TouchableOpacity key={index} style={styles.chip}>
            <Text style={styles.chipText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Result Count */}
      <Text style={styles.resultText}>{filtered.length} Results Found</Text>

      {/* Results */}
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("CollegeDetail")}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.sub}>
                {item.location} • {item.course}
              </Text>
              <Text style={styles.info}>
                🎓 Avg Placement: ₹{item.placement}
              </Text>
              <Text style={styles.info}>💰 Fees: ₹{item.fees}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F4F6FA",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1A237E",
    marginBottom: 15,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 14,
    paddingHorizontal: 15,
    elevation: 4,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    height: 50,
  },
  filters: {
    flexDirection: "row",
    marginBottom: 15,
  },
  chip: {
    backgroundColor: "#E8EAF6",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },
  chipText: {
    color: "#3F51B5",
    fontWeight: "500",
  },
  resultText: {
    marginBottom: 10,
    color: "#555",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    marginBottom: 15,
    elevation: 4,
    overflow: "hidden",
  },
  image: {
    height: 140,
    width: "100%",
  },
  cardContent: {
    padding: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
  },
  sub: {
    color: "#777",
    marginVertical: 4,
  },
  info: {
    fontSize: 13,
    color: "#444",
  },
});
