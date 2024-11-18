import { navigationPaths } from "../constants/navigation";

const getNavigationOptions = () => {
  return Object.keys(navigationPaths).map((key) => {
    return {
      name: key,
      path: navigationPaths[key],
    };
  });
};

const navigationLinks = getNavigationOptions();

export { navigationLinks };
