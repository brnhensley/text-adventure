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
        path: 'join',
        component: JoinComponent
    },
    {
        path: 'flee',
        component: FleeComponent
    },
    {
        path: 'net',
        component: NetComponent
    },
    {
        path: 'trident',
        component: TridentComponent
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);