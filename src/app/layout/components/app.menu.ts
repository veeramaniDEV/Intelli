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
                    label: 'Submissions',
                    icon: 'pi pi-fw pi-building-columns',
                    routerLink: ['/submissions']
                },
                {
                    label: 'Commision',
                    icon: 'pi pi-fw pi-gauge',
                    routerLink: ['/dashboard-marketing']
                },
                {
                    label: 'Reports',
                    icon: 'pi pi-fw pi-comment',
                    items: [
                        {
                            label: 'Piplline Summary Report',
                            icon: 'pi pi-fw pi-image',
                            routerLink: ['/apps/blog/list']
                        }
                    ]
                },
                {
                    label: 'Settings',
                    icon: 'pi pi-fw pi-align-left',
                    items: [
                        {
                            label: 'User Details',
                            icon: 'pi pi-fw pi-align-left',
                            items: [
                                {
                                    label: 'Add / View Details',
                                    icon: 'pi pi-fw pi-align-left'
                                },
                                {
                                    label: 'Role Types',
                                    icon: 'pi pi-fw pi-align-left'
                                }
                            ]
                        },
                        {
                            label: 'SUTA',
                            icon: 'pi pi-fw pi-align-left',
                            items: [
                                {
                                    label: 'SUTA Wagebase',
                                    icon: 'pi pi-fw pi-align-left'
                                },
                                {
                                    label: 'SUTA Rates',
                                    icon: 'pi pi-fw pi-align-left'
                                },
                                {
                                    label: 'SUTA Company',
                                    icon: 'pi pi-fw pi-align-left'
                                }
                            ]
                        },
                        {
                            label: 'FICA and FUTA',
                            icon: 'pi pi-fw pi-align-left',
                            items: [
                                {
                                    label: 'FICA and FUTA Master',
                                    icon: 'pi pi-fw pi-align-left'
                                },
                                {
                                    label: 'FUTA Rate',
                                    icon: 'pi pi-fw pi-align-left'
                                },
                                {
                                    label: 'FICA Limit',
                                    icon: 'pi pi-fw pi-align-left'
                                },
                                {
                                    label: 'FUTA Limit',
                                    icon: 'pi pi-fw pi-align-left'
                                }
                            ]
                        },
                        {
                            label: 'WC',
                            icon: 'pi pi-fw pi-align-left',
                            items: [
                                {
                                    label: 'WC Taxes By State',
                                    icon: 'pi pi-fw pi-align-left'
                                },
                                {
                                    label: 'WC Carrier',
                                    icon: 'pi pi-fw pi-align-left'
                                },
                                {
                                    label: 'WC Rates',
                                    icon: 'pi pi-fw pi-align-left'
                                },
                                {
                                    label: 'WC Description',
                                    icon: 'pi pi-fw pi-align-left'
                                },
                                {
                                    label: 'WC Agency',
                                    icon: 'pi pi-fw pi-align-left'
                                }
                            ]
                        },
                        {
                            label: 'Admin Fee',
                            icon: 'pi pi-fw pi-align-left',
                            items: [
                                {
                                    label: 'Admin Fee Master',
                                    icon: 'pi pi-fw pi-align-left'
                                },
                                {
                                    label: 'Admin Fee Tier Master',
                                    icon: 'pi pi-fw pi-align-left'
                                },
                            ]
                        },
                        {
                            label: 'Check List',
                            icon: 'pi pi-fw pi-align-left',
                            items: [
                                {
                                    label: 'Add / View CheckList',
                                    icon: 'pi pi-fw pi-align-left'
                                },
                                {
                                    label: 'Add General Info',
                                    icon: 'pi pi-fw pi-align-left'
                                }
                            ]
                        },
                        {
                            label: 'File',
                            icon: 'pi pi-fw pi-align-left',
                            items: [
                                {
                                    label: 'File Category',
                                    icon: 'pi pi-fw pi-align-left'
                                },
                                {
                                    label: 'File Type',
                                    icon: 'pi pi-fw pi-align-left'
                                }
                            ]
                        },
                        {
                            label: 'SIC and NAICS',
                            icon: 'pi pi-fw pi-align-left',
                            items: [
                                {
                                    label: 'SIC Code',
                                    icon: 'pi pi-fw pi-align-left'
                                },
                                {
                                    label: 'NAICS Code',
                                    icon: 'pi pi-fw pi-align-left'
                                }
                            ]
                        },
                        {
                            label: 'Others',
                            icon: 'pi pi-fw pi-align-left',
                            items: [
                                {
                                    label: 'Corporation Type',
                                    icon: 'pi pi-fw pi-align-left'
                                },
                                {
                                    label: 'Coverage',
                                    icon: 'pi pi-fw pi-align-left'
                                },
                                {
                                    label: 'EPLI',
                                    icon: 'pi pi-fw pi-align-left'
                                },
                                {
                                    label: 'Health Carrier',
                                    icon: 'pi pi-fw pi-align-left'
                                },
                                {
                                    label: 'Morbidity Factor',
                                    icon: 'pi pi-fw pi-align-left'
                                },
                                {
                                    label: 'Outsourcing Vendor',
                                    icon: 'pi pi-fw pi-align-left'
                                },
                                {
                                    label: 'POA Master',
                                    icon: 'pi pi-fw pi-align-left'
                                },
                                {
                                    label: 'Mail Settings',
                                    icon: 'pi pi-fw pi-align-left'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: 'Admin',
                    icon: 'pi pi-fw pi-comment',
                    items: [
                        {
                            label: ' Logout',
                            icon: 'pi pi-fw pi-image',
                            routerLink: ['/apps/blog/list']
                        }
                    ]
                },
            ]
        }


    ];
}
