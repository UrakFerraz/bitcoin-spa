import { type Ref, unref, onMounted, onUnmounted } from "vue";

export default function useInterval(
  handler: Function,
  time: number | Ref<number>
) {
  let intervalId: any;
  onMounted(() => {
    intervalId = setInterval(handler, unref(time));
  });
  onUnmounted(() => clearInterval(intervalId));
}
