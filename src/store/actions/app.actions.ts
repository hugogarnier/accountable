export const SWITCH_IMAGE = 'SWITCH_IMAGE';
export const switchImage = (boolean: boolean) => ({
  type: SWITCH_IMAGE,
  payload: boolean,
});
