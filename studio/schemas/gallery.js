/* eslint-disable import/no-anonymous-default-export */
/*export default {
  name: "gallery",
  title: "Images gallery",
  type: "array",
  of: [{ type: "image" }],
};*/ export default {
  name: "imageGallery",
  title: "Image Gallery",
  type: "document",
  fields: [
    {
      title: "Gallery Name",
      name: "galleryName",
      type: "string",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
};
