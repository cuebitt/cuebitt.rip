import type { Alpine } from "alpinejs";
import intersect from "@alpinejs/intersect";
// @ts-ignore
import resize from "@alpinejs/resize";

export default (Alpine: Alpine) => {
  Alpine.plugin(intersect);
  Alpine.plugin(resize);

  Alpine.data("tocIntersect", () => ({
    headings: new Set(),
    addSection(id: string) {
      this.headings.add(id);
      setTimeout(() => {
        this.update();
      }, 100);
    },
    removeSection(id: string) {
      this.headings.delete(id);
      setTimeout(() => {
        this.update();
      }, 100);
    },
    update: () => undefined,
  }));
};
