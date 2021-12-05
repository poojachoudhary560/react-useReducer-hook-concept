export default function Stopwatch() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <>
    { state.time }s
    <button onClick={}>Start</button>
    <button onClick={}>Stop</button>
    <button onClick={}>Reset</button>
  </>;
}

function reducer(state, action) {
  switch(action.type) {
    case "start":
      return { ...state, }
  }
}
