import { htmlDateString, readableDate } from "./js/filters.js";
import CSSBundle from "./js/styles.11ty.js";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import markdownItAttrs from "markdown-it-attrs";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addWatchTarget("css");
  eleventyConfig.addWatchTarget("src/_data");
  eleventyConfig.addTemplate("styles.11ty.js", CSSBundle);
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    extensions: "html",
    formats: ["webp", "auto"],
    widths: [400, 800, 1200, "auto"],
    svgShortCircuit: true,
    defaultAttributes: {
      loading: "lazy",
      decoding: "async",
      sizes: "100vw",
    },
  });

  // Mardown It
  let markdownItOptions = {
    html: true // you can include HTML tags
  }
  let markdownItAnchorOptions = {
    level: 2 // minimum level header -- anchors will only be applied to h2 level headers and below but not h1
  }
  eleventyConfig.setLibrary("md", markdownIt(markdownItOptions).use(markdownItAnchor, markdownItAnchorOptions).use(markdownItAttrs))

  // filters
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
