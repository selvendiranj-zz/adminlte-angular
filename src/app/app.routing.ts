export const routes = [
    { path: '', data: ['Dashboard'], loadChildren: './pages/dashboard/home1/home1.module#Home1Module' },

    { path: '**', redirectTo: '/' }
];
