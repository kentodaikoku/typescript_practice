export const PracticeA = () => {
  const calcFunc = (num: number): void => {
    const total = num * 1.1;
    console.log(total);
  };

  const onClickPracticeA = () => calcFunc(1000);

  return (
    <div>
      <p>test</p>
      <button onClick={onClickPracticeA}>関数実行</button>
    </div>
  )
}