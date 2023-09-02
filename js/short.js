allCatagoriesData = async () => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/categories`
  );
  const data = await res.json();
  const views = data.data.others.views;
  console.log(views);
};
