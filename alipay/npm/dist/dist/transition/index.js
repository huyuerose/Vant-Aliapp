import { VantComponent } from "../common/component";
import { transition } from "../mixins/transition";
VantComponent({
  classes: ["enter-class", "enter-active-class", "enter-to-class", "leave-class", "leave-active-class", "leave-to-class"],
  props: {
    inited: {
      type: Boolean
    },
    display: {
      type: Boolean
    }
  },
  mixins: [transition(true)],
  methods: {
    dealTap() {
      this.$emit("tap");
      this.$emit("click");
    }

  }
});