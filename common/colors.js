const light = {
  app: "#dfdfdf",
  main: "#ebebeb",
  navbarBg: "#ebebeb",
  navbarBorder: "#d2d2d2",
  navText: "#5f5f5f",
  highlight: "#007ced",
  profileBg: "#dbdbdb",
  profileBorder: "#bcbcbc",
  profileText: "#5f5f5f",
  expText: "#5f5f5f",
  expDescription: "#9c9c9c",
  pageTitle: "#5f5f5f",
  colDivider: "#d2d2d2",
  skillText: "#5f5f5f",
  blogTitle: "#5f5f5f",
  blogDivider: "#bcbcbc",
};

const dark = {
  app: "#090909",
  main: "#000000",
  navbarBg: "#000000",
  navbarBorder: "#2c2c2c",
  navText: "#f5f5f5",
  highlight: "#007ced",
  profileBg: "#302f2f",
  profileBorder: "#494848",
  profileText: "#f5f5f5",
  expText: "#f5f5f5",
  expDescription: "#bcbcbc",
  pageTitle: "#f5f5f5",
  colDivider: "#2c2c2c",
  skillText: "#f5f5f5",
  blogTitle: "#f5f5f5",
  blogDivider: "#494848",
};

const getColors = (darkMode) => (darkMode ? dark : light);

export { getColors };
