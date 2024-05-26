const post = () => {
  return {
    id: '1',
    title: 'Title 1',
  };
};

const posts = () => {
  return [
    {
      id: '1',
      title: 'Title 1',
    },
    {
      id: '2',
      title: 'Title 2',
    },
    {
      id: '3',
      title: 'Title 3',
    },
  ];
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};
