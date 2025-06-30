// Import Firebase Core and Analytics
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// ✅ Import Firestore functions
import { collection, getFirestore, doc, getDoc, setDoc, updateDoc, increment, query , orderBy , limit, getDocs} from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB9vWOxNS124u3I5fp9Kfk776fEyo8ropE",
  authDomain: "react-movies-fb40d.firebaseapp.com",
  databaseURL: "https://react-movies-fb40d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-movies-fb40d",
  storageBucket: "react-movies-fb40d.firebasestorage.app",
  messagingSenderId: "511966028956",
  appId: "1:511966028956:web:811145667b8fd06d857959",
  measurementId: "G-BJ89JK1KBS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ Initialize Firestore
const db = getFirestore(app);

// ✅ Update Search Count Function
export const updateSearchCount = async (searchTerm, movie) => {
  try {
    const metricsRef = doc(db, "metrics", searchTerm.toLowerCase());

    const docSnap = await getDoc(metricsRef);

    if (docSnap.exists()) {
      // Increment count if document already exists
      await updateDoc(metricsRef, {
        count: increment(1),
      });
    } else {
      // Create new document with initial count
      await setDoc(metricsRef, {
        searchTerm,
        count: 1,
        poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}` || "",
        movie_id: movie.id || "",
      });
    }

    console.log(`Search count updated for: ${searchTerm}`);
  } catch (error) {
    console.error("Error updating search count:", error);
  }
};

export const getTrendingMovies = async () => {
  try {
    const q = query(
      collection(db, "metrics"),
      orderBy("count", "desc"),
      limit(5)
    );

    const querySnapshot = await getDocs(q);
    const trending = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return trending;
  } catch (error) {
    console.log("Failed to fetch trending movies:", error);
    return [];
  }
};