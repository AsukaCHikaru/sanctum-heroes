import { Route, Router } from '@solidjs/router';
import { HeroPage } from './pages/Hero';
import { ItemPage } from './pages/Item';
import { HomePage } from './pages/Home';

function App() {
  return (
    <Router>
      <Route path="/hero" component={HeroPage} />
      <Route path="/hero/:title" component={HeroPage} />
      <Route path="/item" component={ItemPage} />
      <Route path="/" component={HomePage} />
    </Router>
  );
}

export default App;
