module.exports = function(eleventyConfig) {
    return {
      dir: {
        input: ".",
        output: "_site",
        includes: "_includes"
      },
      pathPrefix: "/",
      htmlTemplateEngine: "html",
      markdownTemplateEngine: "html",
      templateFormats: ["md", "html"]
    };
  };
