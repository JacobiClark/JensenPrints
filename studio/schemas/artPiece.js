/* eslint-disable import/no-anonymous-default-export */
export default {
  name: "artPiece",
  title: "Art Piece",
  type: "document",
  fields: [
    {
      name: "artType",
      title: "Art Type",
      type: "string",
      options: {
        list: ["Comic", "InkIllustration"],
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
  ],
};
