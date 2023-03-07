export const SWITCH_IMAGE = 'SWITCH_IMAGE';
export const switchImage = (bool: boolean) => ({
  type: SWITCH_IMAGE,
  payload: bool,
});
