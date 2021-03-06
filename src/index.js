import dva from 'dva';
import createLoading from 'dva-loading';
import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
app.use(createLoading());

// 3. Model
app.model(require('./models/Login/modelLogin').default);
app.model(require('./models/Header/modelHeader').default);
app.model(require('./models/MainBody/Category/modelCategory').default);
app.model(require('./models/MainBody/Repository/modelRepository').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
