import {Component, computed, inject} from '@angular/core';
import { LayoutService } from '../service/layout.service';

@Component({
    selector: '[app-footer]',
    standalone: true,
    template: `
        <div class="layout-footer">
            <div class="footer-logo-container">
                <img src="/layout/images/logo-{{ isDarkTheme() ? 'white' : 'dark' }}.svg" alt="diamond-layout"/>
                <span class="footer-app-name">DIAMOND</span>
            </div>
            <span class="footer-copyright">&#169; Your Organization - 2025</span>
        </div>
    `
})
export class AppFooter {
    layoutService = inject(LayoutService);

    isDarkTheme = computed(() => this.layoutService.isDarkTheme());
}
