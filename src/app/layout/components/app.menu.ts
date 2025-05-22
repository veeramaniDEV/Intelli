import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppMenuitem } from './app.menuitem';

@Component({
    selector: '[app-menu]',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `<ul class="layout-menu">
        <ng-container *ngFor="let item of model; let i = index">
            <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
            <li *ngIf="item.separator" class="menu-separator"></li>
        </ng-container>
    </ul> `
})
export class AppMenu {
    model: any[] = [
        {
            items: [
                {
                    label: 'Dashboard',
                    icon: 'pi pi-fw pi-warehouse',
                    routerLink: ['/dashboard']
                },
                {
                    label: 'Quote Management',
                    icon: 'pi pi-money-bill',
                    routerLink: ['/submissions']
                },
                {
                    label: 'Agency Management',
                    icon: 'pi pi-users',
                    routerLink: ['/dashboard-marketing']
                },
                {
                    label: 'Client Management',
                    icon: 'pi pi-user',
                    routerLink: ['/dashboard-marketing']
                },
                {
                    label: 'Claims Administration',
                    icon: 'pi pi-file-check',
                    routerLink: ['/dashboard-marketing']
                },
                {
                    label: 'Financial Analysis',
                    icon: 'pi pi-dollar',
                    routerLink: ['/dashboard-marketing']
                },
                {
                    label: 'Reports',
                    icon: 'pi pi-file',
                    routerLink: ['/dashboard-marketing']
                },
                {
                    label: 'Settings',
                    icon: 'pi pi-cog',
                    routerLink: ['/dashboard-marketing']
                }
            ]
        }


    ];
}
