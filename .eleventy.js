export default async function(config) {
  config.addPassthroughCopy("src/CNAME");
  return {
    dir: {
      input: "src",
    }
  }
};