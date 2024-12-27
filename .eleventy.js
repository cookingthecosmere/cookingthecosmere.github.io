export default async function(config) {
  config.addPassthroughCopy("CNAME");
  config.addPassthroughCopy("files");

  config.setServerPassthroughCopyBehavior("passthrough");

  return {
    dir: {
      input: "src",
      output: "docs",
    }
  }
};