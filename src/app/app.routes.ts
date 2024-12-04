import { Routes } from '@angular/router';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { DashboardPageComponent } from './dashboard/dashboard-page/dashboard-page.component';
import { ProductosPageComponent } from './dashboard/features/productos/productos-page/productos-page.component';

export const routes: Routes = [
    {path: '', component: LoginPageComponent},
    {
        path:'dashboard', 
        component: DashboardPageComponent,
        children: [
            {
                path: 'productos',
                component: ProductosPageComponent,
            }
        ]
    }
];
