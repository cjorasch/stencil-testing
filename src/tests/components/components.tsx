// Generic display of any defined component
// Makes it easier to create some test components without needing to provide explicit test cases

// Get list of defined components that can be used for testing
const componentsData = (window as any).App.components;

const names: string[] = [];
for (let comp of componentsData) {
  const name = comp[0] as string;
  // Omit Ionic components and app framework
//   if (
//     !name.startsWith("ion-") &&
//     !name.startsWith("stencil-") &&
//     !name.startsWith("app-") &&
//     !name.startsWith("test-")
//   ) {
//     names.push(name);
//   }
names.push(name);
}

// Optional properties and children to use when rendering components
const componentProps = {
    'ion-button': {
        children: 'Button'
    }
}

export const components = {};

for (const Component of names) {
    const compProps = componentProps[Component] || {};
    const { children, ...props } = compProps;
    components[Component] = <Component {...props}>{children}</Component>;
}

