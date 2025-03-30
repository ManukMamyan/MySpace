import type { FC, JSX } from 'react';

type NavPanelProps = {
  renderLogo: () => JSX.Element;
  renderNavMenu: () => JSX.Element;
  renderSettings: () => JSX.Element;
};

export const NavPanel: FC<NavPanelProps> = ({
  renderLogo,
  renderNavMenu,
  renderSettings,
}) => {
  return (
    <nav className="flex justify-between">
      {renderLogo()}
      {renderNavMenu()}
      {renderSettings()}
    </nav>
  );
};
