const paginate = (followers) => {
  const itemPerPage = 10;
  const numberOfPages = followers.length / 10;

  const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemPerPage;
    return followers.slice(start, start + itemPerPage);
  });

  return newFollowers;
};

export default paginate;
