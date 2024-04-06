import { getDatabase, ref, get, child } from "firebase/database";
import app from "./Auth";

const db = getDatabase(app);

interface FirebaseTableData {
  [key: string]: any;
}

export const getFirebaseTableData = async (
  tableName: string
): Promise<FirebaseTableData> => {
  try {
    const snapshot = await get(child(ref(db), tableName));
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    } else {
      console.log(`No data available in the ${tableName} table.`);
      return {};
    }
  } catch (error) {
    console.error(`Error retrieving data from the ${tableName} table: `, error);
    throw error;
  }
};
