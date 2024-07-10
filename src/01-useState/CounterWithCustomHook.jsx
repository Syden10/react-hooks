import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <>
      <h1>Counter with hook: {counter}</h1>
      <hr />
      {/* I pass increment & decrement as arrow function because they take arguments, reset doesn't */}
      <button className='btn btn-primary' onClick={() => increment(2)}>
        +1
      </button>
      <button className='btn btn-secondary' onClick={reset}>
        Reset
      </button>
      <button className='btn btn-primary' onClick={() => decrement(2)}>
        -1
      </button>
    </>
  );
};