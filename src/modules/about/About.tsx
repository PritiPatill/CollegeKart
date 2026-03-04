import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const AboutScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.appName}>CollegeKart</Text>
        <Text style={styles.tagline}>
          Your One-Stop Platform for College Discovery & Guidance
        </Text>
      </View>

      {/* About Section */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>About CollegeKart</Text>
        <Text style={styles.description}>
          CollegeKart helps students explore, compare, and choose the best
          colleges based on courses, fees, placements, and rankings. Our goal is
          to simplify the admission journey with accurate and reliable
          information.
        </Text>
      </View>

      {/* Features Section */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Key Features</Text>
        <Feature icon="search" text="Search Colleges Easily" />
        <Feature icon="compare-arrows" text="Compare Colleges" />
        <Feature icon="favorite" text="Save Favorite Colleges" />
        <Feature icon="school" text="Admission Guidance" />
      </View>

      {/* Contact Section */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Contact Us</Text>

        <TouchableOpacity
          style={styles.row}
          onPress={() => Linking.openURL("mailto:support@collegekart.com")}
        >
          <Icon name="email" size={22} color="#3F51B5" />
          <Text style={styles.rowText}>support@collegekart.com</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.row}
          onPress={() => Linking.openURL("tel:+919876543210")}
        >
          <Icon name="phone" size={22} color="#3F51B5" />
          <Text style={styles.rowText}>+91 98765 43210</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <Text style={styles.version}>Version 1.0.0</Text>
      <Text style={styles.footer}>
        © 2026 CollegeKart. All rights reserved.
      </Text>
    </ScrollView>
  );
};

const Feature = ({ icon, text }) => (
  <View style={styles.featureRow}>
    <Icon name={icon} size={20} color="#3F51B5" />
    <Text style={styles.featureText}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#F4F6FA",
  },
  header: {
    marginBottom: 25,
  },
  appName: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1A237E",
  },
  tagline: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },
  card: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 14,
    marginBottom: 20,
    elevation: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
    color: "#1A237E",
  },
  description: {
    fontSize: 14,
    color: "#444",
    lineHeight: 20,
  },
  featureRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  featureText: {
    marginLeft: 12,
    fontSize: 15,
    color: "#333",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  rowText: {
    marginLeft: 12,
    fontSize: 15,
    color: "#333",
  },
  version: {
    textAlign: "center",
    marginTop: 10,
    color: "#777",
  },
  footer: {
    textAlign: "center",
    color: "#999",
    marginBottom: 40,
  },
});

export default AboutScreen;
