const initialState = {
  input: "",
  comments: [
    {
      id: 33,
      childrens: [
        {
          id: 55,
          childrens: [],
          text: "hello ",
          parentId: 33,
          likes: 0
        },
        {
          id: 66,
          childrens: [
            {
              id: 77,
              childrens: [],
              text: "hello ",
              parentId: 66,
              likes: 0

            },
            {
              id: 88,
              childrens: [],
              text: "hello ",
              parentId: 66,
              likes: 0
            },
          ],
          text: "hello ",
          likes: 0
        },
      ],
      text: "hello world",
      parentId: null,
      likes: 0

    },
  ],
  currentId: 0,
};

export default initialState;