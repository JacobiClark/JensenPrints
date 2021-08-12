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
      name: "gallery",
      title: "Images gallery",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
};
