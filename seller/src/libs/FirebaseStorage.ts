import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../libs/Firebase";

export const uploadFirebase = async (files: any) => {
  const uploadedItems: any[] = [];

  const uploadPromises = files.map((file: any, i: number) => {
    return new Promise<string>((resolve, reject) => {
      const storageRef = ref(
        storage,
        `products/${file.name + Date() + i}`
      );
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          reject(error);
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            console.log("File available at", downloadURL);
            uploadedItems.push(downloadURL);
            resolve(downloadURL);
          } catch (error) {
            reject(error);
          }
        }
      );
    });
  });

  try {
    await Promise.all(uploadPromises);
    return uploadedItems;
  } catch (error) {
    console.error("Error uploading files:", error);
    return [];
  }
};
