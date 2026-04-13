import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
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
import { searchColleges } from "../../db-query/dbQuery";

const SearchScreen = ({ route }) => {
  const { course } = route?.params ?? "";
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    handleSearch(course);
  }, [course]);

  const handleSearch = async (text) => {
    setQuery(text);

    if (text.length > 1) {
      const data = await searchColleges(text);
      setResults(data);
    } else {
      setResults([]);
    }
  };
  console.log("result : ", results);
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
          onChangeText={handleSearch}
        />
      </View>

      {/* Filter Chips */}
      <View style={styles.filters}>
        {["Engineering", "MBA", "Medical"].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.chip}
            onPress={() => handleSearch(item)}
          >
            <Text style={styles.chipText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Result Count */}
      <Text style={styles.resultText}>{results?.length} Results Found</Text>

      {/* Results */}
      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("CollegeDetail", { data: item })}
          >
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.sub}>
                {item.city} • {item.category}
              </Text>
              <Text style={styles.info}>
                🎓 Avg Placement: ₹{item.averagePackage}
              </Text>
              {/* <Text style={styles.info}>💰 Fees: ₹{item.fees}</Text> */}
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
