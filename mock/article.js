module.exports = {
  url: "/article/[A-za-z0-9]/comments",
  type: "get",
  response: (req, res) => {
    return {
      code: 200,
      data: {
        status: "success",
        data: [1, 2, 3, 4]
      }
    };
  }
};
