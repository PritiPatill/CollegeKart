import React, { useState } from "react";
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

const categories = ["Diploma", "Degree", "MBA", "CA", "Engineering", "Medical"];

export default function Home({ navigation }) {
  const [menuVisible, setMenuVisible] = useState(false);
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
            <CollegeCard />
            <CollegeCard />
            <CollegeCard />
            <CollegeCard />
          </ScrollView>
        </View>

        <View style={styles.sectionAlt}>
          <Text style={styles.sectionTitle}>Recently Viewed</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <CollegeCard />
            <CollegeCard />
            <CollegeCard />
            <CollegeCard />
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
