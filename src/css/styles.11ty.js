import { readdirSync, readFileSync } from "fs";
import { join } from "path";

const CSS_ROOT = join(process.cwd(), "css");

export default class CSSBundle {
  data() {
    return {
      permalink: "/css/styles.css",
      eleventyExcludeFromCollections: true,
    };
  }

  render() {
    const folders = readdirSync(CSS_ROOT, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name)
      .sort();

    return folders
      .flatMap((folder) => {
        const folderPath = join(CSS_ROOT, folder);
        return readdirSync(folderPath)
          .filter((f) => f.endsWith(".css"))
          .sort()
          .map((file) => readFileSync(join(folderPath, file), "utf8"));
      })
      .join("\n");
  }
}
