import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./CollegeCardStyle";
import { useNavigation } from "@react-navigation/native";

const CollegeCard = ({ data, handleViewDetails }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.collegeCard}>
      <Image
        source={{
          uri: data?.imageUrl,
        }}
        style={styles.collegeImage}
      />

      <Text style={styles.collegeName}>{data?.name}</Text>
      <Text style={styles.collegeMeta}>
        {data?.city} • {data?.category}
      </Text>

      <Text style={styles.collegePlacement}>
        🎓 Avg Placement: {data?.averagePackage}
      </Text>

      {/* <Text style={styles.collegeFee}>💰 Fees: ₹1.2L / year</Text> */}

      <TouchableOpacity
        style={styles.viewBtn}
        onPress={() => {
          handleViewDetails && handleViewDetails(data);
          navigation.navigate("CollegeDetail", { data: data });
        }}
      >
        <Text style={styles.viewBtnText}>View Details →</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CollegeCard;
