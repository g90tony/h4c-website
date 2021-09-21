const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: "hope-for-communities",
  api_key: "254282115189655",
  api_secret: "yRetPeAVtlKNfhzYoXRW7qGirCI",
  secure: true,
});

export const coudinary_get_all_images = () => {
  cloudinary.v2.search
    .expression("folder:h4c_website/*")
    .execute()
    .then(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.error(error);
      }
    );
};
