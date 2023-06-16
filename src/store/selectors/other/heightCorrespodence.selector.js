export const correspodenceHeightSelector = state => {
  if (
    !state.heightComponents ||
    !state.heightComponents.accordion ||
    !state.heightComponents.chat ||
    !state.heightComponents.input
  )
    return 0;
  const heightChat = state.heightComponents.chat;
  const heightAccordion = state.heightComponents.accordion;
  const heightInput = state.heightComponents.input;
  const heightCorrespodence =
    heightChat - heightAccordion - heightInput - 10 - 16;
  return heightCorrespodence;
};
