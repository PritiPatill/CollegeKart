import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },

  hero: {
    backgroundColor: "#4F46E5",
    padding: 24,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  heroTitle: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "700",
  },
  heroSubtitle: {
    color: "#E0E7FF",
    marginVertical: 8,
  },
  heroButton: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 14,
    marginTop: 14,
    alignItems: "center",
  },
  heroButtonText: {
    color: "#4F46E5",
    fontWeight: "600",
  },

  section: {
    padding: 16,
  },
  sectionAlt: {
    padding: 16,
    backgroundColor: "#EEF2FF",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
  },

  chipWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  chip: {
    backgroundColor: "#EEF2FF",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },
  chipText: {
    fontWeight: "500",
  },
  guideCard: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
  },

  bottomCard: {
    backgroundColor: "#4F46E5",
    margin: 16,
    padding: 20,
    borderRadius: 20,
  },
  bottomTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  bottomText: {
    color: "#E0E7FF",
    marginVertical: 8,
  },
  bottomButton: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 14,
    marginTop: 10,
    alignItems: "center",
  },
  bottomButtonText: {
    color: "#4F46E5",
    fontWeight: "600",
  },
  guideTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827", // dark gray / near black
  },

  guideSubtitle: {
    marginTop: 4,
    fontSize: 13,
    color: "#6B7280", // muted gray
    lineHeight: 18,
  },
  heroHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  menuIcon: {
    fontSize: 26,
    color: "#fff",
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    paddingTop: 80,
    paddingRight: 20,
  },

  menuBox: {
    width: 180,
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 10,
    elevation: 5,
  },

  menuItem: {
    padding: 15,
  },

  menuText: {
    fontSize: 16,
  },
});
