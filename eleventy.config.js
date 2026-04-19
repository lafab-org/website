import { htmlDateString, readableDate } from "./js/filters.js";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    extensions: "html",
    formats: ["webp", "auto"],
    widths: [400, 800, 1200, "auto"],
    defaultAttributes: {
      loading: "lazy",
      decoding: "async",
      sizes: "100vw",
    },
  });

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
