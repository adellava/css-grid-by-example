import style from './SimpleGrid.module.scss';

const SimpleGrid = () => {
  return (
    <div className={style.SimpleGrid}>
      <div className={style.SimpleGrid_item}>
        1<h2>Simple Grid</h2>
        <h2>Simple Grid</h2>
        <h2>Simple Grid</h2>
        <h2>Simple Grid</h2>
        <h2>Simple Grid</h2>
      </div>
      <div className={style.SimpleGrid_item}>2</div>
      <div className={style.SimpleGrid_item}>3</div>
      <div className={style.SimpleGrid_item}>4</div>
      <div className={style.SimpleGrid_item}>5</div>
    </div>
  );
};

export default SimpleGrid;
