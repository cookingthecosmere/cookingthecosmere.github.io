export default async function(config) {
  config.addPassthroughCopy("CNAME");
  config.addPassthroughCopy("assets");

  config.setServerPassthroughCopyBehavior("passthrough");

  return {
    dir: {
      input: "src",
      output: "_site",
    }
  }
};