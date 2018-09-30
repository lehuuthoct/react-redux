// base actions
export const request = type => ({
  type
});

export const receive = (type, payload) => ({
  type,
  payload
});

export const error = type => ({
  type
});
