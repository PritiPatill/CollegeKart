import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./CollegeCardStyle";
import { useNavigation } from "@react-navigation/native";

const CollegeCard = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.collegeCard}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
        }}
        style={styles.collegeImage}
      />

      <Text style={styles.collegeName}>ABC Institute of Technology</Text>
      <Text style={styles.collegeMeta}>Pune • Engineering</Text>

      <Text style={styles.collegePlacement}>🎓 Avg Placement: ₹6 LPA</Text>

      <Text style={styles.collegeFee}>💰 Fees: ₹1.2L / year</Text>

      <TouchableOpacity
        style={styles.viewBtn}
        onPress={() => navigation.navigate("CollegeDetail")}
      >
        <Text style={styles.viewBtnText}>View Details →</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CollegeCard;
