import { Logo, NavPanel, PageContainer } from '@/shared/ui';

const renderLogo = () => <Logo />;

const renderNavMenu = () => <div>Nav Menu</div>;

const renderSettings = () => <div>Settings</div>;

export const App = () => {
  return (
    <PageContainer>
      <NavPanel
        renderLogo={renderLogo}
        renderNavMenu={renderNavMenu}
        renderSettings={renderSettings}
      />
    </PageContainer>
  );
};

export default App;
