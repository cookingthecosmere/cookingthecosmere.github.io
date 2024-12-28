export default async function(config) {
  config.setInputDirectory("src");
  config.setOutputDirectory("_site");
  config.setIncludesDirectory("_includes");

  config.addPassthroughCopy("CNAME");
  config.addPassthroughCopy("assets");

  config.setServerPassthroughCopyBehavior("passthrough");
};