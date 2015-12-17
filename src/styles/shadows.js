export const raised = {
  shadowColor: "rgba(0,0,0,.40)",
  shadowOpacity: 0.8,
  shadowRadius: 1,
  shadowOffset: {
    height: 1,
    width: 0
  }
};

export const raisedButton = {
  ...raised,
  shadowRadius: 2,
  shadowOffset: {
    height: 3,
    width: 3
  }
}

export default {
  raised,
  raisedButton
};
