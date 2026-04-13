import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const CourseFacilityDetails = ({ route }) => {
  const { title, data, type } = route.params;

  if (!data) {
    return (
      <View style={styles.center}>
        <Text>No Data Found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>{title}</Text>

      {/* Duration only for course */}
      {type === "course" && (
        <>
          <Text style={styles.label}>Duration</Text>
          <Text style={styles.value}>{data.duration}</Text>
        </>
      )}

      {/* Description */}
      <Text style={styles.label}>
        {type === "course" ? "Description" : "Details"}
      </Text>

      {data.description?.map((item, index) => (
        <Text key={index} style={styles.bullet}>
          • {item}
        </Text>
      ))}

      {/* Fees */}
      <Text style={styles.label}>Fees</Text>
      <Text style={styles.value}>{data.fees}</Text>

      {/* Extra */}
      <Text style={styles.label}>Extra Info</Text>
      <Text style={styles.value}>{data.extra}</Text>
    </ScrollView>
  );
};

export default CourseFacilityDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F8F9FB",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 16,
  },
  label: {
    fontWeight: "700",
    marginTop: 12,
  },
  value: {
    color: "#555",
    marginTop: 4,
  },
  bullet: {
    color: "#555",
    marginTop: 4,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
