import { ref } from "vue";
interface Coordinatas {
  x: number,
  y: number,
}


export const useMouseMotio = () => {

    const mousePositione = ref<Coordinatas>({ x: 0, y: 0 })

    const cumMouseMove = (e: MouseEvent) => {
  const target = e.currentTarget;
  if (!(target instanceof HTMLElement)) return;

  const rect = target.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  mousePositione.value = {
    x: (mouseX - centerX) * 0.1,
    y: (mouseY - centerY) * 0.1
  };
}

const cumMouseLeave = () => {
  mousePositione.value = { x: 0, y: 0 };
}
    return{
        mousePositione,
        cumMouseMove,
        cumMouseLeave
    }


}