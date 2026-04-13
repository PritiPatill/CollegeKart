import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import { styles } from "./HomeStyle";
import CollegeCard from "../../../../components/college-card/CollegeCard";
import { getTopColleges } from "../../../../db-query/dbQuery";
import AsyncStorage from "@react-native-async-storage/async-storage";

const categories = ["Diploma", "Degree", "MBA", "Engineering", "Medical"];

export default function Home({ navigation }) {
  const [menuVisible, setMenuVisible] = useState(false);
  const [topColleges, setTopColleges] = useState([]);
  const [recentColleges, setRecentColleges] = useState([]);

  useEffect(() => {
    fetchTopColleges();
  }, []);

  useEffect(() => {
    const loadRecent = async () => {
      try {
        const data = await AsyncStorage.getItem("recentColleges");
        if (data) {
          setRecentColleges(JSON.parse(data));
        }
      } catch (e) {
        console.log("Error loading recent:", e);
      }
    };

    loadRecent();
  }, []);

  const fetchTopColleges = async () => {
    const data = await getTopColleges();
    setTopColleges(data);
  };
  console.log("topColleges : ", topColleges);

  const handleViewDetails = async (college) => {
    try {
      const existing = await AsyncStorage.getItem("recentColleges");
      let parsed = existing ? JSON.parse(existing) : [];

      // remove duplicate
      parsed = parsed.filter((item) => item.id !== college.id);

      // add new at top (max 5)
      const updated = [college, ...parsed].slice(0, 5);

      await AsyncStorage.setItem("recentColleges", JSON.stringify(updated));

      navigation.navigate("CollegeDetail", { data: college });
    } catch (e) {
      console.log("Error saving recent:", e);
    }
  };

  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* HERO */}
        <View style={styles.hero}>
          {/* TOP ROW */}
          <View style={styles.heroHeader}>
            <Text style={styles.heroTitle}>🎓 CollegeKart</Text>

            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Text style={styles.menuIcon}>☰</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.heroSubtitle}>
            Find the right college for your future
          </Text>

          <TouchableOpacity
            style={styles.heroButton}
            onPress={() => navigation.navigate("Search")}
          >
            <Text style={styles.heroButtonText}>Search Colleges</Text>
          </TouchableOpacity>
        </View>

        {/* COURSE PICKS */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Explore by Course</Text>

          <View style={styles.chipWrapper}>
            {categories.map((item) => (
              <TouchableOpacity
                key={item}
                style={styles.chip}
                onPress={() => navigation.navigate("Search", { course: item })}
              >
                <Text style={styles.chipText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* FEATURED COLLEGES */}
        <View style={styles.sectionAlt}>
          <Text style={styles.sectionTitle}>Top Colleges</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {topColleges?.map((item) => (
              <CollegeCard
                key={item?.id}
                data={item}
                handleViewDetails={handleViewDetails}
              />
            ))}
          </ScrollView>
        </View>

        <View style={styles.sectionAlt}>
          <Text style={styles.sectionTitle}>Recently Viewed</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {recentColleges?.map((item) => (
              <CollegeCard key={item.id} data={item} />
            ))}
          </ScrollView>
        </View>
        {/* GUIDANCE */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Student Guidance</Text>

          <TouchableOpacity
            style={styles.guideCard}
            onPress={() =>
              navigation.navigate("GuidanceDetail", {
                title: "MBA vs PGDM",
              })
            }
          >
            <Text style={styles.guideTitle}>📘 MBA vs PGDM</Text>
            <Text style={styles.guideSubtitle}>
              Understand the difference before choosing
            </Text>
          </TouchableOpacity>
        </View>

        {/* BOTTOM CTA */}
        <View style={styles.bottomCard}>
          <Text style={styles.bottomTitle}>Still confused?</Text>
          <Text style={styles.bottomText}>
            Compare colleges by fees, location & placements
          </Text>

          <TouchableOpacity
            style={styles.bottomButton}
            onPress={() => navigation.navigate("Search")}
          >
            <Text style={styles.bottomButtonText}>Explore All Colleges →</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}
