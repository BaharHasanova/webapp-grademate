import { getDatabase, ref, push, set } from 'firebase/database';
import app from './Auth';

interface FirebaseActionProps {
  tableName: string;
  tableData: any;
}
const db = getDatabase(app);


export const updateFirebaseTable = async (props: FirebaseActionProps) => {
  const { tableName, tableData } = props;
  try {
    
    const newPostRef = set(ref(db, tableName), tableData);
    console.log(`Data added to the ${tableName} table successfully.`);
  } catch (error) {
    console.error(`Error adding data to the ${tableName} table: `, error);
    throw error;
  }
};