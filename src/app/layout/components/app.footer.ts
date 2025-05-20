import { Component, computed, inject } from '@angular/core';
import { LayoutService } from '../service/layout.service';

@Component({
    selector: '[app-footer]',
    standalone: true,
    template: `
        <div class="layout-footer">
            <span class="footer-copyright">Copyright © 2023. Work Comp Now. All rights reserved.</span>
            <div class="footer-logo-container">
                <!-- <img src="assets/images/cognet_logo.png" /> -->
                <span class="footer-app-name">CogNet</span>
            </div>
        </div>
    `
})
export class AppFooter {
    layoutService = inject(LayoutService);

    isDarkTheme = computed(() => this.layoutService.isDarkTheme());
}
