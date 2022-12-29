// import { PAYMENT_STATUS } from "../shared/enums";
// import { db } from "./firebase";
// import {
//   doc,
//   getDoc,
//   collection,
//   where,
//   query,
//   getDocs,
//   updateDoc,
//   addDoc,
//   setDoc,
//   deleteDoc,
// } from "firebase/firestore";

// class DatabaseService {
//   collection;

//   // Specify 'authors', 'categories', or 'books' as collection name
//   constructor(collectionName) {
//     // this.collection = collection(db, collectionName);
//     this.collectionName = collectionName;
//   }

//   // getAll = async () => {
//   //   const snapshot = await this.collection.get();

//   //   return snapshot.docs.map((doc) => {
//   //     return {
//   //       id: doc.id, // append document id to each document
//   //       ...doc.data(),
//   //     };
//   //   });
//   // };

//   getAll = async () => {
//     const snapshot = await getDocs(collection(db, this.collectionName));

//     return snapshot.docs.map((doc) => {
//       return {
//         id: doc.id, // append document id to each document
//         ...doc.data(),
//       };
//     });
//   };

//   getAllById = async (id) => {
//     // const snapshot = await this.collection.doc(id).collection(id).get();
//     const snapshot = await getDocs(collection(db, this.collectionName, id, id));
//     return snapshot.docs.map((doc) => {
//       return {
//         id: doc.id, // append document id to each document
//         ...doc.data(),
//       };
//     });
//   };

//   getAllByIdWhere = async (id) => {
//     const q = await query(
//       collection(db, this.collectionName, id, id),
//       where("status", "!=", PAYMENT_STATUS.REJECTED)
//     );

//     const querySnapshot = await getDocs(q);

//     return querySnapshot.docs.map((doc) => {
//       return {
//         id: doc.id, // append document id to each document
//         ...doc.data(),
//       };
//     });
//   };

//   getAllByPrimaryAndSecondaryId = async (primaryId, secondaryId) => {
//     // const snapshot = await this.collection
//     //   .doc(primaryId)
//     //   .collection(secondaryId)
//     //   .get();

//     const snapshot = await getDocs(
//       collection(db, this.collectionName, primaryId, secondaryId)
//     );
//     return snapshot.docs.map((doc) => {
//       return {
//         id: doc.id, // append document id to each document
//         ...doc.data(),
//       };
//     });
//   };

//   getAllByPrimaryAndSecondaryAndTernaryAndFourthId = async (
//     primaryId,
//     secondaryId,
//     ternaryId,
//     fourthId
//   ) => {
//     const snapshot = await getDocs(
//       collection(
//         db,
//         this.collectionName,
//         primaryId,
//         secondaryId,
//         ternaryId,
//         fourthId
//       )
//     );
//     return snapshot.docs.map((doc) => {
//       return {
//         id: doc.id, // append document id to each document
//         ...doc.data(),
//       };
//     });
//   };

//   // returns a single document in object format
//   getOne = async (id) => {
//     if (!id) return; // entity form is in create mode
//     // const snapshot = await this.collection.doc(id).get();
//     const snapshot = await getDoc(doc(db, this.collectionName, id));
//     return snapshot.data();
//   };

//   // resolve a relation, returns the referenced document
//   getReference = async (documentReference) => {
//     const res = await documentReference.get();
//     const data = res.data();

//     if (data && documentReference.id) {
//       data.uid = documentReference.id;
//     }

//     return data;
//   };

//   // save a new document in the database
//   create = async (data) => {
//     // return await this.collection.add(data);
//     return await addDoc(this, this.collectionName, data)
//   };

//   // update an existing document with new data
//   update = async (id, values) => {
//     // return await this.collection.doc(id).update(values);
//     const ref = doc(db, this.collectionName, id);

//     return await updateDoc(ref, values);
//   };

//   // update an existing document with new data
//   updateWithCustomId = async (id, values) => {
//     // return await this.collection.doc(id).set(values);
//     return await setDoc(doc(db, this.collectionName, id), values)
//   };

//   // update an existing document with new data
//   updateWithCustomIdAndAdd = async (id, values) => {
//     // return await this.collection.doc(id).collection(id).add(values);
//     return await addDoc(collection(db, this.collectionName, id, id), values)
//   };
  
  
//   updateWithCustomIdsAndAdd = async (id, id2, values) => {
//     // return await this.collection.doc(id).collection(id).add(values);
//     return await addDoc(collection(db, this.collectionName, id, id2), values);
//   };

//   // update an existing document with new data
//   updateWithCustomIdsAndAddAnother = async (id, id2, id3, id4, values) => {
//     // return await this.collection.doc(id).collection(id).add(values);
//     return await addDoc(
//       collection(db, this.collectionName, id, id2, id3, id4),
//       values
//     );
//   };

//   // delete an existing document from the collection
//   removeOneDeepMainItem = async (id, id2, id3) => {
//     return await deleteDoc(doc(db, this.collectionName, id, id2, id3));
//   };

//   // delete an existing document from the collection
//   removeTwoDeepMainItem = async (id, id2, id3, id4, id5) => {
//     return await deleteDoc(doc(db, this.collectionName, id, id2, id3, id4, id5));
//   };
// }

// // Create services for each entity type
// export const UserService = new DatabaseService("users");
// export const ContactUsService = new DatabaseService("contactUs");
// export const PaymentService = new DatabaseService("payment");
// export const DownloadService = new DatabaseService("download");
// export const SupportService = new DatabaseService("support");
// export const UserAssignedDownloads = new DatabaseService(
//   "userAssignedDownloads"
// );
// export const BlogService = new DatabaseService("blogs");
