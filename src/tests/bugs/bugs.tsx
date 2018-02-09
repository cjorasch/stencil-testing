
function createElement() {
    const el = document.createElement('ion-alert-controller');
    console.log(el);
    (el as any).componentOnReady();
}

export const bugs = {
    content: <bugs-content />,

    createElement
};