import { useState } from 'react';
import SimpleGrid from 'src/SimpleGrid';
import ExplicitGrid from 'src/ExplicitGrid';
import MinMaxGrid from 'src/MinMaxGrid';
import RepeatGrid from 'src/RepeatGrid';
import NamedGrid from 'src/NamedGrid';
import AlignToTheGrid from 'src/AlignToTheGrid';
import AlignInTheGrid from 'src/AlignInTheGrid';
import styles from './app.module.scss';

type GridLayoutType =
  | 'simple'
  | 'explicit'
  | 'minmax'
  | 'repeat'
  | 'named'
  | 'align'
  | 'align-in-the-grid';

export function App() {
  const [layout, setLayout] = useState<GridLayoutType>('simple');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const form = new FormData(target);
    const data = Object.fromEntries(form.entries());
    setLayout(data.layutType as GridLayoutType);
  };
  return (
    <div className={styles.app}>
      <h1 className={styles.app_title}>Welcome css-grid-by-example</h1>
      <form className={styles.app_form} onSubmit={handleSubmit}>
        <label htmlFor="layout">Layout</label>
        <select name="layutType">
          <option value="simple">Simple</option>
          <option value="explicit">Explicit</option>
          <option value="minmax">Minmax</option>
          <option value="repeat">Repeat</option>
          <option value="named">Named</option>
          <option value="align">Align</option>
          <option value="align-in-the-grid">Align in the grid</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      <main className={styles.app_example}>
        {layout === 'simple' && <SimpleGrid />}
        {layout === 'explicit' && <ExplicitGrid />}
        {layout === 'minmax' && <MinMaxGrid />}
        {layout === 'repeat' && <RepeatGrid />}
        {layout === 'named' && <NamedGrid />}
        {layout === 'align' && <AlignToTheGrid />}
        {layout === 'align-in-the-grid' && <AlignInTheGrid />}
      </main>
    </div>
  );
}

export default App;
