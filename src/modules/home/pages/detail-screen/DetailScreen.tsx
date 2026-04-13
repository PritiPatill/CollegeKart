import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import {
  getSavedColleges,
  saveCollege,
  removeCollege,
  isCollegeSaved,
} from "../../../../utils/storage";

const DetailScreen = ({ route, navigation }) => {
  const { data } = route.params;
  console.log("data : ", data);

  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const checkSaved = async () => {
      const result = await isCollegeSaved(data.id);
      setSaved(result);
    };

    checkSaved();
  }, []);

  const handleSave = async () => {
    if (saved) {
      await removeCollege(data.id);
      setSaved(false);
    } else {
      await saveCollege(data);
      setSaved(true);
    }
  };

  const match =
    typeof data?.ranking === "string" &&
    data?.ranking?.match(/(#\d+)\s+in\s+(.+)/);
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero Image */}
        <Image
          source={{
            uri: data?.imageUrl,
          }}
          style={styles.heroImage}
        />

        {/* Main Info */}
        <View style={styles.content}>
          <Text style={styles.title}>{data?.name}</Text>
          <Text style={styles.location}>
            {data?.city} • {data?.category}
          </Text>

          {/* Stats Row */}
          <View style={styles.statsRow}>
            <StatBox value={data?.averagePackage} label="Avg Placement" />
            <StatBox value={data?.category} label="Category" />
            {!!match?.length && (
              <StatBox value={match?.[1]} label={match?.[2]} />
            )}
          </View>

          {/* About Section */}
          <SectionTitle title="About College" />
          <Text style={styles.paragraph}>{data?.about}</Text>

          {/* Courses Section */}
          <SectionTitle title="Popular Courses" />
          {data?.coursesOffered?.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                const selectedCourse = data?.coursesInfo?.find(
                  (c) => c.name === item,
                );

                if (!selectedCourse) {
                  alert("Course details not available");
                  return;
                }

                navigation.navigate("CourseFacilityDetail", {
                  title: selectedCourse.name,
                  data: selectedCourse,
                  type: "course",
                });
              }}
            >
              <Bullet text={item} />
            </TouchableOpacity>
          ))}
          {/* {data?.coursesOffered?.map((item, index) => (
            
            <Bullet key={index} text={item} />
          ))} */}

          {/* Facilities */}
          <SectionTitle title="Facilities" />
          {/* {data?.facilities?.map((item, index) => (
            <Bullet key={index} text={item} />
          ))} */}

          {data?.facilities?.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                const selectedFacility = data?.facilitiesInfo?.find(
                  (f) => f.name === item,
                );

                if (!selectedFacility) {
                  alert("Facility details not available");
                  return;
                }

                navigation.navigate("CourseFacilityDetail", {
                  title: selectedFacility.name,
                  data: selectedFacility,
                  type: "facility",
                });
              }}
            >
              <Bullet text={item} />
            </TouchableOpacity>
          ))}

          <View style={{ height: 100 }} />
        </View>
      </ScrollView>

      {/* Bottom CTA */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveText}>{saved ? "★ Saved" : "☆ Save"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.applyButton}
          onPress={() => Linking.openURL(data?.website)}
        >
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
