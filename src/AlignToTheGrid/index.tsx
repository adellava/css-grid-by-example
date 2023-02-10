import style from './AlignToTheGrid.module.scss';

const AlignToTheGrid = () => {
  return (
    <div className={style.AlignToTheGrid}>
      <div className={style.AlignToTheGrid_itemAlignedWithNumbers}>
        <h2>Aligned With Numbers</h2>
      </div>
      <div className={style.AlignToTheGrid_itemAlignedWithSpan}>
        <h2>Aligned With Span</h2>
      </div>
    </div>
  );
};

export default AlignToTheGrid;
