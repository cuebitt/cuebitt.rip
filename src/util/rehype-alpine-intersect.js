import { visit } from "unist-util-visit";

export default function rehypeAddDataIntersect() {
  return (tree) => {
    visit(tree, "element", (node) => {
      // Check if the element is a <section> with class "heading"
      if (
        node.tagName === "section" &&
        node.properties &&
        node.properties.className &&
        node.properties.className.includes("heading")
      ) {
        // Set data-intersect to aria-labelledby if aria-labelledby exists
        const ariaLabelledby = node.properties.ariaLabelledby;
        if (ariaLabelledby) {
          node.properties["x-intersect:enter"] =
            `addSection('${ariaLabelledby}');`;
          node.properties["x-intersect:leave"] =
            `removeSection('${ariaLabelledby}');`;
        }
      }
    });
  };
}
