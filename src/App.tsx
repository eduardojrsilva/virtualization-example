import AppProvider from './providers';
import AppRoutes from './routes';

const App: React.FC = () => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
};

export default App;
