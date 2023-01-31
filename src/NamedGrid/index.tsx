import style from './NamedGrid.module.scss';

const NamedGrid = () => {
  return (
    <div className={style.NamedGrid}>
      <div className={style.NamedGrid_header}>header</div>
      <div className={style.NamedGrid_content}>
        content
        <br />
        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod
        tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid
        ex ea commodi consequatur. Duis aute irure reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        obcaecat cupiditat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
      <div className={style.NamedGrid_footer}>footer</div>
    </div>
  );
};

export default NamedGrid;
