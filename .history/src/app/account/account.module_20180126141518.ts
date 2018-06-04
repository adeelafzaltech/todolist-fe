import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { TimepickerModule } from 'ngx-bootstrap';

@NgModule({
    declarations: [
        
    ],
    imports: [
        
    ],
    providers: [
        FranchiseService,
        OauthClientService,
        SettingService,
        BranchService,
        DashboardModuleService,
        AdminUsersService
    ]
})
export class FranchiseModule {}
