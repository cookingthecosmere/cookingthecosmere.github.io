export default async function(config) {
  config.addPassthroughCopy("CNAME");
  return {
    dir: {
      input: "src",
      output: "docs",
    }
  }
};