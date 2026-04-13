import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "SAVED_COLLEGES";

// Get all saved colleges
export const getSavedColleges = async () => {
  const data = await AsyncStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
};

// Save college
export const saveCollege = async (college) => {
  const existing = await getSavedColleges();

  const alreadySaved = existing.find((item) => item.id === college.id);

  if (alreadySaved) return existing;

  const updated = [...existing, college];
  await AsyncStorage.setItem(KEY, JSON.stringify(updated));

  return updated;
};

// Remove college
export const removeCollege = async (collegeId) => {
  const existing = await getSavedColleges();

  const updated = existing.filter((item) => item.id !== collegeId);

  await AsyncStorage.setItem(KEY, JSON.stringify(updated));

  return updated;
};

// Check if saved
export const isCollegeSaved = async (collegeId) => {
  const existing = await getSavedColleges();
  return existing.some((item) => item.id === collegeId);
};
