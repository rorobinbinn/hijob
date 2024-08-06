import './reset.css';
import './root.css';

import { createRoot } from 'react-dom/client';
import Routes from './Routes';

const root = createRoot(document.getElementById('root'));
root.render(<Routes />);
