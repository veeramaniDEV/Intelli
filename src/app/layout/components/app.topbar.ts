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
                <i class="pi pi-chevron-left"></i>
            </a>
            <img class="horizontal-logo" src="/layout/images/logo-white.svg" alt="diamond-layout" />
            <span class="topbar-separator"></span>
            <div app-breadcrumb></div>
            <img class="mobile-logo" src="/layout/images/logo-{{ isDarkTheme() ? 'white' : 'dark' }}.svg" alt="diamond-layout" />
        </div>

        <div class="topbar-right">
            <ul class="topbar-menu">
                <li class="right-sidebar-item">
                    <a class="right-sidebar-button" (click)="toggleSearchBar()">
                        <i class="pi pi-search"></i>
                    </a>
                </li>
                <!-- <li class="right-sidebar-item">
                    <button class="app-config-button" (click)="onConfigButtonClick()"><i class="pi pi-cog"></i></button>
                </li> -->
                 <li class="right-sidebar-item">  
                   <a class="right-sidebar-button relative z-50" pStyleClass="@next" enterFromClass="hidden" enterActiveClass="animate-scalein" leaveActiveClass="animate-fadeout" leaveToClass="hidden" [hideOnOutsideClick]="true">
                        <span class="w-2 h-2 rounded-full bg-red-500 absolute top-2 right-2.5"></span>
                         <i class="pi pi-clock"></i>
                    </a>
                </li>
                <li class="right-sidebar-item static sm:relative">
                    <a class="right-sidebar-button relative z-50" pStyleClass="@next" enterFromClass="hidden" enterActiveClass="animate-scalein" leaveActiveClass="animate-fadeout" leaveToClass="hidden" [hideOnOutsideClick]="true">
                        <span class="w-2 h-2 rounded-full bg-red-500 absolute top-2 right-2.5"></span>
                        <i class="pi pi-bell"></i>
                    </a>
                    <div
                        class="list-none m-0 rounded-2xl border border-surface absolute bg-surface-0 dark:bg-surface-900 overflow-hidden hidden origin-top min-w-72 sm:w-[22rem] mt-2 z-50 top-auto shadow-[0px_56px_16px_0px_rgba(0,0,0,0.00),0px_36px_14px_0px_rgba(0,0,0,0.01),0px_20px_12px_0px_rgba(0,0,0,0.02),0px_9px_9px_0px_rgba(0,0,0,0.03),0px_2px_5px_0px_rgba(0,0,0,0.04)]"
                        style="right: -100px"
                    >
                        <div class="p-4 flex items-center justify-between border-b border-surface">
                            <span class="label-small text-surface-950 dark:text-surface-0">Notifications</span>
                            <button pRipple class="py-1 px-2 text-surface-950 dark:text-surface-0 label-x-small hover:bg-emphasis border border-surface rounded-lg shadow-[0px_1px_2px_0px_rgba(18,18,23,0.05)] transition-all">Mark all as read</button>
                        </div>
                        <div class="flex items-center border-b border-surface">
                            @for (item of notificationsBars(); track item.id; let i = $index) {
                                <button
                                    [ngClass]="{ 'border-surface-950 dark:border-surface-0': selectedNotificationBar() === item.id, 'border-transparent': selectedNotificationBar() !== item.id }"
                                    class="px-3.5 py-2 inline-flex items-center border-b gap-2"
                                    (click)="selectedNotificationBar.set(item.id)"
                                >
                                    <span [ngClass]="{ 'text-surface-950 dark:text-surface-0': selectedNotificationBar() === item.id }" class="label-small">{{ item.label }}</span>
                                    <p-badge *ngIf="item?.badge" [value]="item.badge" severity="success" size="small" class="!rounded-md" />
                                </button>
                            }
                        </div>
                        <ul class="flex flex-col divide-y divide-[var(--surface-border)] max-h-80 overflow-auto">
                            @for (item of selectedNotificationsBarData(); track item.name; let i = $index) {
                                <li>
                                    <div class="flex items-center gap-3 px-6 py-3.5 cursor-pointer hover:bg-emphasis transition-all">
                                        <p-overlay-badge value="" severity="danger" class="inline-flex">
                                            <p-avatar size="large">
                                                <img [src]="item.image" class="rounded-lg" />
                                            </p-avatar>
                                        </p-overlay-badge>
                                        <div class="flex items-center gap-3">
                                            <div class="flex flex-col">
                                                <span class="label-small text-left text-surface-950 dark:text-surface-0">{{ item.name }}</span>
                                                <span class="label-xsmall text-left line-clamp-1">{{ item.description }}</span>
                                                <span class="label-xsmall text-left">{{ item.time }}</span>
                                            </div>
                                            <p-badge *ngIf="item.new" value="" severity="success" />
                                        </div>
                                    </div>
                                    <span *ngIf="i !== notifications().length - 1"></span>
                                </li>
                            }
                        </ul>
                    </div>
                </li>     
                 <li class="right-sidebar-item">  
                    <a tabindex="0" class="right-sidebar-button" [routerLink]="['/']">
                       <i class="pi pi-sign-out" style="color: var(--primary-color)"></i>
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
