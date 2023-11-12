const CommentsData = [
  {
    name: "Bontha Chakri",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    replies: [
      {
        name: "srikanth",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
        replies: [
          {
            name: "nestedUser",
            text: "Nested comment text here",
          },
        ],
      },
      {
        name: "Bontha srikanth",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
      },
    ],
  },
  {
    name: "Bontha Chakri",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
  },
  {
    name: "Bontha Chakri",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    replies: [
      {
        name: "nestedUser2",
        text: "Another nested comment text here",
      },
    ],
  },
  {
    name: "Bontha Chakri",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
  },
  {
    name: "Bontha Chakri",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    replies: [
      {
        name: "nestedUser3",
        text: "Yet another nested comment text here",
      },
      {
        name: "nestedUser4",
        text: "And one more nested comment text",
      },
    ],
  },
];
export default CommentsData;