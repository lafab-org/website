import { readdirSync, readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default class CSSBundle {
  data() {
    return {
      permalink: "/css/styles.css",
      eleventyExcludeFromCollections: true,
    };
  }

  render() {
    const folders = readdirSync(__dirname, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name)
      .sort();

    return folders
      .flatMap((folder) => {
        const folderPath = join(__dirname, folder);
        return readdirSync(folderPath)
          .filter((f) => f.endsWith(".css"))
          .sort()
          .map((file) => readFileSync(join(folderPath, file), "utf8"));
      })
      .join("\n");
  }
}
