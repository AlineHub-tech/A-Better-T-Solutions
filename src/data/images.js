const images = import.meta.glob("../assets/*.{png,jpg,jpeg,}", {
  eager: true,
  as: "url",
});

export default images;