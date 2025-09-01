import { Route, Router } from '@solidjs/router';
import { HeroPage } from './pages/Hero';
import { ItemPage } from './pages/Item';
import { HomePage } from './pages/Home';

function App() {
  return (
    <div class="">
      <Router>
        <Route path="/hero" component={HeroPage} />
        <Route path="/item" component={ItemPage} />
        <Route path="/" component={HomePage} />
      </Router>
    </div>
  );
}

export default App;
