import { htmlDateString, readableDate } from "./js/filters.js";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("css");

  eleventyConfig.addFilter("htmlDateString", htmlDateString);
  eleventyConfig.addFilter("readableDate", readableDate);

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
  };
};
