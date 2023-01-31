import style from './ExplicitGrid.module.scss';

const ExplicitGrid = () => {
  return (
    <div className={style.ExplicitGrid}>
      <div className={style.ExplicitGrid_item}>1</div>
      <div className={style.ExplicitGrid_item}>2</div>
      <div className={style.ExplicitGrid_item}>3</div>
      <div className={style.ExplicitGrid_item}>4</div>
      <div className={style.ExplicitGrid_item}>5</div>
      <div className={style.ExplicitGrid_item}>6</div>
      <div className={style.ExplicitGrid_item}>7</div>
      <div className={style.ExplicitGrid_item}>8</div>
      <div className={style.ExplicitGrid_item}>9</div>
      <div className={style.ExplicitGrid_item}>10</div>
      <div className={style.ExplicitGrid_item}>11</div>
      <div className={style.ExplicitGrid_item}>12</div>
      <div className={style.ExplicitGrid_item}>13</div>
      <div className={style.ExplicitGrid_item}>
        14
        <h2>Explicit Grid</h2>
        <h2>Explicit Grid</h2>
        <h2>Explicit Grid</h2>
        <h2>Explicit Grid</h2>
        <h2>Explicit Grid</h2>
        1fr = ((width of grid) - (3rem) - (80% of width of grid)) / 3
      </div>
      <div className={style.ExplicitGrid_item}>15</div>
      <div className={style.ExplicitGrid_item}>16</div>
      <div className={style.ExplicitGrid_item}>17</div>
      <div className={style.ExplicitGrid_item}>18</div>
      <div className={style.ExplicitGrid_item}>19</div>
      <div className={style.ExplicitGrid_item}>20</div>
    </div>
  );
};

export default ExplicitGrid;
