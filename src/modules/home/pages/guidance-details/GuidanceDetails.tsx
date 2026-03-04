import React from "react";
import { ScrollView, Text } from "react-native";

const GuidanceDetails = ({ route }) => {
  const { title } = route.params;
  return (
    <ScrollView style={{ padding: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: "700" }}>{title}</Text>

      <Text style={{ marginTop: 12 }}>• MBA is university affiliated</Text>
      <Text>• PGDM is industry-oriented</Text>
      <Text>• MBA has standardized syllabus</Text>
      <Text>• PGDM offers flexible curriculum</Text>

      <Text style={{ marginTop: 16, fontWeight: "600" }}>
        👉 Choose based on placements & accreditation
      </Text>
    </ScrollView>
  );
};

export default GuidanceDetails;
