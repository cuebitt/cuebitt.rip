import type { Alpine } from "alpinejs";
import intersect from "@alpinejs/intersect";

export default (Alpine: Alpine) => {
  Alpine.plugin(intersect);

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
