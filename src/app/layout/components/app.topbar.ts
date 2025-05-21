import { Component, computed, ElementRef, inject, model, signal, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { AppBreadcrumb } from './app.breadcrumb';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { RippleModule } from 'primeng/ripple';
import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { AvatarModule } from 'primeng/avatar';
import { LayoutService } from '../service/layout.service';

interface NotificationsBars {
    id: string;
    label: string;
    badge?: string | any;
}

@Component({
    selector: '[app-topbar]',
    standalone: true,
    imports: [RouterModule, CommonModule, StyleClassModule, AppBreadcrumb, InputTextModule, ButtonModule, IconFieldModule, InputIconModule, RippleModule, BadgeModule, OverlayBadgeModule, AvatarModule],
    template: `<div class="layout-topbar">
        <div class="topbar-left">
             <a tabindex="0" #menubutton type="button" class="menu-button" (click)="onMenuButtonClick()">
                <i class="pi pi-chevron-left text-white"></i>
            </a>
            <span class="topbar-separator"></span>
            <a class="logo" [routerLink]="['/']">
                 <img src="assets/images/logo_white.png" class="w-60"/>
            </a>
           
            <!-- <img class="horizontal-logo" src="assets/images/logo-intelli.png" alt="diamond-layout" /> -->
            <div app-breadcrumb></div>
            <!-- <img class="mobile-logo" src="/layout/images/logo-{{ isDarkTheme() ? 'white' : 'dark' }}.svg" alt="diamond-layout" /> -->
        </div>

        <div class="topbar-right">
            <ul class="topbar-menu">
                <li class="right-sidebar-item">
                    <a class="right-sidebar-button" (click)="toggleSearchBar()">
                        <i class="pi pi-search text-white"></i>
                    </a>
                </li>
                <!-- <li class="right-sidebar-item">
                    <button class="app-config-button" (click)="onConfigButtonClick()"><i class="pi pi-cog"></i></button>
                </li> -->
                 <li class="right-sidebar-item">  
                   <a class="right-sidebar-button relative z-50" pStyleClass="@next" enterFromClass="hidden" enterActiveClass="animate-scalein" leaveActiveClass="animate-fadeout" leaveToClass="hidden" [hideOnOutsideClick]="true">
                        <span class="w-3 h-3 rounded-full border-2 border-white absolute top-1.5 right-2 " style="background-color:#24c644;"></span>
                         <i class="pi pi-clock text-white"></i>
                    </a>
                </li>
                <li class="right-sidebar-item static sm:relative">
                    <a class="right-sidebar-button relative z-50" pStyleClass="@next" enterFromClass="hidden" enterActiveClass="animate-scalein" leaveActiveClass="animate-fadeout" leaveToClass="hidden" [hideOnOutsideClick]="true">
                        <span class="w-3 h-3 rounded-full border-2 border-white absolute top-1.5 right-2" style="background-color:#24c644;"></span>
                        <i class="pi pi-bell text-white"></i>
                    </a>
                    
                </li>     
                 <li class="right-sidebar-item">  
                    <a tabindex="0" class="right-sidebar-button" [routerLink]="['/']">
                       <i class="pi pi-sign-out text-white" ></i>
                    </a>
                </li>
            </ul>
        </div>
    </div>`
})
export class AppTopbar {
    layoutService = inject(LayoutService);

    isDarkTheme = computed(() => this.layoutService.isDarkTheme());

    @ViewChild('menubutton') menuButton!: ElementRef;

    notificationsBars = signal<NotificationsBars[]>([
        {
            id: 'inbox',
            label: 'Inbox',
            badge: '2'
        },
        {
            id: 'general',
            label: 'General'
        },
        {
            id: 'archived',
            label: 'Archived'
        }
    ]);

    notifications = signal<any[]>([
        {
            id: 'inbox',
            data: [
                {
                    image: '/demo/images/avatar/avatar-square-m-2.jpg',
                    name: 'Michael Lee',
                    description: 'You have a new message from the support team regarding your recent inquiry.',
                    time: '1 hour ago',
                    new: true
                },
                {
                    image: '/demo/images/avatar/avatar-square-f-1.jpg',
                    name: 'Alice Johnson',
                    description: 'Your report has been successfully submitted and is under review.',
                    time: '10 minutes ago',
                    new: true
                },
                {
                    image: '/demo/images/avatar/avatar-square-f-2.jpg',
                    name: 'Emily Davis',
                    description: 'The project deadline has been updated to September 30th. Please check the details.',
                    time: 'Yesterday at 4:35 PM',
                    new: false
                }
            ]
        },
        {
            id: 'general',
            data: [
                {
                    image: '/demo/images/avatar/avatar-square-f-1.jpg',
                    name: 'Alice Johnson',
                    description: 'Reminder: Your subscription is about to expire in 3 days. Renew now to avoid interruption.',
                    time: '30 minutes ago',
                    new: true
                },
                {
                    image: '/demo/images/avatar/avatar-square-m-2.jpg',
                    name: 'Michael Lee',
                    description: 'The server maintenance has been completed successfully. No further downtime is expected.',
                    time: 'Yesterday at 2:15 PM',
                    new: false
                }
            ]
        },
        {
            id: 'archived',
            data: [
                {
                    image: '/demo/images/avatar/avatar-square-m-1.jpg',
                    name: 'Lucas Brown',
                    description: 'Your appointment with Dr. Anderson has been confirmed for October 12th at 10:00 AM.',
                    time: '1 week ago',
                    new: true
                },
                {
                    image: '/demo/images/avatar/avatar-square-f-2.jpg',
                    name: 'Emily Davis',
                    description: 'The document you uploaded has been successfully archived for future reference.',
                    time: '2 weeks ago',
                    new: false
                }
            ]
        }
    ]);

    selectedNotificationBar = model(this.notificationsBars()[0].id ?? 'inbox');

    selectedNotificationsBarData = computed(() => this.notifications().find((f) => f.id === this.selectedNotificationBar()).data);

    onMenuButtonClick() {
        this.layoutService.onMenuToggle();
    }

    showRightMenu() {
        this.layoutService.toggleRightMenu();
    }

    onConfigButtonClick() {
        this.layoutService.showConfigSidebar();
    }

    toggleSearchBar() {
        this.layoutService.layoutState.update((value) => ({ ...value, searchBarActive: !value.searchBarActive }));
    }
}
