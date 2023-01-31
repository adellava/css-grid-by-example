import { useState } from 'react';
import SimpleGrid from 'src/SimpleGrid';
import ExplicitGrid from 'src/ExplicitGrid';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

type GridLayoutType = 'simple' | 'explicit';

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
      <h1>Welcome css-grid-by-example</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="layout">Layout</label>
        <select name="layutType">
          <option value="simple">Simple</option>
          <option value="explicit">Explicit</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      <main>
        {layout === 'simple' && <SimpleGrid />}
        {layout === 'explicit' && <ExplicitGrid />}
      </main>
    </div>
  );
}

export default App;
