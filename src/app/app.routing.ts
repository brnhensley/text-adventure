import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { FormNameComponent } from './form-name/form-name.component';
import { JoinComponent } from './join/join.component';
import { FleeComponent } from './flee/flee.component';

const appRoutes: Routes = [
    {
        path: '',
        component: FormNameComponent
    },
    {
        path: 'start',
        component: StartComponent
    },
    {
        path: 'join',
        component: JoinComponent
    },
    {
        path: 'flee',
        component: FleeComponent
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);