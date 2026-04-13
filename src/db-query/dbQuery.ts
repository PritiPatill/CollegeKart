import { collection, query, where, getDocs } from "firebase/firestore";
import { db, firebaseConfig } from "../../firebaseConfig";
import { algoliasearch } from "algoliasearch";

const client = algoliasearch("KDFP8BVVBC", "8a8dea54487b1927ca0b0dd65ad49f99");

export const searchColleges = async (keyword) => {
  if (!keyword) return [];

  try {
    const res = await client.search({
      requests: [
        {
          indexName: "colleges_1000_general_rankingNEW(1)",
          query: keyword,
        },
      ],
    });

    return res.results[0].hits; // 👈 important
  } catch (error) {
    console.log("Algolia Error:", error);
    return [];
  }
};

export const searchColleges1 = async (keyword) => {
  const snapshot = await getDocs(collection(db, "colleges"));

  const results = snapshot.docs
    .map((doc) => ({ id: doc.id, ...doc.data() }))
    .filter(
      (item) =>
        item?.courses &&
        item?.courses.toUpperCase().includes(keyword.toUpperCase()),
    );

  return results;
};

const getRankingValue = (ranking) => {
  if (typeof ranking !== "string") return 9999;

  const match = ranking.match(/\d+/);
  return match ? parseInt(match[0]) : 9999;
};

export const getTopColleges = async () => {
  const snapshot = await getDocs(collection(db, "colleges"));

  const results = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  // Sort based on extracted ranking
  const sorted = results.sort(
    (a, b) => getRankingValue(a?.ranking) - getRankingValue(b?.ranking),
  );
  return sorted.slice(0, 10); // top 10
};
