import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { FormNameComponent } from './form-name/form-name.component';
import { JoinComponent } from './join/join.component';
import { FleeComponent } from './flee/flee.component';
import { NetComponent } from './net/net.component';
import { TridentComponent } from './trident/trident.component';

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
        path: 'start/join',
        component: JoinComponent
    },
    {
        path: 'start/flee',
        component: FleeComponent
    },
    {
        path: 'start/join/net',
        component: NetComponent
    },
    {
        path: 'start/join/trident',
        component: TridentComponent
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);