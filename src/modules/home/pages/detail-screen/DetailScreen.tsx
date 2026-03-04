import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const DetailScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero Image */}
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1562774053-701939374585",
          }}
          style={styles.heroImage}
        />

        {/* Main Info */}
        <View style={styles.content}>
          <Text style={styles.title}>ABC Institute of Technology</Text>
          <Text style={styles.location}>Pune • Engineering</Text>

          {/* Stats Row */}
          <View style={styles.statsRow}>
            <StatBox value="₹6 LPA" label="Avg Placement" />
            <StatBox value="₹1.2L" label="Fees / Year" />
            <StatBox value="#12" label="Rank in Pune" />
          </View>

          {/* About Section */}
          <SectionTitle title="About College" />
          <Text style={styles.paragraph}>
            ABC Institute of Technology is one of the top engineering colleges
            in Pune offering undergraduate and postgraduate programs. The
            institute has strong industry connections and excellent placement
            records.
          </Text>

          {/* Courses Section */}
          <SectionTitle title="Popular Courses" />
          <Bullet text="B.Tech Computer Science" />
          <Bullet text="B.Tech Mechanical Engineering" />
          <Bullet text="M.Tech Data Science" />

          {/* Facilities */}
          <SectionTitle title="Facilities" />
          <Bullet text="Modern Labs" />
          <Bullet text="Hostel & Mess" />
          <Bullet text="Sports Complex" />
          <Bullet text="Library & Digital Resources" />

          <View style={{ height: 100 }} />
        </View>
      </ScrollView>

      {/* Bottom CTA */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveText}>☆ Save</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyText}>Apply Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const StatBox = ({ value, label }) => {
  return (
    <View style={styles.statBox}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
};

const SectionTitle = ({ title }) => {
  return <Text style={styles.sectionTitle}>{title}</Text>;
};

const Bullet = ({ text }) => {
  return (
    <View style={styles.bulletRow}>
      <Text style={styles.bullet}>•</Text>
      <Text style={styles.bulletText}>{text}</Text>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FB",
  },
  heroImage: {
    width: "100%",
    height: 220,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
  },
  location: {
    color: "#666",
    marginTop: 4,
    marginBottom: 16,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  statBox: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
    width: "30%",
    elevation: 2,
  },
  statValue: {
    fontWeight: "700",
    fontSize: 16,
  },
  statLabel: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 8,
    marginTop: 16,
  },
  paragraph: {
    color: "#555",
    lineHeight: 20,
  },
  bulletRow: {
    flexDirection: "row",
    marginBottom: 6,
  },
  bullet: {
    marginRight: 8,
  },
  bulletText: {
    color: "#555",
  },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 12,
    elevation: 10,
  },
  saveButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#1E2A5A",
    borderRadius: 10,
    padding: 14,
    alignItems: "center",
    marginRight: 8,
  },
  saveText: {
    color: "#1E2A5A",
    fontWeight: "600",
  },
  applyButton: {
    flex: 2,
    backgroundColor: "#1E2A5A",
    borderRadius: 10,
    padding: 14,
    alignItems: "center",
  },
  applyText: {
    color: "#fff",
    fontWeight: "600",
  },
});
